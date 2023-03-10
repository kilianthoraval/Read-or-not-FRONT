import React from 'react';
import { Link } from 'react-router-dom';


import UserCircle from '../Auth/UserCircle';

import './index.scss';


function Navbar({isLogged}) {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {/* <Link to="/" className="navbar-logo">
          LOGO
        </Link> */}
          </div>
          <div className="navbar-content-center">
          <a className="navbar-link-logo" href='/'><img src="https://media.discordapp.net/attachments/1061603926757085186/1081206907827666954/Logo_ReadOrNot_PNG_INT_BLC.png?width=597&height=539" alt="logo" /></a>
          </div>
          
        <div className="navbar-content-left">
          {/* <Link to="/bibliotheque" className="navbar-link">
            Bibliothèque  
          </Link> */}
          {!isLogged ? ( <> <Link to="/login" className="navbar-link">
            Login
          </Link>
          <Link to="/signup" className="navbar-link">
            Inscription  
          </Link>
          <div className="navbar-content-right">
          <Link to ="/mypage" className="navbar-link">
           Profil
          </Link>
          </div>
           </>) : ( 
          <UserCircle /> )}
        
        </div>

    </div>
  );
}

export default Navbar;