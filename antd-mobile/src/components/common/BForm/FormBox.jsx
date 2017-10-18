import { Component } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import lodash from 'lodash';
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
        const { type, value, params } = this.props;
        const { renderValue } = params;
        let newValue = renderValue ? renderValue(value) : value;
        switch (type) {
            case 'date':
                newValue = value ? moment(value) : value;
                break;
            case 'checkboxItem':
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

    setLabel = () => {
        const { params } = this.props;
        const { label, labelRender } = params;
        let newLabel = label;
        if (labelRender && lodash.isFunction(labelRender)) {
            newLabel = labelRender(label);
        }
        return newLabel;
    }

    render() {
        const newValue = this.setValue();
        const newData = this.setData();
        const newLabel = this.setLabel();

        let ChildEle = null;

        const commonProps = {
            id: this.props.id,
            onChange: this.onChange,
            value: newValue,
            type: this.props.type,
            params: {
                ...this.props.params,
                label: newLabel,
                data: newData,
            },
            defaultApi: this.props.defaultApi,
            listItemApi: this.props.listItemApi,
            optionsApi: this.props.optionsApi,
            flexApi: this.props.flexApi,
            flexItemApi: this.props.flexItemApi,
        }

        return <BaseForm {...commonProps} />;
    }

}

FormBox.propTypes = {
    type: propTypes.string.isRequired,
}

export default FormBox;
