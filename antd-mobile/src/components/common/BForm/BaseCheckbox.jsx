import { Checkbox } from 'antd-mobile';
import { createForm } from 'rc-form';
import propTypes from 'prop-types';
import lodash from 'lodash';

import FormErrors from './FormErrors.jsx';

const CheckboxItem = Checkbox.CheckboxItem;

function BaseCheckbox(props) {
    const {
        id,
        label,
        onChange,
        value,
        params,
        options,
        datas,
        error,
        onErrorClick,
    } = props;

    const { getFieldProps } = props.form;

    const Child = datas.map((v) => {
        const checked = lodash.indexOf(value, v.value) !== -1;
        const defaultProps = {
            key: v.value,
            ...params,
            onChange: () => {
                let newValue = [];
                if (checked) {
                    newValue = value.filter((m) => m !== v.value);
                } else {
                    newValue = [...value, v.value];
                }
                onChange({ id, value: newValue });
            },
            checked,
        };

        return <CheckboxItem {...defaultProps}>{v.label}</CheckboxItem>
    });

    return <div>{Child}</div>;
}

const Wraper = FormErrors(BaseCheckbox);

export default createForm()(Wraper);
