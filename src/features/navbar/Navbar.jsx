import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarText } from 'reactstrap';
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { getLocalStorageObject } from '../../utils/localstorage';

/**
 * TODO:
 * After auth, then add items to the the navbar,
 * 1) add complaint, 
 * 2) Dashboard
 * 3) User settings
 */
const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userObj, setUserObj] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    // TODO grab from state, not from local storage
    const userObjectFromLocalStorage = getLocalStorageObject();
    if (userObjectFromLocalStorage !== null) {
      setUserObj(userObjectFromLocalStorage);
    }
  }, [])

  if (userObj) {
    return (
      <Navbar expand="md" className="permanent-marker" style={{ backgroundColor: "#f1f1f1", padding: '30px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#E39774' }}>
          <h1>Complain Tracker</h1>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar style={{  }}>
            <NavItem className={isOpen ? null : 'nav-item-padding'}>
              <Link to="/add-compliment" style={{ textDecoration: 'none', color: '#E39774' }}>Add Compliment</Link>
            </NavItem>
          </Nav>
          {!isOpen && (
            <NavbarText>
              {console.log(userObj.profileObj.imageUrl)}
              <img src={userObj.profileObj.imageUrl} alt="Avatar" style={{ borderRadius: '50%', height: '3vh' }} referrerPolicy="no-referrer" />
            </NavbarText>
          )}
        </Collapse>
      </Navbar>
    )
  } else {
    return (
      <Navbar expand="md" className="permanent-marker" style={{ backgroundColor: "#f1f1f1", padding: '30px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#E39774' }}>
          <h1>Complain Tracker</h1>
        </Link>
        <NavbarToggler onClick={toggle} />
      </Navbar>
    )
  }
};

export default NavigationBar;