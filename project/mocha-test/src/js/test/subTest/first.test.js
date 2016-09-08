'use strict';
import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import moment from 'moment';
import First from '../../view/First.jsx';
import {Button} from 'antd';

const MyComponent = React.createClass({
  handleClick() {

  },
  render() {
    return (
        <div className="foo bar">Hello</div>
    );
  }
});

describe('<First /> component test', function () {
	const App = shallow(<First />);

	const t = ' ' + moment(new Date()).format('HH:mm:ss');

	it('closest api' + t, function () {
		const target = App.find('#targetId');
		// console.log(target.debug())
		const h4 = target.closest('.title');
		const h5 = target.closest('.sectionWraper');
		// console.info('h4 text : ', h4.debug());
		// console.info('h5 text : ', h5.debug());
	})
	it('contains api' + t, function () {
		const ButtonWraper = App.find('#buttonWraper');
		expect(App.contains(ButtonWraper.get(0))).to.equal(true);
	})
	it('containsMatchingElement api' + t, function () {
		const ButtonWraper = App.find('#buttonWraper');
		const a = App.find('.sectionWraper').find('div');
		expect(a).to.have.length(0)
		expect(App.containsMatchingElement(a.get(0))).to.equal(false);
	})
	it('test', function () {
		const wrapper = shallow(<MyComponent />);
		const div0 = wrapper.find('div').get(0);
		const div1 = wrapper.find('div').get(1);
		const div2 = wrapper.find('div').get(2);
		// console.log(wrapper.find('div').debug())
		// expect(wrapper.containsAnyMatchingElements(
		//   [div2]
		// )).to.equal(true);
	})
	it('context', function () {
		const wrapper = shallow(
		  <MyComponent foo={ 90 } />,
		  { context: { foo: 10 } }
		);
		// console.log(wrapper.context())
		// expect(wrapper.context().foo).to.equal(10);
		// expect(wrapper.context('foo')).to.equal(10);
	})


	it('equals' + t, function () {
		const wrapper = shallow(<MyComponent />);
		expect(wrapper.equals(<div className="foo bar">Hello</div>)).to.equal(true);
	})


})