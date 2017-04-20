import React, { PropTypes } from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import App from '../components/App.jsx';
import NoSidebarLayout from '../layouts/MainLayout/NoSidebarLayout.jsx';
import HasSidebarLayout from '../layouts/MainLayout/HasSidebarLayout.jsx';
import About from '../components/About.jsx';
import Home from '../components/Home.jsx';
import NotFound from '../components/NotFound.jsx';
import Assess from '../components/assess/AssessContainer.jsx';
import OfflineUpdate from '../components/offlineUpdate/OfflineUpdate.jsx'; //线下理赔数据更新
import SmsNote from '../components/smsNote/SmsNote.jsx'; //短信通知
import BxsRule from '../components/bxsRule/BxsRule.jsx';
import BxsParam from '../components/bxsParam/BxsParam.jsx';
import Algorithm from '../components/bxsRule/Algorithm.jsx';
import WitClaim from '../components/witClaim/witClaimContainer.jsx';
import Consume from '../components/consume/ConsumeContainer.jsx';
import PicRecognition from '../components/picRecognition/PicRecognitionContainer.jsx';
import ReportCase from '../components/reportCase/ReportCaseContainer.jsx';
import Policy from '../components/policy/PolicyContainer.jsx';
import RiskTask from '../components/riskTask/RiskTaskContainer.jsx';
import PaymentHistory from '../components/paymentHistory/PaymentHistoryContainer.jsx';

// 智能引导
import Guidance from '../components/guidance/GuidanceContainer.jsx';

import store from '../components/redux/store/configureStore.js';

const routeHook = {
    enter: (nextState) => {
        window.scrollTo(0, 0);
        const pathname = nextState.location.pathname;
        if (pathname === '/') {
            store.dispatch({type: 'ROUTE_ENTER', payload: 'home'});
        } else {
            store.dispatch({type: 'ROUTE_ENTER', payload: pathname.substring(1)});
        }
    },
    leave: (nextState) => {
        const pathname = nextState.location.pathname;
        if (pathname === '/') {
            store.dispatch({type: 'ROUTE_LEAVE', payload: 'home'});
        } else {
            store.dispatch({type: 'ROUTE_LEAVE', payload: pathname.substring(1)});
        }
    }
}

const routerWraper = (path, component) => (
    <Route
        path={path}
        component={component}
        onEnter={routeHook.enter}
        onLeave={routeHook.leave}
    />
);

const Routes = ({ history }) =>
    <Provider store={store}>
        <Router history={history}>
            {routerWraper('/', Home)}
            {routerWraper('/algorithm(/:id)', Algorithm)}
            {routerWraper('/witClaim-kernal(/:riskTaskId)', WitClaim)}
            <Route component={App}>
                <Route component={NoSidebarLayout}>
                    {routerWraper('/reportcase', ReportCase)}
                </Route>
                <Route component={HasSidebarLayout}>
                    {routerWraper('/witClaim(/:riskTaskId)', WitClaim)}
                    {routerWraper('/about', About)}
                    {routerWraper('/guide(/:paramsTaskcenterId)', Guidance)}
                    {routerWraper('/consume', Consume)}
                    {routerWraper('/picRecognition(/:voucherId)', PicRecognition)}
                    {routerWraper('/policy', Policy)}
                    {routerWraper('/bxsRule', BxsRule)}
                    {routerWraper('/bxsParam', BxsParam)}
                    {routerWraper('/riskTask(/:caseNumberID)', RiskTask)}
                    {routerWraper('/assess(/:paramsTaskcenterId)', Assess)}
                    {routerWraper('/smsNote', SmsNote)}
                    {routerWraper('/offline', OfflineUpdate)}
                    {routerWraper('/paymentHistory', PaymentHistory)}
                    <Route path="*" component={NotFound} />
                </Route>
            </Route>
        </Router>
    </Provider>;

Routes.propTypes = {
    history: PropTypes.any
};

export default Routes;
