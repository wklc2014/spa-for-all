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

    // 排序配置项
    sortConfigs = () => {
        const { isSort, configs } = this.props;
        if (!isSort) {
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

    renderChild = () => {
        const { onChange, values } = this.props;
        const newConfigs = this.sortConfigs();
        return newConfigs.map((v, i) => {
            const newParams = v.params || {};
            const newDefaultApi = v.defaultApi || {};
            const newListItemApi = v.listItemApi || {};
            const newOptionsApi = v.optionsApi || {};
            const newFlexApi = v.flexApi || {};
            const newFlexItemApi = v.flexItemApi || {};
            const props = {
                id: v.id,
                type: v.type,
                params: newParams,
                defaultApi: newDefaultApi,
                listItemApi: newListItemApi,
                optionsApi: newOptionsApi,
                flexApi: newFlexApi,
                flexItemApi: newFlexItemApi,
                onChange,
                key: i,
                value: values[v.id],
            };
            return <FormBox {...props} />;
        })
    }

    render() {
        const ChildEle = this.renderChild();
        return (
            <List>
                {ChildEle}
            </List>
        );
    }
}

FormGroup.propTypes = {
    configs: propTypes.array.isRequired,
    onChange: propTypes.func,
    isSort: propTypes.bool,
    values: propTypes.object,
};

export default FormGroup;
