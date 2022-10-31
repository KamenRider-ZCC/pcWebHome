import Layout from '@/layout/index.vue';

export default {
	path: '/about',
	component: Layout,
	redirect: '/about/index',
	children: [
		{
		  path: 'index',
		  component: () => import('@/views/about/index'),
		  name: 'about',
		  meta: { title: 'ABOUT US', noCache: false },
      children: [
        {
        	path: 'about',
        	component: () => import('@/views/about/children/about'),
        	name: 'aboutAbout',
        	meta: { title: 'ABOUT US', noCache: true },
        },
        {
        	path: 'partners',
        	component: () => import('@/views/about/children/partners'),
        	name: 'partnersAbout',
        	meta: { title: 'PARTNERS', noCache: true },
        },
      ]
		}
	]
};
