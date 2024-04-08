import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs({ breadCrumbs }) {
  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink = +`/${crumb}`;

      return (
        // <div className="crumb" key={crumb}>
        //   <Link to={'/'}>Trang chủ</Link>
        //   <Link to={currentLink}>{crumb}</Link>
        // </div>
        <ol>
          <li>
            <Link to={'/'}>Trang chủ</Link>
          </li>
          {breadCrumbs?.map((breadCrumbs, crumb) => (
            <li key={crumb}>
              <Link to={currentLink}>{crumb}</Link>
            </li>
          ))}
        </ol>
      );
    });
  return (
    <>
      <div className="breadcrumbs">{crumbs}</div>
    </>
  );
}

export default Breadcrumbs;
