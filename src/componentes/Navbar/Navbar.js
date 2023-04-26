import React from "react"
import Navbaritem from "./Navbaritem";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = (props) => {
    
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <p class="navbar-brand"> {props.navbarLogo} </p>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <Navbaritem titulo={'Inicio'}/>
            <Navbaritem titulo={'Imagenes'}/>
            <Navbaritem titulo={'La empresa'}/>
            <Navbaritem titulo={'Contacto'}/>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <FaShoppingCart />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;