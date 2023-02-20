/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Table, TableColumns } from '../index';
import { Avatar, Flex, Badge } from '../../../index'
describe('test Table', () => {
  var data = [
    {
      id: 1,
      name: '小明',
      avatar: 'https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668',
      age: '14',
      fraction: 63,
      mail: 'div@kamtao.com',
      sex: 1,
      intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    },
    {
      id: 2,
      name: '小卢',
      avatar: 'https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668',
      age: '24',
      fraction: 82,
      mail: 'div@kamtao.com',
      sex: 1,
      intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    },
    {
      id: 3,
      name: '小娟',
      avatar: 'https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668',
      age: '25',
      fraction: 91,
      mail: 'div@kamtao.com',
      sex: 0,
      intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    },
    {
      id: 4,
      name: '小贝',
      avatar: 'https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668',
      age: '22',
      mail: 'div@kamtao.com',
      fraction: 31,
      sex: 0,
      intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    },
    {
      id: 5,
      name: '小飞',
      avatar: 'https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668',
      age: '13',
      fraction: 54,
      mail: 'div@kamtao.com',
      sex: 3,
      intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    },
  ]
  const columns: TableColumns[] = [
    {
      title: 'id',
      width: '100px',
      field: 'id',
      x: 'center',
    },
    {
      title: '信息',
      width: '180px',
      field: 'info',
    },
    {
      title: '年龄',
      width: 'auto',
      field: 'age',
      x: 'center',
    },
    {
      title: '性别',
      width: 'auto',
      field: 'sex',
      x: 'center',
    },
    {
      title: '成绩',
      width: 'auto',
      field: 'fraction',
      x: 'center',
    },
    {
      title: '介绍',
      width: 'auto',
      field: 'intro',
    },
  ]
  const cell = (field: any, row: any) => {
    switch (field) {
      case "id": return <div>{row.id}</div>
      case "info": return <Flex className="info">
        <Avatar src={row.avatar} round='round'></Avatar>
        <Flex className="right" direction="y" x="start" gap={0}>
          <div className="name">{row.name}</div>
          <div className="mail">{row.mail}</div>
        </Flex>
      </Flex>
      case "age": return <div>{row.age}</div>
      case "fraction": return <Flex>
        <Badge round='round' type={`${row.fraction >= 60 ? "success" : "error"}`} ></Badge>
        {row.fraction >= 60 ? '良好' : '很差'}
      </Flex>
      case "sex": return <div >{row.sex > 0 ? '男' : '女'}</div>
      case "intro": return <div>{row.intro}</div>
    }

  }
  it('Table snapshot test', () => {
    const wrapper = render(<div style={{ width: '813px' }}>
      <Table data={data} columns={columns} cell={cell}></Table>
    </div>
    )
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });

});
