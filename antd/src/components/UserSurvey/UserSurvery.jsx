import { connect } from 'dva';
import React, { Component } from 'react';
import SurveryContent from './SurveryContent.jsx';

class UserSurvery extends Component {

    static defaultProps = {
    }

    constructor(props) {
        super(props);
        this.state = {
            values: {},
        }
    }

    onChange = ({ id, value, addType, addValue }) => {
        // console.log(id, value, addType, addValue)
        // this.props.dispatch({
        //     type: 'UserSurvery/update',
        //     payload: {
        //         modelKey: 'Basic',
        //         modelValue: { [id]: value }
        //     }
        // })
        // this.setState({
        //     values: { ...this.state.values, [id]: value }
        // })
    }

    render() {
        return (
            <SurveryContent
                values={this.props.values}
                onChange={this.onChange}
            />
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        values: state.UserSurvery.Basic,
    }
}

export default connect(mapStateToProps)(UserSurvery);
