/**
 * 设置表单栅格布局
 * @param  {number} col     每行的表单元素个数
 * @param  {number} colSpan 一个表单元素占几列
 * @return {object}         antd栅格布局属性
 */
export default function getGridLayout(col, colSpan) {
    colSpan = colSpan === 2 && col !== 1 ? 2 : 1;
    let ret = {};
    switch (col) {
        case 4:
            ret = {
                1: { xs: 24, sm: 12, md: 8, lg: 6, xl: 6 },
                2: { xs: 24, sm: 24, md: 16, lg: 12, xl: 12 },
            }
            break;
        case 3:
            ret = {
                1: { xs: 24, sm: 12, md: 12, lg: 8, xl: 8 },
                2: { xs: 24, sm: 24, md: 24, lg: 16, xl: 16 },
            }
            break;
        case 2:
            ret = {
                1: { xs: 24, sm: 12, md: 12, lg: 12, xl: 12 },
                2: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
            }
            break;
        case 1:
        default:
            return { span: 24 };
            break;
    }
    return ret[colSpan];
}