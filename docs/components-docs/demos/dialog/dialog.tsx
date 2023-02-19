import React, { useState } from 'react';
import { Dialog, Button, Flex, Toast } from '../../../../src/components';
export const DialogCN = () => {
  const [visible, setvisible] = useState(false);
  const onClose = () => {
    setvisible(false);
  };
  const [showToast1, setShowToast1] = useState(false);
  const [type, setType] = useState('normal');
  const [layout, setLayout] = useState('normal');
  const open = (type: string, layout?: string) => {
    setvisible(true);
    setType(type);
    layout && setLayout(layout);
  };
  return (
    <>
      <Dialog
        onClose={onClose}
        visible={visible}
        title='删除确认'
        content='你是否要删除该账号'
        type={type}
        layout={layout}
        ok={() => {
          onClose();
          setTimeout(() => {
            setShowToast1(true);
          }, 500);
        }}
      ></Dialog>
      {showToast1 && (
        <Toast
          title=''
          message='删除成功'
          onClose={() => setShowToast1(false)}
          timeout={1000}
          position='top-right'
          style='success'
        />
      )}
      <Flex direction='y' x='start'>
        常规
        <Flex x='start'>
          <Button
            onClick={() => {
              open('normal', 'normal');
            }}
          >
            normal
          </Button>

          <Button
            onClick={() => {
              open('success', 'normal');
            }}
            btnType='primary'
            style={{ background: '#31c48d', borderColor: '#31c48d' }}
          >
            success
          </Button>

          <Button
            onClick={() => {
              open('info', 'normal');
            }}
            btnType='primary'
          >
            info
          </Button>

          <Button
            onClick={() => {
              open('warning', 'normal');
            }}
            btnType='primary'
            style={{ background: '#e3b344', borderColor: '#e3b344' }}
          >
            warning
          </Button>

          <Button
            onClick={() => {
              open('error', 'normal');
            }}
            btnType='danger'
          >
            error
          </Button>
        </Flex>
        简单的
        <Flex x='start'>
          <Button
            onClick={() => {
              open('normal', 'easy');
            }}
          >
            normal
          </Button>

          <Button
            onClick={() => {
              open('success', 'easy');
            }}
            btnType='primary'
            style={{ background: '#31c48d', borderColor: '#31c48d' }}
          >
            success
          </Button>

          <Button
            onClick={() => {
              open('info', 'easy');
            }}
            btnType='primary'
          >
            info
          </Button>

          <Button
            onClick={() => {
              open('warning', 'easy');
            }}
            btnType='primary'
            style={{ background: '#e3b344', borderColor: '#e3b344' }}
          >
            warning
          </Button>

          <Button
            onClick={() => {
              open('error', 'easy');
            }}
            btnType='danger'
          >
            error
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export const DialogUS = () => {
  const [visible, setvisible] = useState(false);
  const onClose = () => {
    setvisible(false);
  };
  const [showToast1, setShowToast1] = useState(false);
  const [type, setType] = useState('normal');
  const [layout, setLayout] = useState('normal');
  const open = (type: string, layout?: string) => {
    setvisible(true);
    setType(type);
    layout && setLayout(layout);
  };
  return (
    <>
      <Dialog
        onClose={onClose}
        visible={visible}
        title='Delete confirmation'
        content='Whether you want to delete the account'
        type={type}
        layout={layout}
        ok={() => {
          onClose();
          setTimeout(() => {
            setShowToast1(true);
          }, 500);
        }}
      ></Dialog>
      {showToast1 && (
        <Toast
          title=''
          message='The deletion was successful'
          onClose={() => setShowToast1(false)}
          timeout={1000}
          position='top-right'
          style='success'
        />
      )}
      <Flex direction='y' x='start'>
        routine
        <Flex x='start'>
          <Button
            onClick={() => {
              open('normal');
            }}
          >
            normal
          </Button>

          <Button
            onClick={() => {
              open('success');
            }}
            btnType='primary'
            style={{ background: '#31c48d', borderColor: '#31c48d' }}
          >
            success
          </Button>

          <Button
            onClick={() => {
              open('info');
            }}
            btnType='primary'
          >
            info
          </Button>

          <Button
            onClick={() => {
              open('warning');
            }}
            btnType='primary'
            style={{ background: '#e3b344', borderColor: '#e3b344' }}
          >
            warning
          </Button>

          <Button
            onClick={() => {
              open('error');
            }}
            btnType='danger'
          >
            error
          </Button>
        </Flex>
        simple
        <Flex x='start'>
          <Button
            onClick={() => {
              open('normal', 'easy');
            }}
          >
            normal
          </Button>

          <Button
            onClick={() => {
              open('success', 'easy');
            }}
            btnType='primary'
            style={{ background: '#31c48d', borderColor: '#31c48d' }}
          >
            success
          </Button>

          <Button
            onClick={() => {
              open('info', 'easy');
            }}
            btnType='primary'
          >
            info
          </Button>

          <Button
            onClick={() => {
              open('warning', 'easy');
            }}
            btnType='primary'
            style={{ background: '#e3b344', borderColor: '#e3b344' }}
          >
            warning
          </Button>

          <Button
            onClick={() => {
              open('error', 'easy');
            }}
            btnType='danger'
          >
            error
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
