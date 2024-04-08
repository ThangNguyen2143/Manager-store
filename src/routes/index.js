import Documents from '~/pages/Documents';
import Home from '~/pages/Home';
import ProductPage from '~/pages/ProductPage/ProductPage';
import RegisterForm from '~/pages/User/RegisterForm';
import StaffLayout from '~/layouts/StaffLayout';
import Saler from '~/pages/Saler';
//Sử dụng để cho khách vãng lai
const publisRoutes = [
  { path: '/', component: Home },
  { path: '/register', component: RegisterForm },
  { path: '/docs', component: Documents },
  { path: '/productpage', component: ProductPage },
  { path: '/manager', component: Saler, layout: StaffLayout },
];
//Sử dụng cho đăng nhập
const priviteRoutes = [];

export { publisRoutes, priviteRoutes };
