import './Contact.scss'
import { Contact1, Contact2, Title } from '../../components'

function Contact() {
  return (
    <section id="contact" className="contact">
        <div className="contact-container container">
            <Title
                title="Contact"
             />
             <div className="contact-content">
                <div className="col-1">
                    <Contact1 />
                </div>
                <div className="col-2">
                    <Contact2 />
                </div>
             </div>
        </div>
    </section>
  )
}

export default Contact