import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Info from './Info';
import BidTable from './BidTable';

class GoodDetail extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'GoodDetail';
  }
  render() {
    return (
      <div styleName="container">
        <Info />
        <BidTable />
      </div>
    );
  }
}

export default CSSModules(GoodDetail, styles);