import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Notes from './components/Notes.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/notes',
            name: 'notes',
            component: Notes
        },

    ]
})