import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Content from './board/content';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <App />, document.getElementById('app')
);
