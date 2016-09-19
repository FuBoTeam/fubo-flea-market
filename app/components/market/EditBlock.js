import React, { PropTypes } from 'react';

class EditBlock extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'EditBlock';
  }
  render() {
    const { good } = this.props;
    return (
      <li>
        title: {good.title} editable<br />
        description: {good.description}
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

export default EditBlock;