import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import BidForm from '../BidForm';
import {
  Link,
} from 'react-router';

class BidTable extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'BidTable';
  }
  render() {
    const { isSignedIn, user } = this.props;
    const bidForm = isSignedIn ? (<BidForm user={user} />) : (<tr>
        <td colSpan="4" styleName="login"><Link to="/login">Sign up/Log in</Link> to place bid.</td>
      </tr>);
    const tableElements = ['displayName', 'money', 'clamor', 'time'];
    const tableTitles = {
      displayName: 'Bidder',
      money: 'Bid',
      clamor: 'Taunt(ex.未看先猜，樓下魯蛇)',
      time: 'Bid Time',
    };
    const mockData = {
      displayName: 'Elaine',
      money: 500,
      clamor: 'My goods!!!',
      time: '01:11',
    };
    return (
      <table className="table table-hover" styleName="bid-table">
        <thead>
          <tr className="warning">
          {
            tableElements.map((element, index) => {
              return (
                <td key={index}>{tableTitles[element]}</td>
              );
            })
          }
          </tr>
        </thead>
        <tbody>
          <tr>
          {
            tableElements.map((element, index) => {
              return (<td key={index}>{mockData[element]}</td>);
            })
          }
          </tr>
          {bidForm}
        </tbody>
      </table>
    );
  }
}

BidTable.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  user: PropTypes.object,
};

export default CSSModules(BidTable, styles);