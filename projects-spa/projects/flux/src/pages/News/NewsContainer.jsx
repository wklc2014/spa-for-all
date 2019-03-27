import { Container } from 'flux/utils';
import News from './News.jsx';
import newsStore from '../../models/store/_news.js';

function getStores() {
  return [
    newsStore,
  ];
}

function getState() {
  const newsState = newsStore.getState();

  return {
    list: newsState.get('list'),
  };
}

const NewsContainer = Container.createFunctional(News, getStores, getState);

export default NewsContainer;
