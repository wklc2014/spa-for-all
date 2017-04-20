import React from 'react';
import {Popover, Button, Icon} from 'antd';
const content = (
  <div>
    <Button>重新计算</Button>
  </div>
);
const text = <span>模型计算时间：2016-11-02</span>;
const RefLink = React.createClass({
    render() {
        const fixContent = {
            zIndex:9999
        }
        return (
            <Popover placement="left" overlayStyle={fixContent} title={text} content={content} trigger="hover">
                <div className="HideSideBar">
                    <Button><Icon type="reload" /></Button>
                </div>
            </Popover>
        );
    }
});

export default RefLink;
