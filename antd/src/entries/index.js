import moment from 'moment';
// import 'moment/locale/zh-cn';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';
import dva from 'dva';
import './index.css';
import './index.html';
import '../assets/common.less';

moment.locale('zh-cn');

// 1. Initialize
const app = dva({
    onAction: createLogger({
        collapsed: true,
    }),
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('../models/UserSurvery.js'));

// 4. Router
app.router(require('../routes/'));

// 5. Start
app.start('#root');
