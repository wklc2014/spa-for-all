import React from 'react';
import { Row, Col } from 'antd';
import util from '../../common/util.js';
let myChart = {};

const polarIndicator = [
    { text: '设备风险', max: 100},
    { text: '关系风险', max: 100},
    { text: '交易风险', max: 100},
    { text: '自然人风险', max: 100},
    { text: '账户风险', max: 100},
    { text: '环境风险', max: 100}
]

let RadarChart = React.createClass({
    updateData(props) {
        console.log("--------Rada updaDate,props--------",props);
        const {data,totalScore} = props;
        let valueData = [0, 0, 0, 0, 0, 0];
        let tips = {};
        Object.keys(data).map((key,i) => {
            polarIndicator.map((obj,j) => {
                if(obj.text === data[key].name){
                    valueData[j] = data[key].value
                    tips[data[key].name] = data[key].tip;
                }
            })
        });

        let color='red';
        if(totalScore<50){
            color='gray';
        }

        myChart.setOption({
            tooltip : {
                trigger: 'axis',
                formatter:function(param){
                    let tipD = {};
                    param.map((obj,i) => {
                        const {tips} = obj.data;
                        if(tips){
                            tipD = tips[obj.indicator];
                        }
                    })
                    let result = param[0].value+'</br>';
                    Object.keys(tipD).map((key,i) => {
                        result += key + ':' + tipD[key] + '</br>'
                    })
                    return result;
                }
            },
            legend: {
                orient : 'vertical',
                x : 'right',
                y : 'bottom',
                data: ['实际风险值'],
                show: false
            },
            polar : [
                {
                    indicator: polarIndicator,
                    name : {
                        textStyle: {
                            fontFamily : "Microsoft YaHei"
                        }
                    }
                }
            ],
            series : [
                {
                    name: '单项得分',
                    type: 'radar',
                    itemStyle: {normal:{color:color}},
                    data : [
                        {
                            value: valueData,
                            name: '实际风险值',
                            tips
                        }
                    ]
                }
            ]
        });
    },
    componentWillReceiveProps(nextProps){
        console.log("RadarChart--------------------componentWillReceiveProps",nextProps);
        if(JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)){
            this.updateData(nextProps);
        }
    },
    componentDidMount() {
        myChart = echarts.init(document.getElementById('radar'));
        this.updateData(this.props);
    },
    render() {
        return (
            <div id="radar" style={{width: '100%',height: '400px'}}></div>
        );
    }
});

export default RadarChart;
