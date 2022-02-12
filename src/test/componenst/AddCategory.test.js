import { AddCategory } from "../../components";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Test to AddCategory component", () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);
  it("snapshot for the AddCategory component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
