import React, { Component } from 'react';
import lodash from 'lodash';

export default function HFormItemHOC(Base) {

    return class PP extends Component {

        shouldComponentUpdate(nextProps, nextState) {
            const { form, field } = this.props;
            const errors = form.getFieldError(field.id);
            return !lodash.isEqual(nextProps, this.props) || !!errors;
        }

        render() {
            return <Base { ...this.props } />
        }
    }

}