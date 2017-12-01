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
        // console.log({ id, value, addType, addValue })
        // this.props.dispatch({
        //     type: 'UserSurvery/update',
        //     payload: {
        //         modelKey: 'Basic',
        //         modelValue: { [id]: value }
        //     }
        // });
        this.setState({
            values: { ...this.state.values, [id]: value }
        });
    }

    onReset = () => {
        this.setState({
            values: {},
        })
    }

    render() {
        const { values } = this.state;
        // const { values } = this.props;
        return (
            <SurveryContent
                values={values}
                onChange={this.onChange}
                onReset={this.onReset}
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
