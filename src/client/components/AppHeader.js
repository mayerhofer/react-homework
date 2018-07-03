import React from 'react';
import { Navbar } from 'react-bootstrap';

import * as pageTexts from '../../constants/pageTexts';

// const NavBody = (props) => (
//     <Nav>
//         <NavItem evenKey={1} href="#">
//         </NavItem>
//     </Nav>
// );

const NavHeader = (navabarBrandStyle, linkStyle) => (
    <Navbar.Header>
        <Navbar.Brand style={navabarBrandStyle}>
            <h3><a style={linkStyle} href="#home">{pageTexts.CAPTION_HEADER_TITLE}</a></h3>
        </Navbar.Brand>
    </Navbar.Header>
);

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

    render() {
        return (
            <Navbar style={this.navbarStyle}>
                <NavHeader navabarBrandStyle={this.navabarBrandStyle} linkStyle={this.linkStyle} />
                {/* <NavBody content={this.props.content} /> */}
            </Navbar>);
    }
}

export default AppHeader;
