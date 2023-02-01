import React, { memo } from 'react';
import classNames from 'classnames';
import { AlertProps } from './type';
import { MiIcon } from '../icon/icon';

export const Switch: React.FC<AlertProps> = (props) => {
    const { className, list, ...restProps } = props;

    const classes = classNames('mi-alert-group', className);

    const showIcon = (type: string) => {
        switch (type) {
            case `normal`: return <MiIcon.Info size="16"></MiIcon.Info>;
            case `warning`: return <MiIcon.AlertTriangle size="16"></MiIcon.AlertTriangle>;
            case `success`: return <MiIcon.Check size="16"></MiIcon.Check>;
            case `error`: return <MiIcon.AlertCircle size="16"></MiIcon.AlertCircle>;
            case `info`: return <MiIcon.Bell size="16"></MiIcon.Bell>;
            default: null
        }
    }
    return (
        <div className={classes} {...restProps}>
            {list?.map((item, i) => {
                return <div key={i} className={`mi-alert mi-alert-${item.type}`}>
                    <div className="alert-icon">
                        {showIcon(item.type)}
                    </div>
                    <div className="message">
                        <div className="title">{item.title}</div>
                        {item.content ? <div className='content'>{item.content}</div> : null}
                    </div>
                    <div>
                        <MiIcon.X size="16" className="btn-close"></MiIcon.X>
                    </div>
                </div>
            })}
        </div>
    );
};

Switch.defaultProps = {
    list: [],
};

export default memo(Switch);
