import { DatePicker, List } from 'antd-mobile';
import { createForm } from 'rc-form';
import propTypes from 'prop-types';

import FormErrors from './FormErrors.jsx';

function BaseDate(props) {
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
    };

    return (
        <DatePicker {...defaultProps}>
          <List.Item arrow="horizontal">{label}</List.Item>
        </DatePicker>
    )
}

const Wraper = FormErrors(BaseDate);

export default createForm()(Wraper);
