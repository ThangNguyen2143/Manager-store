import Documents from '~/pages/Documents';
import Home from '~/pages/Home';
import ProductPage from '~/pages/ProductPage/ProductPage';
import RegisterForm from '~/pages/User/RegisterForm';
import StaffLayout from '~/layouts/StaffLayout';
import CreateBill from '~/pages/Staff/CreateBill';
import ListOrders from '~/pages/Staff/ListOrders';
import ManageProducts from '~/pages/Staff/ManagerProducts';
//Sử dụng để cho khách vãng lai
const publisRoutes = [
  { path: '/', component: Home },
  { path: '/register', component: RegisterForm },
  { path: '/docs', component: Documents },
  { path: '/productpage', component: ProductPage },
];
//Sử dụng cho đăng nhập
const priviteRoutes = [
  { path: '/manager/orders', component: ListOrders, layout: StaffLayout },
  { path: '/new-bill', component: CreateBill, layout: StaffLayout },
  { path: '/manager/products', component: ManageProducts, layout: StaffLayout },
];

export { publisRoutes, priviteRoutes };
