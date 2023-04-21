import React from "react";
import { StyledContainer } from "./styled";

const Container = ({children}: {children: React.ReactNode}) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
// The Container function in this code is a React component that takes a single argument, 
//an object with a property called children of type React.ReactNode.

// The Container function then returns a JSX element that renders the StyledContainer 
//component and passes its children prop to it. This allows any child components or elements 
//that are nested inside the Container component to be rendered within the StyledContainer.

// In summary, the Container function creates a React component that wraps its children within 
//a styled container component.