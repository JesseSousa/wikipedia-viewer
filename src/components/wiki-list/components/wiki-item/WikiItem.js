import React from 'react';
import './WikiItem.scss';

function WikiItem({ title, id }) {
  return (
    <a
      href={`https://en.wikipedia.org/?curid=${id}`}
      target='noopener noreferrer'
      className='WikiItem'
    >
      <h1>{title}</h1>
    </a>
  );
}

export default WikiItem;
