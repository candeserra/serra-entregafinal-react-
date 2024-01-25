import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';

import { useCategory } from '../../hooks/useCategory';

function NavBarComponent() {
    const { category } = useCategory();

    return (
        <Navbar expand="lg" className="bg-light" style={{ margin: 0 }}>
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ marginLeft: '20px' }}>
                    Net
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            {category.map((item, index) => (
                                <NavDropdown.Item key={index}>
                                    <Link to={`/category/${item}`}>{item}</Link>
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <div style={{ marginRight: '30px' }}>
                        <CartWidget />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;
