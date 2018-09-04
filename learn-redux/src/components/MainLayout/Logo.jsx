/**
 * logo
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './styles.less';

export default function Logo(props) {
  const { collapsed } = props;
  const text = collapsed ? 'redux' : 'learn-redux';
  return (
    <section className={styles.logoWraper}>
      <Link to="/" className={styles.logo}>{text}</Link>
    </section>
  )
}

Logo.propTypes = {
  collapsed: propTypes.bool.isRequired,
}

Logo.defaultProps = {
}
