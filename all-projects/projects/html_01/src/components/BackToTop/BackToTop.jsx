/**
 * 返回顶部
 */
import React from 'react';

const BackToTop = (props) => {

  const goTop = () => {
    window.scrollTo(0, 0);
  }

  return <div className="back-to-top-container" onClick={goTop} />
};

export default BackToTop;