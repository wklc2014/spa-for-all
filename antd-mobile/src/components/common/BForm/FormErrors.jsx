import { Component } from 'react';
import { Toast } from 'antd-mobile';

const FormErrors = Base => class extends Component {

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            errors: null,
        }
    }

    componentWillReceiveProps(nextProps) {
        const { id } = nextProps;
        const { getFieldError } = nextProps.form;
        const errors = getFieldError(id);
        this.setState({ errors });
    }

    onErrorClick = (e) => {
        Toast.info(this.state.errors[0]);
    }

    render() {
        const commonProps = {
            ...this.props,
            error: !!this.state.errors,
            onErrorClick: this.onErrorClick,
        }

        return <Base {...commonProps} />
    }

}

export default FormErrors;

