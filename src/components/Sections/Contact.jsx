import SectionHeader from '../ui/SectionHeader';

function Contact() {
  const email = 'asakura.kenta963420@gmail.com';
  const subject = 'Hello from your Portfolio';
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <section id="contact" className="bg-base-100 min-h-[60vh] py-20">
      <div className="container mx-auto px-4">
        <SectionHeader headerNumber="04." headerTitle="Get In Touch" />

        <div className="mx-auto flex min-h-[40vh] max-w-2xl flex-col items-center justify-center text-center">
          <p className="text-base-content/80 mb-8 text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you. Feel free to
            reach out and let's create something amazing together.
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
