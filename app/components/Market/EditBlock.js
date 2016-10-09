import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './edit-block.css';
import { Button } from 'belle';
import { Link } from 'react-router';
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
    const detailLink = `good/${good.id}`;
    const deleteBtn = good.allBiddings.totalCount > 0 ? '' : <Button primary style={btnStyles} >Delete</Button>;
    return (
      <li styleName="edit-block">
        <Link to={detailLink}>
          <img src={good.image} alt="Not found" />
        </Link>
        <div styleName="edit-container">
          <dl styleName="edit-info">
            <dt>Title</dt>
            <dd>{good.title}</dd>
            <dt>Description</dt>
            <dd>{good.description}</dd>
          </dl>
          <div styleName="btn-container">
            {deleteBtn}
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