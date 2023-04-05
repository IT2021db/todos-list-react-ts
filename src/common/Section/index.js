import React from "react";
import { Header, Wrapper } from "./styled";

const Section = ({ title, body, extraHeaderElement }) => (
  <Wrapper>
    <Header header >
      <h2 >{title}</h2>
      <div>
        {extraHeaderElement}
      </div>
    </Header>
    <div>
      {body}
    </div>
  </Wrapper>
);

export default Section;