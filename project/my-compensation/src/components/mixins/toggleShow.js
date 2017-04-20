export default {
    handleShow() {
        const {isVisible} = this.state;
        this.setState({
            isVisible: !isVisible
        });
    }
};
