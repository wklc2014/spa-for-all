/**
 * 控制路由权限
 */
export default function permission(nextState, replace, next) {
    //获取传输过来的数据
    // console.log(2121)
    if (false) {
        serverAuth(query.qsparam)
            .then(
            () => next(), //成功,通过next()成功跳转
            () => {
              replace('/error') //重定向
              next();
            }
        )
    } else {
        // replace('/error')
        next();
    }
}
