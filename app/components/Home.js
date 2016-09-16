import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div>
      Home page!
      {' '}
      <Link to="/login">Login</Link>
      {' '}
      <Link to="/about">About</Link>
      {' '}
      <Link to="/goods">Goods</Link>
    </div>
  );
};

export default Home;