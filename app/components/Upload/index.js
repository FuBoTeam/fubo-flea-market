import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import { Button } from 'belle';
import './filepicker.css';
import './dropzone.min.css';

const dropzoneConfigs = {
  config: {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/failUrl',
  },
  eventHandlers: {
    drop: [() => { console.log('Hi!'); }, () => { console.log('Hello.'); }],
    addedfile: (file) => { console.log(file); },
  },
  djsConfig: {
    addRemoveLinks: true,
    acceptedFiles: 'image/jpeg,image/png,image/gif',
    autoProcessQueue: false,
  },
};

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Upload';
    this.state = {
      good: {
        title: '',
      },
      files: [],
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState === this.state;
  }
  onDrop(files) {
    this.setState({
      files,
    });
    files.forEach((file) => {
      const formData = new FormData();
      formData.append('type', 'file');
      formData.append('image', file);
      fetch('https://api.imgur.com/3/image/', {
        mode: 'cors',
        method: 'POST',
        headers: {
          Authorization: 'Client-ID 192fcc4079f82ee',
        },
        body: formData,
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        }
        const error = new Error(res.statusText);
        error.res = res;
        throw error;
      })
      .then((res) => {
        console.log(res.json());
        return res.json();
      })
      .catch((error) => {
        return error;
      });
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form styleName="upload-form" name="uploadForm">
        <h2 styleName="form-title">Upload My Good</h2>
        <hr />
        <label styleName="title">Title:</label>
        <input
          type="text"
          name="title"
          ref={(node) => { this.state.good.title = node; }}
          className="form-control"
          styleName="input-control"
          required
        />
        <label styleName="title">Description:</label>
        <textarea
          name="description"
          ref={(node) => { this.state.good.description = node; }}
          className="form-control"
          styleName="input-control"
        />
        <label styleName="title">Image:</label>
        <DropzoneComponent
          {...dropzoneConfigs}
        />
        {/*
        <Dropzone
          ref="dropzone"
          onDrop={this.onDrop}
          multiple={false}
          disablePreview={false}
          accept="image/*"
          maxSize={10485760}
        >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>*/
        }
        {/*
          this.state.files.length > 0 ? (
            <div>
               <h2>Uploading {this.state.files.length} files...</h2>
               <div>{this.state.files.map((file) => {
                  return <img src={file.preview} alt="Uplaod failed" />;
                })}
               </div>
            </div>
          ) : null
        */}
        <div styleName="btn-container">
          <Button primary type="submit">Upload</Button>
        </div>
      </form>
    );
  }
}

Upload.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

export default CSSModules(Upload, styles);