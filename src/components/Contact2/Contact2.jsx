import './Contact2.scss'

function Contact2() {
  return (
    <article className="contact2">
      <h4>
        Get In Touch With Us
      </h4>
      <form action="#">
        <input className='input' type="text" name="name" id="name" required  placeholder='Enter your name'/>
        <input className='input' type="email" name="email" id="email" required placeholder='Enter your email' />
        <textarea className='input' name="message" id="message"  rows="4" placeholder='Message' required></textarea>
        <input className='btn btn-primary' type="submit" value="Send" />
      </form>
    </article>
  )
}

export default Contact2