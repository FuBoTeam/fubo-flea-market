import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import { Button } from 'belle';

const Upload = (props) => {
  const good = {
    title: 'Will smith',
    description: 'Will Will smith smith',
    image: 'http://i.imgur.com/F0lbsuA.jpg',
  };
  const { handleSubmit } = props;
  return (
    <form styleName="upload-form" name="uploadForm">
      <h2 styleName="form-title">Upload My Good</h2>
      <hr />
      <label styleName="title">Title:</label>
      <input type="text" name="title" className="form-control" styleName="input-control" required />
      <label styleName="title">Description:</label>
      <textarea name="description" className="form-control" styleName="input-control" />
      <label styleName="title">Image:</label>
      <input type="file" name="image" styleName="input-control" required />
      <div styleName="btn-container">
        <Button primary type="button" onClick={() => { handleSubmit(good); }}>Upload</Button>
      </div>
    </form>
  );
};

Upload.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

export default CSSModules(Upload, styles);