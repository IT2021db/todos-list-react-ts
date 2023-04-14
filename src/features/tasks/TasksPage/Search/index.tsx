import React, { ChangeEvent } from "react";
import { Wrapper } from "./styled";
import Input from "../../Input";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";

export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = (event: ChangeEvent<HTMLInputElement> | any) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: event.target.value.trim() !== "" ? event.target.value : undefined,
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
// The ChangeEvent interface is generic, with the type parameter representing 
// the type of the target property. In this case, the target property is of type HTMLInputElement, 
// so the type parameter is HTMLInputElement.