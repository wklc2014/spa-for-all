import React from 'react';

const _count = React.createContext({
  amount: 0,
  onAdd: () => {},
  onReduce: () => {},
})

export default _count;
