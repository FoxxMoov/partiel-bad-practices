import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          This app is made with <strong>BAD</strong> practices and is quite{' '}
          <strong>SLOW</strong> to load
        </p>
        <p>
          There is a lot of linked CSS and jQuery in the header that doesn't
          belong here.
        </p>
        <p>
          <strong>Also</strong>, the image bellow is not at the right size and
          format (4k jpg)
        </p>
        <img
          style={{ width: '100%' }}
          src='https://images.hdqwalls.com/wallpapers/the-big-universe-is-here-4k-q4.jpg'
          alt='img'
        />
      </header>
    </div>
  );
}

export default App;
