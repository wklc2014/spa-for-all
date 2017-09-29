import React, { Component } from 'react';
import SurveryContent from './SurveryContent.jsx';

class UserSurvery extends Component {

    static defaultProps = {
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    onSubmit = () => {
        console.log(this);
    }

    onChange = ({ id, value, type, addValue }) => {
        const newValue = { [id]: value };
        this.setState(newValue);
    }

    // values={this.state}

    render() {
        return (
            <SurveryContent
                ref="contents"
                onChange={this.onChange}
                onSubmit={this.onSubmit}
            />
        )
    }
}

export default UserSurvery;
