import React from 'react';
import backgroundImage from '../assest/bg.avif';

export default function Home() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: '2rem',
  };

  return (
    <div style={divStyle}>
      Home
    </div>
  );
}
