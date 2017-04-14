import React, { Component } from 'react';
import { Button, message } from 'antd';
import ServiceLogin from '../../service/Serverlogin.js';

class Test extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const params = {
            username: 'test123',
            password: 'password456'
        }
        ServiceLogin(params, resp => {
            const {stat} = resp;
            const infoObj = {
                ok: {
                    msg: '登陆成功',
                    method: 'success'
                },
                error: {
                    msg: '登陆失败',
                    method: 'error'
                }
            }
            message[infoObj[stat].method](infoObj[stat].msg, 3);
        });
    }

    render() {
        const {name} = this.props;
        const text = name || 'home';
        return (
            <div>
                <h2>this is Test component!</h2>
                <p>
                    <Button
                        onClick={this.handleClick}
                    >
                        登陆
                    </Button>
                </p>
                <p>
                    <a href={`${text}.html`}>{text}</a>
                </p>
            </div>
        )
    }
}

export default Test;
