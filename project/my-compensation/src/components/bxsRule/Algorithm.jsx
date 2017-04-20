import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Button, Modal, Table, Select, message, Row, Col, Form, DatePicker, Input, Popconfirm } from 'antd';
import async from '../redux/common/async.js';
import util from '../../common/util.js';

import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/github';

const FormItem = Form.Item;
let Algorithm = React.createClass({
    /* 初始化 */
    getInitialState() {
        return {
            content: ''
        };
    },
    /* 表单提交 */
    componentWillMount() {
        const {id} = this.props.params
        if(id){
            async({
                type: 'get',
                url: 'https://compmng.alipay.com/bxs/queryAlgorithm.json',
                data: {
                    id
                },
                traditional: true,
                dataType: 'jsonp',
                jsonp: '_callback',
                success: (result) => {
                    if (result.stat === 'ok') {
                        this.setState({
                            content: result.algorithmModel.content
                        });
                    } else {
                        message.error('数据更新失败');
                    }
                }
            });
        }
    },

    updateData(e) {
        e.preventDefault();
        const {id} = this.props.params
        const content = this.state.content;
        const data = {
            id,
            content
        }
        if(id) {
            async({
                type: 'post',
                url: 'https://compmng.alipay.com/bxs/updateAlgorithm.json',
                data,
                /*
                traditional: true,
                dataType: 'jsonp',
                jsonp: '_callback',
                */
                success: (result) => {
                    if (result.stat === 'ok') {
                        message.success('数据更新成功');
                    } else {
                        message.error('数据更新失败');
                    }
                },
                error:(err) => {
                    console.log(err)
                }
            });
        }
    },

    changeContent(value) {
        this.setState({
            content: value
        });
    },

    render() {
        const { getFieldProps } = this.props.form;
        const mdFormItemLayout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 20 }
        };
        return (
            <div className="cardOuter">
                <div className="cardWraper" style={{minHeight: '100%'}}>
                    <Form onSubmit={this.updateData} method="post">
                        <FormItem>
                            <AceEditor
                                style={{border: '1px solid #ccc'}}
                                height="800px"
                                width="100%"
                                mode="java"
                                theme="github"
                                showPrintMargin={false}
                                value={this.state.content}
                                onChange={
                                    (e) => {
                                        this.changeContent(e)
                                    }
                                }
                                editorProps={{$blockScrolling: true}}
                             />
                        </FormItem>
                        <FormItem
                            wrapperCol={{offset: 10, span: 10 }}
                        >
                            <Button size="default" type="primary" htmlType="submit" >保存</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
});

Algorithm = Form.create()(Algorithm);

export default Algorithm;
