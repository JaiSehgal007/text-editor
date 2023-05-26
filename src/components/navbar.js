//PART OF MODULE1.MJS

// import ui,{a,c,d} from './module2.mjs'
// console.log(ui);
// console.log(a);
// console.log(c);
// console.log(d);

// // note that the elements that are exported using curly brackets must have the same name as that in the original file


//PART OF MODULE2.MJS

// var a="Jai";
// var b="Sahil";
// var c="Gaurav";
// var d="Sushmit";

// // export default c;
// export default b;
// export {a};
// export {c};
// export {d};

import React from 'react';
import PropTypes from 'prop-types';


const navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1"/>
                            <label className="custom-control-label" htmlFor="customSwitch1">Enable DarkMode</label>
                    </div>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
}

navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string.isRequired
    // the is required field shows error if the parameter are not passed
}

navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
}
// these are rendered when props are not passed


export default navbar;