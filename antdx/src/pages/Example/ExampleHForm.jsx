import React, { Component } from 'react';
import propTypes from 'prop-types';

import HForm from '../../lib/HForm/HForm.jsx';
import exampleConfigs from '../../lib/HForm/exampleConfigs/exampleConfigs.js';

class ExampleHForm extends Component {

  static defaultProps = {

  }

  onChange = ({ id, value }) => {

  }

  render() {
    const {

    } = this.props;

    const HFormProps = {
      configs: exampleConfigs,
    }

    return (
      <div>
        <HForm {...HFormProps} />
      </div>
    )
  }

}

ExampleHForm.propTypes = {

}

export default ExampleHForm;
