import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'
import { Provider } from 'react-redux';


describe('App Component', () => {
    let props;

    beforeEach(() => {
        props = {
            searchValue: '',
            robots: [],
            isPending: false,
            error: '',
            onSearchChange: () => { }
        };
    });

    it('renders without crashing', () => {
        // const tree = renderer.create(<App {...props} />)

        // expect(tree.toJSON()).toMatchSnapshot();

        const wrapper = shallow(<App {...props} />)
        expect(wrapper.length).toEqual(1);

    });
});