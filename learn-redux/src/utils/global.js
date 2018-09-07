import _ from 'underscore';
import Immutable, { List, Map, fromJS, Repeat, Range, } from 'immutable';

// https://www.w3cplus.com/javascript/immutable-js.html

// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// const arr = [1, 2, 'false', false, true, 0, '0', null, 'null', -1];
const arr = [
  { a: 1, b: 2 },
  { a: 4, b: 2 },
  { a: 1, b: 5 },
]
const a = _.unzip([['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]])
const b = _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
console.log('a>>>', a);
console.log('b>>>', b);


