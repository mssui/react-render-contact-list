import React from 'react';
import { shallow, mount } from 'enzyme';
import { ContactDetails } from './ContactDetails';
import App from "./App"

describe('App rendering', () => {
    it('renders the app', () => {
        const wrapper = shallow(<App />);
        const header = <h4>CONTACTS</h4>;
        expect(wrapper.contains(header)).toEqual(true);
    });
})

describe('Component tests', () => {
    it('renders without crashing', () => {
        const props = {
            constacts: [{ name: "asli", userName: "asli", email: "something", phone: "4545", website: "www.asli.com" }, { name: "hello", userName: "hellotest", email: "something@something", phone: "6655", website: "www.hello.com" }],
            index: 1
        }
        const wrapper = mount(<ContactDetails contacts={props.constacts} index={props.index} />);
        expect(wrapper.find('li').length).toBe(6)
    });
})