import React from 'react';
import { Flex } from '../../../../src/components';
import './flex.less';

export const flexrow = () => {
  return (
    <div>
      <div className='demo'>
        <Flex direction='x' x='start' y='start' className='mi-Flex'>
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
        <Flex direction='x' x='center' y='start' className='mi-Flex'>
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
        <Flex direction='x' x='end' y='start' className='mi-Flex'>
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
        <Flex direction='x' x='start' y='center' className='mi-Flex'>
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
        <Flex direction='x' x='center' y='center' className='mi-Flex'>
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
        <Flex direction='x' x='end' y='center' className='mi-Flex'>
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
        <Flex direction='x' x='start' y='end' className='mi-Flex'>
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
        <Flex direction='x' x='center' y='end' className='mi-Flex'>
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
        <Flex direction='x' x='end' y='end' className='mi-Flex'>
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
        <Flex direction='y' x='start' y='start' className='mi-Flex'>
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
        <Flex direction='y' x='center' y='start' className='mi-Flex'>
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
        <Flex direction='y' x='end' y='start' className='mi-Flex'>
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
        <Flex direction='y' x='start' y='center' className='mi-Flex'>
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
        <Flex direction='y' x='center' y='center' className='mi-Flex'>
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
        <Flex direction='y' x='end' y='center' className='mi-Flex'>
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
        <Flex direction='y' x='start' y='end' className='mi-Flex'>
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
        <Flex direction='y' x='center' y='end' className='mi-Flex'>
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
        <Flex direction='y' x='end' y='end' className='mi-Flex'>
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
        <Flex direction='x' x='start' y='center' mode='between' className='mi-Flex'>
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
        <Flex direction='x' x='center' y='center' mode='around' className='mi-Flex'>
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
        <Flex direction='x' x='center' y='center' className='mi-Flex'>
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
        <Flex direction='y' x='start' y='center' mode='between' className='mi-Flex'>
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
        <Flex direction='y' x='center' y='center' mode='around' className='mi-Flex'>
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
        <Flex direction='y' x='center' y='center' className='mi-Flex'>
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
