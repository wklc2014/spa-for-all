import React, { Component } from 'react';
import Head from '../../common/Head.jsx';
import Foot from '../../common/Head.jsx';
import { Row, Col } from 'antd';

class Home extends Component {
    render() {
        return (
            <div className="homeWraper">
                <Head callFrom="home" />
                <Row>
                    <Col>
                        1
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;
