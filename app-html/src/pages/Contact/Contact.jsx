/**
 * 联系我们
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import AboutUs from '../../components/AboutUs/AboutUs.jsx';

class Contact extends Component {

  static defaultProps = {

  }

  render() {
    const {

    } = this.props;

    return (
      <div>
        <AboutUs />
      </div>
    )
  }

}

Contact.propTypes = {

}

export default Contact;
