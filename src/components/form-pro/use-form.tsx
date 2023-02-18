import { useRef } from 'react';
import { FormRef } from './type';
import Schema from 'async-validator';
import type { Rules } from 'async-validator';

class FormStore {
  store: any;
  fieldEntities: any[];
  callbacks: any;
  subscribeCB: (store: any) => any;
  rules: Rules;

  constructor() {
    this.store = {};
    this.fieldEntities = [];
    this.callbacks = {};
    this.subscribeCB = () => ({});
    this.rules = {};
  }

  setCallbacks = (callbacks: any) => {
    this.callbacks = { ...this.callbacks, ...callbacks };
  };

  registerFieldEntities = (entity: any) => {
    this.fieldEntities.push(entity);

    return () => {
      this.fieldEntities = this.fieldEntities.filter((item) => item !== entity);
      delete this.store[entity.props.name];
    };
  };

  getFieldsValue = () => {
    return { ...this.store };
  };

  getFieldValue = (key: string) => {
    return this.store[key];
  };

  setFieldsValue = (newStore: any) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
    this.fieldEntities.forEach((entity) => {
      Object.keys(newStore).forEach((k) => {
        if (k === entity.props.name) {
          // 更新目标组件
          entity.onStoreChange();
        }
      });
    });
    this.subscribeCB(this.getFieldsValue());
  };

  subscribe = (cb: () => any) => {
    this.subscribeCB = cb;
  };

  setFormRules = (rules: Rules) => {
    this.rules = rules;
  };

  getTargetFieldEntities = (field: string) => {
    for (let i = 0; i < this.fieldEntities.length; i++) {
      if (field === this.fieldEntities[i].props.name) {
        return this.fieldEntities[i];
      }
    }
  };

  validate = () => {
    if (!this.rules) return Promise.resolve(this.getFieldsValue());

    const validator = new Schema(this.rules);

    // 清除所有校验信息
    this.fieldEntities.forEach((entity) => {
      entity.onValidate('');
    });

    validator.validate(this.getFieldsValue()).catch(({ errors }) => {
      // 设置错误校验信息
      errors.forEach((err: any) => {
        const targetFieldEntity = this.getTargetFieldEntities(err.field);
        targetFieldEntity.onValidate(err.message);
      });
    });

    return validator.validate(this.getFieldsValue());
  };

  submit = () => {
    const { onFinish, onFinishFailed } = this.callbacks;

    return new Promise<{ [key: string]: any }>((resolve, reject) => {
      this.validate()
        .then((res) => {
          onFinish && onFinish(res);
          resolve(res);
        })
        .catch(({ errors, fields }) => {
          onFinishFailed && onFinishFailed(errors, fields);
          reject({ errors, fields });
        });
    });
  };

  getForm = () => {
    return {
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      registerFieldEntities: this.registerFieldEntities,
      subscribe: this.subscribe,
      submit: this.submit,
      setCallbacks: this.setCallbacks,
      setFormRules: this.setFormRules,
      validate: this.validate,
    };
  };
}

const useForm = (form?: FormRef) => {
  const formRef = useRef<FormRef>();

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
};

export default useForm;
