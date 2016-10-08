import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Loading';
  }
  render() {
    return (
      <div styleName="loading">
        <div styleName="circle-logo" />
        <span>Loading...</span>
      </div>
    );
  }
}

export default CSSModules(Loading, styles);