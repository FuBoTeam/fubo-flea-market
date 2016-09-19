import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Block from './Block';
import EditBlock from './EditBlock';
import styles from './goods.css';

class GoodBlocks extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'GoodBlocks';
  }
  render() {
    const { goods, path } = this.props;
    if (path === 'SHOW_MY') {
      return (
      <ul styleName="goods-edit-container">
        {
          goods.map(good => {
            return (<EditBlock
              key={good.guid}
              good={good}
            />);
          })
        }
      </ul>
      );
    }
    return (
    <ul styleName="goods-container">
      {
        goods.map(good => {
          return (<Block
            key={good.guid}
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
  path: PropTypes.string.isRequired,
};

export default CSSModules(GoodBlocks, styles);