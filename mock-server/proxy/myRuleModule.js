module.exports = {
    summary: 'example',
    *beforeSendRequest(requestDetail) {

    },
    *beforeSendResponse(requestDetail, responseDetail) {
        var newResponse = Object.assign({}, responseDetail.response);
        newResponse.statusCode = 404;
        newResponse.body += '--from anyproxy--';
        return Object.assign({}, responseDetail, {
            response: newResponse
        });
    }
}