import './Contact.css'

function Contact() {
  return (
    <div className="contact">
        <h1>Contact Form</h1>
      <form action="https://formspree.io/f/mvojjwqy" method="post">
        <input type="text" name="name" placeholder="name" required />
        <input type="email" name="email" placeholder="email id" required />
        <input type="file" name="upload" multiple accept='image/*,.pdf,'/>
        <textarea name="feedback" id="" cols="30" rows="10"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
