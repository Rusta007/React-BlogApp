import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <nav>
      <Header />
       <div>
         
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/tourism">Tourism</Link>
            <Link className="link" to="/fitness">Fitness</Link>
            <Link className="link" to="/Technology">Technology</Link>
            <Link className="link" to="/bollywood">Hollywood</Link>
            <Link className="link" to="/food">Food</Link>
            </div>
            <hr />
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;