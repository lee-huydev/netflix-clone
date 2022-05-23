import React from "react";
import faqsData from "../fixtures/faqs.json";
import { Faqs } from "../components";

export default function FaqsContainer() {
  return (
    <Faqs>
      <Faqs.Title>Frequently Asked Questions</Faqs.Title>
      <Faqs.Frame>
        {faqsData.map((item) => (
          <Faqs.Item key={item.id}>
            <Faqs.Header>{item.header}</Faqs.Header>
            <Faqs.Body>{item.body}</Faqs.Body>
          </Faqs.Item>
        ))}
      </Faqs.Frame>
    </Faqs>
  );
}
