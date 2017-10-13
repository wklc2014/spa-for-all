import React, { Component } from 'react';
import { Icon, Flex, WingBlank, Button, ImagePicker, Toast } from 'antd-mobile';

const SvgCamera = require('../../../assets/svg/icon-camera.svg');

const Placeholder = ({ onChange, files, type, text }) => {
    const bgStyle = {};
    let ChildEle = null;
    if (files) {
        bgStyle.backgroundImage = `url("${files}")`;
        ChildEle = (
            <Icon
                className="icon-cross"
                type="cross-circle-o"
                onClick={(e) => onChange(e, type, 'delete')}
            />
        );
    } else {
        ChildEle = <Icon className="icon-camera" type={SvgCamera} />;
    }
    return (
        <div className="idCardPlaceholder">
            <div className="imgBox">
                <input
                    className="file"
                    type="file"
                    onChange={(e) => onChange(e, type)}
                />
                <div className={`bg${type}`} style={bgStyle}>
                    {ChildEle}
                </div>
            </div>
            <p className="text">{text}</p>
        </div>
    )
}

class ClaimStepTwo extends Component {

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            idCardFront: '',
            idCardReverse: '',
            readerError: null,
        }
    }

    onClick = () => {
        this.props.onSteps(2);
    }

    onChange = (e, type, isDelete) => {
        if (isDelete) {
            this.setState({
                [`idCard${type}`]: '',
            })
        } else {
            const file = e.target.files[0];
            const reader = new FileReader();
            if (reader) {
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    const result = e.target.result;
                    this.setState({
                        [`idCard${type}`]: result,
                    })
                }
            } else {
                Toast.info('not support FileReader');
            }
        }
    }

    render() {
        const placeholderLeftProps = {
            type: 'Front',
            text: '身份证正面',
            onChange: this.onChange,
            files: this.state.idCardFront,
        };
        const placeholderRightProps = {
            type: 'Reverse',
            text: '身份证反面',
            onChange: this.onChange,
            files: this.state.idCardReverse,
        };

        return (
            <section className="onlineClaimSubmit">
                <div className="submitContent">
                    <WingBlank>
                        <div className="sub-title">
                            请根据保险公司要求提交材料
                        </div>
                        <div className="main-title">
                            身份证
                        </div>
                        <Flex style={{ marginBottom: 16 }}>
                            <Flex.Item>
                                <Placeholder {...placeholderLeftProps} />
                            </Flex.Item>
                            <Flex.Item>
                                <Placeholder {...placeholderRightProps} />
                            </Flex.Item>
                        </Flex>
                        {/*<Flex style={{ marginBottom: 16 }}>
                            <Flex.Item>
                                <Placeholder type={1} text="身份证正面" />
                            </Flex.Item>
                            <Flex.Item>
                                <Placeholder type={2} text="身份证反面" />
                            </Flex.Item>
                            <Flex.Item>
                                <Placeholder type={2} text="身份证反面" />
                            </Flex.Item>
                        </Flex>*/}
                    </WingBlank>
                </div>
                <WingBlank>
                    <Button type="primary">
                        提交信息
                    </Button>
                </WingBlank>
            </section>
        )
    }

}

export default ClaimStepTwo
