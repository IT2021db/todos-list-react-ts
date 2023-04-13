import React from "react";
import { Header, Wrapper } from "./styled";

interface SectionProps{
  title: string|null;
  body?: React.ReactNode;
  extraHeaderElement?: React.ReactNode;
}

const Section = ({ title, body, extraHeaderElement }:SectionProps) => (
  <Wrapper>
    <Header  >
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