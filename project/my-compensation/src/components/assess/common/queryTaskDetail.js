/**
 * 是整个应用查询工单详情数据
 * 承接了部分串连的ajax请求，如获取保单信息
 * 同时并连发出部分ajax请求，如获取工单历史操作，获取案件信息
 */
export default {
    queryTaskDetail(taskcenterId, cb) {
        this.props.getBxsAssess(taskcenterId, resp => {
            let userId = '';
            let taskId = '';
            let xzType = '';
            let gmtAccident = '';
            let cardno = '';
            let certId = '';
            let realName = '';
            let inAccType = '';
            let accidentObjectId = '';
            if (resp.assess !== undefined) {
                const {bxsTaskModel, bxsAccidentModel, bxsFundModelList, bxsPersonModel} = resp.assess;
                if (bxsTaskModel) {
                    userId = bxsTaskModel.applicantUserId;
                    taskId = bxsTaskModel.taskId;
                    xzType = bxsTaskModel.type;
                }
                if (bxsAccidentModel){
                    gmtAccident = bxsAccidentModel.gmtAccident;
                    accidentObjectId = bxsAccidentModel.objectId;
                }
                if (bxsFundModelList.length > 0) {
                    cardno = bxsFundModelList[0].inAccCardno;
                    inAccType = bxsFundModelList[0].inAccType;
                } else {
                    if (bxsTaskModel.applicantUserId) {
                        cardno = bxsTaskModel.applicantUserId;
                        inAccType = 'ALIPAY';
                    }
                }
                if (bxsPersonModel) {
                    certId = bxsPersonModel.certId;
                    realName = bxsPersonModel.realName;
                }
            }
            if (xzType && taskId) {
                this.props.getVoucherRule(xzType, taskId);
            }
            this.props.getPolicyList({
                userId,
                xzType,
                taskId,
                gmtAccident,
                certId,
                realName,
                accidentObjectId
            });
            if (cardno && inAccType === 'ALIPAY') {
                this.props.searchInfo(cardno);
            } else {
                console.log('no send searchInfo', cardno, inAccType);
            }
            if (cb) {
                cb(resp);
            }
        });
        this.props.getTaskOpHistoryList(taskcenterId);
        this.props.getRiskList(taskcenterId);
    }
};
