import { createRouter, createWebHistory , RouteRecordRaw } from 'vue-router'
import HomeComponent from '@/components/Main/Home/HomeComponent.vue'
import ContactComponent from '@/components/Main/Contacts/ContactComponent.vue'
import DetailsComponent from '@/components/Main/Home/Details/DetailsComponent.vue'
import CartsComponent from '@/components/Main/Home/Carts/CartsComponent.vue'
import CheckoutComponent from '@/components/Main/Home/Checkout/CheckoutComponent.vue'
import InfoComponent from '@/components/Main/Home/Checkout/Info/InfoComponent.vue'
import ShippingComponent from '@/components/Main/Home/Checkout/Shipping/ShippingComponent.vue'
import PaymentComponent from '@/components/Main/Home/Checkout/Payment/PaymentComponent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactComponent,
    props: true
  },
  {
    path: '/details/:collection/:bookname',
    name: 'details',
    component: DetailsComponent,
    props: true
  },
  {
    path: '/carts',
    name: 'carts',
    component: CartsComponent,
    props: true
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutComponent,
    props: true,
    children: [
      {
        path: '/checkout/info',
        name: 'info',
        component: InfoComponent,
        props: true
      },
      {
      path: '/checkout/shipping',
      name: 'shipping',
      component: ShippingComponent,
    },
    {
      path: '/checkout/payment',
      name: 'payment',
      component: PaymentComponent,
    },
  ],
    meta: {
      breadcrumb:[
        {text:'Cart', to: '/checkout'},
        {text:'Information', to: '/checkout/info'},
        {text:'Shipping', to: '/checkout/shipping'},
        {text:'Payment', to: '/checkout/payment'}
      ]
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

