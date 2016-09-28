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
    const tableTitle = ['Display Name', 'Money', 'Clamor', 'Time'];
    const test = {
      displayName: 'Elaine',
      money: 500,
      clamor: 'My goods!!!',
      Time: '01:11',
    };
    return (
      <table className="table table-hover" styleName="bid-table">
        <thead>
          <tr className="warning">{
            tableTitle.map((title, index) => {
              return (
                <td key={index}>{title}</td>
              );
            })
          }
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{test.displayName}</td>
            <td>{test.money}</td>
            <td>{test.clamor}</td>
            <td>{test.Time}</td>
          </tr>
          <BidForm />
        </tbody>
      </table>
    );
  }
}

export default CSSModules(BidTable, styles);