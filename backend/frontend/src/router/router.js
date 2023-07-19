import VueRouter from 'vue-router'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import ('@/pages/HomePage.vue'),
            meta: {requiresAuth: true}
        },
        {
            path: "/login",
            component: () => import ('@/pages/LoginPage.vue'),
            meta: {requiresAuth: false}
        }
]})

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
})

router.beforeEach((to, from, next) => {
    const token = store.state.token
    if (to.meta.requiresAuth && !token) {
        next('/login')
    }
    else {
        next()
    }
})
