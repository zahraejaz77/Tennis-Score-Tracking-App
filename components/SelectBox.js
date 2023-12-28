import { Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;

export default function SelectBox() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <Select value={selectedOption} onChange={handleOptionChange}>
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  );
}
