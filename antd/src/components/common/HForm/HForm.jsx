import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form, Row, Col } from 'antd';

import HFormItem from './HFormItem.jsx';
import getGridLayout from './utils/getGridLayout.js';
import formLayouts from './common/formLayouts.js';

class HForm extends Component {

    static defaultProps = {
        className       : '',
        columns         : 1,
        configs         : [],
        isSort          : true,
        layout          : 'horizontal',
        style           : {},
        spacing         : 16,
        values          : {},
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

    getFormLayout = () => {
        const { layout } = this.props;
        if (formLayouts.indexOf(layout) !== -1) {
            return layout;
        }
        return formLayouts[0];
    }

    render() {
        const { layout, spacing, columns, values, form } = this.props;
        const configs = this.sortConfigs();

        const formEle = configs.map((val, i) => {
            const params = val.params || {};
            const cProps = {
                key: i,
                form,
                layout,
                columns,
                field: {
                    ...val,
                    onChange: this.props.onChange,
                },
                value: values[val.id],
            }
            if (layout === 'inline') {
                return (
                    <div
                        key={`${layout}-${i}`}
                        style={{ display: 'inline-block' }}
                    >
                        <HFormItem {...cProps} />
                    </div>
                )
            }
            const colProps = getGridLayout(columns, params.colSpan);
            return (
                <Col
                    {...colProps}
                    key={`${layout}-${i}`}
                >
                    <div style={{ paddingRight: spacing }}>
                        <HFormItem {...cProps} />
                    </div>
                </Col>
            )
        });

        const formLayout = this.getFormLayout();

        return (
            <Form layout={formLayout}>
                <Row type="flex">{formEle}</Row>
            </Form>
        );
    }
}

HForm.propTypes = {
    className: propTypes.string,
    columns: propTypes.number,
    configs: propTypes.array.isRequired,
    isSort: propTypes.bool,
    layout: propTypes.string,
    onChange: propTypes.func,
    style: propTypes.object,
    spacing: propTypes.number,
    values: propTypes.object,
};

export default Form.create()(HForm);
