import React, { Component } from 'react';
import { Button } from 'antd';

class App extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(111);
    }

    render() {
        return (
            <div>
                <p>
                    this is app component
                </p>
                <p>
                    <Button
                        type="primary"
                        onClick={this.handleClick}
                    >
                        按钮
                    </Button>
                </p>
            </div>
        )
    }
}

export default App;
