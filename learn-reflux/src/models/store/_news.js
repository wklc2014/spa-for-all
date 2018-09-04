import { Store } from 'reflux';
import _news from '../initstate/_news.js';

class NewsStore extends Store {
  constructor() {
    super();
    this.state = _news;
  }

}

export default NewsStore;
