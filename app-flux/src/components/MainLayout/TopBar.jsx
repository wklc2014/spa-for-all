/**
 * 主体布局中，右侧顶部标题 + 用户信息
 */
import React from 'react';
import propTypes from 'prop-types';

function TopBar(props) {
  const { location } = props;

  return (
    <section className="top-bar-wraper">
      <div className="top-bar-box">
        <div className="top-bar">
        </div>
      </div>
    </section>
  )
}

TopBar.propTypes = {
  location: propTypes.object,
}

TopBar.defaultProps = {

}

export default TopBar;
