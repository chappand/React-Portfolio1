import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavLink, NavbarBrand, NavItem, Nav } from "reactstrap";


function NavB() {
    return (
        <div>
            <Navbar style={{backgroundColor: "#2F720F"}}>
                <Nav className="container-fluid">
                <NavItem>
                <NavbarBrand style={{color: "white"}} href="/">Andrew Chappell</NavbarBrand>
                </NavItem>
                <NavItem>
                <NavLink style={{color: "white"}} href="/">Home</NavLink>
                </NavItem>
                <NavItem className="navbar-right">
                <NavLink style={{color: "white"}} href="/projects">Projects</NavLink>
                </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavB;