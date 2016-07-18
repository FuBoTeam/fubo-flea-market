import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './header.scss';
import '../style/general.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className="layout-row vertical-top align-center castle-background">
        <Navbar inverse className="header">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Hopebay Flea Market</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Log out</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}