import React, { PropTypes } from 'react';

import Block from './Block';

class GoodBlocks extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'GoodBlocks';
  }
  render() {
    const { goods } = this.props;
    return (
    <ul>
      {
        goods.map(good => {
          return (<Block
            key={good.uuid}
            good={good}
          />);
        })
      }
    </ul>
    );
  }
}

GoodBlocks.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GoodBlocks;