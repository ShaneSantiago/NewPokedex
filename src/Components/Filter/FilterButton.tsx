import { Select } from "@chakra-ui/react";
import React from "react";
import { capitalizeFirstLetters } from "../Uteis/formatText";

const FilterButton = (props: any) => {
  const handleSelectChange = (e: any) => {
    const selectedValue = e.target.value;
    const newFilterType = selectedValue === "" ? null : selectedValue;
    props.setFilterType(newFilterType);
  };

  return (
    <Select
      onChange={handleSelectChange}
      value={props.filterType === null ? "" : props.filterType}
      backgroundColor="white"
    >
      <option value="">Todos</option>
      {props.uniqueTypes.map((type: any) => (
        <option key={type} value={type}>
          {capitalizeFirstLetters(type)}
        </option>
      ))}
    </Select>
  );
};

export default FilterButton;
