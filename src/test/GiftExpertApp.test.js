import { GiftExpertApp } from "../GiftExpertApp";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";

describe("Test to GiftExpertApp component", () => {
  it("snapshot for GiftExpertApp", () => {
    const wrapper = shallow(<GiftExpertApp />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should show GiftGrid component", () => {
    const categories = ["one punch"];
    const wrapper = shallow(<GiftExpertApp defaultCategories={categories} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find("GiftGrid").length).toBe(categories.length);
  });
});
