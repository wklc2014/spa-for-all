/**
 * 填写资料
 * 配置
 */
export default [
    {
        order: 1,
        id: 'accidentPerson',
        type: 'picker',
        params: {
            label: '出险人',
            data: [
                { label: '本人', value: '1', },
                { label: '配偶', value: '2', },
                { label: '父母', value: '3', },
                { label: '养父母', value: '4', },
                { label: '子女', value: '5', },
                { label: '雇佣', value: '6', },
                { label: '其他', value: '7', },
            ],
        },
        listItemApi: {
            arrow: 'down',
        },
        defaultApi: {
            title: '选择出险人',
            cols: 1,
        },
    },
    {
        order: 2,
        id: 'contactPhone',
        type: 'inputItem',
        params: {
            label: '联系电话',
        },
        defaultApi: {
            type: 'phone',
            className: 'inputItem-right',
            placeholder: '请填写电话联系电话',
        },
    },
    {
        order: 3,
        id: 'claimType',
        type: 'text',
        params: {
            label: '理赔类型',
            renderValue: (value) => <div>预计赔付金额<span className="red">{value}</span>元</div>,
        },
        listItemApi: {
            className: 'am-list-item-right-all',
            activeStyle: {
                fontSize: '20px',
            }
        }
    },
    {
        order: 4,
        id: 'claimType1',
        type: 'radio',
        params: {
            data: [
                { label: '意外医疗', value: '0' },
                { label: '死亡伤残', value: '1', tips: '您不幸发生身故伤残，请您或您的家人拨打国泰产险热线电话：400-820-2288提供一对一的人工服务，协助您完成理赔' },
            ]
        },
        defaultApi: {

        },
        listItemApi: {
            wrap: true,
            className: 'am-list-brief-all'
        }
    },
    {
        order: 5,
        id: 'textareaItem1',
        type: 'textareaItem',
        params: {
            titleAlone: true,
            label: '事故发生过程',
        },
        defaultApi: {
            placeholder: '请描述意外事故发生的过程，包括但不限于意外事故发生的时间、过程、人员伤亡情况等信息，最少30个字',
            autoHeight: true,
            rows: 6,
            labelNumber: 6 * 34,
            count: 10
        },
    }
]
