import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Onboarding from '../views/welcome/Onboarding.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Verify from '../views/auth/Verify.vue'
import Verified from '../views/auth/Verified.vue'
import Password from '../views/auth/Password.vue'
import Profile from '../views/auth/Profile.vue'
import SetupComplete from '../views/auth/SetupComplete.vue'
import Payment from '../views/auth/Payment.vue'
import PaymentComlete from '../views/auth/PaymentComlete.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome/'
  },
  {
    path: '/welcome/',
    component: Onboarding
  },
  {
    path: '/Login/',
    component: Login
  },
  {
    path: '/verify/',
    component: Verify
  },
  {
    path: '/verified/',
    component: Verified
  },
  {
    path: '/create-password/',
    component: Password
  },
  {
    path: '/profile/',
    component: Profile
  },
  {
    path: '/setup-complete/',
    component: SetupComplete
  },
  {
    path: '/payment/',
    component: Payment
  },
  {
    path: '/payment-complete/',
    component: PaymentComlete
  },
  {
    path: '/Register/',
    component: Register
  },
  {
    path: '/home/',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/home/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
