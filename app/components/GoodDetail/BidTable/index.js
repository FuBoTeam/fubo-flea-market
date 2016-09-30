import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import BidForm from '../BidForm';

class BidTable extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'BidTable';
  }
  render() {
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
          <BidForm />
        </tbody>
      </table>
    );
  }
}

export default CSSModules(BidTable, styles);