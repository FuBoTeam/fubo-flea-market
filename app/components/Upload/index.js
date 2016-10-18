import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import { Button, Spinner } from 'belle';
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
        image: '',
      },
      disabled: false,
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
            this.state.good.image = res.data.link;
            props.handleSubmit(this.state.good);
            this.dropzone.removeFile(file);
            this.refs.form.reset();
            this.setState({ disabled: false });
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
    const spinner = this.state.disabled ? (<Spinner characterStyle={{ fontSize: 18, color: '#fff' }} />) : null;
    return (
      <form
        styleName="upload-form"
        name="uploadForm"
        ref="form"
        onSubmit={
          (e) => {
            e.preventDefault();
            this.dropzone.processQueue();
            if (!this.node.title.value.trim()) {
              return;
            }
            this.setState({
              good: {
                title: this.node.title.value.trim(),
                description: this.node.description.value,
              },
              disabled: true,
            });
          }
        }
      >
        <h2 styleName="form-title">Upload My Good</h2>
        <hr />
        <label styleName="title">Title:</label>
        <input
          type="text"
          name="title"
          ref={(node) => { this.node.title = node; }}
          className="form-control"
          styleName="input-control"
          maxLength="40"
          required
        />
        <label styleName="title">Description:</label>
        <textarea
          name="description"
          ref={(node) => { this.node.description = node; }}
          className="form-control"
          styleName="input-control"
          maxLength="100"
        />
        <label styleName="title">Image:</label>
        <DropzoneComponent
          styleName="image-upload"
          {...this.dropzoneConfigs}
        />
        <div styleName="btn-container">
          <Button primary type="submit" disabled={this.state.disabled}>Upload{spinner}</Button>
        </div>
      </form>
    );
  }
}

Upload.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

export default CSSModules(Upload, styles);