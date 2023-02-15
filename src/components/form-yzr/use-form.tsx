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
    this.store = {}; // 状态值： name: value
    this.fieldEntities = [];
    this.callbacks = {};
    this.subscribeCB = () => ({});
    this.rules = {};
  }

  setCallbacks = (callbacks: any) => {
    this.callbacks = { ...this.callbacks, ...callbacks };
  };

  // 注册实例(forceUpdate)
  // 注册与取消注册
  // 订阅与取消订阅
  registerFieldEntities = (entity: any) => {
    this.fieldEntities.push(entity);

    return () => {
      this.fieldEntities = this.fieldEntities.filter((item) => item !== entity);
      delete this.store[entity.props.name];
    };
  };

  // get
  getFieldsValue = () => {
    return { ...this.store };
  };

  getFieldValue = (name: any) => {
    return this.store[name];
  };

  // set
  // password: 123
  setFieldsValue = (newStore: any) => {
    // 1. update store
    this.store = {
      ...this.store,
      ...newStore,
    };
    // 2. update Field
    this.fieldEntities.forEach((entity) => {
      Object.keys(newStore).forEach((k) => {
        if (k === entity.props.name) {
          entity.onStoreChange();
        }
      });
    });
    // 3. callback
    this.subscribeCB(newStore);
  };

  // subscribe
  subscribe = (cb: () => any) => {
    this.subscribeCB = cb;
  };

  // rules
  setFormRules = (rules: any) => {
    this.rules = rules;
  };

  validate = () => {
    const validator = new Schema(this.rules);
    return validator.validate(this.getFieldsValue());
  };

  submit = () => {
    const { onFinish, onFinishFailed } = this.callbacks;
    // const err = this.validate();
    this.validate()
      .then(() => {
        onFinish && onFinish(this.getFieldsValue());
      })
      .catch(({ errors, fields }) => {
        onFinishFailed && onFinishFailed(errors, fields);
      });
    // 提交

    // if (err.length === 0) {
    //   // 校验通过
    //   onFinish(this.getFieldsValue());
    // } else {
    //   // 校验不通过
    //   onFinishFailed(err, this.getFieldsValue());
    // }
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
  // 存值，在组件卸载之前指向的都是同一个值
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
