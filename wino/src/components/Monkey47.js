import React from 'react';
import Monkey47Image from '../images/monkey47.webp';

const Monkey47 = () => {
  return (
    <div
      style={{
        width: '100%',
        overflowX: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      <img
        src={Monkey47Image}
        alt="Monkey47 Image"
        decoding='async'
        loading='lazy'
        style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            margin: 0,
            padding: 0,
          }}
      />
    </div>
  );
};

export default Monkey47;