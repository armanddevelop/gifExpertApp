import { useState, useEffect } from "react";
import { getGifts } from "../utils/Apis";

export const useFetchGift = (category) => {
  const [stateData, setStateData] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGifts(category).then((data) => {
      setStateData({
        data,
        loading: false,
      });
    });
  }, [category]);
  return stateData;
};
