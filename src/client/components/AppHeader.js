import React from 'react';
import { Navbar } from 'react-bootstrap';

import * as pageTexts from '../../constants/pageTexts';

// const NavBody = (props) => (
//     <Nav>
//         <NavItem evenKey={1} href="#">
//         </NavItem>
//     </Nav>
// );

class AppHeader extends React.Component {
    navbarStyle = {
        background: 'black',
        backgroundColor: 'black',
        borderBottom: '0px',
        height: '100%',
        width: '100%',
    };

    linkStyle = {
        color: 'red',
    };

    navabarBrandStyle = { backgroundColor: 'black', marginLeft: '100px!important' }

    NavHeader = () => (
        <Navbar.Header>
            <Navbar.Brand style={this.navabarBrandStyle}>
                <h3><a style={this.linkStyle} href="#home">{pageTexts.CAPTION_HEADER_TITLE}</a></h3>
            </Navbar.Brand>
        </Navbar.Header>
    );

    render() {
        return (
            <Navbar style={this.navbarStyle}>
                <NavHeader />
                {/* <NavBody content={this.props.content} /> */}
            </Navbar>);
    }
}

export default AppHeader;
