import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Indexlayout from "../layout/Indexlayout";


Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/index"
    },
    {
        path: "/index",
        component: Indexlayout,
        children: [{
            path: "",
            component: Index
        }, {
            path: "bill",
            component: () => import('../views/Bill.vue'),
            meta:{
                title:"榜单"
            }
        }, {
            path: "my",
            component: () => import('../views/My.vue'),
            meta:{
                title:"我的"
            }
        }, {
            path: "search",
            component: () => import('../views/Search.vue'),
            meta:{
                title:"搜索"
            }
        }, {
            path: "singer",
            component: () => import('../views/Singer.vue'),
            meta:{
                title:"歌手"
            }


        },
            {
                path: "Singerdetails/:tingup",
                component: () => import('../views/Singerdetails'),
                meta:{
                    title:"歌手"
                }


            },
            {
                //this.$route.params.type
                path: "more/:type/:title",
                component: () => import('../views/Moremusic.vue'),
            }
        ]
    },
    {
        path:"/bofang/:songId",
        component: ()=>import('../views/bofang.vue')
    },
    {
        path:"/details/:type",
        component: ()=>import('../views/Detail.vue'),
        meta:{
            title:"歌手"
        }
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

