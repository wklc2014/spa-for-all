'use strict';

import React, {Component} from 'react';

import {Row, Col} from 'antd';

class Layout extends Component{
	render(){
		return (
			<div>
				<Row gutter={16}>
					<Col span={12}>
						<div className="gutter-box">1</div>
					</Col>
					<Col span={12}>
						<div className="gutter-box">2</div>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Layout;
