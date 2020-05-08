import nameTest from "@/views/index"

const routes = [
    {
        path: "/nameTest",
        name: "nameTest",
        component: nameTest,
        meta: { requiresAuth: true, title: "测试" }
    },

];
export default routes;