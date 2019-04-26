/**
 * 页面分享
 */
import React from 'react';
import propTypes from 'prop-types';

const Share = (props) => {

  const {

  } = props;

  return (
    <div className="share-container">
      <div className="item">分享到：</div>
      <div className="item">
        <i className="iconimg icon-weixin"></i>
      </div>
      <div className="item">
        <i className="iconimg icon-weibo"></i>
      </div>
      <div className="item">
        <i className="iconimg icon-qq"></i>
      </div>
      <div className="item">
        <i className="iconimg icon-zone"></i>
      </div>
      <div className="item">
        <i className="iconimg icon-douban"></i>
      </div>
      <div className="item">
        <i className="iconimg icon-tieba"></i>
      </div>
    </div>
  )
}

Share.propTypes = {

}

Share.defaultProps = {

}

export default Share;
