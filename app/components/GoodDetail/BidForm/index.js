import React, { PropTypes } from 'react';
import { Button } from 'belle';
const btnStyles = {
  paddingTop: 3,
  paddingBottom: 3,
};
const nameStyle = {
  lineHeight: '34px',
};
const biddingData = {
  id: '',
  amount: 0,
  trashWord: '',
};

class BidForm extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'BidForm';
  }
  handleAmount(event) {
    biddingData.amount = parseInt(event.target.value, 10);
  }
  handleWord(event) {
    biddingData.trashWord = event.target.value;
  }
  render() {
    const { user, handleBid, goodId, highestBid } = this.props;
    biddingData.id = goodId;
    biddingData.amount = highestBid + 5;
    return (
      <tr>
        <td style={nameStyle}>{user.fakeName}</td>
        <td>
          <input
            className="form-control"
            type="number"
            min={highestBid + 1}
            defaultValue={biddingData.amount}
            onChange={this.handleAmount}
          />
        </td>
        <td>
          <input
            className="form-control"
            type="text"
            defaultValue={biddingData.trashWord}
            onChange={this.handleWord}
          />
        </td>
        <td><Button primary style={btnStyles} onClick={() => { handleBid(biddingData); }}>Submit</Button></td>
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