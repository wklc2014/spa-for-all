import { ImagePicker } from 'antd-mobile';
import { createForm } from 'rc-form';
import propTypes from 'prop-types';

import FormErrors from './FormErrors.jsx';

function BaseImage(props) {
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
        onChange: (files, type, index) => {
            console.log(files, type, index)
            if (type === 'add') {
                onChange({ id, value: [...files] });
            } else if (type === 'remove') {
                const newValue = value.filter((m, i) => i !== index);
                onChange({ id, value: newValue });
            }
        },
        files: value,
        selectable: value.length < params.selectable,
        onImageClick: (index, fs) => {
            // console.log(index, fs)
        },
    };

    return <ImagePicker {...defaultProps} />;
}

const Wraper = FormErrors(BaseImage);

export default createForm()(Wraper);
