import { Link } from "react-router-dom";

const HeaderPrincipal = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-info-subtle">
  <div className="container-fluid">
     <a className="navbar-brand" href="#">Cadastro News</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
     <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav">
           <li className="nav-item">             
              <Link to="/" className="nav-Link">Home</Link>
           </li>
           <li className="nav-item">
            <Link to="/Sobre" className="nav-link">Sobre</Link>
           </li>
           <li className="nav-item">
            <Link to='/Cadastro' className="nav=link">Cadastro</Link>
           </li>
       </ul>
     </div>
  </div>
</nav>
    )
}

export default HeaderPrincipal 