import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import EmployeesListComponent from './EmployeeListComponent';

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';




class TodoApp extends Component {

    render() {


        return (


            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>

                            <Route path="/" component={EmployeesListComponent} />

                        </Switch>
                        <FooterComponent />
                    </>


                </Router>
            </div>
        )
    }
}












export default TodoApp