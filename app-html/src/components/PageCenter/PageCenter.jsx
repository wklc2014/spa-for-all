/**
 * 居中包裹页面内容
 */
import React from 'react';
import classnames from 'classnames';

const PageCenter = ({ className, children }) => {

  const cls = classnames({
    'page-container': true,
    [className]: !!className,
  })

  return (
    <div className={cls}>
      <div className="page-wraper">
        {children}
      </div>
    </div>
  )
}

export default PageCenter;
