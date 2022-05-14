import React from 'react';

const Home = () => {
  return (
    <div>
            
    <div className="coba">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit" style={{
    width: '120px',
    display: 'block',
    boxSizing: 'border-box',
    height: '30px',
    borderRadius: '10px',
    padding: '0 10px',
    marginTop: '5px',
    fontSize: '16px',
    background: '#002148',
    borderColor: '#002148',
    color: 'white'
    }}>
              Search
          </button>
      </form>
    </div>

    </div>
  );
};

export default Home;