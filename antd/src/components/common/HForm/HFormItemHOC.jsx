import React, { Component } from 'react';
import lodash from 'lodash';

export default function HFormItemHOC(Base) {

    return class HOC extends Component {

        shouldComponentUpdate(nextProps, nextState) {
            const { field: nextField, form: nextForm } = nextProps;
            const { field: prevField, form: prevForm } = this.props;
            const nextErrors = nextForm.getFieldError(nextField.id);
            const prevErrors = prevForm.getFieldError(prevField.id);
            const isEqualProps = lodash.isEqual(nextProps, this.props);
            if (isEqualProps && !prevErrors && !nextErrors) {
                // return false;
            }
            console.log(isEqualState)
            return true;
        }

        render() {
            return <Base { ...this.props } />
        }
    }

}
