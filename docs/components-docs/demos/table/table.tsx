import React from 'react';
import {
  Table,
  TableColumns,
  Flex,
  Avatar,
  Badge,
  Tag,
  Button,
  Popover,
} from '../../../../src/components';
const data = [
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
];
const columns: TableColumns[] = [
  {
    title: 'id',
    width: '100px',
    field: 'id',
    x: 'center',
  },
  {
    title: '信息',
    width: '200px',
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
];
const cell = (field: any, row) => {
  switch (field) {
    case 'id':
      return <div>{row.id}</div>;
    case 'info':
      return (
        <Flex className='info'>
          <Avatar src={row.avatar} round='round'></Avatar>
          <Flex className='right' direction='y' x='start' gap={0}>
            <div className='name'>{row.name}</div>
            <div className='mail'>{row.mail}</div>
          </Flex>
        </Flex>
      );
    case 'age':
      return <div>{row.age}</div>;
    case 'fraction':
      return (
        <Flex>
          <Badge round='round' type={`${row.fraction >= 60 ? 'success' : 'error'}`}></Badge>
          {row.fraction >= 60 ? '良好' : '很差'}
        </Flex>
      );
    case 'sex':
      return <div>{row.sex > 0 ? '男' : '女'}</div>;
    case 'intro':
      return <div>{row.intro}</div>;
  }
};

const data2: any = [
  {
    id: 1,
    name: '小明',
    age: '14',
    sex: 1,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
  {
    id: 2,
    name: '小卢',
    age: '24',
    sex: 1,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
  {
    id: 3,
    name: '小娟',
    age: '25',
    sex: 0,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
  {
    id: 4,
    name: '小贝',
    age: '22',
    sex: 0,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
  {
    id: 5,
    name: '小飞',
    age: '13',
    sex: 3,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
];

const columns2: TableColumns[] = [
  {
    title: 'id',
    width: '50px',
    field: 'id',
    x: 'center',
    sticky: 'left',
    offsetX: '0px',
  },
  {
    title: '姓名',
    width: '100px',
    field: 'name',
    x: 'center',
    sticky: 'left',
    offsetX: '50px',
  },
  {
    title: '年龄',
    width: '400px',
    field: 'age',
    x: 'center',
  },
  {
    title: '爱好',
    width: '400px',
    field: 'hobby',
  },
  {
    title: '介绍',
    width: '400px',
    field: 'intro',
  },
  {
    title: '性别',
    width: '80px',
    field: 'sex',
    x: 'center',
    sticky: 'right',
    offsetX: '-1px',
  },
];
const cell2 = (field: any, row) => {
  switch (field) {
    case 'id':
      return <div>{row.id}</div>;
    case 'name':
      return <div>{row.name}</div>;
    case 'age':
      return <div>{row.age}</div>;
    case 'sex':
      return <div>{row.sex > 0 ? '男' : '女'}</div>;
    case 'hobby':
      return (
        <Flex gap={5} x='start'>
          {row.hobby.map((item, index) => {
            return (
              <Tag size='small' type='info' key={index}>
                {item}
              </Tag>
            );
          })}
        </Flex>
      );
    case 'intro':
      return <div>{row.intro}</div>;
  }
};

const data3: any = [
  {
    id: 1,
    name: '小明',
    age: '14',
    sex: 1,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
  {
    id: 2,
    name: '小卢',
    age: '24',
    sex: 1,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
  {
    id: 3,
    name: '小娟',
    age: '25',
    sex: 0,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
  {
    id: 4,
    name: '小贝',
    age: '22',
    sex: 0,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
  {
    id: 5,
    name: '小飞',
    age: '13',
    sex: 3,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
];

const columns3: TableColumns[] = [
  {
    title: 'id',
    width: '50px',
    field: 'id',
    x: 'center',
    sticky: 'left',
    offsetX: '0px',
  },
  {
    title: '姓名',
    width: '100px',
    field: 'name',
    x: 'center',
    sticky: 'left',
    offsetX: '50px',
  },
  {
    title: '年龄',
    width: '200px',
    field: 'age',
    x: 'center',
  },
  {
    title: '性别',
    width: '200px',
    field: 'sex',
    x: 'center',
  },
  {
    title: '爱好',
    width: '400px',
    field: 'hobby',
  },
  {
    title: '介绍',
    width: '400px',
    field: 'intro',
  },
  {
    title: '操作',
    width: '120px',
    field: 'action',
    sticky: 'right',
    offsetX: '0px',
    x: 'center',
  },
];
const cell3 = (field: any, row) => {
  switch (field) {
    case 'id':
      return <div>{row.id}</div>;
    case 'name':
      return <div>{row.name}</div>;
    case 'age':
      return <div>{row.age}</div>;
    case 'sex':
      return <div>{row.sex > 0 ? '男' : '女'}</div>;
    case 'hobby':
      return (
        <Flex gap={5} x='start'>
          {row.hobby.map((item, index) => {
            return (
              <Tag size='small' type='info' key={index}>
                {item}
              </Tag>
            );
          })}
        </Flex>
      );
    case 'intro':
      return <div>{row.intro}</div>;
    case 'action':
      return (
        <Flex>
          <Button>管理</Button>
          <Button>删除</Button>
        </Flex>
      );
  }
};
const cell4 = (field: any, row) => {
  switch (field) {
    case 'id':
      return <div>{row.id}</div>;
    case 'name':
      return <div>{row.name}</div>;
    case 'age':
      return <div>{row.age}</div>;
    case 'sex':
      return <div>{row.sex > 0 ? '男' : '女'}</div>;
    case 'hobby':
      return (
        <Flex gap={5} x='start'>
          {row.hobby.map((item, index) => {
            return (
              <Tag size='small' type='info' key={index}>
                {item}
              </Tag>
            );
          })}
        </Flex>
      );
    case 'intro':
      return <div>{row.intro}</div>;
    case 'action':
      return (
        <Flex>
          <Popover childrenData={lrData}>
            <div>录入</div>
          </Popover>
          <Popover childrenData={scData}>
            <div>删除</div>
          </Popover>
        </Flex>
      );
  }
};
const lrData = (
  <Flex x='end'>
    <Button>取消</Button>
    <Button>提交</Button>
  </Flex>
);
const scData = (
  <Flex x='end'>
    <Button>取消</Button>
    <Button>确定</Button>
  </Flex>
);

const data5: any = [
  {
    id: 1,
    name: '小明',
    age: '14',
    sex: 1,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
    // 定义这一单元格的样式
    tdStyle: {
      age: { background: 'var(--mi-primary-color-dark', color: '#fff' },
    },
  },
  {
    id: 2,
    name: '小卢',
    age: '24',
    sex: 1,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
    // 定义这一行的样式
    rowStyle: { background: 'var(--mi-error-color-light)' },
  },
  {
    id: 3,
    name: '小娟',
    age: '25',
    sex: 0,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
    // 定义这一单元格的样式
    tdStyle: {
      sex: { color: 'var(--mi-warning-color-dark)' },
      intro: { background: 'var(--mi-warning-color-dark)', color: '#fff' },
    },
  },
  {
    id: 4,
    name: '小贝',
    age: '22',
    sex: 0,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
    tdStyle: {
      sex: { background: 'var(--mi-error-color-dark)', color: '#fff' },
    },
  },
  {
    id: 5,
    name: '小飞',
    age: '13',
    sex: 3,
    intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
  },
];

const columns5: TableColumns[] = [
  {
    title: 'id',
    width: '50px',
    field: 'id',
    x: 'center',
    sticky: 'left',
    offsetX: '0px',
  },
  {
    title: '姓名',
    width: '100px',
    field: 'name',
    x: 'center',
    sticky: 'left',
    offsetX: '50px',
    // 定义这一列的样式
    columnStyle: { background: 'var(--mi-success-color-light)' },
  },
  {
    title: '年龄',
    width: '200px',
    field: 'age',
    x: 'center',
  },
  {
    title: '性别',
    width: '200px',
    field: 'sex',
    x: 'center',
  },
  {
    title: '爱好',
    width: '400px',
    field: 'hobby',
  },
  {
    title: '介绍',
    width: '400px',
    field: 'intro',
  },
  {
    title: '操作',
    width: '120px',
    field: 'action',
    sticky: 'right',
    offsetX: '0px',
    x: 'center',
  },
];

export const conmomTableCN = () => {
  return <Table data={data} columns={columns} cell={cell}></Table>;
};

export const gdTableCN = () => {
  return <Table data={data2} columns={columns2} cell={cell2}></Table>;
};

export const czTableCN = () => {
  return <Table data={data3} columns={columns3} cell={cell3}></Table>;
};

export const soltTableCN = () => {
  return <Table data={data3} columns={columns3} cell={cell4}></Table>;
};

export const zdyTableCN = () => {
  return <Table data={data5} columns={columns5} cell={cell3}></Table>;
};
