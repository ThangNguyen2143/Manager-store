import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <h1>Welcome to website</h1>
      <Link to="/docs">Document</Link>
    </>
  );
}

export default Home;
