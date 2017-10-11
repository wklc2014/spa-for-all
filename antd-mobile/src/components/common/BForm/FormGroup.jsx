/**
 * 生成一组 <FormItem /> 组件
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { List } from 'antd-mobile';
import FormBox from './FormBox.jsx';

class FormGroup extends Component {

    static defaultProps = {
        values: {},
    }

    getNewConfigs = () => {
        const { configs, sorted } = this.props;
        if (!sorted) {
            return configs;
        }
        return configs.sort((m, n) => {
            if (m.order > n.order) {
                return 1;
            } else if (m.order < n.order) {
                return -1;
            } else {
                return 0;
            }
        })
    }

    render() {
        const { className, configs, onChange, values } = this.props;

        const newConfigs = this.getNewConfigs();
        return (
            <List>
                {newConfigs.map((v, i) => {
                    const groupProps = {
                        ...v,
                        onChange,
                        key: i,
                        value: values[v.id],
                    };
                    return <FormBox {...groupProps} />;
                })}
            </List>
        );
    }
}

FormGroup.propTypes = {
    className: propTypes.string,
    configs: propTypes.array.isRequired,
    onChange: propTypes.func,
    sorted: propTypes.bool,
    values: propTypes.object,
};

export default FormGroup;
