import { connect } from 'react-redux';
import Upload from '../components/Upload';
import { addGoodMutation } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (good) => {
      dispatch(addGoodMutation(good));
    },
  };
};

const UploadContainer = connect(null, mapDispatchToProps)(Upload);

export default UploadContainer;