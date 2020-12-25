import React from 'react';
import 'react-virtualized/styles.css';
import { List } from 'react-virtualized';

export default function UsersList() {
  const list = [
    'Michał',
    'Tadek',
    'Ola',
    'Michał',
    'Tadek',
    'Ola',
    'Michał',
    'Tadek',
    'Ola',
    'Michał',
    'Tadek',
    'Ola',
    'Michał',
    'Tadek',
    'Ola',
    'Michał',
    'Tadek',
    'Ola',
  ];
  function _rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    style, // Style object to be applied to row (to position it)
  }) {
    return (
      <div key={key} style={style}>
        {list[index]}
      </div>
    );
  }
  return (
    <div className="frame">
      <h1>React-virtualized</h1>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-6">
          <List
            width={100}
            height={100}
            rowCount={list.length}
            rowHeight={20}
            rowRenderer={_rowRenderer}
            style={{ border: '1px solid #DDD', marginLeft: '15' }}
          />
        </div>
      </div>
    </div>
  );
}
