import Layout from '@/layout/index.vue'

export default {
  path: '/',
  component: Layout,
  redirect: '/developer',
  children: [
    {
      path: '/articleDetail',
      component: () => import('@/views/developer/children/articleDetail'),
      name: 'articleDetail',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/technology',
      component: () => import('@/views/developer/children/technology'),
      name: 'technology',
      meta: { title: '技术领域', icon: 'dashboard', affix: true }
    },
    {
      path: '/article1-1',
      component: () => import('@/views/developer/children/article1-1'),
      name: 'article1-1',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article1-2',
      component: () => import('@/views/developer/children/article1-2'),
      name: 'article1-2',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article2-1',
      component: () => import('@/views/developer/children/article2-1'),
      name: 'article2-1',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article2-2',
      component: () => import('@/views/developer/children/article2-2'),
      name: 'article2-2',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article3-1',
      component: () => import('@/views/developer/children/article3-1'),
      name: 'article3-1',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article3-2',
      component: () => import('@/views/developer/children/article3-2'),
      name: 'article3-2',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article4-1',
      component: () => import('@/views/developer/children/article4-1'),
      name: 'article4-1',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article4-2',
      component: () => import('@/views/developer/children/article4-2'),
      name: 'article4-2',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article5-1',
      component: () => import('@/views/developer/children/article5-1'),
      name: 'article5-1',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article5-2',
      component: () => import('@/views/developer/children/article5-2'),
      name: 'article5-2',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article6-1',
      component: () => import('@/views/developer/children/article6-1'),
      name: 'article6-1',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article6-2',
      component: () => import('@/views/developer/children/article6-2'),
      name: 'article6-2',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article7-1',
      component: () => import('@/views/developer/children/article7-1'),
      name: 'article7-1',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article7-2',
      component: () => import('@/views/developer/children/article7-2'),
      name: 'article7-2',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article8-1',
      component: () => import('@/views/developer/children/article8-1'),
      name: 'article8-1',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article8-2',
      component: () => import('@/views/developer/children/article8-2'),
      name: 'article8-2',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article9-1',
      component: () => import('@/views/developer/children/article9-1'),
      name: 'article9-1',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    },
    {
      path: '/article9-2',
      component: () => import('@/views/developer/children/article9-2'),
      name: 'article9-2',
      meta: { title: '文章详情', icon: 'dashboard', affix: true }
    }
  ]
}
