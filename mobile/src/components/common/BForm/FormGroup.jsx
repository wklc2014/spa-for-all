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

    getConfigsArray = () => {
        const { configs, sorted } = this.props;
        if (!sorted) {
            return Object.keys(configs);
        }
        return Object.keys(configs).sort((m, n) => {
            if (configs[m].order > configs[n].order) {
                return 1;
            } else if (configs[m].order < configs[n].order) {
                return -1;
            } else {
                return 0;
            }
        })
    }

    render() {
        const { className, configs, onChange, values } = this.props;

        const newConfigs = this.getConfigsArray();
        return (
            <List>
                {newConfigs.map((v, i) => {
                    const val = configs[v];
                    const groupProps = {
                        ...val,
                        onChange,
                        key: i,
                        id: v,
                        value: values[v],
                    };
                    return <FormBox {...groupProps} />;
                })}
            </List>
        );
    }
}

FormGroup.propTypes = {
    className: propTypes.string,
    configs: propTypes.object.isRequired,
    onChange: propTypes.func,
    sorted: propTypes.bool,
    values: propTypes.object,
};

export default FormGroup;
