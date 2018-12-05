import Reflux, { Store } from 'reflux';
import _count from '../initstate/_count.js';
import CountAction from '../action/_count.js';
import * as CountServices from '../service/_count.js';

class CountStore extends Reflux.Store {
  constructor() {
    super();
    this.state = _count;
    this.listenables = [CountAction];
  }

  onAdd() {
    const { amount } = this.state;
    this.setState({
      amount: amount + 1,
    });
  }

  onReduce() {
    const { amount } = this.state;
    this.setState({
      amount: amount - 1,
    });
  }

  onLoad() {
    this.onLoadFailed();
    CountServices.getKuaiDi()
      .then((resp) => {
        this.onLoadCompleted();
        if (resp.stat === 'ok') {
          this.setState({
            citys: resp.data,
          })
        }
      });
  }

  onLoadCompleted() {
    this.setState({
      loading: false,
    });
  }

  onLoadFailed() {
    this.setState({
      loading: true,
    });
  }
}

export default CountStore;
