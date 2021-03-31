import React from 'react';

const Home = () => {
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate quia perferendis, et esse dolor officia sit, blanditiis dignissimos, dolore provident quaerat ullam. Debitis, mollitia! Perspiciatis mollitia odit natus explicabo.';
  return (
    <div className="main-content white">
      <h2 className="main-title">Welcome to our page!</h2>
      <p className="main-text">{text}</p>
      <p className="main-text">{text}</p>
    </div>
  );
};

export default Home;
