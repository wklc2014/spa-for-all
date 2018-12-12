/**
 * 居中包裹页面内容
 */
import React from 'react';

const PageCenter = ({ children }) => {

  return (
    <div className="page-container">
      <div className="page-wraper">
        {children}
      </div>
    </div>
  )
}

export default PageCenter;
