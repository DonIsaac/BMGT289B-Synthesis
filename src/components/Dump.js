import React from 'react';

const Dump = props => (
  <div
    style={{
      fontSize: 20,
      border: '1px solid #efefef',
      padding: 10,
      background: 'grey',
    }}>
    {Object.entries(props).map(([key, val]) => {
      console.log(`${key}: ${val}`) 

      return (
      <pre key={key}>
        <strong style={{ color: 'white', backgroundColor: 'red' }}>
          {key} 💩
        </strong>
        {JSON.stringify(val, '', ' ')}
      </pre>
    )}) || 'no properties'}
  </div>
);

export default Dump;