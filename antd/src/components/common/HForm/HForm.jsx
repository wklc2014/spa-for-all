import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form, Row, Col } from 'antd';

import HFormItem from './HFormItem.jsx';
import getGridLayout from './utils/getGridLayout.js';
import formLayouts from './common/formLayouts.js';

class HForm extends Component {

    static defaultProps = {
        className: '',
        col: 1,
        space: 16,
        childGutter: 16,
        isSort: true,
        layout: 'horizontal',
        values: {},
    }

    constructor(props) {
        super(props);
        this.state = {
            update: false,
        }
    }

    onChange = ({ id, value, addType, addValue }) => {
        this.setState({ update: false });
        this.props.onChange({ id, value, addType, addValue });
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
        const { update, layout, space, col, values, form } = this.props;
        const configs = this.sortConfigs();

        const formEle = configs.map((val, i) => {
            const params = val.params || {};
            const cProps = {
                key: i,
                form,
                layout,
                col,
                field: {
                    ...val,
                    onChange: this.onChange,
                },
                value: values[val.id],
                update,
            }
            if (layout === 'inline') {
                return (
                    <div
                        key={`${layout}_${i}`}
                        style={{ display: 'inline-block' }}
                    >
                        <HFormItem {...cProps} />
                    </div>
                )
            }
            const colProps = getGridLayout(col, params.colSpan);
            return (
                <Col
                    {...colProps}
                    key={`${layout}_${i}`}
                >
                    <div style={{ paddingRight: space }}>
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
    configs: propTypes.array.isRequired,
    onChange: propTypes.func,
    className: propTypes.string,
    col: propTypes.number,
    isSort: propTypes.bool,
    layout: propTypes.string,
    space: propTypes.number,
    values: propTypes.object,
};

export default Form.create()(HForm);
