// 定义状态管理库

import { useRef } from 'react';

class FormStore {
  store: any;
  fieldEntities: any[];
  callbacks: any;

  constructor() {
    this.store = {}; // 状态值： name: value
    this.fieldEntities = [];

    this.callbacks = {};
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
  };

  validate = () => {
    const err: any = [];
    // todo 校验
    // 简版校验

    this.fieldEntities.forEach((entity) => {
      const { name, rules } = entity.props;

      const value = this.getFieldValue(name);
      const rule = rules[0];

      if (rule && rule.required && (value === undefined || value === '')) {
        err.push({ [name]: rule.message, value });
      }
    });

    return err;
  };

  submit = () => {
    // console.log('submit'); //sy-log

    const err = this.validate();
    // 提交
    const { onFinish, onFinishFailed } = this.callbacks;

    if (err.length === 0) {
      // 校验通过
      onFinish(this.getFieldsValue());
    } else {
      // 校验不通过
      onFinishFailed(err, this.getFieldsValue());
    }
  };

  getForm = () => {
    return {
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      registerFieldEntities: this.registerFieldEntities,
      submit: this.submit,
      setCallbacks: this.setCallbacks,
    };
  };
}

export default function useForm(form?: any) {
  // 存值，在组件卸载之前指向的都是同一个值
  const formRef = useRef<any>();

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
