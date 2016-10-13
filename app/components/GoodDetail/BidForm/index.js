import React, { PropTypes } from 'react';
import { Button } from 'belle';
const btnStyles = {
  paddingTop: 3,
  paddingBottom: 3,
};
const nameStyle = {
  lineHeight: '34px',
};

class BidForm extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'BidForm';
    const { goodId, highestBid } = this.props;
    this.biddingData = {
      id: goodId,
      amount: highestBid + 5,
      trashWord: '',
    };
    this.handleAmount = this.handleAmount.bind(this);
    this.handleWord = this.handleWord.bind(this);
  }
  handleAmount(event) {
    if (!event.preventDefault()) {
      this.biddingData.amount = parseInt(event.target.value, 10);
    }
  }
  handleWord(event) {
    if (!event.preventDefault()) {
      this.biddingData.trashWord = event.target.value;
    }
  }
  render() {
    const { user, handleBid, highestBid } = this.props;
    return (
      <tr>
        <td style={nameStyle}>{user.fakeName}</td>
        <td>
          <input
            className="form-control"
            type="number"
            min={highestBid + 1}
            defaultValue={this.biddingData.amount}
            onChange={this.handleAmount}
          />
        </td>
        <td>
          <input
            className="form-control"
            type="text"
            defaultValue={this.biddingData.trashWord}
            onChange={this.handleWord}
          />
        </td>
        <td>
          <Button
            primary
            style={btnStyles}
            onClick={
              () => {
                handleBid(this.biddingData);
              }
            }
          >Submit</Button></td>
      </tr>
    );
  }
}

BidForm.propTypes = {
  user: PropTypes.object,
  handleBid: PropTypes.func.isRequired,
  goodId: PropTypes.string,
  highestBid: PropTypes.number,
};

export default BidForm;