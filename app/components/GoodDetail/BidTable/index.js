import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import BidFormContainer from '../../../containers/BidFormContainer';
import {
  Link,
} from 'react-router';

class BidTable extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'BidTable';
  }
  render() {
    const { isSignedIn, biddings, goodId } = this.props;
    const bidForm = isSignedIn ? (<BidFormContainer goodId={goodId} />) : (<tr>
        <td colSpan="4" styleName="login"><Link to="/login">Sign up/Log in</Link> to place bid.</td>
      </tr>);
    const tableBiddings = biddings.map((bidding) => {
      return {
        ...bidding,
        fakeName: bidding.user.fakeName,
      };
    });
    const tableElements = ['fakeName', 'amount', 'trashWord', 'createdAt'];
    const tableTitles = {
      fakeName: 'Bidder',
      amount: 'Bid',
      trashWord: 'Taunt(ex.未看先猜，樓下魯蛇)',
      createdAt: 'Bid Time',
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
        {
          tableBiddings.map((bidding, bidIndex) => {
            return (
              <tr key={`bid-${bidIndex}`}>
              {
                tableElements.map((element, index) => {
                  return (<td key={index}>{bidding[element]}</td>);
                })
              }
              </tr>
            );
          })
        }
        {bidForm}
        </tbody>
      </table>
    );
  }
}

BidTable.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  biddings: PropTypes.array.isRequired,
  goodId: PropTypes.string,
};

export default CSSModules(BidTable, styles);