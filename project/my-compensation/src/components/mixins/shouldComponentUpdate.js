export default {
    shouldComponentUpdate(nextProps, nextState) {
        const oldProps = JSON.stringify(this.props);
        const oldState = JSON.stringify(this.state);
        const newProps = JSON.stringify(nextProps);
        const newState = JSON.stringify(nextState);
        return oldProps !== newProps || oldState !== newState;
    }
}