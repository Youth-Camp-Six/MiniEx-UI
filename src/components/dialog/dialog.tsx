import React, { memo } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { DialogProps } from './type';
import { MiIcon, Button } from '..';

export const Drawer: React.FC<DialogProps> = (props) => {
  const { className, ok, content, title, layout, type, visible, onClose, style, ...restProps } =
    props;

  const classes = classNames('mi-dialog-box', className, {
    ['mi-dialog-box-normal']: layout === 'normal',
    ['mi-dialog-box-easy']: layout !== 'normal',
  });

  const showIcon = (type: string | undefined) => {
    switch (type) {
      case 'normal':
        return <MiIcon.Info />;
      case 'warning':
        return <MiIcon.AlertTriangle />;
      case 'success':
        return <MiIcon.Check />;
      case 'error':
        return <MiIcon.AlertCircle />;
      case 'info':
        return <MiIcon.Bell />;
    }
  };

  return (
    <>
      <CSSTransition in={visible} classNames='bg' timeout={200} unmountOnExit>
        <div className='mi-dialogbg' onClick={onClose}></div>
      </CSSTransition>
      <CSSTransition in={visible} timeout={300} classNames='alert' unmountOnExit>
        <div className='mi-dialog'>
          {layout === 'normal' ? (
            <div
              className={classes}
              style={style}
              {...restProps}
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
              }}
            >
              <div className='btn-close'>
                <MiIcon.X size='18' onClick={onClose} />
              </div>
              <div className='left'>
                <div className={`icon-${type}`}>{showIcon(type)}</div>
              </div>
              <div className='right'>
                <header>
                  {title}
                  <span className='gulu-dialog-close' onClick={onClose}></span>
                </header>
                <main>{content}</main>
                <footer>
                  <Button onClick={onClose} style={{ marginRight: '10px' }}>
                    取消
                  </Button>
                  <Button btnType='primary' onClick={ok}>
                    确认
                  </Button>
                </footer>
              </div>
            </div>
          ) : (
            <div className={classes} style={style} {...restProps}>
              <div className='left'>
                <div className={`icon-${type}`}>{showIcon(type)}</div>
              </div>
              <div className='right'>
                <main>{content}</main>
                <Button onClick={onClose} style={{ marginRight: '10px' }} size='sm'>
                  取消
                </Button>
                <Button size='sm' btnType='primary' onClick={ok}>
                  确认
                </Button>
              </div>
            </div>
          )}
        </div>
      </CSSTransition>
    </>
  );
};

Drawer.defaultProps = {
  visible: false,
  type: '',
  layout: 'normal',
};

export default memo(Drawer);
