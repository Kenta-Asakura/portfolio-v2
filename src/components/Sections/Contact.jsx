import { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Form submission logic here
    setStatus('success');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setStatus(null);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto">
          {status === 'success' && (
            <div className="mb-6 p-4 bg-success/10 text-success rounded-lg border border-success/20">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input 
                type="text" 
                placeholder="Your name" 
                className="input input-bordered w-full" 
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                type="email" 
                placeholder="your.email@example.com" 
                className="input input-bordered w-full" 
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                required
              />
            </div>

            {/* Message Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea 
                className="textarea textarea-bordered h-32" 
                placeholder="Your message..."
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-lg btn-wide"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;