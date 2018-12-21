import React from 'react';
import { Button } from 'antd';
import styles from './app.less';
import img from './pic.jpg';

const App = (props) => {

  return (
    <div className={styles.wraper}>
      <div className={styles.box}>
        <Button type="primary">{props.env}</Button>
      </div>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default App;
