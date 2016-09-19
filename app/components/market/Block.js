import React, { PropTypes } from 'react';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Block';
  }
  render() {
    const { good } = this.props;
    return (
      <li>
        title: {good.title} <br />
        description: {good.description}
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

export default Block;