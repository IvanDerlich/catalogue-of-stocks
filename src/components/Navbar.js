import { Link } from 'react-router-dom';
import './Navbar.scss';

function NavBar() {
  return (
    <div className="navbar-menu">
      <div className="navbar-item"><Link to="/">Home</Link></div>
      <div className="navbar-item"><Link to="/About">About</Link></div>
    </div>
  );
}
export default NavBar;
