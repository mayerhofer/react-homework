import React from 'react';
import { Navbar } from 'react-bootstrap';

import * as pageTexts from '../../constants/pageTexts';

const navbarStyle = {
    background: 'black',
    backgroundColor: 'black',
    borderBottom: '0px',
    height: '100%',
    width: '100%',
};

const linkStyle = {
    color: 'red',
};

const NavHeader = () => (
    <Navbar.Header>
        <Navbar.Brand style={{ backgroundColor: 'black', marginLeft: '100px!important' }}><h3><a style={linkStyle} href="#home">{pageTexts.CAPTION_HEADER_TITLE}</a></h3></Navbar.Brand>
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
    }
}

export default AppHeader;
