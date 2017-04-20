export default {
    queryTaskDetailForGuide(taskcenterId, cb) {
        this.props.getAssessForGuide(taskcenterId, resp => {
            if (cb) {
                cb(resp);
            }
        });
    }
}