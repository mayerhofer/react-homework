import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';

import * as pageTexts from '../constants/pageTexts';

const navbarStyle = {
    background: 'transparent',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
}

const linkStyle = {
    color: 'red'
}

const NavHeader = (props) => (
    <Navbar.Header>
        <Navbar.Brand style={{marginLeft: '100px!important'}}><h3><a style={linkStyle} href="#home">{pageTexts.CAPTION_HEADER_TITLE}</a></h3></Navbar.Brand>
    </Navbar.Header>
);

// const NavBody = (props) => (
//     <Nav>
//         <NavItem evenKey={1} href="#">
//         </NavItem>
//     </Nav>
// );

class AppHeader extends React.Component {

    render() {
        return (
        <Navbar style={navbarStyle}>
            <NavHeader title={pageTexts.CAPTION_HEADER_TITLE} />
            {/* <NavBody content={this.props.content} /> */}
        </Navbar>);
    };
}

export default AppHeader;
