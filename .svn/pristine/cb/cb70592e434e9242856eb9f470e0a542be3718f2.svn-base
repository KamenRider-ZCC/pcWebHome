import Layout from '@/layout/index.vue';

export default {
	path: '/resources',
	component: Layout,
	redirect: '/resources/index',
	children: [
		{
		  path: 'index',
		  component: () => import('@/views/resources/index'),
		  name: 'resources',
		  meta: { title: 'RESOURCES', noCache: false },
			children: [
				{
					path: 'COAs',
					component: () => import('@/views/resources/children/COAs'),
					name: 'COAsResources',
					meta: { title: 'RESOURCES', noCache: false },
				},
				// {
				// 	path: 'MSDs',
				// 	component: () => import('@/views/resources/children/MSDs'),
				// 	name: 'MSDsResources',
				// 	meta: { title: 'RESOURCES', noCache: false },
				// },
				// {
				// 	path: 'Protocols',
				// 	component: () => import('@/views/resources/children/Protocols'),
				// 	name: 'ProtocolsResources',
				// 	meta: { title: 'RESOURCES', noCache: false },
				// },
				{
					path: 'detail',
					component: () => import('@/views/resources/children/detail'),
					name: 'detailResources',
					meta: { title: 'RESOURCES', noCache: false },
				},
			]
		}
	]
};
