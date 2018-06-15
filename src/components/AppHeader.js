import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';

const NavHeader = (props) => (
    <Navbar.Header>
        <Navbar.Brand><a href="#home">{props.title}</a></Navbar.Brand>
    </Navbar.Header>
);

const NavBody = (props) => (
    <Nav>
        <NavItem evenKey={1} href="#">
        </NavItem>
    </Nav>
);

class AppHeader extends React.Component {

    render() {
        return (
        <Navbar>
            <NavHeader title={this.props.title} />
            <NavBody content={this.props.content} />
        </Navbar>);
    };
}

export default AppHeader;
