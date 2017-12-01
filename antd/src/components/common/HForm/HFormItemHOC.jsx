import React, { Component } from 'react';
import lodash from 'lodash';

export default function HFormItemHOC(Base) {

    return class HOC extends Component {

        shouldComponentUpdate(nextProps, nextState) {
            const { update } = nextProps;
            const isEqualProps = lodash.isEqual(nextProps, this.props);
            if (isEqualProps && !update) {
                return false;
            }
            return true;
        }

        render() {
            return <Base { ...this.props } />
        }
    }

}
