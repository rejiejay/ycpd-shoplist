import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/index',
        alias: ['/list', '/'],
        name: 'list',
        component: () => import('@/views/list/index'),
        meta: { title: '商家列表' },
    }, {
        path: '/list/detail/:id',
        name: 'list-detail',
        component: () => import('@/views/list/detail'),
        meta: { title: '门店详情' },
    }, {
        path: '/list/comment',
        name: 'list-comment',
        component: () => import('@/views/list/comment'),
        meta: { title: '门店详情' },
    }, 
    
    /**
     * 地图列表
     */
    {
        path: '/list/map/',
        name: 'list-map',
        component: () => import('@/views/map/list'),
        meta: { title: '商家列表' },
    },
];

let router = new Router({
    // mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) { // 路由发生变化修改页面 title
        document.title = to.meta.title;
    }

    next();
});

export default router;
