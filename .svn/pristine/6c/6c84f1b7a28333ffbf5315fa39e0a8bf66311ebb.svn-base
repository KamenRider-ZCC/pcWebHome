import Layout from '@/layout/index.vue';

export default {
  path: '/',
  component: Layout,
  redirect: '/robot',
  children: [
    {
      path: '/robot',
      component: () => import('@/views/robot/index'),
      name: 'robot',
      meta: {title: '机器人', icon: 'dashboard', affix: true}
    },
  ]
}
