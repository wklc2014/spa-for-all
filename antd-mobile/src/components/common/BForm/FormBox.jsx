import { Component } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import utils from './util/';
import CITYS from './util/ChineseCities.js';
import BaseForm from './BaseForm.jsx';

class FormBox extends Component {

    static defaultProps = {

    }

    shouldComponentUpdate(nextProps, nextState) {
        const next = JSON.stringify(nextProps);
        const prev = JSON.stringify(this.props);
        return next !== prev;
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

    setValue = () => {
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

    setData = () => {
        const { type, params } = this.props;
        const { data } = params;
        let newData = data || [];
        switch (type) {
            case 'picker':
                if (data === 'city') {
                    newData = CITYS;
                }
                break;
        }
        return newData;
    }

    render() {
        const newValue = this.setValue();
        const newData = this.setData();

        let ChildEle = null;

        const commonProps = {
            id: this.props.id,
            onChange: this.onChange,
            value: newValue,
            params: {
                ...this.props.params,
                type: this.props.type,
                data: newData,
            },
            options: this.props.options,
            listItem: this.props.listItem,
            api: this.props.api,
        }

        return <BaseForm {...commonProps} />;
    }

}

FormBox.propTypes = {
    type: propTypes.string.isRequired,
}

export default FormBox;
