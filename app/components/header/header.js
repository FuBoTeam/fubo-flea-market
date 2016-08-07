import React from 'react';
import './header.scss';
import '../style/general.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className="layout-row vertical-top castle-background">
        <ul className="layout-row align-between">
          <li><a href="">Flea Market</a></li>
          <li><a href=""><span>Logout</span><i className="fa fa-sign-out" /></a></li>
        </ul>
      </div>
    );
  }
}