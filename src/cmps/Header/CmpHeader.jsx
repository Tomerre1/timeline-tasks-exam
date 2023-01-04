import React from 'react';

export function CmpHeader({ title }) {
  return (
    <>
      <div className='header'>
        <div className='name'>
          <h1>{title}</h1>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CmpHeader;
