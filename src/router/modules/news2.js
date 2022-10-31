import Layout from '@/layout/index.vue';

export default {
  path: '/',
  component: Layout,
  redirect: '/news2',
  children: [
    {
      path: '/news2',
      component: () => import('@/views/news2/index'),
      name: 'news2',
      meta: {title: '新闻', icon: 'dashboard', affix: true}
    },
  ]
}
