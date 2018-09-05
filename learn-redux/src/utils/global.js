import Immutable, {
  List,
  Map,
  fromJS,
} from 'immutable';

const log = (value) => {
  console.log('value>>>', value.toJS());
}

const obj = {
  a: 1,
  b: 2,
  c: {
    m: 'mm',
    n: 'nn',
    d: ['a', 'b', 'c']
  }
}

const old = Map(obj);
const old1 = fromJS(obj);

console.log('old>>>', old);
console.log('old1>>>', old1);
