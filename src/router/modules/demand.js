import Layout2 from '@/layout/index2.vue';

export default {
  path: '/',
  component: Layout2,
  redirect: '/demand',
  children: [
    {
      path: '/demand',
      component: () => import('@/views/demand/index'),
      name: 'demand',
      meta: {title: '需求中心', icon: 'dashboard', affix: true}
    },
  ]
}
