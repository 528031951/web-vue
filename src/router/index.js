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
 /*   if(to.fullPath!=='/'){
        next({name:'Homes'});
    }else {
        next();
    }*/
    next();
});

router.afterEach(to => {
});

export default router;
