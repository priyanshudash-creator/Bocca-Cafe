import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Send, CheckCircle2, Compass, BookOpen } from 'lucide-react';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please write your message or enquiry.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-warmwhite min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
            Janpath, Master Canteen
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-espresso">
            Contact & Directions
          </h1>
          <p className="text-sm sm:text-base text-charcoal font-light leading-relaxed">
            Have questions about group visits, private reading events, catering, or today’s bakery
            selection? We are always happy to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Real Café Coordinates & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-ivory/60 rounded border border-taupe-border p-6 sm:p-8 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-espresso border-b border-taupe-border pb-3">
                Café Information
              </h2>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-caramel shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-espresso mb-1">
                    Address
                  </h4>
                  <p className="text-sm text-charcoal leading-relaxed">
                    2nd Floor, 108/B, Janpath Road, <br />
                    Master Canteen Area, Ashok Nagar, <br />
                    Bhubaneswar, Odisha 751001, India.
                  </p>
                  <span className="inline-block text-xs text-mutedgray mt-1">
                    (Beside Lalchand Jewellers, above ground retail)
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-caramel shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-espresso mb-1">
                    Telephone
                  </h4>
                  <a
                    href="tel:+917381285555"
                    className="text-sm text-espresso font-semibold hover:text-caramel transition-colors"
                  >
                    +91 73812 85555
                  </a>
                  <p className="text-xs text-mutedgray mt-0.5">
                    Available during operating hours for table queries and direct pickup orders.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-caramel shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-espresso mb-1">
                    Hours of Operation
                  </h4>
                  <p className="text-sm text-charcoal font-medium">
                    Monday to Sunday (All 7 Days)
                  </p>
                  <p className="text-xs text-mutedgray mt-0.5">8:30 AM – 10:30 PM</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-3.5">
                <Instagram className="w-5 h-5 text-caramel shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-espresso mb-1">
                    Verified Instagram
                  </h4>
                  <a
                    href="https://www.instagram.com/boccabbsr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-espresso font-semibold hover:text-caramel underline transition-colors"
                  >
                    @boccabbsr
                  </a>
                  <p className="text-xs text-mutedgray mt-0.5">
                    Official social channel for updates, art exhibits, and daily specials.
                  </p>
                </div>
              </div>

              {/* Direct Directions Button */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Bocca+Cafe+Bhubaneswar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-espresso text-warmwhite text-xs uppercase tracking-editorial font-bold rounded flex items-center justify-center gap-2 hover:bg-caramel hover:text-espresso transition-colors shadow-sm"
                >
                  <Compass className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Book & Table Enquiry Banner */}
            <div className="p-6 rounded bg-warmwhite border border-taupe-border space-y-2">
              <div className="flex items-center gap-2 text-caramel">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-bold">Table Reservations</span>
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Planning a table for lunch, book club, or an evening gathering?
              </p>
              <Link
                to="/reservations"
                className="inline-block text-xs uppercase tracking-editorial font-bold text-espresso hover:text-caramel underline pt-1"
              >
                Go to Reservation Form →
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-ivory/30 rounded border border-taupe-border p-6 sm:p-10 shadow-xs">
            <h2 className="font-serif text-2xl font-bold text-espresso mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs text-charcoal-muted mb-6">
              Write to us directly. We will review your note and respond as soon as our floor manager is available.
            </p>

            {submitted ? (
              <div className="p-8 bg-warmwhite rounded border border-taupe-border text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-caramel/15 border border-caramel/30 text-caramel flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-espresso">
                  Message Prepared
                </h3>
                <p className="text-xs text-charcoal-muted max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name}. Your inquiry has been recorded. For urgent enquiries or orders, please give us a direct call at +91 73812 85555.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="px-4 py-2 text-xs uppercase tracking-editorial font-bold text-espresso hover:text-caramel underline"
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1.5">
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Soumya Ray"
                      className={`w-full px-4 py-2.5 bg-warmwhite border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso ${
                        errors.name ? 'border-red-600' : 'border-taupe-border'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1.5">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. soumya@example.com"
                      className={`w-full px-4 py-2.5 bg-warmwhite border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso ${
                        errors.email ? 'border-red-600' : 'border-taupe-border'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1.5">
                      Phone Number <span className="text-mutedgray font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91..."
                      className="w-full px-4 py-2.5 bg-warmwhite border border-taupe-border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso"
                    >
                    </input>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-warmwhite border border-taupe-border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso"
                    >
                      <option value="">Select enquiry topic</option>
                      <option value="General Question">General Question</option>
                      <option value="Book Club or Event">Book Club or Community Event</option>
                      <option value="Catering & Bakes">Bakery & Cake Ordering</option>
                      <option value="Feedback">Feedback on Visit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1.5">
                    Your Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can Bocca Cafe assist you today?..."
                    className={`w-full px-4 py-2.5 bg-warmwhite border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso ${
                      errors.message ? 'border-red-600' : 'border-taupe-border'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-espresso hover:bg-caramel text-warmwhite hover:text-espresso text-xs uppercase tracking-editorial font-bold rounded flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
