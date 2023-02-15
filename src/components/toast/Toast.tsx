import React, { useState, useEffect, useRef, memo, type FC } from 'react';
import type { ToastProps } from './type';

export const Toast: FC<ToastProps> = (props) => {
  const { title, message, onClose, timeout, pauseOnHover, position, style } = props;

  const [show, setShow] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(100);
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, timeout);

    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 1);
    }, timeout / 100);

    setTimerId(timer);
    setIntervalId(interval);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [timeout]);

  useEffect(() => {
    if (!show) {
      if (onClose) {
        onClose();
      }
    }
  }, [show, onClose]);

  useEffect(() => {
    if (ref.current && pauseOnHover) {
      const pause = () => {
        clearInterval(intervalId);
        clearTimeout(timerId);
      };
      const resume = () => {
        const newTimer = setTimeout(() => {
          setShow(false);
        }, (timeout / 100) * progress);
        const newInterval = setInterval(() => {
          setProgress((prevProgress) => prevProgress - 1);
        }, timeout / 100);
        setTimerId(newTimer);
        setIntervalId(newInterval);
      };
      ref.current.addEventListener('mouseenter', pause);
      ref.current.addEventListener('mouseleave', resume);
      return () => {
        ref.current?.removeEventListener('mouseenter', pause);
        ref.current?.removeEventListener('mouseleave', resume);
      };
    }
  }, [pauseOnHover, progress, timerId, intervalId]);

  return (
    <div
      ref={ref}
      className={`toast ${show ? 'show' : 'hide'} ${position} ${style}`}
      style={{
        cursor: pauseOnHover ? 'pointer' : 'default',
      }}
    >
      <div className='header'>
        {title && <div className='title'>{title}</div>}
        <button className='close-button' onClick={() => setShow(false)}>
          <span>✕</span>
        </button>
      </div>
      <div className='message'>{message}</div>
      <div className='progressbar' style={{ width: `${progress}%` }}></div>
    </div>
  );
};

Toast.defaultProps = {
  timeout: 3000,
  pauseOnHover: true,
  position: 'bottom-right',
  style: 'default',
};

export default memo(Toast);
