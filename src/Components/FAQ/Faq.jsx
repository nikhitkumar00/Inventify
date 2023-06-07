import "react-accessible-accordion/dist/fancy-example.css";
import "./Faq.css";
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
        <Accordion className="container_faq">
          <AccordionItem className="item_faq">
            <AccordionItemHeading className="head_faq">
              <AccordionItemButton className="button_faq" >
                What is the purpose of this website ?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="content_faq">
              <p className="desc_faq">
              The website helps businesses efficiently monitor stock details, orders, and expenses in a local setting. Users can manage  sales, and expenses effectively, gaining clear insights into product availability and quantities. . Customization options for the stocks table further enhance efficiency by tailoring it to specific business needs.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="item_faq">
            <AccordionItemHeading className="head_faq">
              <AccordionItemButton className="button_faq">
                Is data on this website secure ?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="content_faq">
              <p className="desc_faq">
              Yes, since the website runs on localhost, the data is not visible to the internet and is stored within the system itself. This provides an additional layer of security as the website is only accessible from the local server.This means that external users or unauthorized individuals cannot directly access the data stored in the website.However  it is important to ensure that the local server and system have appropriate security measures in place like password protection and regular backups, to safeguard the data from any potential threats or risks.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className="item_faq">
            <AccordionItemHeading className="head_faq">
              <AccordionItemButton className="button_faq">
                How do I add custom fields to my table ?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="content_faq">
              <p className="desc_faq">
              Tables can be customised to fit your specific business needs.We have provided with the options to add and remove data from the stock table . By just specifying the name and type of column you can add new columns to the table and delete those unwanted columns by specifying the same.Data from the stock could be also inserted and removed by the add and delete button provided in the stocks page. These options allow you to tailor the website to your needs.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="item_faq">
            <AccordionItemHeading className="head_faq">
              <AccordionItemButton className="button_faq">
                How can I get technical support ?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="content_faq">
              <p className="desc_faq">
              To get technical support for the website, you can utilize the contact page provided on the website.If you have any questions or require assistance regarding any functionality or technical aspects of the website, you can reach out to us through the contact page.In the contact page , fill out the required fields, such as your name, email address, and the details of your inquiry or technical issue.Once you submit the form, the developers will receive your message and respond to you as soon as possible  providing the necessary technical support.We are here to support you at every step of the way. If you have any questions or need assistance, feel free to ask !
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="item_faq">
            <AccordionItemHeading className="head_faq">
              <AccordionItemButton className="button_faq">
                How can I know about the current status of my business ?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="content_faq">
              <p className="desc_faq">
              The website has the option to summarise total orders , expenses and profit in its statistics page.In addition to this it also shows products which are low in stock , products nearing expiry dates so that stocks can be updated and managed. These help to improve sales performance,profit and expense analysis, helping to make right decisions about your business.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
