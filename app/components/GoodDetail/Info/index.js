import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import { Rating } from 'belle';
const starStyle = {
  opacity: 1,
  marginBottom: 5,
};

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Info';
  }
  render() {
    return (
      <div styleName="good-info">
        <img src="https://xieranmaya.github.io/images/cats/photo-23583825.jpg" alt="not found" />
        <div styleName="word-intro">
          <label>Cat</label>
          <Rating defaultValue={2} disabled disabledStyle={starStyle}>star</Rating>
          <label>Description</label>
          <p>My favoriate very lovely cute pretty YAYA YAYA</p>
          <label>Highest Bidder</label>
          <p>Elaine</p>
          <label>Highest Amount</label>
          <p>NTD 400</p>
        </div>
      </div>
    );
  }
}

export default CSSModules(Info, styles);