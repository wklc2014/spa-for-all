import React from 'react';
import {Form, message, Button, Input} from 'antd';
const FormItem = Form.Item;

const InputTaskID = React.createClass({
    propTypes: {
        visiable: React.PropTypes.bool.isRequired,
        taskcenterId: React.PropTypes.string,
        placeholder: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        tips: React.PropTypes.node,
        onSearch: React.PropTypes.func.isRequired
    },
    getDefaultProps() {
        return {
            taskcenterId: ''
        }
    },
    handleClick() {
        const node = this.refs.inputTaskcenterId.refs.input;
        const value = node.value;
        if (!value) {
            message.info(`${this.props.placeholder}不能为空`);
        } else {
            this.props.onSearch($.trim(value), status => {
                if (!status) {
                    node.focus();
                }
            });
        }
    },
    render() {
        if (!this.props.visiable) {
            return null;
        }
        const inputProps = {
            size: 'default',
            ref: 'inputTaskcenterId',
            defaultValue: this.props.taskcenterId,
            placeholder: `请输入${this.props.placeholder}`
        }
        return (
            <Form inline>
                <FormItem label={this.props.label}>
                    <Input {...inputProps} />
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        onClick={this.handleClick}
                    >
                        查询
                    </Button>
                </FormItem>
                <FormItem>
                    <p className="red">{this.props.tips}</p>
                </FormItem>
            </Form>
        );
    }
});

export default InputTaskID;
