import React from 'react';
import './Navbar.css';

function Navbar(){
    return(
        <div>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark" role="navigation">
                <a className="navbar-brand nav_text"href="#">Akash Madhu</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active ">
                            <a className="nav-link nav__listitems nav_text" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link nav__listitems nav_text" href="#">About Me</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link nav__listitems nav_text" href="#"> My Projects</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link nav__listitems nav_text" href="#"> Certificates</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
    );
}

export default Navbar;

