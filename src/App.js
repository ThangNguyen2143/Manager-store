import { Routes, Route } from 'react-router-dom';
import { publisRoutes } from './routes';
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
      </Routes>
    </>
  );
}

export default App;
