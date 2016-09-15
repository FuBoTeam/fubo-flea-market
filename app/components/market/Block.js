import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './block.css';
import { Rating } from 'belle';
const starStyle = {
  opacity: 1,
  marginLeft: 10,
};

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Block';
  }
  render() {
    const { good } = this.props;
    let starNum = parseInt(good.subscriptPeople.length / 5 + 1, 10);
    starNum = starNum > 5 ? 5 : starNum;
    return (
      <li styleName="good-container">
        <img styleName="image" src={good.imgUrl} alt="Not found" />
        <label>{good.title}</label>
        <Rating defaultValue={starNum} disabled disabledStyle={starStyle}>star</Rating>
        <p>Current: {good.subscriptPeople[0].displayName}</p>
      </li>
    );
  }
}

Block.propTypes = {
  good: PropTypes.shape({
    guid: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};

export default CSSModules(Block, styles);