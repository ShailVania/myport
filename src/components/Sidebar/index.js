import './index.scss';
import {Link, NavLink} from "react-router-dom";
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";



const Sidebar = ()=>{
    return(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="Logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="S Vania"/>

        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color= "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color= "#4d4d4e" />
            </NavLink>
            <NavLink exact="true"
                     activeclassname="active"
                     className="contact-link"
                     to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color= "#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/shailvania/"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} color="#ffd700" />
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar;