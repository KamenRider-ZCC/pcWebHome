import Layout from '@/layout/index.vue';

export default {
	path: '/citations',
	component: Layout,
	redirect: '/citations/list',
	children: [
		{
		  path: 'list',
		  component: () => import('@/views/citations/list'),
		  name: 'listCitations',
		  meta: { title: 'CITATIONS', noCache: false }
		},
		{
		  path: 'detail',
		  component: () => import('@/views/citations/detail'),
		  name: 'detailCitations',
		  meta: { title: 'CITATIONS', noCache: true }
		}
	]
};
