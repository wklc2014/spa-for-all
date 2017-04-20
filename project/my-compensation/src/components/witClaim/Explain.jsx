import React from 'react';
import { Row, Col, Icon } from 'antd';
import util from '../../common/util.js';

let Explain = React.createClass({
    render() {
        const {data,totalScore} = this.props;
        const comStyle = {
            backgroundColor:'#EAEAEA',
            borderRadius:'5px',
            padding:'10px',
            lineHeight:'24px',
            marginTop:10,
            marginBottom:10
        };

        let isShow = (totalScore>50) || (totalScore==2) || (totalScore==3) || (totalScore==4);

        const elementData = Object.keys(data).map((obj, i) => {
            const nameValue = data[obj].name;
            let descValue = data[obj].desc;
            let results = [];
            if (nameValue === '疑似亲友操作交易') {
                const styles = {
                    fontWeight: 'bold',
                    fontSize: '1.07em'
                }
                const values = descValue.split(';');
                values.forEach((v, i) => {
                    if(!util.isEmptyObject($.trim(v))) {
                        let deal = v.split('#')[0];
                        let friends = v.split('#')[1].replace(/\|/g,',');
                        results.push(
                            <div style={{marginBottom: 8, lineHeight: '1.7em'}} key={i}>
                                <div>
                                    <span style={styles}>交易：</span>{deal}
                                </div>
                                <div>
                                    <span style={styles}>亲友：</span>{friends}
                                </div>
                            </div>
                        )
                    }
                })
                descValue = results;
            }

            return (
                <Col key={i} span={9} offset={2} style={comStyle}>
                    <div style={{position:'relative'}}>
                        <i style={{position:'absolute',top:'-2px',left:'20px'}} className="has-error has-feedback" />
                        <span style={{paddingLeft:20,display:'inline-block'}}>
                            <h3>{nameValue}</h3>
                            <div>{descValue}</div>
                        </span>
                    </div>
                </Col>
            )
        });

        return (
            <div>
                <Row>
                    {isShow ? elementData : ""}
                </Row>
            </div>
        );
    }
});

export default Explain;
