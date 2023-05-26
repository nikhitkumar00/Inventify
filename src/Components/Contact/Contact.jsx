import React from 'react'
import './Contact.css'
import { useForm, ValidationError } from '@formspree/react'
import { Link } from "react-router-dom";



const Contact = () => {
    const [state, handleSubmit] = useForm("mzbqqbzg")
    if (state.succeeded) {
        return <>
            <div className='SubmissionMessage'>
                <h1>Thanks for the feedback</h1>
                <p>Your Message was delivered to the developers!</p>
                <Link to={"/contact"} onClick={state.succeeded="false"}>
                    <p>Go Back</p>
                </Link>

            </div>
        </>
    }

    return (
        <div className="ContactMainContainer">
            <div className="ContactUsHeader">Contact Us</div>
            <div className="ContactFormContainer">
                <form className='form_Contact' onSubmit={handleSubmit}>
                    <div className="NameEmailContainer">
                        <input
                            type="text"
                            placeholder="Name"
                            className="UserName"
                            name='name'
                            id="name" required />
                        <ValidationError
                            prefix='Name'
                            field='name'
                            errors={state.errors}

                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="Email"
                            name='email'
                            id='email' required />
                        <ValidationError
                            prefix='Email'
                            field='email'
                            errors={state.errors}
                        />
                    </div>
                    <input type="text" placeholder="Content" className="Content" name='content' id='content' required />
                    <ValidationError prefix='Content' field='message' errors={state.errors} />
                    <div className="SubmitWrapper">
                        <button type="submit" className="SubmitButton" disabled={state.submitting}>Submit</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Contact;