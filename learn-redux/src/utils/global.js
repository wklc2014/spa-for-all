import Immutable, {
  List,
  Map,
  fromJS,
  Repeat,
  Range,
} from 'immutable';

const a = Repeat('AAA_', 4);

console.log('a>>>', a.toJS());

const b = Range(10, 21);
console.log('b>>>', b.toJS());

// https://www.w3cplus.com/javascript/immutable-js.html

