/**
 * 计算理赔金额
 */
import _ from 'underscore';
import {tagsListChoose} from './index.js';

function countAmount(targetData) {
    const array = [...targetData];
    let total = 0;
    array.some((val, i) => {
        // 交易金额
        const amount = val.amount;
        // 交易标签列表
        const tagsArray = val.tagList;
        if (tagsArray.length) {
            // 有标签时
            // 查找 99 的错误标签
            const tagsArrayError = tagsArray.filter(v => tagsListChoose[v].countType === '99');
            if (tagsArrayError.length) {
                total = 0;
                return true;
            }
            const tagsArrayType = []; //标签类型集合
            // 过滤出 100 的忽略标签
            tagsArray.filter(v => {
                return tagsListChoose[v].countType !== '100';
            }).forEach(v => {
                tagsArrayType.push(tagsListChoose[v].countType);
            })
            // 对计算类型集合去重
            const tagsArrayUniqType = _.uniq(tagsArrayType);
            if (tagsArrayUniqType.length) {
                // 该交易有非忽略标签
                if (tagsArrayUniqType.length === 1) {
                    // 标签类型一致
                    if (tagsArrayUniqType[0] === '1') {
                        total += amount;
                    } else if (tagsArrayUniqType[0] === '-1') {
                        total -= amount;
                    }
                } else {
                    // 标签类型不一致
                    total = 0;
                    return true;
                }
            }
            return false;
        } else {
            // 无标签时
            total += amount;
        }
    });
    return total;
}
export default countAmount;
