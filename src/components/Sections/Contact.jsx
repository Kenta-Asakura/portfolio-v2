function Contact() {
  const email = "your.email@example.com";
  const subject = "Hello from your Portfolio";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <section id="contact" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          
          <p className="text-lg text-base-content/80 mb-8">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Feel free to reach out and let's create something amazing together.
          </p>

          <a 
            href={mailtoLink}
            className="btn btn-primary btn-lg"
            aria-label="Send email to Kenta Asakura"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;