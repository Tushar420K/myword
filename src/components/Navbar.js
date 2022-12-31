import React from 'react'
// import { Link } from 'react-router-dom';

export default function Navbar(props){
    
    const onoff = () => {
        if(props.mode.textform.backgroundColor==='white')
        {
            props.setmode(props.types.two);
            document.body.style.backgroundColor = '#031e34';
            props.setalert({text : 'Dark Mode Enabled'});
        }
        else
        {
            props.setmode(props.types.one);
            document.body.style.backgroundColor = '#f4f4f4';
            props.setalert({text : 'Light Mode Enabled'});
        }
    }
    return (
        <nav className={"navbar navbar-expand-lg "} style={props.mode.navbar}>
            <div className={"container-fluid"} style={props.mode.navbar}>
                <a className="navbar-brand" href="/" style={props.mode.navbar}>{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" style={props.mode.navbar} aria-current="page" href="/">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={props.mode.navbar} href="/">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={props.mode.navbar}>Feedback</a>
                        </li>
                    </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" onClick={onoff} id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
                        </div>
                </div>
            </div>
        </nav>
    )
}