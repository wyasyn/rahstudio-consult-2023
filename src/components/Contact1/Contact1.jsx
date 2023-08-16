import './Contact1.scss'
import { FaEnvelope, FaTwitter, FaWhatsapp } from 'react-icons/fa'

function Contact1() {
    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
    const mailtoLink = `mailto:${contactEmail}`;

    const contactPhone = import.meta.env.VITE_CONTACT_PHONE;

  return (
    <article className="contact1">
        <div className="cont">
            <h4>Send Us a Message</h4>
            <a href={mailtoLink} target='_blank' rel='noreferrer'>
                <FaEnvelope />
            </a>
        </div>
        <div className="cont">
            <h4>WhatsApp Us</h4>
            <a href={`https://api.whatsapp.com/send?${contactPhone}`} target='_blank' rel='noreferrer'>
                <FaWhatsapp />
            </a>
        </div>
        <div className="cont">
            <h4>X us</h4>
            <a href="https://www.x.com/wyasyn" target='_blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    </article>
  )
}

export default Contact1