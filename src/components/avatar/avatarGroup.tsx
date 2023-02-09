import React, { memo, useEffect, useState } from 'react';
import { AvatarGroupProps, Options } from './type';
import { Flex, Avatar, Popover } from '../../index';

export const AvatarGroup: React.FC<AvatarGroupProps> = (props) => {
  const {
    className,
    maxCount,
    options,
    maxPopoverPlacement,
    maxPopoverTrigger,
    maxStyle,
    width,
    height,
    style,
    ...restProps
  } = props;

  const numOfChildren = options.length;
  const [childrenShow, setChildrenShow] = useState<Options[]>([]);
  const [childrenHidden, setChildrenHidden] = useState<Options[]>([]);

  const HiddenBody = (arr: Options[]) => {
    return (
      <Flex x='start' gap={0}>
        {arr.map((item) => {
          return (
            <Avatar
              className={item.className}
              icon={item.icon}
              round={item.round}
              key={item.value}
              status={item.status}
              src={item.src}
              alt={item.alt}
              statusPosition={item.statusPosition}
              width={width}
              height={height}
              style={item.style}
            >
              {item.label}
            </Avatar>
          );
        })}
      </Flex>
    );
  };

  useEffect(() => {
    if (maxCount && maxCount < numOfChildren) {
      setChildrenShow(options.slice(0, maxCount));
      setChildrenHidden(options.slice(maxCount, numOfChildren));
    } else {
      setChildrenShow(options);
    }
    //eslint-disable-next-line
  }, [options])
  return (
    <Flex x='start' gap={0} className={className} style={style} {...restProps}>
      {childrenShow.map((item, index) => {
        return (
          <Avatar
            className={`${index !== 0 ? 'group-item ' : ''}` + item.className}
            icon={item.icon}
            round={item.round}
            key={item.value}
            status={item.status}
            src={item.src}
            alt={item.alt}
            statusPosition={item.statusPosition}
            width={width}
            height={height}
            style={item.style}
          >
            {item.label}
          </Avatar>
        );
      })}
      {maxCount && maxCount < options.length ? (
        <Popover
          trigger={maxPopoverTrigger}
          placement={maxPopoverPlacement}
          childrenData={HiddenBody(childrenHidden)}
        >
          <Avatar className='group-item' style={maxStyle}>{`+${numOfChildren - maxCount}`}</Avatar>
        </Popover>
      ) : null}
    </Flex>
  );
};

AvatarGroup.defaultProps = {
  maxPopoverPlacement: 'bottom',
  maxPopoverTrigger: 'hover',
};

export default memo(AvatarGroup);
