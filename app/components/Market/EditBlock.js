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
    const { good } = props;
    this.displayName = 'EditBlock';
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.data = {
      id: good.id,
      title: good.title,
      description: good.description,
    };
  }
  handleTitle(event) {
    if (!event.preventDefault()) {
      this.data.title = event.target.value;
    }
  }
  handleDescription(event) {
    if (!event.preventDefault()) {
      this.data.description = event.target.value;
    }
  }
  render() {
    const { good, updateGood, deleteGood } = this.props;
    const detailLink = `good_${good.id}`;
    const deleteBtn = good.allBiddings.totalCount > 0 ? '' :
    <Button
      primary
      style={btnStyles}
      onClick={
        () => { deleteGood({ id: good.id }); }
      }
    >Delete</Button>;
    return (
      <li styleName="edit-block">
        <Link to={detailLink}>
          <img src={good.image} alt="Not found" />
        </Link>
        <form styleName="edit-container">
          <dl styleName="edit-info">
            <dt>ID</dt>
            <dd>{good.id}</dd>
            <dt>Title</dt>
            <dd>
              <input
                className="form-control"
                type="text"
                defaultValue={good.title}
                onChange={this.handleTitle}
                required
              />
            </dd>
            <dt>Description</dt>
            <dd>
              <input
                className="form-control"
                type="text"
                defaultValue={good.description}
                onChange={this.handleDescription}
              />
            </dd>
          </dl>
          <div styleName="btn-container">
            {deleteBtn}
            <Button
              primary
              style={btnStyles}
              type="button"
              onClick={
                () => {
                  updateGood(this.data);
                }
              }
            >Edit</Button>
          </div>
        </form>
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
  updateGood: PropTypes.func.isRequired,
  deleteGood: PropTypes.func.isRequired,
};

export default CSSModules(EditBlock, styles);