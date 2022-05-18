import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        fontFamily:'Sarala'
      }}
    >
      <div>
      <h1 style={{'fontSize': '40px', 'color':'#002148'}}>What are you looking for? </h1>
      <br/>
      <h2 style={{'fontSize':'30px' ,'display': 'flex', 'justifyContent': 'center', 'color':'#FE8101'}}><Link to="/home">Back Home</Link></h2>
      </div>
    </div>
    </>
  );
};

export default NotFound;