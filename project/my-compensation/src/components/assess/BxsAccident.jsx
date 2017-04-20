import React from 'react';
import util from '../../common/util.js';
import lodash from 'lodash';
import {Form, Input, DatePicker, Select, Row, Col, Icon, Button} from 'antd';
import Validation, {Validator} from 'rc-form-validation';
import {BxsCardTitle, formItemLayout} from './common/data.js';

import CardTitle from '../common/CardTitle.jsx';
import FormItemWraper from '../reportCase/common/FormItemWraper.jsx';

import shouldComponentUpdate from '../mixins/shouldComponentUpdate.js';

const Option = Select.Option;
const createForm = Form.create;
const FormItem = Form.Item;

let BxsAccident = React.createClass({
    mixins: [shouldComponentUpdate],
    // 修改出险信息
    // 向 reducer 传入整个 出现信息
    handleChange(key, value) {
        const {accident, accidentParams} = this.props;
        let newAccident = {...accident};
        const currentObject = accidentParams[key];
        switch (currentObject.type) {
            case 'money':
                if (currentObject.isExt) {
                    newAccident = Object.assign({}, accident, {
                        extMap: Object.assign({}, accident.extMap, {
                            [key]: {amount: value}
                        })
                    })
                } else {
                    newAccident = Object.assign({}, accident, {
                        [key]: {amount: value}
                    })
                }
                break;
            case 'date':
                if (currentObject.isExt) {
                    newAccident = Object.assign({}, accident, {
                        extMap: Object.assign({}, accident.extMap, {
                            [key]: {
                                time: value ? value.getTime() : undefined
                            }
                        })
                    })
                } else {
                    newAccident = Object.assign({}, accident, {
                        [key]: {
                            time: value ? value.getTime() : undefined
                        }
                    })
                }
                break;
            case 'cascader':
                try {
                    value = JSON.stringify(value.value);
                } catch(e) {
                }
                if (currentObject.isExt) {
                    newAccident = Object.assign({}, accident, {
                        extMap: Object.assign({}, accident.extMap, {
                            [key]: value
                        })
                    });
                } else {
                    newAccident = Object.assign({}, accident, {
                        [key]: value
                    });
                }
                break;
            default:
                if (currentObject.isExt) {
                    newAccident = Object.assign({}, accident, {
                        extMap: Object.assign({}, accident.extMap, {
                            [key]: value
                        })
                    });
                } else {
                    newAccident = Object.assign({}, accident, {
                        [key]: value
                    });
                }
                break;
        }
        this.props.updateAccident(newAccident);
    },
    render() {
        const {accident, disabled, accidentParams} = this.props;
        const {getFieldProps} = this.props.form;
        const formItemColSpan = formItemLayout.colOf3;
        return (
            <div className="cardWraper" id={BxsCardTitle.BxsAccident.id}>
                <CardTitle data={BxsCardTitle.BxsAccident} />
                <Row type="flex">
                    {Object.keys(accidentParams).map((v, i) => {
                        const currentObject = accidentParams[v];
                        if (currentObject.isHide) {
                            return null;
                        }
                        let span = '8';
                        let value = accident[v];
                        if (currentObject.isExt) {
                            value = lodash.get(accident, `extMap[${v}]`);
                        }
                        let params = {
                            disabled: disabled || currentObject.disabled
                        };

                        let childrenEle = null;
                        let cascaderValue = [];
                        switch(currentObject.type) {
                            case 'textarea':
                                span = '24';
                                break;
                            case 'date':
                                if (value && value.time) {
                                    value = new Date(accident[v].time);
                                } else {
                                    value = undefined;
                                }
                                break;
                            case 'money':
                                if (value && value.amount) {
                                    value = value.amount;
                                } else {
                                    value = '';
                                }
                                break;
                            case 'enum':
                                if (currentObject.type === 'enum') {
                                    childrenEle = currentObject.array.map((m, n) => {
                                        if (!value && m.selected) {
                                            value = m.text;
                                        }
                                        return (
                                            <Option
                                                key={m.id}
                                                value={m.text}
                                            >
                                                {m.text}
                                            </Option>
                                        );
                                    })
                                }
                                break;
                            case 'cascader':
                                try{
                                    value = JSON.parse(value);
                                }catch(e){
                                }
                                cascaderValue = currentObject.array;
                                break;
                        }

                        const formInputProps = {
                            key: `${v}`,
                            getFieldProps: this.props.form.getFieldProps,
                            change: this.handleChange,
                            type: currentObject.type,
                            id: v,
                            value,
                            cascaderValue,
                            colspan: span,
                            label: currentObject.name,
                            rules: [{
                                required: currentObject.required
                            }],
                            params
                        }
                        return (
                            <FormItemWraper
                                {...formInputProps}
                            >
                                {childrenEle}
                            </FormItemWraper>
                        )
                    })}
                </Row>
            </div>
        );
    }
});

BxsAccident = createForm()(BxsAccident);

export default BxsAccident;
