import Hello from '../views/navigation/index'  //引入根目录下的Hello.vue组件
import aaa from '../views//index'  //引入根目录下的Hello.vue组件
import nameTest from './home/index'  //引入根目录下的Hello.vue组件
export default [
    {
        path: "/",
        name: "Home",
        component: Hello,
    },{
        path: "/aaa",
        name: "Homes",
        component: aaa,
    },
     ...nameTest
];