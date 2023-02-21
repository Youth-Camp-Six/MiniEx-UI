import React from 'react';
import { useTranslation } from 'react-i18next';
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

const heightLightColumnLine = (type: string): string => {
  return type.replace(/[|]/g, '<span style="opacity: 0.5; padding: 0 10px">|</span>');
};

const PropShow: React.FC<IPropShowProps> = (props) => {
  const { propsInfo } = props;
  const { t } = useTranslation(['doc']);

  return (
    <div className={cls.propShowContainer}>
      <div className={cls.tableTitle}>
        <div className={cls.name}>{t('Param', { ns: ['doc'] })}</div>
        <div className={cls.description}>{t('Description', { ns: ['doc'] })}</div>
        <div className={cls.type}>{t('Type', { ns: ['doc'] })}</div>
        <div className={cls.initValue}>{t('Default', { ns: ['doc'] })}</div>
      </div>
      {propsInfo?.map((item) => (
        <div className={cls.item} key={item.name}>
          <div className={cls.name}>{item.name}</div>
          <div className={cls.description}>{item.description}</div>
          <div className={cls.type}>
            <div dangerouslySetInnerHTML={{ __html: heightLightColumnLine(item.type) }} />
          </div>
          <div className={cls.initValue}>{item.initValue}</div>
        </div>
      ))}
    </div>
  );
};

export default PropShow;
