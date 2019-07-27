import React from "react";
import { shallow } from "enzyme";
import DashboardLayout from "./DashboardLayout";

const setUp = (props = {}) => {
    return shallow(<DashboardLayout {...props} />);
};

const findByTestAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
};

describe('Dashboard Layout', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('should render the page wrapper', () => {
        const wrapper = findByTestAttr(component, "page-wrapper")
        expect(wrapper.length).toBe(1);
    });

    it('should render the div holding the main section', () => {
        const wrapper = findByTestAttr(component, "main-section")
        expect(wrapper.length).toBe(1);
    });
});