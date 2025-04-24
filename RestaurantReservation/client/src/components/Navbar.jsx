import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
    <Link className="navbar-brand fw-bold" to="/">CrazyBites</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/team">Team</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/menu">Our Menu</Link></li>
      </ul>
      <Link className="btn btn-outline-dark" to="/reservation">Reservation</Link>
    </div>
  </nav>
);

export default Navbar;
