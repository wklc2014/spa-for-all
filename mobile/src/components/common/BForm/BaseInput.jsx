import { InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import propTypes from 'prop-types';

const BaseInput = (props) => {

    const {
        id,
        label,
        onChange,

        clear,
        disabled,
        editable,
        error,
        extra,
        labelNumber,
        locale,
        maxLength,
        placeholder,
        type,
        updatePlaceholder,
        value,
    } = props;

    const { getFieldProps } = props.form;

    const defaultProps = {
        ...getFieldProps(id, {
        }),
        onChange: (value) => {
            onChange({ id, value });
        },
        onBlur: (value) => {

        },
        onFocus: (value) => {

        },

        clear,
        disabled,
        editable,
        error,
        extra,
        type,
        labelNumber,
        locale,
        maxLength,
        placeholder,
        updatePlaceholder,
        value,
    };

    return <InputItem {...defaultProps}>{label}</InputItem>;
}

BaseInput.propTypes = {
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,

    clear: propTypes.bool,
    disabled: propTypes.bool,
    editable: propTypes.bool,
    error: propTypes.bool,
    extra: propTypes.oneOfType([
        propTypes.string,
        propTypes.node,
    ]),
    labelNumber: propTypes.number,
    locale: propTypes.object,
    maxLength: propTypes.number,
    placeholder: propTypes.string,
    type: propTypes.string,
    updatePlaceholder: propTypes.bool,
};

export default createForm()(BaseInput);
