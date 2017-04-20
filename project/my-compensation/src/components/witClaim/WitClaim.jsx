import React from 'react';
import { Row, Col, Tabs, Popover, Input, Button, Tooltip, Icon, Form} from 'antd';
import classNames from 'classnames';
import CardTitle from '../common/CardTitle.jsx';
import GaugeChart from './GaugeChart.jsx';
import RadarChart from './RadarChart.jsx';
import Explain from './Explain.jsx';
import Tagging from './Tagging.jsx';
import RefLink from './RefLink.jsx';
// import RelationChart from './RelationChart';
import {sidebarConfig} from '../common/const.js';
import CONFIG from '../common/config/index.js';

const TabPane = Tabs.TabPane;
const InputGroup = Input.Group;
const dwkndHost = CONFIG.DWKND

let WitClaim = React.createClass({
    getInitialState() {
        return {
            isHide: false,
            iconType: 'arrow-salt',
            height: 'auto'
        };
    },
    componentDidMount() {
        const riskTaskId = this.props.params.riskTaskId || this.props.riskTaskId;
        if(riskTaskId){
            this.setState({
                    riskTaskId:riskTaskId
            });
            this.props.analyzeFraudRisk(riskTaskId);
        }
    },
    reAnalyzeFraudRisk() {
        const riskTaskId = this.props.params.riskTaskId || this.props.riskTaskId;
        this.setState({
                riskTaskId:riskTaskId
        });
        this.props.reAnalyzeFraudRisk(riskTaskId);
    },
    analyzeFraudRisk(){
        const riskTaskId = $.trim($("#riskId").val());
        this.setState({
                riskTaskId:riskTaskId
        });
        this.props.analyzeFraudRisk(riskTaskId);

        this.props.queryModelEvaluation(riskTaskId,"反骗赔个体模型");
        this.props.queryModelEvaluation(riskTaskId,"反骗赔群体模型");
    },
    switchSidebar() {
        if(this.state.isHide){
            $(".headerContainer").show();
            $("#mainWraperContentSubject").css("paddingTop","90px");
            $("#sidebarContentSubject").show();
            this.setState({
                isHide: false,
                iconType: 'arrow-salt'
            })
        }else{
            $(".headerContainer").hide();
            $("#mainWraperContentSubject").css("padding","0");
            $("#sidebarContentSubject").hide();
            this.setState({
                isHide: true,
                iconType: 'shrink'
            })
        }
    },
    changeTabPosition(tabPosition) {
        console.log("======================",tabPosition);
        if(tabPosition==2){
            let iframeObj = document.getElementById("groupIframe");
            if(iframeObj){
                console.log("**********************",iframeObj.src);
                if(this.state.groupUrl!=iframeObj.src){
                    console.log("********groupUrl reload****",iframeObj.src);
                    iframeObj.src = iframeObj.src;
                    this.state.groupUrl = iframeObj.src;
                }
            }
        }
    },
    onClickTab(v,e) {
        $("[id^='btn_']").removeClass("btn-active");
        $("#btn_"+v).toggleClass("btn-active");
        $("[id^='tab_']").css("left","-3000px").css("top","-3000px");
        $("#tab_"+v).css("left","0").css("top","0");

        console.log('==========================================',$("#card-tag").outerHeight(true));

        let contentHeight = 'auto';

        if(v === '2') {
            //card-tag 高度 + iframe高度 + #cardForce下外边距 + 上下内边距 + 下边框
            contentHeight = $("#card-tag").outerHeight(true) + 972 + 16 + (20 * 2) + 1 + 'px'
        }
        this.setState({
            height: contentHeight
        })

    },
    render() {
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",dwkndHost);
        const text = <span>标题</span>;
        const riskTaskId = this.state.riskTaskId||this.props.params.riskTaskId ;

        console.log("this.state.riskTaskId-----------------",riskTaskId);
        const inputPlaceholder = riskTaskId || "请输入案件ID";
        const content = (
            <Form inline>
                <Form.Item>
                    <Input id="riskId" size="default" placeholder={inputPlaceholder} style={{width:125}} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" size="default" onClick={this.analyzeFraudRisk}>查询</Button>
                </Form.Item>
            </Form>
        );
        const {totalScore, singleScore, explain, groupStartAccount,caseAccountInfo} = this.props;
        console.log("xxxxxxxxxxxxxxxxxxxxxxx",caseAccountInfo);
        //var dwkndHost = "https://dwknd.alipay.com";
        var accounts = JSON.stringify(caseAccountInfo);
        console.log("yyyyyyyyyyyyyyyyy",accounts);
        const groupUrl = dwkndHost+"/insurance/group/groupAnalyze.htm?startNodeValue=" + groupStartAccount+"&bizCode=insurance&startNodeType=1&hasAbossPer=true&loginAdPicLink=%23&loginAdLink=%23&authType=CERT&loginType=0&_input_charset=utf-8&caseAccountInfo="+encodeURI(accounts);

        // const groupUrl = "https://dwknd.test.alipay.net/insurance/group/groupAnalyze.htm?hasAbossPer=true&_input_charset=utf-8&startNodeValue=2088022998159832&loginAdPicLink=%23&caseAccountInfo=%5B%5B%222088022998159832%22%2C%22%B2%DC%B8%A3%B7%BC%22%2C%22%D6%F7%B6%AF%22%2C%22%B1%BB%B5%C1%D5%DF%22%5D%5D&loginAdLink=%23&bizCode=insurance&startNodeType=1&authType=CERT&loginType=0&enctraceid=YoKUqANW1R1FGcIMFRtrob0cZ_i8e7u510POW6r1YSM";

        const tabStyle = {
            borderBottom: '1px solid #ddd',
            background: '#fff',
            boxShadow: '2px 2px 4px #ddd',
        }
        const liStyle = {
            display: 'inline-block',
            padding: '5px 20px',
            fontSize: '14px'
        }

        const aStyle = {
            display: 'block',
            width: '100%',
            height: '100%',
            padding: '4px 20px'
        }

        let conStyle = {
            width: '100%'
        }

        const routeEnter = this.props.routeParams.enter.toLowerCase();
        const routeName = routeEnter.indexOf('/') !== -1 ?  routeEnter.split('/')[0] : routeEnter;
        if(routeName !== 'witclaim') {
            conStyle = {
                width:'100%',
                padding: '18px'
            }
        }

        return (
            <div style={conStyle} className="chartTabs" id="chartTabs">
                <ul style={tabStyle} >
                    <li id="btn_1" style={liStyle} className="btn-active">
                        <a style={aStyle} href="javascript:;" onClick={this.onClickTab.bind(this, '1')}>骗赔评分</a>
                    </li>
                    <li id="btn_2" style={liStyle}>
                        <a style={aStyle} href="javascript:;" onClick={this.onClickTab.bind(this, '2')}>群体分析</a>
                    </li>
                </ul>
                <div style={{position:'relative', height:this.state.height}}>
                    <div id="tab_1"  style={{width:'100%',position:'relative',left:0,top:0}}>
                        <div className="cardWraper">
                            <Row style={{borderRadius: '0 0 4px 4px'}}>
                                {/*
                                <RefLink rel={this.reAnalyzeFraudRisk}/>
                                */}
                                <Col span={24} style={{zIndex: 999}}>
                                    {/*
                                    <Popover placement="bottomLeft" title="" content={content} trigger="click">
                                        <Button type="ghost">案件编号</Button>
                                    </Popover>
                                    */}
                                    {content}
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <GaugeChart data={totalScore} totalScore={totalScore}/>
                                </Col>
                                <Col span={12}>
                                    <RadarChart data={singleScore} totalScore={totalScore}/>
                                </Col>
                            </Row>
                            {/*
                            <Row>
                                <Col span={12}>
                                    <RelationChart />
                                </Col>
                            </Row>
                            */}
                        </div>

                        <Row className="cardWraper">
                            <Explain data={explain} totalScore={totalScore}/>
                        </Row>
                        <Row className="cardWraper">
                            <Tagging riskTaskId={riskTaskId} modelName="反骗赔个体模型"/>
                        </Row>
                    </div>
                    <div id="tab_2" style={{width:'100%',position:'absolute',left:-3000,top:-3000}}>
                        <Row className="cardWraper" id="cardForce" style={{borderRadius: '0 0 4px 4px'}}>
                            <div className="HideSideBar">
                                <Button onClick={this.switchSidebar} ><Icon type={this.state.iconType} /></Button>
                            </div>
                            <div style={{fontSize: 0, lineHeight: 0}}>
                                <iframe
                                    src={groupUrl}
                                    id="groupIframe"
                                    frameBorder="0"
                                    width="100%"
                                    height="972px"
                                    scrolling="auto"
                                ></iframe>
                            </div>
                        </Row>
                        <Row className="cardWraper" id="card-tag">
                            <Tagging riskTaskId={riskTaskId} modelName="反骗赔群体模型"/>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
});

export default WitClaim;
