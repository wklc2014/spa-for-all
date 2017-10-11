import { InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import propTypes from 'prop-types';

import FormErrors from './FormErrors.jsx';

function BaseInput(props) {
    const {
        id,
        label,
        onChange,
        value,
        params,
        options,
        error,
        onErrorClick,
    } = props;

    const { getFieldProps } = props.form;

    const defaultProps = {
        ...params,
        ...getFieldProps(id, {
            ...options,
            onChange: (value) => {
                onChange({ id, value });
            },
        }),
        value,
        error,
        onErrorClick
    };

    return <InputItem {...defaultProps}>{label}</InputItem>;
}

const Wraper = FormErrors(BaseInput);

export default createForm()(Wraper);
