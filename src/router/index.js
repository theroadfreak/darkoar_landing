import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditorialsView from '../views/EditorialsView.vue'
import EditorialsRenderView from "@/views/EditorialsRenderView";
import AboutView from "@/views/AboutView";
import CapaignsView from "@/views/CapaignsView";
import CapaignsRenderView from "@/views/CapaignsRenderView";
import MotionView from "@/views/MotionView";
import PrintsView from "@/views/PrintsView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/editorials',
        name: 'editorials',
        component: EditorialsView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/editorials-view/:albumName',
        name: 'editorials-view',
        component: EditorialsRenderView,
        props: true
    },
    {
        path: '/campaigns',
        name: 'campaigns',
        component: CapaignsView
    },
    {
        path: '/campaigns-view/:albumName',
        name: 'campaigns-view',
        component: CapaignsRenderView,
        props: true
    },
    {
        path: '/motion',
        name: 'motion',
        component: MotionView,
        meta: {background_black: true},
    },
    {
        path: '/prints',
        name: 'prints',
        component: PrintsView,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
