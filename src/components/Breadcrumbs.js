import { Link } from 'react-router-dom';

function Breadcrumbs({ breadCrumbs }) {
  return (
    <>
      <section className="pt-4 sm:py-3">
        <div className="max-w-screen-xl">
          <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
            {breadCrumbs?.map((breadCrumb, index) => (
              <li className="inline-flex items-center">
                <Link href={breadCrumb.url} className="text-gray-600 hover:text-blue-600">
                  {breadCrumb.name}
                </Link>
                {breadCrumbs?.length - 1 !== index && <i className="ml-3 text-gray-400 fa fa-chevron-right"></i>}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export default Breadcrumbs;
