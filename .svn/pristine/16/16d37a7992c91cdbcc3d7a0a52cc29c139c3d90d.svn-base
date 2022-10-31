import Layout2 from '@/layout/index2.vue';

export default {
  path: '/',
  component: Layout2,
  redirect: '/productDetail',
  children: [
    {
      path: '/productDetail',
      component: () => import('@/views/productDetail/index'),
      name: 'productDetail',
      meta: {title: '商品详情', icon: 'dashboard', affix: true}
    },
  ]
}
