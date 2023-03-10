import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
    backgroundColor: 'lightblue'
};

const Header = ({title}) => {
  return (
    <Navbar style={navbarStyle} variant="light">
        <Container>
            <Logo alt={title} style = {{ maxWidth: '100rem', maxHeight: '5rem', paddingLeft: '25rem'}} />
        </Container>
    </Navbar>   
  )
};

export default Header;