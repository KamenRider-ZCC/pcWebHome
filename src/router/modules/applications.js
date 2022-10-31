import Layout from '@/layout/index.vue';

export default {
	path: '/applications',
	component: Layout,
	redirect: '/applications/list',
	children: [
		{
		  path: 'list',
		  component: () => import('@/views/applications/list'),
		  name: 'listApplications',
		  meta: { title: 'APPLICATIONS', noCache: false }
		},
		{
		  path: 'detail',
		  component: () => import('@/views/applications/detail'),
		  name: 'detailApplications',
		  meta: { title: 'APPLICATIONS', noCache: true }
		}
	]
};
