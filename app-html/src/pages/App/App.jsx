import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import lodash from 'lodash';

import Home from '../Home/HomeContainer.jsx';
import Business from '../Business/IndexContainer.jsx';
import BusinessDetail from '../Business/BusinessDetail.jsx';
import News from '../News/NewsContainer.jsx';
import NewsDetail from '../News/NewsDetail.jsx';
import Contact from '../Contact/Contact.jsx';
import MakeOnline from '../MakeOnline/MakeOnline.jsx';

class App extends Component {

  static defaultProps = {

  }

  componentWillReceiveProps(nextProps){
    console.log('1>>>', 1);
    // 当路由切换时
    const prev = lodash.get(this.props, 'location.pathname', 'prev');
    const next = lodash.get(nextProps, 'location.pathname', 'next');
    if (prev !== next) {
       window.scrollTo(0, 0);
    }
  }

  render() {

    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/business/:id" component={BusinessDetail} />
        <Route path="/business" component={Business} />
        <Route path="/news/:id" component={NewsDetail} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route path="/makeonline" component={MakeOnline} />
        <Route render={() => <h3>Not Found</h3>} />
      </Switch>
    );
  }

}

App.propTypes = {

}

export default withRouter(App);

