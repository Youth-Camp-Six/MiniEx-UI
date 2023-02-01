const user = {
  username: '',
  password: '',
  age: '',
  sex: '1',
  hobby: [],
  tags: ['美丽', '大方'],
  school: '',
  home: '',
  dark: true,
  pay: '',
  src: 'https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668',
};

const sexOtions = [
  { label: '未知', value: '0' },
  { label: '男', value: '1' },
  { label: '女', value: '2' },
];

const hobbyOptions = [
  { label: '唱歌', value: 1 },
  { label: '跳', value: 2 },
  { label: 'rap', value: 3 },
  { label: '打篮球', value: 44 },
];
const homeOptions = [
  {
    label: '广东',
    value: '1',
  },
  {
    label: '深圳',
    value: '2',
  },
  {
    label: '杭州',
    value: '3',
  },
  {
    label: '上海',
    value: '4',
  },
  {
    label: '北京',
    value: '5',
  },
];

const breadcrumbOptions = [
  {
    label: '首页',
    to: '/',
  },
  {
    label: 'React',
    to: '',
  },
  {
    label: '商品列表',
    to: '',
  },
  {
    label: '商品详情',
    to: '',
    active: true,
  },
];

const tabSoptions = [
  { label: '北京', value: '1' },
  { label: '上海', value: '2' },
  { label: '广州', value: '3' },
  { label: '深圳', value: '4' },
  { label: '乌鲁木齐', value: '5' },
];

const dropdownOptions = [
  {
    label: '西游记',
    value: '1',
  },
  {
    label: '水浒传',
    value: '2',
  },
  {
    label: '三国演义',
    value: '3',
  },
  {
    label: '红楼梦',
    value: '4',
  },
];

const list = [
  {
    type: 'info',
    title: '成功发送一条消息',
    content: '',
  },
  {
    type: 'normal',
    title: '成功发送一条消息',
    content: '',
  },
  {
    type: 'warning',
    title: '成功发送一条消息',
    content: '',
  },

  {
    type: 'error',
    title: '成功发送一条消息',
    content: '',
  },
  {
    type: 'success',
    title: '成功发送一条消息',
    content: '',
  },
];

export {
  user,
  sexOtions,
  hobbyOptions,
  homeOptions,
  breadcrumbOptions,
  tabSoptions,
  dropdownOptions,
  list,
};
