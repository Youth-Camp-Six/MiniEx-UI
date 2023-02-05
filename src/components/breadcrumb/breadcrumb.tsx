import React, { memo } from 'react';
import classNames from 'classnames';
import { breadcrumbProps } from './type';
import { useNavigate } from 'react-router-dom';

export const Breadcrumb: React.FC<breadcrumbProps> = (props) => {
  const { className, iconType, options } = props;

  const classes = classNames('mi-breadcrumb', className);

  const navigate = useNavigate();
  const MiTo = (path: string) => {
    if (!path) return;
    if (path && path.startsWith('http')) {
      window.open(path);
    } else {
      navigate(path);
    }
    return;
  };

  return (
    <div className={classes}>
      {options.map((item, index) => {
        return (
          <div
            key={index}
            className={`mi-breadcrumb-item ${item.active ? 'mi-breadcrumb-active' : ''}`}
          >
            <span
              className={`${item.to ? 'mi-breadcrumb-isPath' : ''}`}
              onClick={() => {
                MiTo(item.to);
              }}
            >
              {item.label}
            </span>
            {index !== options.length - 1 ? (
              <div className='mi-breadcrumb-parting'>
                {iconType == 'shoulder' ? (
                  <svg
                    viewBox='0 0 48 48'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    stroke='currentColor'
                    strokeWidth='4'
                    strokeLinecap='butt'
                    strokeLinejoin='miter'
                  >
                    <path d='M29.506 6.502 18.493 41.498'></path>
                  </svg>
                ) : (
                  <svg
                    viewBox='0 0 48 48'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    stroke='currentColor'
                    strokeWidth='4'
                    strokeLinecap='butt'
                    strokeLinejoin='miter'
                  >
                    <path d='m16 39.513 15.556-15.557L16 8.4'></path>
                  </svg>
                )}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

Breadcrumb.defaultProps = {
  options: [],
  iconType: 'shoulder',
};

export default memo(Breadcrumb);
