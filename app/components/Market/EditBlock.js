import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './edit-block.css';
import { Button } from 'belle';
import { Link } from 'react-router';
const btnStyles = {
  float: 'right',
  marginLeft: 10,
};
const data = {
  id: '',
  title: '',
  description: '',
};

class EditBlock extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'EditBlock';
  }
  handleTitle(event) {
    if (!event.preventDefault()) {
      data.title = event.target.value;
    }
  }
  handleDescription(event) {
    if (!event.preventDefault()) {
      data.description = event.target.value;
    }
  }
  render() {
    const { good, updateGood, deleteGood } = this.props;
    const detailLink = `good/${good.id}`;
    const deleteBtn = good.allBiddings.totalCount > 0 ? '' :
    <Button
      primary
      style={btnStyles}
      onClick={
        () => { deleteGood({ id: good.id }); }
      }
    >Delete</Button>;
    data.id = good.id;
    data.title = good.title;
    data.description = good.description;
    return (
      <li styleName="edit-block">
        <Link to={detailLink}>
          <img src={good.image} alt="Not found" />
        </Link>
        <form styleName="edit-container" onSubmit={() => { updateGood(data); }}>
          <dl styleName="edit-info">
            <dt>ID</dt>
            <dd>{data.id}</dd>
            <dt>Title</dt>
            <dd>
              <input
                className="form-control"
                type="text"
                defaultValue={data.title}
                onChange={this.handleTitle}
                required
              />
            </dd>
            <dt>Description</dt>
            <dd>
              <input
                className="form-control"
                type="text"
                defaultValue={data.description}
                onChange={this.handleDescription}
              />
            </dd>
          </dl>
          <div styleName="btn-container">
            {deleteBtn}
            <Button
              primary
              style={btnStyles}
              type="submit"
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