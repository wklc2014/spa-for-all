/**
 * 邮件通知组件
 */
import React from 'react';
import {Modal} from 'antd';
import {emaliNoteData} from './data.js';

const EmailNote = props => {
    const {show, onCancel} = props;
    if (!show) {
        return null;
    }
    console.log(show)
    return (
        <Modal
            visible
            title="邮件邀请用户上传凭证"
            footer={false}
            onCancel={onCancel}
        >
            1123
        </Modal>
    );
};

export default EmailNote;
