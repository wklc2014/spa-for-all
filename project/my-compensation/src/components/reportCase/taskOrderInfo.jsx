import React from 'react';
import {Form, Input, Button, Select, Row} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import CardTitle from '../common/CardTitle.jsx';
import FormItemWraper from './common/FormItemWraper.jsx';
import {formItemLayout} from './common/const.js';

let TaskOrderInfo = React.createClass({
    render() {
        const {title, data, list, disabled} = this.props;
        const formInputProps = {
            getFieldProps: this.props.form.getFieldProps,
            change: this.props.change,
            rules: [],
            colspan: 8
        }
        let accidentType = undefined;
        const optionEle = list.map((v, i) => {
            if (v.type === data.accidentType) {
                accidentType = v.insurance;
            }
            return (
                <Option
                    key={i}
                    value={v.type}
                    disabled={!v.enable}
                >
                    {v.insurance}
                </Option>
            )
        });
        return (
            <div className="cardWraper">
                <CardTitle data={title} />
                <Row>
                    <FormItemWraper
                        {...formInputProps}
                        type="enum"
                        id="accidentType"
                        label="险种"
                        value={accidentType}
                        params={{
                            disabled: disabled || !list.length,
                            combobox: false
                        }}
                    >
                        {optionEle}
                    </FormItemWraper>
                    <FormItemWraper
                        {...formInputProps}
                        type="string"
                        id="source"
                        label="来源"
                        value={data.source}
                        params={{
                            disabled: true
                        }}
                    />
                </Row>
            </div>
        )
    }
});
TaskOrderInfo = Form.create()(TaskOrderInfo);

export default TaskOrderInfo;
