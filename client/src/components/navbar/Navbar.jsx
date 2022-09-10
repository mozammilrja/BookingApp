import { Link } from "react-router-dom"
import "./navbar.css"
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext)


  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link style={{ textDecoration: "none", color: "white" }} to='/'>
          <span className='logo'>Airbnb</span>
        </Link>
        {user ? (
          <div>
            {user.username}
            <Link to='/register'>
              <button className='navButton'>Logout</button>
            </Link>
          </div>
        ) : (
          <div className='navItems'>
            <Link to='/register'>
              <button className='navButton'>Register</button>
            </Link>
            <Link to='/login'>
              <button className='navButton'>Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar