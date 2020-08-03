import React from 'react';
import WikiItem from './components/wiki-item/WikiItem';

function WikiList({ results }) {
  return (
    <div>
      {results.map((res) => (
        <WikiItem title={res.title} id={res.id} key={res.id} />
      ))}
    </div>
  );
}

export default WikiList;
