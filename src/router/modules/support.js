import Layout from '@/layout/index.vue';

export default {
	path: '/support',
	component: Layout,
	redirect: '/support/index',
	children: [
		{
		  path: 'index',
		  component: () => import('@/views/support/index'),
		  name: 'support',
		  meta: { title: 'SUPPORT', noCache: false }
		},
		{
		  path: 'list',
		  component: () => import('@/views/support/list'),
		  name: 'listSupport',
		  meta: { title: 'SUPPORT', noCache: false }
		},
		{
		  path: 'detail',
		  component: () => import('@/views/support/detail'),
		  name: 'detailSupport',
		  meta: { title: 'SUPPORT', noCache: true }
		}
	]
};
