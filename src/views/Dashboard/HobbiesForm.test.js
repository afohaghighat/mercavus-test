import React from "react";
import { shallow } from "enzyme";
import HobbiesForm from "./HobbiesForm";

const setUp = (props = {}) => {
    return shallow(<HobbiesForm {...props} />);
};

const findByTestAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
};

describe("Hobbies From", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it("Should render without errors", () => {
        const wrapper = findByTestAttr(component, "hobbies-form-wrapper");
        expect(wrapper.length).toBe(1);
    });

    it("Should render the select input for passion levels", () => {
        const wrapper = findByTestAttr(component, "passion-select-input");
        expect(wrapper.length).toBe(1);
    });

    it('should render the hobby title input', () => {
        const wrapper = findByTestAttr(component, "hobby-title-input")
        expect(wrapper.length).toBe(1);
    });
    
    it('should render the hobby duration input', () => {
        const wrapper = findByTestAttr(component, "hobby-duration-input")
        expect(wrapper.length).toBe(1);
    });
    
    it('should render the hobby add button', () => {
        const wrapper = findByTestAttr(component, "hobby-add-btn")
        expect(wrapper.length).toBe(1);
    });
});
