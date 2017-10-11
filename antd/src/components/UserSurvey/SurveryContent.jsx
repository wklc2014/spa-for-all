/**
 * 用户调查
 */
import { connect } from 'dva';
import React, { Component } from 'react';
import { Button, Modal } from 'antd';

import * as CONFIGS from './common/';
import FormGroup from '../common/BForm/FormGroup.jsx';

class SurveryContent extends Component {

    static defaultProps = {
    }

    getRef = () => {
        return this.refs.FormGroup;
    }

    onChange = ({ id, value, type, addValue }) => {
        // console.log(id, value, type, addValue);
        const newValue = { [id]: value };
        const ref = this.getRef();
        switch (id) {
            case 'contactPhone':
                if (type === 'radio') {
                    const t = { '01': '标的:13591993996', '02': '三者:18111224835' };
                    newValue[id] = { inputValue: t[value], addValue: value };
                    ref.setFieldsValue({ [id]: t[value] });
                }
                break;
            case 'address':
                if (type === 'button') {
                    const t = { '01': '标的:13591993996', '02': '三者:18111224835' };
                    newValue[id] = t[value];
                    ref.setFieldsValue({ [id]: t[value] });
                }
            case 'accidentCreate':
                if (type === 'button' && value === '01') {
                    const v = '自动生成描述巴拉巴拉小魔仙';
                    newValue[id] = v;
                    ref.setFieldsValue({ [id]: v });
                }
                break;
        }
        this.props.dispatch({
            type: 'UserSurvery/update',
            payload: { modelKey: 'Basic', modelValue: newValue },
        })
    }

    onGetValue = () => {
        const ref = this.getRef();
        const values = ref.getFieldsValue();
        console.log('values>>>', values);
    }

    onSubmit = () => {
        const ref = this.getRef();
        const ret = ref.validateFields();
        console.log('ret>>>', ret);
    }

    onReset = () => {
        const ref = this.getRef();
        this.props.dispatch({ type: 'UserSurvery/reset' });
        ref.resetFields();
    }

    render() {
        const commonStyle = {
            border: '1px solid #eee',
            marginBottom: 20,
            padding: '10px 20px'
        }

        const { formLayout } = this.props.values;

        let layout = '';
        switch (formLayout) {
            case 'horizontal':
               layout = 'H2';
               break;
            case 'vertical':
               layout = 'V';
               break;
            case 'inline':
            default:
               layout = 'I';
               break;
        }

        return (
            <section>
                <div style={commonStyle}>
                    <FormGroup
                        ref="FormGroup"
                        configs={CONFIGS.UserSurvery}
                        col={3}
                        onChange={this.onChange}
                        values={this.props.values}
                    />
                </div>
                <p style={{ paddingBottom: 16 }}>
                    <Button onClick={this.onSubmit} style={{ marginRight: 16 }}>
                        提交
                    </Button>
                    <Button onClick={this.onGetValue} style={{ marginRight: 16 }}>
                        获取
                    </Button>
                    <Button onClick={this.onReset}>
                        重置
                    </Button>
                </p>
                {/*<div style={commonStyle}>
                    <FormGroup
                        ref="FormGroup2"
                        configs={CONFIGS.UserRegister}
                        onChange={this.onChange}
                        layout={layout}
                        values={this.props.values}
                    />
                </div>*/}
            </section>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        values: state.UserSurvery.Basic,
    }
}

export default connect(mapStateToProps)(SurveryContent);
// export default SurveryContent;
