import { useState } from "react";
import { AddCategory, GiftGrid } from "./components/";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["onepunch"]);
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
