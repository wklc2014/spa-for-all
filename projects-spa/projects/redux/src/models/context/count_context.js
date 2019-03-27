import React from 'react';
import { Map } from 'immutable';

const _count = React.createContext(Map({
  amount: 0,
  onAdd: () => {},
  onReduce: () => {},
}))

export default _count;
