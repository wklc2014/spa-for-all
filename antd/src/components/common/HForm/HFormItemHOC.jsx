import React, { Component } from 'react';
import lodash from 'lodash';

export default function HFormItemHOC(Base) {

    return class PP extends Component {

        shouldComponentUpdate(nextProps, nextState) {
            const { form: prevForm, field: prevField } = this.props;
            const { form: nextForm, field: nextField } = nextProps;
            const prevErrors = prevForm.getFieldError(prevField.id);
            const nextErrors = nextForm.getFieldError(nextField.id);
            const isEqualProps = lodash.isEqual(nextProps, this.props);
            const isEqualErrors = lodash.isEqual(prevErrors, nextErrors);
            if (isEqualProps && isEqualErrors) {
                return false;
            }
            return true;
        }

        render() {
            return <Base { ...this.props } />
        }
    }

}