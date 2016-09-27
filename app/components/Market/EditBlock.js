import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './edit-block.css';
import { Button } from 'belle';
const btnStyles = {
  float: 'right',
  marginLeft: 10,
};

class EditBlock extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'EditBlock';
  }
  render() {
    const { good } = this.props;
    return (
      <li styleName="edit-block">
        <img src={good.image} alt="Not found" />
        <div styleName="edit-container">
          <dl styleName="edit-info">
            <dt>Title</dt>
            <dd>{good.title}</dd>
            <dt>Description</dt>
            <dd>{good.description}</dd>
          </dl>
          <div styleName="btn-container">
            <Button primary style={btnStyles}>Delete</Button>
            <Button primary style={btnStyles}>Edit</Button>
          </div>
        </div>
      </li>
    );
  }
}

EditBlock.propTypes = {
  good: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default CSSModules(EditBlock, styles);