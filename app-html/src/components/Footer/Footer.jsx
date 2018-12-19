/**
 * footer
 */
import React from 'react';
import propTypes from 'prop-types';
import PageCenter from '../PageCenter/PageCenter.jsx';

const Footer = (props) => {

  const {

  } = props;

  return (
    <PageCenter className="footer-container">
      <div className="footer-wraper">
        <p>房地产版权所有</p>
        <p>
          <a href="#">手机版</a>
        </p>
      </div>
    </PageCenter>
  )
}

Footer.propTypes = {

}

Footer.defaultProps = {

}

export default Footer;
