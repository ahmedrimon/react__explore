import { Link } from 'react-router-dom';

const Navbar = () => {
     return (
          <section className="text-center mt-5">
                    <Link className="ml-5 text-xl text-black hover:text-red-600" to="/">Home</Link>
                    <Link className="ml-5 text-xl text-black  hover:text-red-600" to="/allreviews">Reviews</Link>
                    <Link className="ml-5 text-xl text-black  hover:text-red-600" to="/dashboard">Dashboard</Link>
                    <Link className="ml-5 text-xl text-black  hover:text-red-600" to="/blogs">Blogs</Link>
                    <Link className="ml-5 text-xl text-black hover:text-red-600" to="/about">About</Link>
          </section>
     );
};

export default Navbar;