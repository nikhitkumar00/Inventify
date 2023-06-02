import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Faq = () => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel></AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Faq;
