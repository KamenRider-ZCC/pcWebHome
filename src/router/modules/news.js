import Layout from '@/layout/index.vue';

export default {
	path: '/news',
	component: Layout,
	redirect: '/news/list',
	children: [
		{
		  path: 'list',
		  component: () => import('@/views/news/list'),
		  name: 'listNews',
		  meta: { title: 'NEWS', noCache: false }
		},
		{
		  path: 'detail',
		  component: () => import('@/views/news/detail'),
		  name: 'detailNews',
		  meta: { title: 'NEWS', noCache: true }
		}
	]
};
