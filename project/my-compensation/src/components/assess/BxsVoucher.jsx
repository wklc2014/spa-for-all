import React from 'react';
import {Link} from 'react-router';
import styles from './BxsVoucherDetail.less';
import util from '../../common/util.js';
import BxsVoucherDetail from './BxsVoucherDetail.jsx';
import BxsVoucherExt from './BxsVoucherExt.jsx';
import CardTitle from '../common/CardTitle.jsx';
import {BxsCardTitle} from './common/data.js';
import { Input, Select, Button, Tooltip, Icon} from 'antd';

const BxsVoucher = React.createClass({
    render() {
        return (
            <div className="cardWraper" id={BxsCardTitle.BxsVoucher.id}>
                <CardTitle data={BxsCardTitle.BxsVoucher} />
                <BxsVoucherDetail insuranceType={this.props.insuranceType}/>
                <BxsVoucherExt />
            </div>
        );
    }
});

export default BxsVoucher;
