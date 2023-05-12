import React from "react";
import './Contact.css'
const Contact = () => {
    return (
        <div className="MainContainer">
            <div className="ContactFormContainer">
                <form >
                    <div className="NameEmailContainer">
                        <input type="text" placeholder="Name" className="UserName"/>
                        <input type="text" placeholder="Email" className="Email" />
                    </div>
                    <input type="text" placeholder="Content" className="Content" wrap=""/>
                    <button type="submit" className="SubmitButton">Submit</button>

                </form>
            </div>

        </div>
    )
}

export default Contact;