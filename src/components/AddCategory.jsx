import { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue.trim().length > 3 &&
      setCategories((category) => [inputValue, ...category]);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        placeholder="Search for a Gif"
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
