import { Routes, Route } from 'react-router-dom';
import { priviteRoutes, publisRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  return (
    <>
      <Routes>
        {publisRoutes.map((route, index) => {
          let Layout = DefaultLayout;
          if (route.layout) Layout = route.layout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        {priviteRoutes.map((route) => {
          let Layout = DefaultLayout;
          if (route.layout) Layout = route.layout;
          const Page = route.component;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
