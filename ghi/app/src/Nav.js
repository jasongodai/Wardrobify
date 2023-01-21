import { NavLink, Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Wardrobify</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shoes
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/shoes">Shoes</Link></li>
                    <li><Link className="dropdown-item" to="/shoes/new">Create a New Shoe</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Bins
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/bins">Bins</Link></li>
                    <li><Link className="dropdown-item" to="/bins/new">Create a New Bin</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hats
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/hats">Hats</Link></li>
                    <li><Link className="dropdown-item" to="/hats/new">Create a New Hat</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Locations
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/locations">Locations</Link></li>
                    <li><Link className="dropdown-item" to="/locations/new">Create a New Location</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
