export const detail_1 = [
    {
        order: 1,
        type: 'text',
        id: 'name',
        params: {
            label: '驾乘意外险',
            brief: '有效期：2017-10-17 00:00:00 - 2017-10-17 00:00:00'
        },
        listItemApi: {
            arrow: 'horizontal',
            className: 'am-list-brief-all',
            wrap: true
        }
    }
];

export const detail_2 = [
    {
        order: 1,
        type: 'text',
        id: 'reportNumber',
        params: {
            label: '报案号',
            labelRender: (text) => <div className="gray">{text}</div>,
        },
        listItemApi: {
            arrow: 'horizontal',
            className: 'am-list-item-right-all',
        }
    },
    {
        order: 2,
        type: 'text',
        id: 'reportDate',
        params: {
            label: '报案时间',
            labelRender: (text) => <div className="gray">{text}</div>,
        },
        listItemApi: {
            arrow: 'horizontal',
            className: 'am-list-item-right-all',
        }
    },
    {
        order: 3,
        type: 'text',
        id: 'claimAmount',
        params: {
            label: '索赔金额',
            labelRender: (text) => <div className="gray">{text}</div>,
        },
        listItemApi: {
            arrow: 'horizontal',
            className: 'am-list-item-right-all',
        }
    },
];

export const detail_3 = [
    {
        order: 3,
        type: 'text',
        id: 'claimInfo',
        params: {
            label: '理赔申请信息',
            labelRender: (text) => <div className="gray">{text}</div>,
        },
        listItemApi: {
            arrow: 'horizontal',
        }
    },
];

export const detail_4 = [
    {
        order: 3,
        type: 'text',
        id: 'claimRecord',
        params: {
            label: '相关理赔记录',
            labelRender: (text) => <div className="gray">{text}</div>,
        },
        listItemApi: {
            arrow: 'horizontal',
        }
    },
]