export default {
    handleSave(e) {
        e.preventDefault();
        const ret = this.props.form.getFieldValue('accidentUserName');
        // this.props.form.validateFields((errors, values) => {
        //     if (errors) {
        //         console.log(errors);
        //     }
        //     console.log(values);
        // });
    },
    handleInputChange(value, id) {
        const newState = {
            isShowSaveBtn: true
        };
        newState[id] = value;
        this.setState(newState);
    }
};
