import Footer from '~/components/Footer';
import Header from '~/components/Header';

function DefaultLayout({ children, isLogin = false }) {
  return (
    <>
      <Header isLogin={isLogin} />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
