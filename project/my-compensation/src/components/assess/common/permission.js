/**
 * 权限控制
 */
import lodash from 'lodash';
export default {
    getPermission(taskInfo) {
        const {node, applyerId, userID, subType, type, source} = taskInfo;
        const disable = {
            BxsRisk: true,
            BxsAccident: true,
            BxsVoucher: true,
            BxsFund: true,
            BxsTaskForm: true,
            BxsTaskFormBuChuan: true,
            BxsTaskFormJuPei: true,
            BxsFundPayWay: true
        };
        const isTargetType = (type) => {
            const types = ['BANKCARD_PROTECTION', 'ELM_FOOD_SAFETY'];
            return lodash.indexOf(types, type) !== -1;
        }
        if (node === 'WAIT') {
            // 等待外部响应
            // if (source === 'CALLCENTER' || (subType !== 'THEMIS' && isTargetType(type))) {
                disable.BxsTaskFormBuChuan = false;
            // }
        }
        if (applyerId === userID) {
            //用户申领
            switch (node) {
                case 'CONFIRM':
                    // 初审
                    disable.BxsRisk = false;
                    disable.BxsAccident = false;
                    disable.BxsVoucher = false;
                    disable.BxsFund = false;
                    disable.BxsTaskForm = false;

                    if (source === 'CALLCENTER' && type === 'ELM_DELIVERY') {
                        disable.BxsFundPayWay = false;
                    }

                    // if (source === 'CALLCENTER' || (subType !== 'THEMIS' && isTargetType(type))) {
                        disable.BxsTaskFormBuChuan = false;
                    // }
                    break;
                case 'CHECK':
                    // 初审
                    disable.BxsTaskForm = false;
                    break;
                case 'AUDIT':
                    // 待保险机构确认
                    disable.BxsTaskForm = false;
                    disable.BxsTaskFormJuPei = false;
                    break;
            }
        }
        // 调试用，不能提交
        // disable.BxsTaskForm = false;
        return disable;
    }
};
