import { AppPage } from './pages/AppPage';
import { Timeline } from './pages/Timeline.jsx';

const routes = [
  {
    path: '/',
    component: AppPage,
    isExact: true,
  },

  {
    path: '/timeline',
    component: Timeline,
    isExact: true,
  },
];

export default routes;
