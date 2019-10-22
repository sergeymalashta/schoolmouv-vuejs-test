//pages
import HomePage from './home-page';
import DetailsPage from './details-page';

//layouts
const DefaultLayout = () => import('../../views/layouts/default.vue');

export default [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      HomePage,
      DetailsPage
    ]
  }
];
