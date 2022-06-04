import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/views/Layout'; //自动找index文件
import Home from '@/views/Home';
import Search from '@/views/Search';
import Play from '@/views/Play';


Vue.use(VueRouter);

const routes = [{
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        component: Layout,
        redirect:'layout/home',
        children: [{
                path:'home',  //子路由不用加斜线
                component:Home,
                meta:{
                    title:'首页',
                }
            },
            {
                path:'search',
                component:Search,
                meta:{
                    title:"搜索",
                }
            }

        ]
    },
    {
        path: '/play',
        component: Play
    }

];
const router =new VueRouter({

    routes
});
export default router;