import React, {Component} from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import AMMain from "./components/portfolio/ammain";
import Main from "./components/portfolio/main";
import NonAMS from "./components/portfolio/nonams";
import Financials from "./components/financials";
import IntakeTracker from "./components/intake-tracker";
import VacationTracker from "./components/vacation-tracker";

import {NavLink, Route, Switch} from "react-router-dom";


class Navigation extends Component {

    constructor(props) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="container">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                        <img
                            className="logo"
                            alt="no"
                            src="https://upload.wikimedia.org/wikipedia/commons/3/32/CGI_logo.svg"></img>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Portfolio Tracker
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink className="nav-link" to="/main">
                                            Main
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink className="nav-link" to="/nonams" >
                                            Non AMS
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink className="nav-link" to="/ammain">
                                            AM Main
                                        </NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink className="nav-link" to="/vacation">
                                    Vacation Tracker
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/financials" >
                                    Financials
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/intake">
                                    Intake Tracker
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/reports">
                                    Reports
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Switch>
                    <Route path="/main" component={Main}/>
                    <Route path="/ammain" component={AMMain}/>
                    <Route path="/nonams" component={NonAMS}/>
                    <Route path="/vacation" component={VacationTracker}/>
                    <Route path="/financials" component={Financials}/>
                    <Route path="/intake" component={IntakeTracker}/>
                    <Route path="/reports" component={IntakeTracker}/>
                </Switch>

            </div>
        );
    }
}

export default Navigation