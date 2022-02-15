import { useState } from "react";
import { AddCategory, GiftGrid } from "./components/";

export const GiftExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);
  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      {categories.map((category) => (
        <GiftGrid category={category} key={category} />
      ))}
    </>
  );
};
