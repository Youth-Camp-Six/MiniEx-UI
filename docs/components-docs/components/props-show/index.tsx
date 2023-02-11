import React from 'react';

import cls from './index.module.less';

type PropsItem = {
  /** 参数名 */
  name: string;
  /** 描述 */
  description: string;
  /** 类型 */
  type: string;
  /** 默认值 */
  initValue: string;
};
interface IPropShowProps {
  propsInfo: PropsItem[];
}

const PropShow: React.FC<IPropShowProps> = (props) => {
  const { propsInfo } = props;
  return (
    <div className={cls.propShowContainer}>
      <div className={cls.tableTitle}>
        <div className={cls.name}>参数名</div>
        <div className={cls.description}>描述</div>
        <div className={cls.type}>类型</div>
        <div className={cls.initValue}>默认值</div>
      </div>
      {propsInfo?.map((item) => (
        <div className={cls.item} key={item.name}>
          <div className={cls.name}>{item.name}</div>
          <div className={cls.description}>{item.description}</div>
          <div className={cls.type}>{item.type}</div>
          <div className={cls.initValue}>{item.initValue}</div>
        </div>
      ))}
    </div>
  );
};

export default PropShow;
