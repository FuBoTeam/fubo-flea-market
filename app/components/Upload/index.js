import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import { Button } from 'belle';
import './filepicker.css';
import './dropzone.min.css';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Upload';
    this.node = {
      title: null,
      description: null,
    };
    this.state = {
      good: {
        title: '',
        file: '',
      },
    };
    this.dropzone = null;
    this.dropzoneConfigs = {
      config: {
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true,
        postUrl: 'https://api.imgur.com/3/image/',
      },
      eventHandlers: {
        init: (dropzone) => { this.dropzone = dropzone; },
        maxfilesexceeded: (file) => {
          // Discard file when max files exceeded
          if (this.dropzone) {
            this.dropzone.removeFile(file);
          }
        },
        sending: (file, xhr, formData) => {
          formData.append('type', 'file');
          formData.append('image', file);
        },
        success: (file, res) => {
          if (res && res.success) {
            this.state.good.file = res.data.link;
            props.handleSubmit(this.state.good);
          }
        },
        error: (file, errorMessage) => {
          this.state.error = errorMessage;
        },
      },
      djsConfig: {
        maxFilesize: 10,
        maxFiles: 1,
        addRemoveLinks: true,
        acceptedFiles: 'image/jpeg,image/png,image/gif',
        autoProcessQueue: false,
        headers: {
          Authorization: 'Client-ID 192fcc4079f82ee',
          'Cache-Control': null,
          'X-Requested-With': null,
        },
      },
    };
  }
  render() {
    return (
      <form styleName="upload-form" name="uploadForm">
        <h2 styleName="form-title">Upload My Good</h2>
        <hr />
        <label styleName="title">Title:</label>
        <input
          type="text"
          name="title"
          ref={(node) => { this.node.title = node; }}
          className="form-control"
          styleName="input-control"
          required
        />
        <label styleName="title">Description:</label>
        <textarea
          name="description"
          ref={(node) => { this.node.description = node; }}
          className="form-control"
          styleName="input-control"
        />
        <label styleName="title">Image:</label>
        <DropzoneComponent
          {...this.dropzoneConfigs}
        />
        <div styleName="btn-container">
          <Button
            primary
            onClick={(e) => {
              e.preventDefault();
              this.dropzone.processQueue();
              if (!this.node.title.value.trim()) {
                return;
              }
              this.state.good.title = this.node.title.value.trim();
              this.state.good.description = this.node.description.value;
            }}
          >
            Upload
          </Button>
        </div>
      </form>
    );
  }
}

Upload.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

export default CSSModules(Upload, styles);