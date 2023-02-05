import React, { memo } from 'react';
import classNames from 'classnames';
import { AvatarProps } from './type';

export const Avatar: React.FC<AvatarProps> = (props) => {
    const { className, statusPosition, height, src, status, width, round, ...restProps } = props;

    const classesAva = classNames('mi-avatar');
    const classesImg = classNames({
        [`mi-avatar-${round}`]: round,
    });
    const classDot = classNames('dot', {
        [`dot-${status}`]: status,
        [`dot-${statusPosition}`]: statusPosition,
    })
    return (
        <div className={classesAva} style={{ width: `${width}`, height: `${height}` }} {...restProps}>
            <img src={src} alt="" className={classesImg} />
            {status ? <span className={classDot}></span> : null}
        </div>
    );
};

Avatar.defaultProps = {
    round: '',
    src: '',
    status: 'online',
    statusPosition: '',
    height: '40px',
    width: '40px'
};

export default memo(Avatar);
