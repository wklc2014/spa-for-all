/**
 * 服务器等协议，URL，端口配置
 */
import {ENV} from './env_config.js';
import COMMON_CONFIG from './common_config.js';
import DEV_CONFIG from './dev_config.js';
import TEST_CONFIG from './test_config.js';
import PROD_CONFIG from './prod_config.js';

// 设置各种环境地址
let OTHER_CONFIG;
switch (ENV) {
    case 'dev':
        OTHER_CONFIG = DEV_CONFIG;
        break;
    case 'test':
        OTHER_CONFIG = TEST_CONFIG;
        break;
    case 'prod':
        OTHER_CONFIG = PROD_CONFIG;
        break;
    default:
        OTHER_CONFIG = DEV_CONFIG;
}

export default Object.assign({}, COMMON_CONFIG, OTHER_CONFIG);
