import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';
import CountContext from '../../models/context/count_context.js';
import Parent from './Paren.jsx';
import count_action from '../../models/action/count_action.js';
import picture from './common/6.jpg';

class Home extends Component {

  static defaultProps = {
    amount: 0,
    loading: false,
    citys: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      imgSrc: '',
    }
  }

  componentDidMount() {

  }

  onAdd = (number) => {
    this.props.dispatch(count_action.onAdd(number));
  }

  onReduce = (number) => {
    this.props.dispatch(count_action.onReduce(number));
  }

  onLoad = () => {
    this.props.dispatch(count_action.onLoad());
  }

  render() {
    const {
      amount,
      citys,
      loading,
    } = this.props;

    const CountContextValue = {
      amount,
      onAdd: this.onAdd,
      onReduce: this.onReduce,
    }

    const divStyle = {
      // background: '#777',
      border: '1px solid #ddd',
    }

    return (
      <CountContext.Provider value={CountContextValue}>
        <div>
          <h2>主页</h2>
          <p>这是主页内容。。。</p>
          <Parent />
        </div>
        <div style={{ padding: '16px 0' }}>
          <Button
            type="primary"
            loading={loading}
            onClick={this.onLoad}
          >
            加载
          </Button>
        </div>
        <div style={{ padding: '16px 0' }}>
          <ul className="ui list">
            {citys.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </CountContext.Provider>
    )
  }
}

Home.propTypes = {
  amount: propTypes.number,
  citys: propTypes.array,
  loading: propTypes.bool,
}

export default Home;
