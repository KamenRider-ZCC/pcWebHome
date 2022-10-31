import Layout from '@/layout/index.vue';

export default {
	path: '/contact',
	component: Layout,
	redirect: '/contact/index',
	children: [
		{
		  path: 'index',
		  component: () => import('@/views/contact/index'),
		  name: 'contact',
		  meta: { title: 'CONTACT', noCache: false }
		}
	]
};
