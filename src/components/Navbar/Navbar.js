import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import borjoLogo from '../../images/borjo-logo.svg';
import LanguageSelector from '../LanguageSelector.js';
import { Link, NavLink } from 'react-router-dom';


import SocialIcons from './SocialIcons';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
        <nav className="NavbarItems">
          <Link to="/" className="navbar-logo logo">
            <img
              src={borjoLogo}
              width="40"
              height="40"
              className="logo-image"
              alt="Logo"
            />
          </Link>
          <div className="nav-content">
            <LanguageSelector />
            <div className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
              <ul className="nav-list">
                {MenuItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        className={item.cName}
                        to={item.url}
                        // ARK better solution to this onClick?
                        onClick={this.handleClick}
                      >
                        <span className="nav-link-text">{item.title}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <SocialIcons isNavbar='true' />
              </div>

            <div className="menu-icon" onClick={this.handleClick}>
              <i
                className={
                  this.state.clicked ? 'fas fa-times fa-fw' : 'fas fa-bars fa-fw'
                }
              ></i>
            </div>
          </div>
        </nav>
    );
  }
}

export default Navbar;

// const Navbar = () => {
//   const [clicked, setClicked] = useState(false);

//   return (
//     <nav className="NavbarItems">
//       <Link to="/" className="navbar-logo logo">
//         <img
//           src={borjoLogo}
//           width="40"
//           height="40"
//           className="logo-image"
//           alt="Logo"
//         />
//       </Link>
//       <div className="nav-content">
//         <LanguageSelector />
//         <div className={clicked ? 'nav-menu active' : 'nav-menu'}>
//           <ul className="nav-list">
//             {MenuItems.map((item, index) => {
//               return (
//                 <li key={index}>
//                   <NavLink
//                     className={item.cName}
//                     to={item.url}
//                     onClick={setClicked((prevCheck) => prevCheck + 1)}
//                   >
//                     <span className="nav-link-text">{item.title}</span>
//                   </NavLink>
//                 </li>
//               );
//             })}
//           </ul>
//           <div className="nav-icons">
//             <a
//               href="https://www.linkedin.com/in/borjalagaron/"
//               rel="noreferrer"
//               target="_blank"
//               className="nav-icon"
//             >
//               {' '}
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//             <a href={Cv} rel="noreferrer" target="_blank" className="nav-icon">
//               {' '}
//               <i className="far fa-file"></i>
//             </a>
//             <a
//               href="mailto:Borja.lagaron@me.com?subject=Subject&body=Linea%201%0D%0ALinea%202"
//               rel="noreferrer"
//               target="_blank"
//               className="nav-icon"
//             >
//               {' '}
//               <i className="fas fa-envelope"></i>
//             </a>
//           </div>
//         </div>

//         <div className="menu-icon" onClick={setClicked((prevClicked) => prevClicked + 1)}>
//           <i
//             className={
//               clicked ? 'fas fa-times fa-fw' : 'fas fa-bars fa-fw'
//             }
//           ></i>
//         </div>
//       </div>
//     </nav>
//   );

//   setClicked((prevCheck) => prevCheck + 1);
// };
