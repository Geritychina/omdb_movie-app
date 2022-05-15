import { Link } from 'react-router-dom';
import './header.css';
const Header = () =>{
    return(
        <div>
      <nav className="navbar navbar-light bg-dark mb-6">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/"> OMDB Movie App</Link>
             
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-5x" id="imdb-logo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
        
    );
}

export default Header;