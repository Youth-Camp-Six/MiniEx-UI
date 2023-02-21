import React, { useState } from 'react';
import { Drawer, Button, Flex } from '../../../../src/components';
export const DrawerCN = () => {
  const [visible, setvisible] = useState(false);
  const showDrawer = () => {
    setvisible(true);
  };
  const onClose = () => {
    setvisible(false);
  };

  const [visible2, setvisible2] = useState(false);
  const showDrawer2 = () => {
    setvisible2(true);
  };
  const onClose2 = () => {
    setvisible2(false);
  };

  const [visible3, setvisible3] = useState(false);
  const showDrawer3 = () => {
    setvisible3(true);
  };
  const onClose3 = () => {
    setvisible3(false);
  };

  const [visible4, setvisible4] = useState(false);
  const showDrawer4 = () => {
    setvisible4(true);
  };
  const onClose4 = () => {
    setvisible4(false);
  };
  return (
    <Flex x='start'>
      <Drawer visible={visible} onClose={onClose}>
        内容
      </Drawer>
      <Button btnType='primary' onClick={showDrawer}>
        右边
      </Button>

      <Drawer visible={visible2} onClose={onClose2} position='bottom'>
        内容
      </Drawer>
      <Button btnType='primary' onClick={showDrawer2}>
        下边
      </Button>

      <Drawer visible={visible3} onClose={onClose3} position='left'>
        内容
      </Drawer>
      <Button btnType='primary' onClick={showDrawer3}>
        左边
      </Button>

      <Drawer visible={visible4} onClose={onClose4} position='top'>
        内容
      </Drawer>
      <Button btnType='primary' onClick={showDrawer4}>
        上边
      </Button>
    </Flex>
  );
};

export const DrawerUS = () => {
  const [visible, setvisible] = useState(false);
  const showDrawer = () => {
    setvisible(true);
  };
  const onClose = () => {
    setvisible(false);
  };

  const [visible2, setvisible2] = useState(false);
  const showDrawer2 = () => {
    setvisible2(true);
  };
  const onClose2 = () => {
    setvisible2(false);
  };

  const [visible3, setvisible3] = useState(false);
  const showDrawer3 = () => {
    setvisible3(true);
  };
  const onClose3 = () => {
    setvisible3(false);
  };

  const [visible4, setvisible4] = useState(false);
  const showDrawer4 = () => {
    setvisible4(true);
  };
  const onClose4 = () => {
    setvisible4(false);
  };
  return (
    <Flex x='start'>
      <Drawer visible={visible} onClose={onClose}>
        content
      </Drawer>
      <Button btnType='primary' onClick={showDrawer}>
        right
      </Button>

      <Drawer visible={visible2} onClose={onClose2} position='bottom'>
        content
      </Drawer>
      <Button btnType='primary' onClick={showDrawer2}>
        bottom
      </Button>

      <Drawer visible={visible3} onClose={onClose3} position='left'>
        content
      </Drawer>
      <Button btnType='primary' onClick={showDrawer3}>
        left
      </Button>

      <Drawer visible={visible4} onClose={onClose4} position='top'>
        content
      </Drawer>
      <Button btnType='primary' onClick={showDrawer4}>
        top
      </Button>
    </Flex>
  );
};
