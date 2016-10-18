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
    this.handleAmount = this.handleAmount.bind(this);
    this.handleWord = this.handleWord.bind(this);
    const { goodId, highestBid } = this.props;
    this.state = {
      bidding: {
        id: goodId,
        amount: highestBid + 10,
        trashWord: '',
      },
    };
  }
  handleAmount(event) {
    event.preventDefault();
    this.setState({
      bidding: {
        ...this.state.bidding,
        amount: parseInt(event.target.value, 10),
      },
    });
  }
  handleWord(event) {
    event.preventDefault();
    this.setState({
      bidding: {
        ...this.state.bidding,
        trashWord: event.target.value,
      },
    });
  }
  render() {
    const { user, handleBid, highestBid, extendedCount, goodId } = this.props;
    const gap = (extendedCount > 0) ? 10 : 1;
    return (
      <tr>
        <td style={nameStyle}>{user.fakeName}</td>
        <td>
          <input
            className="form-control"
            type="number"
            ref="amount"
            min={highestBid + gap}
            value={this.state.bidding.amount}
            onChange={this.handleAmount}
            form="bidForm"
            required
          />
        </td>
        <td>
          <input
            className="form-control"
            type="text"
            ref="trashWord"
            value={this.state.bidding.trashWord}
            onChange={this.handleWord}
            form="bidForm"
          />
        </td>
        <td>
          <Button
            primary
            style={btnStyles}
            type="submit"
            form="bidForm"
          >Submit</Button>
          <form
            id="bidForm"
            onSubmit={
              (e) => {
                e.preventDefault();
                this.setState({
                  bidding: {
                    id: goodId,
                    amount: this.state.bidding.amount + 10,
                    trashWord: '',
                  },
                });
                handleBid(this.state.bidding);
              }
            }
          />
        </td>
      </tr>
    );
  }
}

BidForm.propTypes = {
  user: PropTypes.object,
  handleBid: PropTypes.func.isRequired,
  goodId: PropTypes.string,
  highestBid: PropTypes.number,
  extendedCount: PropTypes.number,
};

export default BidForm;