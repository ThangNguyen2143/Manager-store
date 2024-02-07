import Documents from '~/pages/Documents';
import Home from '~/pages/Home';
//Sử dụng để cho khách vãng lai
const publisRoutes = [
  { path: '/', component: Home },
  { path: '/docs', component: Documents },
];
//Sử dụng cho đăng nhập
const priviteRoutes = [];

export { publisRoutes, priviteRoutes };
