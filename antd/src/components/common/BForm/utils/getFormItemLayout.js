/**
 * 获取表单元素布局
 * @param  {number} colSpan   该表单元素横跨几列，默认为1，可填值1， 2
 * @param  {number} labelSpan 表单元素label横占 24 份中多少份，默认 6
 * @param  {string} layout    表单布局类型
 * @return {object}           antd组件的栅格化布局属性
 */
export default function getFormItemLayout(col, colSpan, layout) {

    if (layout !== 'horizontal') {
        return { labelCol: {}, wrapperCol: {} };
    }

    colSpan = colSpan === 2 && col !== 1 ? 2 : 1;
    let ret = {};
    switch (col) {
        case 4:
            ret = {
                1: {
                    labelCol: { xs: 8, sm: 8, md: 8, lg: 8, xl: 8 },
                    wrapperCol: { xs: 16, sm: 16, md: 16, lg: 16, xl: 16 }
                },
                2: {
                    labelCol: { xs: 8, sm: 4, md: 4, lg: 4, xl: 4 },
                    wrapperCol: { xs: 16, sm: 20, md: 20, lg: 20, xl: 20 }
                },
            }
            break;
        case 3:
        case 2:
            ret = {
                1: {
                    labelCol: { xs: 6, sm: 6, md: 6, lg: 6, xl: 6 },
                    wrapperCol: { xs: 18, sm: 18, md: 18, lg: 18, xl: 18 }
                },
                2: {
                    labelCol: { xs: 6, sm: 3, md: 3, lg: 3, xl: 3 },
                    wrapperCol: { xs: 18, sm: 21, md: 21, lg: 21, xl: 21 }
                },
            }
            break;
        case 1:
        default:
            ret = {
                1: {
                    labelCol: { xs: 4, sm: 4, md: 4, lg: 4, xl: 4 },
                    wrapperCol: { xs: 18, sm: 18, md: 18, lg: 18, xl: 18 }
                }
            }
            break;
    }
    return ret[colSpan];
}