import SectionHeader from '../ui/SectionHeader';

function Contact() {
  const email = "asakura.kenta963420@gmail.com";
  const subject = "Hello from your Portfolio";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <section id="contact" className="py-20 bg-base-100 min-h-[60vh]">
      <div className="container mx-auto px-4">
        <SectionHeader 
          headerNumber="04."
          headerTitle="Get In Touch"
        />

        <div className="max-w-2xl mx-auto text-center flex flex-col items-center justify-center min-h-[40vh]">
          <p className="text-lg text-base-content/80 mb-8">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Feel free to reach out and let's create something amazing together.
          </p>

          <a 
            href={mailtoLink}
            className="d-btn d-btn-outline d-btn-primary d-btn-lg text-base"
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