
import './Contact.css'
const Contact = () => {
    return (
        <div className="ContactMainContainer">
            <div className="ContactUsHeader">Contact Us</div>
            <div className="ContactFormContainer">
                <form className='form_Contact' action="https://formspree.io/f/mzbqqbzg"
  method="POST">
                    <div className="NameEmailContainer">
                        <input type="text" placeholder="Name" className="UserName" name='Name'/>
                        <input type="text" placeholder="Email" className="Email" name='Email' />
                    </div>
                    <input type="text" placeholder="Content" className="Content" name='Content'/>
                    <div className="SubmitWrapper">
                    <button type="submit" className="SubmitButton">Submit</button>

                    </div>

                </form>
            </div>

        </div>
    )
}

export default Contact;