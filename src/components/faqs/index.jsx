import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Frame,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from "./styles/faqs";

const ToggleContext = createContext();

export default function Faqs({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Faqs.Title = function FaqsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Faqs.Frame = function FaqsFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Faqs.Item = function FaqsItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Faqs.Header = function FaqsHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="close" />
      ) : (
        <img src="/images/icons/add.png" alt="open" />
      )}
    </Header>
  );
};

Faqs.Body = function FaqsBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  /* return toggleShow ? <Body {...restProps}>{children}</Body> : null; */

  return (
    <Body className={toggleShow ? "open" : "closed"} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};