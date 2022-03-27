
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <Link to='/'>  <li className="navbar-brand">FLORES GUITARRAS</li></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <Link to='/categoryId/3'> <li className="nav-link">
                            Criollas
                           </li>  </Link>
                            
                           <Link to='/categoryId/1'><li className="nav-link">
                           Eléctricas
                               </li>  </Link>
                            
                               <Link to='/categoryId/2'><li className="nav-link">
                          Electro-acústicas
                            </li> </Link>
                            
                            <Link to ="/cart">   <li >
                            <a className="nav-link" ><CartWidget/></a>
                            </li> </Link>

                        </ul>
                        
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>

                        </form> */}
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default NavBar;