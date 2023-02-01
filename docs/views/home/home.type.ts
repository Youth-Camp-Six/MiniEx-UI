const user = ref({
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
});

const sex_options = ref([
    { label: '未知', value: '0' },
    { label: '男', value: '1' },
    { label: '女', value: '2' },
]);

const hobby_options = ref([
    { label: '唱歌', value: 1 },
    { label: '跳', value: 2 },
    { label: 'rap', value: 3 },
    { label: '打篮球', value: 44 },
]);
const home_options = ref([
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
]);

const breadcrumb_options = ref([
    {
        label: '首页',
        to: '/',
    },
    {
        label: 'Vue',
        to: 'https://vuejs.org/',
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
]);

const tab_soptions = ref([
    { label: '北京', value: '1' },
    { label: '上海', value: '2' },
    { label: '广州', value: '3' },
    { label: '深圳', value: '4' },
    { label: '乌鲁木齐', value: '5' },
]);

const dropdown_options = ref([
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
]);

const list = ref([
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
]);

const message = (type: string) => {
    LewMessage[type]('这是一条demo消息');
};

const notification = (type: string) => {
    // @ts-ignore
    LewNotification[type]({
        title: '提示',
        content: '这是一条demo消息',
    });
};