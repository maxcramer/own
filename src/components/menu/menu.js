import React from "react";
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

function Menu() {
        return(
            <nav>
                <h1>MENU</h1>
                <div>
                    <a href="/" className="nav-link">Home</a>
                </div>
                <div>
                    <a href="/ProRiders" className="nav-link">Pro Riders</a>
                </div>
                <div>
                    <a href="/boardcare" className="nav-link">Board Care</a>
                </div>
                <div>
                    <a href="/ridingtips" className="nav-link">Riding Tips</a>
                </div>
                <div>
                    <a href="/news" className="nav-link">News</a>
                </div>
            </nav>
        );

    }

export default Menu;
