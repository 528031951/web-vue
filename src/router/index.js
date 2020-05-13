import Vue from "vue";
import Router from "vue-router";

// 路由数据
import routes from "./routes";

Vue.use(Router);

const router = new Router({
    routes
});
// 解决添加相同路由报错问题
const routerPush=Router.prototype.push

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
    var item = localStorage.getItem("userTypeSelect");
    if(item==null) {
        if (to.fullPath === '/nameTest') {
            next();
        } else {
            next("nameTest");
        }
    }else {
        next();
    }

});

router.afterEach(to => {
});

export default router;
