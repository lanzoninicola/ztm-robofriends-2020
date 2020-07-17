import React from 'react'
import { shallow } from 'enzyme'
import CounterButton from './CounterButton'

let wrapper;

beforeAll(() => wrapper = shallow(<CounterButton />))


describe('CounterButton test', () => {
    test('is component is rendered', () => {
        expect(wrapper.length).toEqual(1);
    })

    test('is there state for the counter', () => {
        expect(wrapper).toHaveState({ counter: 0 })
    })

    test('increase function increase the state', () => {
        const instance = wrapper.instance();
        instance.increaseCount();
        expect(instance.state.counter).toEqual(1);
    })

    test('Test click event', () => {
        const instance = wrapper.instance();

        // with this command simulating the click of button
        wrapper.find('#button').simulate('click');

        // test the result after the click of button
        expect(instance.state.counter).toBeGreaterThan(0);
    });
})

