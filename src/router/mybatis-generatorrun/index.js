import myBatisGeneratorRun from "@/views/mybatis-generatorrun/index"

const routers=[
    {
        path:'/myBatisGeneratorRun',
        name:'myBatisGeneratorRun',
        component:myBatisGeneratorRun,
        meta: { requiresAuth: true, title: "mybatisPlus代码生成器" }
    }
];

export default routers;