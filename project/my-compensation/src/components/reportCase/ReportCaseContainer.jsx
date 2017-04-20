import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
    getReportCaseList,
    changeReportCaseData,
    changeAccidentData,
    changeUserInfo,
    addSupplementData,
    changeSupplementData,
    removeSupplementData,
    createReportCase,
    getExtListByType
} from '../redux/actions/reportCase_action.js';

import ReportCase from './ReportCase.jsx';

function mapStateToProps(state) {
    const reportCaseList = [];
    state.reportCase.reportCaseList.map(v => {
        let accidentHead = {};
        try {
            accidentHead = JSON.parse(v.accidentInfoHead.content)
        } catch(e) {
            // console.log(e);
        }
        let extHead = {};
        try {
            extHead = JSON.parse(v.extHead.content)
        } catch(e) {
            // console.log(e);
        }
        reportCaseList.push({
            insurance: v.insurance,
            type: v.type,
            enable: v.enable,
            accidentHead,
            extHead
        });
    });
    return {
        userInfoParams: state.reportCase.userInfoParams,
        reportCaseList,
        accidentType: state.reportCase.accidentType,
        source: state.reportCase.source,
        accidentInfo: state.reportCase.accidentInfo,
        supplementInfo: state.reportCase.supplementInfo,
        createSuccess: state.reportCase.createSuccess
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getReportCaseList,
        changeReportCaseData,
        changeAccidentData,
        changeUserInfo,
        addSupplementData,
        changeSupplementData,
        removeSupplementData,
        createReportCase,
        getExtListByType
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReportCase);
