import React from "react";
interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => (
  <header>
    <h1>{title}</h1>
  </header>
);

export default Header;
