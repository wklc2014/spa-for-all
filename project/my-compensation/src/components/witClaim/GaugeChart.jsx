import React from 'react';
import { Row, Col } from 'antd';

let myChart = {};

let GaugeChart = React.createClass({
    componentWillReceiveProps(nextProps){
        if(JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)){
            this.updateData(nextProps.data);
        }
    },
    componentDidMount() {
        myChart = echarts.init(document.getElementById('gauge'));
        this.updateData(this.props.data);
    },
    updateData(data){
        myChart.setOption({
            tooltip : {
                formatter: "骗赔嫌疑分: {c}"
            },
            series : [
                {
                    name:'案件反骗赔',
                    type:'gauge',
                    axisLine: {            // 坐标轴线
                        lineStyle: { 
                            color: [[0.1, '#228b22'],[0.9, '#48b'],[1, '#ff4500']], 
                            width: 15
                        }
                    },
                    title : {
                        show : true,
                        textStyle: {
                            fontFamily : 'Microsoft YaHei'
                        }
                    },
                    detail : {formatter:'{value}'},
                    data:[{value: data, name: '案件反骗赔'}]
                }
            ]
        });
    },
    render() {
        return (
            <div id="gauge" style={{width: '100%',height: '400px'}}></div>
        );
    }
});

export default GaugeChart;
