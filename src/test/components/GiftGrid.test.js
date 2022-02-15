import { GiftGrid } from "../../components";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";
import { useFetchGift } from "../../Hooks/useFetchGif";
jest.mock("../../Hooks/useFetchGif");

describe("Test to GiftGrid Component", () => {
  const category = "one punch";
  it("snapshot for the GiftGrid component", () => {
    useFetchGift.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GiftGrid category={category} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(true);
  });
  it("should show items when images are load useFetchGift", () => {
    const gifs = [
      {
        id: 123,
        username: "creting",
        title: "euche",
        url: "https://www.hola.com",
      },
    ];
    useFetchGift.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GiftGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GiftGridItem").length).toBe(gifs.length);
  });
});
