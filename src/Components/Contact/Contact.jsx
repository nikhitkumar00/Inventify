
import './Contact.css'
const Contact = () => {
    return (
        <div className="MainContainer">
            <div className="ContactUsHeader">Contact Us</div>
            <div className="ContactFormContainer">
                <form className='form_Contact'>
                    <div className="NameEmailContainer">
                        <input type="text" placeholder="Name" className="UserName"/>
                        <input type="text" placeholder="Email" className="Email" />
                    </div>
                    <input type="text" placeholder="Content" className="Content" wrap=""/>
                    <div className="SubmitWrapper">
                    <button type="submit" className="SubmitButton">Submit</button>

                    </div>

                </form>
            </div>

        </div>
    )
}

export default Contact;