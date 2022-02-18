import { useFetchGift } from "../../Hooks/useFetchGif";
import { renderHook } from "@testing-library/react-hooks";
describe("useFecth UT for costum hooks", () => {
  const initialState = {
    data: [],
    loading: true,
  };
  it("should return initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGift(""));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(initialState.data).toEqual(data);
    expect(initialState.loading).toEqual(loading);
  });
  it("Should return data array in costum hooks and loading in false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGift("one punch")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
  });
});
