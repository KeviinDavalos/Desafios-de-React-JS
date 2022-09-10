import CardWidget from "./CardWidget";
const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light colorHeader">
            <div className="container">
            <a className="navbar-brand text-white" href="#">Touch Mirror</a>
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
            <CardWidget />
            </div>
            </div>
            </nav>
        </header>
    );
}

export default NavBar;
