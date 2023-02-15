import React from 'react';
import { AvatarGroup, Flex, MiIcon } from '../../../../src/components';
export const AvatarGroupCN = () => {
  const options = [
    {
      label: 'U',
      value: '1',
      style: { backgroundColor: '#fde3cf', color: '#f56a00' },
    },
    {
      icon: <MiIcon.User />,
      value: '2',
      style: { backgroundColor: '#87d068' },
    },
    {
      src: 'https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668',
      value: '3',
      round: 'round',
    },
    {
      label: 'k',
      value: '4',
    },
  ];
  return (
    <Flex direction='y'>
      <AvatarGroup options={options}></AvatarGroup>
      <AvatarGroup maxCount={2} options={options}></AvatarGroup>
    </Flex>
  );
};
