import { connect } from 'react-redux';
import EditBlock from '../components/Market/EditBlock';
import { updateGoodMutation, deleteGoodMutation } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateGood: (data) => {
      dispatch(updateGoodMutation(data));
    },
    deleteGood: (data) => {
      dispatch(deleteGoodMutation(data));
    },
  };
};

const EditBlockContainer = connect(
  null, mapDispatchToProps
)(EditBlock);

export default EditBlockContainer;