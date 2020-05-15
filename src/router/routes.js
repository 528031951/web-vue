import Hello from '../views/navigation/index'  //引入根目录下的Hello.vue组件
import aaa from '../views/index'  //引入根目录下的Hello.vue组件
/*import nameTest from './home/index'  //引入根目录下的Hello.vue组件*/
import myBatisGeneratorRun from './mybatis-generatorrun/index'
import nameTest from "@/views/index"
export default [
    {
        path: "/",
        name: "Home",
        component: Hello,
    },{
        path: "/aaa",
        name: "Homes",
        component: aaa,
    },{
        path: "/nameTest",
        name: "nameTest",
        component: nameTest,
    },
    ...myBatisGeneratorRun
];