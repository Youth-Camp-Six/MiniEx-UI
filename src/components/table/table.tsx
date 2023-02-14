import React, { memo, useEffect, useState } from 'react';
import { tableProps } from './type';
import { Flex } from '../flex';
import classNames from 'classnames';
export const Table: React.FC<tableProps> = (props) => {
  const { className, columns, width, maxHeight, style, data, cell, ...restProps } = props;

  const classes = classNames('mi-table', className);
  let miTableRef;
  const [leftIndex, setLeftIndex] = useState(-1);
  const [rightIndex, setRightIndex] = useState(-1);
  const setSubLine = () => {
    columns?.map((e, i) => {
      if (e.sticky == 'left') {
        setLeftIndex(i);
      } else if (e.sticky == 'right' && rightIndex == -1) {
        setRightIndex(i);
        if (miTableRef.scrollWidth != miTableRef.offsetWidth) {
          setIsShowRightLine(true);
        }
      }
    });
  };

  // 设置展示线 过渡
  const [isShowLeftLine, setIsShowLeftLine] = useState(false);
  const [isShowRightLine, setIsShowRightLine] = useState(false);
  const setShowLine = (e: any) => {
    if (e.target.scrollWidth != e.target.offsetWidth) {
      setIsShowLeftLine(e.target.scrollLeft >= 5);
      setIsShowRightLine(e.target.scrollLeft <= e.target.scrollWidth - e.target.offsetWidth - 5);
    }
  };

  // 设置单元格宽度
  const [niceWidth, setNiceWidth] = useState('');
  const setWidth = () => {
    const sw = miTableRef.scrollWidth;
    const w = miTableRef.offsetWidth;

    if (w >= sw) {
      const autoLen = columns?.filter((e) => e.width == 'auto').length;
      let wTotal = 0;
      columns
        ?.filter((e) => e.width != 'auto')
        .map((e) => {
          wTotal += parseFloat(`${e.width}`);
        });
      setNiceWidth(`${autoLen && (w - wTotal) / autoLen - 0.8}px`);
    }
  };

  // 防抖
  let lock = false;
  const throttle = (e: any, delay: any) => {
    if (leftIndex == -1 && rightIndex == -1) {
      return;
    }
    if (!lock) {
      // 判断是否锁
      lock = true; // 锁住
      setTimeout(() => {
        setShowLine(e);
        lock = false; // 开锁
      }, delay);
    }
  };

  useEffect(() => {
    setWidth();
    // 设置固定单元格的阴影
    setSubLine();
    // eslint-disable-next-line
  }, [])
  return (
    <div
      className={classes}
      style={{
        ...{
          overflowX: 'auto',
          maxHeight: `${maxHeight}`,
          width: `${width}`,
          overflowY: `${maxHeight ? 'auto' : 'hidden'}`,
        },
        ...style,
      }}
      {...restProps}
      ref={(el) => {
        miTableRef = el;
      }}
      onScroll={(e) => {
        throttle(e, 200);
      }}
    >
      <div className='mi-table-head'>
        <div
          className='mi-table-tr'
          style={{
            width: `${
              miTableRef?.scrollWidth > miTableRef?.offsetWidth ? miTableRef?.scrollWidth : ''
            }px`,
          }}
        >
          {columns?.map((column, index) => {
            return (
              <Flex
                key={`columns${index}`}
                className={`mi-table-td ${index == leftIndex ? 'mi-table-left-subline' : ''}
              ${index == rightIndex ? 'mi-table-right-subline' : ''}
              ${index == leftIndex && isShowLeftLine ? 'mi-table-left-subline-show' : ''}
              ${index == rightIndex && isShowRightLine ? 'mi-table-right-subline-show' : ''}
              `}
                style={{
                  ...column.columnStyle,
                  ...{
                    position: 'sticky',
                    [`${column.sticky}`]: `${column.offsetX || '0px'}`,
                    [`${column.sticky ? 'zIndex' : ''}`]: 1,
                    width: `${column.width != 'auto' ? column.width : niceWidth || '100px'}`,
                  },
                }}
                x={column.x}
                y={column.y}
              >
                {column.title}
              </Flex>
            );
          })}
        </div>
      </div>
      <div className='mi-table-body'>
        {data?.map((row, i) => {
          return (
            <div
              key={`data${i}`}
              className='mi-table-tr'
              style={{
                width: `${
                  miTableRef?.scrollWidth > miTableRef?.offsetWidth ? miTableRef?.scrollWidth : ''
                }px`,
              }}
            >
              {columns?.map((column, j) => {
                return (
                  <Flex
                    key={`col${j}`}
                    className={`mi-table-td ${j == leftIndex ? 'mi-table-left-subline' : ''}
                ${j == rightIndex ? 'mi-table-right-subline' : ''}
                ${j == leftIndex && isShowLeftLine ? 'mi-table-left-subline-show' : ''}
                ${j == rightIndex && isShowRightLine ? 'mi-table-right-subline-show' : ''}
                `}
                    style={{
                      ...column.columnStyle,
                      ...{
                        position: 'sticky',
                        [`${column.sticky}`]: `${column.offsetX || '0px'}`,
                        [`${column.sticky ? 'zIndex' : ''}`]: 1,
                        width: `${column.width != 'auto' ? column.width : niceWidth || '100px'}`,
                      },
                      ...row.rowStyle,
                      ...(row.tdStyle != undefined
                        ? row.tdStyle[
                            `${
                              column.field && Reflect.has(row.tdStyle, column.field)
                                ? column.field
                                : ''
                            }`
                          ]
                        : {}),
                    }}
                    x={column.x}
                    y={column.y}
                  >
                    {cell(column.field, row)}
                  </Flex>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Table.defaultProps = {
  columns: [],
  width: '',
  maxHeight: '',
  data: [],
};

export default memo(Table);
