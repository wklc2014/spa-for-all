import React from 'react';
import add from './add.js';
import styles from './styles.less';
import { Button } from 'antd';

const App = () => {

  document.body.appendChild(add());

  const pre = {
    a: 1,
    b: 2,
  }

  const old = {
    ...pre,
    c: 3,
  }

  return (
    <div>
      <div className={styles.color}>123</div>
      <Button type="primary">按钮</Button>
    </div>
  )
}

export default App;
