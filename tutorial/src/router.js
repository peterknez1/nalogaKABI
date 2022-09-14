import { createWebHistory, createRouter } from 'vue-router';
import MasterPage from '@/pages/masterPage.vue';
import DetailsPage from '@/pages/detailsPage.vue'

const routes = [
	{
		path: '/',
		name: 'MasterPage',
		component: MasterPage,
	},

    {
        path: '/details/:id',
        name: 'DetailsPage',
        component: DetailsPage,
		props: true
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;