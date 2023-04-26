import { Fragment } from "react";

const Navbaritem = (props) => {
  return (
   <Fragment>
        <li class="nav-item">
    <p class="nav-link">{props.titulo}</p>
  </li>
  </Fragment>
    
  )
}

export default Navbaritem