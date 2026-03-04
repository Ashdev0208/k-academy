import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/contact.vue'
import ConsultingView from '../views/consulting.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/consulting',
            name: 'consulting',
            component: ConsultingView,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth', // This makes it slide down nicely!
            }
        }
        return { top: 0 }
    },
})

export default router