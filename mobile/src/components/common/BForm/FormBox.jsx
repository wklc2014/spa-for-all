import { Component } from 'react';
import propTypes from 'prop-types';

import BaseInput from './BaseInput.jsx';

class FormBox extends Component {

    static defaultProps = {

    }

    shouldComponentUpdate(nextProps, nextState) {
        const next = JSON.stringify(nextProps);
        const prev = JSON.stringify(this.props);
        return next !== prev;
    }

    getValue = () => {
        const { value } = this.props;
        let newValue = value;
        return newValue;
    }

    render() {
        const newValue = this.getValue();

        let ChildEle = null;

        const commonProps = {
            disabled: this.props.disabled,
            id: this.props.id,
            label: this.props.label,
            onChange: this.props.onChange,
            placeholder: this.props.placeholder,
            updatePlaceholder: this.props.updatePlaceholder,
            value: newValue,
        }

        switch (this.props.type) {
            case 'input':
                const inputProps = {
                    ...commonProps,

                    clear: this.props.clear,
                    editable: this.props.editable,
                    error: this.props.error,
                    extra: this.props.extra,
                    type: this.props.itemType,
                    labelNumber: this.props.labelNumber,
                    locale: this.props.locale,
                    maxLength: this.props.maxLength,
                }
                ChildEle = <BaseInput {...inputProps} />;
        }

        return ChildEle;
    }

}

BaseInput.propTypes = {
    type: propTypes.string.isRequired,
}

export default FormBox;
