'use strict';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

//导出加一的方法
export function increment(number) {
    return {
        type: INCREMENT_COUNTER,
        number
    }
}
//导出减一的方法
export function decrement(number) {
    return {
        type: DECREMENT_COUNTER,
        number
    }
}
//导出奇数加一的方法，该方法返回一个方法，包含dispatch和getState两个参数，dispatch用于执行action的方法，getState返回state
export function incrementIfOdd(number) {
    return (dispatch, getState) => {
        //获取state对象中的counter属性值
        const { counter } = getState()

        //偶数则返回
        if (counter % 2 === 0) {
            return
        }
        //没有返回就执行加一
        dispatch(increment(number))
    }
}
//导出一个方法,包含一个默认参数delay,返回一个方法,一秒后加一
export function incrementAsync(number, delay = 1000) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment(number))
        }, delay)
    }
}

//这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export
