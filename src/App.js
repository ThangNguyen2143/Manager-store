import { Routes, Route } from 'react-router-dom';
import { publisRoutes } from './routes';

function App() {
  return (
    <>
      <Routes>
        {publisRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                // <Layout>
                //   <Page />
                // </Layout>
                <Page />
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
