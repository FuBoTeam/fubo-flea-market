import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import BidFormContainer from '../../../containers/BidFormContainer';
import {
  Link,
} from 'react-router';
const amountColumn = {
  width: 5,
};

class BidTable extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'BidTable';
  }
  render() {
    const { isSignedIn, biddings, goodId, extendedCount, utcTime } = this.props;
    let hightestBid = 0;
    if (biddings.length > 0) {
      hightestBid = biddings[0].amount;
    }
    let bidForm = isSignedIn ? (<BidFormContainer goodId={goodId} highestBid={hightestBid} extendedCount={extendedCount} />) : (<tr>
        <td colSpan="4" styleName="login"><Link to={{ pathname: '/login', query: { next: `/good_${goodId}` } }}>Sign up/Log in</Link> to place bid.</td>
      </tr>);
    const now = Date.parse(new Date());
    const endTime = Date.parse(utcTime);
    if (now > endTime) {
      bidForm = (
        <tr>
          <td colSpan="4" styleName="login">Time's up</td>
        </tr>
      );
    }

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
        <colgroup>
          <col />
          <col style={amountColumn} />
          <col />
          <col />
        </colgroup>
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
        {bidForm}
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
        </tbody>
      </table>
    );
  }
}

BidTable.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  biddings: PropTypes.array.isRequired,
  goodId: PropTypes.string,
  utcTime: PropTypes.string,
  extendedCount: PropTypes.number,
};

export default CSSModules(BidTable, styles);