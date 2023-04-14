import React from "react";
import { Header, Wrapper } from "./styled";

interface SectionProps {
  title: string | null;
  body?: React.ReactNode;
  extraHeaderElement?: React.ReactNode;
}

const Section = ({ title, body, extraHeaderElement }: SectionProps) => (
  <Wrapper>
    <Header>
      <h2>{title}</h2>
      <div>{extraHeaderElement}</div>
    </Header>
    <div>{body}</div>
  </Wrapper>
);

export default Section;

// React.ReactNode is a type in React that represents the possible types
// that a React component can return.
// It is a union type that includes all the possible return types
// of a React component, such as elements, fragments, strings, numbers,
// booleans, arrays, and null or undefined.

// The React.ReactNode type is used in TypeScript to ensure that
//  a component's return value conforms to the expected types in the React element tree.
