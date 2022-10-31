import Layout from '@/layout/index.vue';

export default {
  path: '/',
  component: Layout,
  redirect: '/supplyDemand',
  children: [
    {
      path: '/supplyDemand',
      component: () => import('@/views/supplyDemand/index'),
      name: 'supplyDemand',
      meta: {title: '生态社区', icon: 'dashboard', affix: true}
    },
  ]
}
