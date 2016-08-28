import React from 'react';
import Header from './header/header';
import { Button } from 'belle';

// import { connect } from 'react-redux';

const App = () => {
  return (
    <div>
      <Header />
      <Button primary>Follow</Button>
      Hello World! Ya
    </div>
  );
};

export default App;