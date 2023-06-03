import 'react-accessible-accordion/dist/fancy-example.css';
import './Faq.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";



const Faq = () => {
  return (
    <div className="wrapper_faq">
        <div className="header_faq">FAQs</div>
         <div className="info_faq">

            <Accordion className='container_faq'>
            < AccordionItem className='item_faq'>
                        < AccordionItemHeading className='head_faq' >
                            <AccordionItemButton className='button_faq'>
                            What is the purpose of this website ?

                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className='content_faq'>
                            <p className='desc_faq'>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    < AccordionItem className='item_faq'>
                        < AccordionItemHeading className='head_faq' >
                            <AccordionItemButton className='button_faq'>
                            Is data on this website secure ?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className='content_faq'>
                            <p className='desc_faq'>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    
                    < AccordionItem className='item_faq'>
                        < AccordionItemHeading className='head_faq' >
                            <AccordionItemButton className='button_faq'>
                            How do I add custom fields to my table ? 
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className='content_faq'>
                            <p className='desc_faq'>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    < AccordionItem className='item_faq'>
                        < AccordionItemHeading className='head_faq' >
                            <AccordionItemButton className='button_faq'>
                            How can I get technical support ?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className='content_faq'>
                            <p className='desc_faq'>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    < AccordionItem className='item_faq'>
                        < AccordionItemHeading className='head_faq' >
                            <AccordionItemButton className='button_faq'>
                            How can I know about the current status of my business ?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className='content_faq'>
                            <p className='desc_faq'>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                   
                    
                    
                    
                </Accordion>
        </div>
    </div>
  );
};

export default Faq;
