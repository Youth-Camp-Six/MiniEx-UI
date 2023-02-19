import React from 'react';
import { Flex } from '../../../../src/components';
import './flex.less';

export const flexrow = () => {
  return (
    <div>
      <div className='demo'>
        <Flex direction='x' x='start' y='start'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='x' x='center' y='start'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='x' x='end' y='start'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
      </div>
      <div className='demo'>
        <Flex direction='x' x='start' y='center'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='x' x='center' y='center'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='x' x='end' y='center'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
      </div>
      <div className='demo'>
        <Flex direction='x' x='start' y='end'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='x' x='center' y='end'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='x' x='end' y='end'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export const flexcolumn = () => {
  return (
    <div>
      <div className='demo'>
        <Flex direction='y' x='start' y='start'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='y' x='center' y='start'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='y' x='end' y='start'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
      </div>
      <div className='demo'>
        <Flex direction='y' x='start' y='center'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='y' x='center' y='center'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='y' x='end' y='center'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
      </div>
      <div className='demo'>
        <Flex direction='y' x='start' y='end'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='y' x='center' y='end'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='y' x='end' y='end'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export const flexmode = () => {
  return (
    <div>
      <div className='demo'>
        <Flex direction='x' x='start' y='center' mode='between'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='x' x='center' y='center' mode='around'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='x' x='center' y='center'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
      </div>
      <div className='demo'>
        <Flex direction='y' x='start' y='center' mode='between'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='y' x='center' y='center' mode='around'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
        <Flex direction='y' x='center' y='center'>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
          <div className='box'>
            <div></div>
          </div>
        </Flex>
      </div>
    </div>
  );
};
