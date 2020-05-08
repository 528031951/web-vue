import Hello from '../views/navigation/index'  //引入根目录下的Hello.vue组件
import nameTest from './home/index'  //引入根目录下的Hello.vue组件
export default [
    {
        path: "/",
        name: "Home",
        component: Hello,
        meta: {
            index: 0,
            title: '首页'
        }
    },
     ...nameTest
];