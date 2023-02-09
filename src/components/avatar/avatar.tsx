import React, { memo, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { AvatarProps } from './type';

export const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    className,
    statusPosition,
    height,
    children,
    src,
    style,
    alt,
    status,
    icon,
    width,
    round,
    ...restProps
  } = props;

  const classesAva = classNames('mi-avatar', className);
  const classesImg = classNames({
    [`mi-avatar-${round}`]: round,
  });
  const classDot = classNames('dot', {
    [`dot-${status}`]: status,
    [`dot-${statusPosition}`]: statusPosition,
  });

  const avatarNodeRef = useRef<HTMLSpanElement>(null);
  const [scale, setScale] = React.useState(1);
  useEffect(() => {
    if (width && avatarNodeRef.current && avatarNodeRef.current.offsetWidth > parseInt(width)) {
      setScale(parseInt(width) / avatarNodeRef.current.offsetWidth - 0.1);
    }
    //eslint-disable-next-line
  }, [])
  return (
    <div className={classesAva} style={{ width: `${width}`, height: `${height}` }} {...restProps}>
      {src ? (
        <img src={src} alt={alt} className={classesImg} />
      ) : (
        <div className='icon-box' style={style}>
          {icon ? (
            icon
          ) : (
            <span style={{ transform: `scale(${scale})`, fontSize: '18px' }} ref={avatarNodeRef}>
              {children}
            </span>
          )}
        </div>
      )}
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
