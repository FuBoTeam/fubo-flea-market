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
  }
  render() {
    const { user, handleBid, goodId } = this.props;
    const biddingData = {
      id: goodId,
      amount: 50,
      trashWord: 'orga ha ha',
    };
    return (
      <tr>
        <td style={nameStyle}>{user.fakeName}</td>
        <td><input className="form-control" type="number" /></td>
        <td><input className="form-control" type="text" /></td>
        <td><Button primary style={btnStyles} onClick={() => { handleBid(biddingData); }}>Submit</Button></td>
      </tr>
    );
  }
}

BidForm.propTypes = {
  user: PropTypes.object,
  handleBid: PropTypes.func.isRequired,
  goodId: PropTypes.string,
};

export default BidForm;