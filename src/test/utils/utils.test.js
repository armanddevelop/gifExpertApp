import { getGifts, cleanData } from "../../utils/Apis";

describe("Unit Test to utils js file fetch", () => {
  jest.setTimeout(8000);
  test("getGifts function should have 10 items", async () => {
    const gifs = await getGifts("demonslayer");
    expect(gifs.length).toBe(10);
  });
  test("getGifts function should have 0 item", async () => {
    const gifs = await getGifts("");
    expect(gifs.length).toBe(0);
  });
});
describe("Unit Test to cleanData", () => {
  const testObj = [
    {
      id: "123",
      username: "licha",
      title: "hi",
      images: {
        downsized_medium: {
          url: "http://www.licha.com",
        },
      },
    },
  ];
  const gifs = cleanData(testObj);
  expect(gifs.length).toBe(1);
});
