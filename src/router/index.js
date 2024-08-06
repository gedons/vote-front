import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Index.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/dashboard.vue';
import RegisterVoterCard from '../views/RegisterVoterCard.vue';
import ViewVoterCard from '../views/ViewVoterCard.vue';


const routes = [
  { path: '/', component: Home },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresGuest: true }
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/register-voter-card',
    name: 'registerVoterCard',
    component: RegisterVoterCard,
    meta: { requiresAuth: true }
  },
  {
    path: '/view-voter-card',
    name: 'viewVoterCard',
    component: ViewVoterCard,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuthenticated) {
      next(); 
    } else {
      next('/login'); 
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (isAuthenticated) {
      next('/dashboard'); 
    } else {
      next(); 
    }
  } else {
    next(); 
  }
});

export default router;
