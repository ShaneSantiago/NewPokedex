import { Input } from "@chakra-ui/react";
import React from "react";

const Filter = (props: any) => {
  return (
    <>
      <Input
        type="text"
        backgroundColor="white"
        placeholder="Pesquisar por nome"
        value={props.searchTerm}
        onChange={(e) => props.setSearchTerm(e.target.value)}
      />
    </>
  );
};
export default Filter;
