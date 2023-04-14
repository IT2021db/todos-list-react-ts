import React from "react";
import { StyledContainer } from "./styled";

const Container = (props: any) => (
  <StyledContainer>{props.children}</StyledContainer>
);

export default Container;
