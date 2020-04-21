import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-brand">Application</div>
                        <ul className="navbar-nav">
                            {<li><Link className="nav-link">Home</Link></li>}


                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {<li> <Link className="nav-link" >Login</Link></li>}
                            {<li> <Link className="nav-link" >Logout</Link></li>}
                        </ul>
                    </nav>
                </header>


            </>
        )
    }
}


export default HeaderComponent;
