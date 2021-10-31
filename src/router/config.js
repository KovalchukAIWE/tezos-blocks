import Background from '../pages/bg';
import BgDifferent from '../pages/bg-different';
import BgPrimary from '../pages/bg-primary';
import BgLight from '../pages/bg-light';
import OurMission from '../pages/our-mission';
import Team from '../pages/team';
import CoverPrimary from '../pages/cover-primary';
import CoverAlt from '../pages/cover-alt';
import Cover from '../pages/cover';
import Marketing from '../pages/marketing';
import Competitive from '../pages/competitive';
import Customer from '../pages/customer';
import NotFound from '../pages/not-found';
import Blocks from '../pages/blocks';

const routes = [
  {
    path: '/bg',
    exact: true,
    component: Background,
  },
  {
    path: '/bg-different',
    exact: true,
    component: BgDifferent,
  },
  {
    path: '/bg-primary',
    exact: true,
    component: BgPrimary,
  },
  {
    path: '/bg-light',
    exact: true,
    component: BgLight,
  },
  {
    path: '/our-mission',
    exact: true,
    component: OurMission,
  },
  {
    path: '/team',
    exact: true,
    component: Team,
  },
  {
    path: '/cover-primary',
    exact: true,
    component: CoverPrimary,
  },
  {
    path: '/cover-alt',
    exact: true,
    component: CoverAlt,
  },
  {
    path: '/cover',
    exact: true,
    component: Cover,
  },
  {
    path: '/marketing',
    exact: true,
    component: Marketing,
  },
  {
    path: '/competitive',
    exact: true,
    component: Competitive,
  },
  {
    path: '/target-customer',
    exact: true,
    component: Customer,
  },
  {
    path: '/not-found',
    exact: true,
    component: NotFound,
  },
  {
    path: '/blocks',
    exact: true,
    component: Blocks,
  },
];

export default routes;
