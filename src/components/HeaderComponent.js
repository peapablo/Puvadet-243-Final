import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="d-flex container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.jfif' height="30" width="41" alt='LOGO' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> About Me</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Hall of Football</NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div class="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1 class="display-5 fw-bold">Puvadet Footballista</h1>
                                <p class="col-md-8 fs-4">Area For Everyone who loves Fottball</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}

export default Header;
