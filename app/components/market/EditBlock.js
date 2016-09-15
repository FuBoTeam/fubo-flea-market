import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './edit-block.css';
import { Button } from 'belle';

class EditBlock extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'EditBlock';
  }
  render() {
    const { good } = this.props;
    return (
      <li styleName="edit-block">
        <img src={good.imgUrl} alt="Not found" />
        <dl styleName="edit-info">
          <dt>Title</dt>
          <dd>{good.title}</dd>
          <dt>Description</dt>
          <dd>{good.description}</dd>
          <Button primary>Edit</Button>
        </dl>
      </li>
    );
  }
}

EditBlock.propTypes = {
  good: PropTypes.shape({
    guid: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};

export default CSSModules(EditBlock, styles);