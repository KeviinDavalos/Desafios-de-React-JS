
const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light colorHeader">
            <div className="container">
            <a className="navbar-brand text-white" href="#">Touch Mirror</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Todos los productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Redondos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Rectangulares</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Especiales</a>
            </li>
            </ul>
            </div>
            </div>
            </nav>
        </header>
    );
}

export default NavBar;
