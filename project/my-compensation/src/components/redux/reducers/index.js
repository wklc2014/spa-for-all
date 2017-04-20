import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user_reducer from './user_reducer.js';
import riskTask_reducer from './riskTask_reducer.js';
import assess_reducer from './assess_reducer.js';
import policy_reducer from './policy_reducer.js';
import history_reducer from './history_reducer.js';
import paymentHistory_reducer from './paymentHistory_reducer.js';
import policySearch_reducer from './policySearch_reducer.js';
import risk_reducer from './risk_reducer.js';
import loading_reducer from './loading_reducer.js';
import sms_reducer from './sms_reducer.js';
import witClaim_reducer from './witClaim_reducer.js';
import reportCase_reducer from './reportCase_reducer.js';
import voucherRule_reducer from './voucherRule_reducer.js';
import guide_reducer from './guide_reducer.js';
import picRecognition_reducer from './picRecognition_reducer.js';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    routing: routerReducer,
    user: user_reducer,
    risktask: riskTask_reducer,
    risk: risk_reducer,
    assess: assess_reducer,
    policy: policy_reducer,
    history: history_reducer,
    paymentHistory: paymentHistory_reducer,
    policySearch: policySearch_reducer,
    loading: loading_reducer,
    sms: sms_reducer,
    witClaim: witClaim_reducer,
    reportCase: reportCase_reducer,
    voucherRule: voucherRule_reducer,
    guide: guide_reducer,
    picData: picRecognition_reducer,
    routeParams: (state = {enter: '', leave: ''}, action) => {
        if (action.type === 'ROUTE_ENTER') {
            return Object.assign({}, state, {
                enter: action.payload
            })
        } else if (action.type === 'ROUTE_LEAVE'){
            return Object.assign({}, state, {
                leave: action.payload
            })
        }
        return state;
    }
});

export default rootReducer;
