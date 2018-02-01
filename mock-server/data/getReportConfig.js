module.exports = {
    success: true,
    data: {
        pages: [
            {
                order: 1,
                name: 'basic',
                data: [
                    {
                        order: 1,
                        id: 'insuredName',
                        type: 'text',
                        params: {
                            label: '出险人',
                            extraProps: {

                            }
                        },
                        defaultApi: {
                            className: 'inputItem-right',
                        },
                        defaultValue: '默认张三文字比较长比较多，可能超出了',
                    },
                    {
                        order: 2,
                        id: 'reportName',
                        type: 'input',
                        params: {
                            label: '报案人姓名',
                        },
                        defaultApi: {
                            className: 'inputItem-right',
                            placeholder: '请填写报案人姓名',
                        },
                        defaultValue: '默认李四',
                    },
                    {
                        order: 3,
                        id: 'contactPhone',
                        type: 'input',
                        params: {
                            label: '联系电话',
                        },
                        defaultApi: {
                            className: 'inputItem-right',
                            placeholder: '请填写联系电话',
                        },
                        optionsApi: {
                            rules: [
                                { required: true, message: '手机号码必填' },
                            ]
                        }
                    },
                    {
                        order: 4,
                        id: 'accidentTime',
                        type: 'date',
                        params: {
                            label: '出险日期',
                        },
                        listItemApi: {
                            activeStyle: {
                                fontSize: '20px',
                            },
                            extra: '请选择出险日期',
                        },
                        defaultApi: {
                            maxDate: new Date(),
                            mode: 'date',
                        }
                    },
                    {
                        order: 5,
                        id: 'accidentDescription',
                        type: 'textarea',
                        params: {
                            label: '事故发生经过',
                            titleAlone: true,
                        },
                        defaultApi: {
                            placeholder: '请描述意外事故发生的过程，包括但不限于意外事故发生的时间、过程、人员伤亡情况等信息，最少30个字',
                            autoHeight: true,
                            rows: 4,
                            labelNumber: 6 * 34,
                            count: 1500,
                        },
                        optionsApi: {
                            rules: [
                                { required: true, message: '事故发生过程必填' },
                                { min: 30, message: '事故发生过程最少输入30个字' }
                            ]
                        },
                    }
                ]
            }
        ]
    }
}