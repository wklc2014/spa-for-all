import Immutable, { List } from 'immutable';

const list = List([ 'a', 'b', 'c' ]);
// const result = list.update(7, 'mm_11_', val => `_${val}`)

// const result = list
//   .set(2, '___CCC___')
//   .set(1, 'AAA')
//   .set(0, 'BBB')
//   .set(3, '___BBB___')
//   ;

// const result = list.map((v, i, t) => {
//   console.log('v>>>', v);
//   console.log('i>>>', i);
//   console.log('t>>>', t);
//   return `${v}%%%${v}`;
// })

// const first = result.first();
// const last = result.last();

// console.log('result>>>', result.toJS());
// console.log('first>>>', first);
// console.log('last>>>', last);
