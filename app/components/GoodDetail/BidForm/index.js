import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class BidForm extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'BidForm';
  }
  render() {
    return (
      <div>
        bidForm
      </div>
    );
  }
}

export default CSSModules(BidForm, styles);