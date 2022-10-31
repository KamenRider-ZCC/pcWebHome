import Layout from '@/layout/index.vue';

export default {
	path: '/product',
	component: Layout,
	redirect: '/product/index',
	children: [
		{
		  path: 'index',
		  component: () => import('@/views/product/index'),
		  name: 'product',
		  meta: { title: 'PRODUCT', noCache: false },
			children: [
				{
					path: 'hot',
					component: () => import('@/views/product/children/hot'),
					name: 'hotProduct',
					meta: { title: 'PRODUCT', noCache: false },
				},
				{
					path: 'new',
					component: () => import('@/views/product/children/new'),
					name: 'newProduct',
					meta: { title: 'PRODUCT', noCache: false },
				},
				{
					path: 'special',
					component: () => import('@/views/product/children/special'),
					name: 'specialProduct',
					meta: { title: 'PRODUCT', noCache: false },
				},
				{
					path: 'list',
					component: () => import('@/views/product/children/list'),
					name: 'listProduct',
					meta: { title: 'PRODUCT', noCache: false },
				},
				{
					path: 'detail',
					component: () => import('@/views/product/children/detail'),
					name: 'detailProduct',
					meta: { title: 'PRODUCT', noCache: true },
				},
				{
					path: 'search',
					component: () => import('@/views/product/children/search'),
					name: 'searchProduct',
					meta: { title: 'PRODUCT', noCache: false },
				},
			]
		}
	]
};
