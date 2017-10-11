import { Button, Form, Input, Modal } from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;

const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };

let Example = React.createClass({
  getInitialState() {
    return {
        visible: true,
        values: {}
     };
  },

  handleSubmit() {
    console.log(this.props.form.getFieldsValue());
    this.hideModal();
  },

  onChange(id, value) {
    this.setState({
        values: {...this.state.values, [id]: value}
    })
  },

  showModal() {
    this.setState({ visible: true });
  },

  hideModal() {
    this.setState({ visible: false });
  },

  render() {
    const { values } = this.state;


    return (
      <div>
        <Button type="primary" onClick={this.showModal}>点击有惊喜</Button>
        <Modal title="登录" visible={this.state.visible} onOk={this.handleSubmit} onCancel={this.hideModal}>


            <Example1
                onChange={this.onChange}
                value={values.password}
            />
        </Modal>
      </div>
    );
  },
});

// Example = createForm()(Example);

export default Example;

let Example1 = React.createClass({

    render(){
    const { getFieldProps } = this.props.form;
    const value = this.props.value;
       return (
        <FormItem
            {...formItemLayout}
          label="密码"
        >
          <Input {...getFieldProps('password', {
            // onChange: (e) => {
            //     this.props.onChange('password', e.target.value);
            // }
        })} type="input" autoComplete="off" value={value}
          onChange={(e) => {
            this.props.onChange('password', e.target.value);
          }}
          />
        </FormItem>
    )
    }
})

Example1 = createForm()(Example1);