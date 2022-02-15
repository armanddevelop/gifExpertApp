import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { GiftGridItem } from "../../components";

describe("Test for GiftGridItem component", () => {
  const propsGiftItem = {
    title: "No image",
    url: "http://wwww.hola.com",
    username: "licha",
  };
  const wrapper = shallow(<GiftGridItem img={propsGiftItem} />);
  it("snapshot for the GiftGridItem component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("Should show title in the component", () => {
    const paragraph = wrapper.find("p");
    expect(paragraph.text().trim()).toBe(propsGiftItem.title);
  });
  it("Should show no title in the component", () => {
    const propsGiftItem = {
      title: "",
      url: "http://wwww.hola.com",
      username: "licha",
    };
    const wrapper = shallow(<GiftGridItem img={propsGiftItem} />);
    const paragraph = wrapper.find("p");
    expect(paragraph.text().trim()).toBe("no title");
  });
  it("Should show src and alt in the img element", () => {
    const img = wrapper.find("img");
    const { src, alt } = img.props();
    expect(src).toBe(propsGiftItem.url);
    expect(alt).toBe(propsGiftItem.username);
  });
  it("Should have className animated__fadeIn in component", () => {
    const card = wrapper.find("div");
    expect(card.prop("className")).toMatch(/animate__fadeIn/);
  });
});
