import { AddCategory } from "../../components";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";

describe("Test to AddCategory component", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  it("snapshot for the AddCategory component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  /*this should be remove*/
  it("should change the input", () => {
    const input = wrapper.find("input");
    const value = "licha";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text()).toBe(value);
  });
  it("not send info to giphy onSumbit", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
  it("sholud call setCategories and clean input", () => {
    const value = "lich";
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
