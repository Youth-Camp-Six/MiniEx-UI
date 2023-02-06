import React, { memo } from 'react';
import classNames from 'classnames';
import { AvatarProps } from './type';

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { className, statusPosition, height, src, alt, status, width, round, ...restProps } = props;

  const classesAva = classNames('mi-avatar', className);
  const classesImg = classNames({
    [`mi-avatar-${round}`]: round,
  });
  const classDot = classNames('dot', {
    [`dot-${status}`]: status,
    [`dot-${statusPosition}`]: statusPosition,
  });
  return (
    <div className={classesAva} style={{ width: `${width}`, height: `${height}` }} {...restProps}>
      <img src={src} alt={alt} className={classesImg} />
      {status ? <span className={classDot}></span> : null}
    </div>
  );
};

Avatar.defaultProps = {
  round: '',
  src: '',
  status: '',
  statusPosition: '',
  height: '40px',
  width: '40px',
  alt: '',
};

export default memo(Avatar);
