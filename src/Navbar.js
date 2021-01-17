import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <Link to="/">
                        <li className="nav-item">
                            <span className="navbar-brand">Home</span>
                        </li>
                    </Link>
                    <Link to="/firstApi">
                        <li className="nav-item">
                            <span className="nav-link">Placeholder</span>
                        </li>
                    </Link>
                    <Link to="/secondApi">
                        <li className="nav-item">
                            <span className="nav-link">AnimeList</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );

}

export default Navbar;

