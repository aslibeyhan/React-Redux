import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CartSummary from './CartSummary';

function Navi(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...props}>
        <NavbarBrand href="/">Northwind App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
            <NavLink>
                  <Link to="form1">Form 1</Link>
                </NavLink>
            </NavItem>
            <NavItem>
            <NavLink>
                  <Link to="form2">Form 2</Link>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
           <CartSummary removeFromCart={props.removeFromCart} cart={props.cart}/>
          </Nav>
          
        </Collapse>
      </Navbar> 
    </div>
  );
}

export default Navi;
