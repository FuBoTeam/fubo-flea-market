import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class Updating extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Updating';
  }
  render() {
    return (
      <div styleName="bar">
        <span styleName="track"></span>
      </div>
    );
  }
}

export default CSSModules(Updating, styles);