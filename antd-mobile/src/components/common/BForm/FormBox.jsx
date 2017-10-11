import { Component } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';

import utils from './util/';

import BaseCheckbox from './BaseCheckbox.jsx';
import BaseDate from './BaseDate.jsx';
import BaseImage from './BaseImage.jsx';
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
        const { type, value } = this.props;
        let newValue = value;
        switch (type) {
            case 'date':
                newValue = value ? moment(value) : value;
                break;
            case 'checkbox':
            case 'image':
                newValue = value || [];
                break;
        }
        return newValue;
    }

    onChange = ({ id, value }) => {
        const { type } = this.props;
        switch (type) {
            case 'date':
                value = moment(value).format(utils.format);
                break;
        }
        this.props.onChange({ id, value });
    }

    render() {
        const newValue = this.getValue();

        let ChildEle = null;

        const commonProps = {
            id: this.props.id,
            label: this.props.label,
            onChange: this.onChange,
            value: newValue,
            params: this.props.params,
            options: this.props.options,
            datas: this.props.datas,
        }

        switch (this.props.type) {
            case 'input':
                ChildEle = <BaseInput {...commonProps} />;
                break;
            case 'date':
                ChildEle = <BaseDate {...commonProps} />;
                break;
            case 'checkbox':
                ChildEle = <BaseCheckbox {...commonProps} />;
                break;
            case 'image':
                ChildEle = <BaseImage {...commonProps} />;
                break;
            default:
                console.log('The config field type is error...');
        }

        return ChildEle;
    }

}

FormBox.propTypes = {
    type: propTypes.string.isRequired,
}

export default FormBox;
