import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarText, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";

/**
 * TODO:
 * After auth, then add items to the the navbar,
 * 1) add complaint, 
 * 3) User settings
 */
const NavigationBar = ({ login }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log('login', login);
  }, [])

  if (login.isAuth) {
    return (
      <Navbar light expand="md" className="permanent-marker" style={{ backgroundColor: "#f1f1f1", padding: '30px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#E39774' }}>
          <h1>Complain Tracker</h1>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar style={{}}>
            <NavItem className={isOpen ? null : 'nav-item-padding'}>
              <Link to="/dashboard" style={{ textDecoration: 'none', color: '#E39774' }}>Dashboard</Link>
            </NavItem>
            <NavItem className={isOpen ? null : 'nav-item-padding'}>
              <Link to="/add-compliment" style={{ textDecoration: 'none', color: '#E39774' }}>Add Compliment</Link>
            </NavItem>
          </Nav>
          {!isOpen && (
            <UncontrolledDropdown inNavbar>
              <DropdownToggle nav>
                <NavbarText>
                  <img src={login.user.profileObj.imageUrl} alt="Avatar" style={{ borderRadius: '50%', height: '3vh' }} referrerPolicy="no-referrer" />
                </NavbarText>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Profile
                </DropdownItem>
                {/* TODO Add Later */}
                <DropdownItem>
                  Light / Dark Theme
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Logout
              </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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

const mapStateToProps = (state) => ({ login: state.login });

export default connect(mapStateToProps)(NavigationBar);