import React, { Component } from 'react';
import { Drawer, List, NavBar } from 'antd-mobile';

class Assess extends Component {

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
    }

    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open  });
    }

    render() {
        const arrays = [...Array(20).keys()];
        const sidebar = (
            <List>
                {arrays.map((v, i) => {
                    if (i === 0) {
                        return (
                            <List.Item
                                key={i}
                                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                                multipleLine
                            >
                                Category
                            </List.Item>
                        )
                    }
                    return (
                        <List.Item
                            key={i}
                            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                        >
                            Category
                        </List.Item>
                    )
                })}
            </List>
        );

        return (
            <div className="fullScreen">
                <NavBar iconName="ellipsis" onLeftClick={this.onOpenChange}>Basic</NavBar>
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight - 200 }}
                    enableDragHandle
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange }
                    position="right"
                >
                    Click upper-left corner icon
                </Drawer>
                <div style={{ height: 1000 }}>

                </div>
            </div>
        );
    }

}

export default Assess;
