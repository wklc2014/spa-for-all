/**
 * 根据工单状态及登陆用户申领状态
 * 做UI的局部更新
 */
export default {
    /**
     * [updateView description]
     * 理赔审核-工单处理-已经申领【待保险机构确认】工单-【通过】调整为【赔付】
     * @param  {[object]} taskInfo [description]
         * node: 工单状态
         * applyerId：工单处理申领ID
         * userID：登陆用户ID
     */
    updateTaskFormBtnView(taskInfo) {
        const {node, applyerId, userID} = taskInfo;
        if (applyerId === userID) {
            if (node === 'AUDIT') {
                // 待保险机构确认
                return '赔付';
            }
        }
        return '通过';
    }
}