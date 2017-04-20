import React, { Component } from 'react';
import classnames from 'classnames';
import util from '../../common/util.js';
import {BxsVoucherDetailData} from './common/data.js';
import styles from './BxsVoucherDetail.less';
import {Select} from 'antd';
const Option = Select.Option;

class BxsVoucherDetailModalContent extends Component {

    getSelectClassNames(value) {
        return classnames(styles.detailItemSelect, {
            'detailItemSelectColor': !value
        })
    }

    render() {
        const {modalData, disabled, insuranceType} = this.props;
        const list = this.props.voucherAuditList || [];
        const memoEle = list.map((val, i) => {
            if (val === '合格证件') {
                const value = 'VALID=合格证件'
                return <Option key={i} value={value} >{val}</Option>;
            }
            if (val === '忽略') {
                const value = 'DELETED=忽略'
                return <Option key={i} value={value} >{val}</Option>;
            }
            return <Option key={i} value={`REJECTED=${val}`} >{val}</Option>;
        });

        let typeContent = BxsVoucherDetailData[insuranceType];
        //默认银行卡险
        if(util.isEmptyObject(typeContent)) {
            typeContent = BxsVoucherDetailData['BANKCARD_PROTECTION'];
        }
        const typeEle = typeContent.map((val, i) => {
            return <Option key={i} value={val.value}>{val.text}</Option>;
        });

        const typeCls = this.getSelectClassNames(modalData.type);
        const memoCls = this.getSelectClassNames(modalData.memo);

        return (
            <div className={styles.detailItem}>
                <Select
                    className={typeCls}
                    name="type"
                    placeholder="请选择凭证类型"
                    value={(util.isEmptyObject(modalData.type) && modalData.type.replace(/(^s*)|(s*$)/g, '').length === 0) ? undefined : modalData.type }
                    dropdownMatchSelectWidth={false}
                    onChange={(e) => {this.props.change(e, 'type')}}
                    disabled={disabled}
                >
                    {typeEle}
                </Select>
                <Select
                    className={memoCls}
                    name="memo"
                    placeholder="请审核"
                    value={(util.isEmptyObject(modalData.memo) && modalData.memo.replace(/(^s*)|(s*$)/g, '').length === 0) ? undefined : modalData.memo }
                    dropdownMatchSelectWidth={false}
                    onChange={(e) => {this.props.change(e, 'memo')}}
                    disabled={disabled}
                >
                    {memoEle}
                </Select>
            </div>
        )
    }
}

export default BxsVoucherDetailModalContent;
