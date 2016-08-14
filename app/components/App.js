import React from 'react';
import Header from './header/header';
import belle from 'belle';
const Button = belle.Button;
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