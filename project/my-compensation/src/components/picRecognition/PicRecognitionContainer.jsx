import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import PicRecognition from './PicRecognition.jsx';
import {createModelEvaluation, pictureAnalyse, updateAnalyse, updatePicInfo} from '../redux/actions/picRecognition_action.js';
function mapStateToProps(state) {
    const bxsVoucherModelList = state.assess.voucher.list;
    return {
        picData: state.picData,
        list: bxsVoucherModelList,
        routeParams: state.routeParams
        // voucherId: state.assess.bxsVoucherModel.voucherId
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createModelEvaluation,
        pictureAnalyse,
        updateAnalyse,
        updatePicInfo
    }, dispatch);
}
const PicRecognitionContainer = connect(mapStateToProps, mapDispatchToProps)(PicRecognition);
export default PicRecognitionContainer;
