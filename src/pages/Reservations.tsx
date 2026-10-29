import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle2, MessageCircle, Phone, AlertCircle } from 'lucide-react';
import { ReservationFormData } from '../types';

export const Reservations: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '12:00',
    guests: 2,
    seatingArea: 'Book Nook',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ReservationFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number.';
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (10 digits).';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred date.';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a preferred time.';
    }

    if (formData.guests < 1 || formData.guests > 30) {
      newErrors.guests = 'Party size should be between 1 and 30 guests.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const handleWhatsAppSend = () => {
    const text = `Hello Bocca Cafe! I would like to request a table reservation:%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Date:* ${
      formData.date
    }%0A*Time:* ${formData.time}%0A*Guests:* ${formData.guests}%0A*Seating:* ${
      formData.seatingArea
    }${
      formData.specialRequests
        ? `%0A*Requests:* ${encodeURIComponent(formData.specialRequests)}`
        : ''
    }%0A%0APlease let me know if this slot is available. Thank you!`;

    window.open(`https://wa.me/917381285555?text=${text}`, '_blank');
  };

  return (
    <div className="bg-ivory/40 min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs uppercase tracking-widest text-caramel font-semibold">
            Table & Gathering Enquiries
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-espresso">
            Reserve a Moment
          </h1>
          <p className="text-sm sm:text-base text-charcoal font-light leading-relaxed">
            Whether for breakfast meetings, weekend book sessions, intimate dining, or group
            gatherings, let us know your plans so we can make your visit memorable.
          </p>
        </div>

        {submitted ? (
          /* Honest Confirmation State (Master Prompt Rule: Do not claim table is confirmed without cafe backend!) */
          <div className="bg-warmwhite rounded border border-taupe-border p-8 sm:p-12 shadow-md space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-caramel/15 border border-caramel/30 text-caramel flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-center space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
                Your reservation request has been prepared.
              </h2>
              <p className="text-sm text-charcoal font-medium max-w-lg mx-auto">
                Please contact the café or send your summary via WhatsApp to confirm table availability.
              </p>
              <p className="text-xs text-mutedgray max-w-md mx-auto leading-relaxed pt-1">
                Because seating depends on café floor flow and reading nook occupancy, tables are confirmed directly by our staff.
              </p>
            </div>

            {/* Summary Ticket */}
            <div className="bg-ivory/60 p-6 rounded border border-taupe-border/80 max-w-lg mx-auto text-sm space-y-3">
              <h3 className="font-serif text-base font-bold text-espresso border-b border-taupe-border/50 pb-2">
                Enquiry Details
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-mutedgray block">Guest Name</span>
                  <strong className="text-espresso font-semibold">{formData.name}</strong>
                </div>
                <div>
                  <span className="text-mutedgray block">Phone</span>
                  <strong className="text-espresso font-semibold">{formData.phone}</strong>
                </div>
                <div>
                  <span className="text-mutedgray block">Date & Time</span>
                  <strong className="text-espresso font-semibold">
                    {formData.date} at {formData.time}
                  </strong>
                </div>
                <div>
                  <span className="text-mutedgray block">Party Size</span>
                  <strong className="text-espresso font-semibold">
                    {formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}
                  </strong>
                </div>
                <div className="col-span-2">
                  <span className="text-mutedgray block">Seating Preference</span>
                  <strong className="text-espresso font-semibold">{formData.seatingArea}</strong>
                </div>
                {formData.specialRequests && (
                  <div className="col-span-2">
                    <span className="text-mutedgray block">Notes</span>
                    <span className="text-charcoal italic">{formData.specialRequests}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Action to send to WhatsApp or Call */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto pt-2">
              <button
                onClick={handleWhatsAppSend}
                className="flex-1 py-3 bg-green-700 hover:bg-green-800 text-warmwhite text-xs uppercase tracking-editorial font-bold rounded flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </button>

              <a
                href="tel:+917381285555"
                className="flex-1 py-3 bg-espresso hover:bg-caramel text-warmwhite hover:text-espresso text-xs uppercase tracking-editorial font-bold rounded flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Café (+91 73812 85555)</span>
              </a>
            </div>

            <div className="text-center pt-4 border-t border-taupe-border/40">
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-mutedgray hover:text-espresso underline"
              >
                Modify Reservation Enquiry
              </button>
            </div>
          </div>
        ) : (
          /* Reservation Form */
          <div className="bg-warmwhite rounded border border-taupe-border shadow-sm p-6 sm:p-10">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1.5">
                    Your Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya Dash"
                    className={`w-full px-4 py-2.5 bg-ivory/40 border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso ${
                      errors.name ? 'border-red-600' : 'border-taupe-border'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1.5">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-2.5 bg-ivory/40 border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso ${
                      errors.phone ? 'border-red-600' : 'border-taupe-border'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1.5">
                    Email Address <span className="text-mutedgray font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. you@example.com"
                    className={`w-full px-4 py-2.5 bg-ivory/40 border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso ${
                      errors.email ? 'border-red-600' : 'border-taupe-border'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1.5">
                    Number of Guests <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mutedgray" />
                    <select
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: parseInt(e.target.value, 10) })
                      }
                      className="w-full pl-10 pr-4 py-2.5 bg-ivory/40 border border-taupe-border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.guests && <p className="text-xs text-red-600 mt-1">{errors.guests}</p>}
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1.5">
                    Preferred Date <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mutedgray" />
                    <input
                      type="date"
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 bg-ivory/40 border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso ${
                        errors.date ? 'border-red-600' : 'border-taupe-border'
                      }`}
                    />
                  </div>
                  {errors.date && <p className="text-xs text-red-600 mt-1">{errors.date}</p>}
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1.5">
                    Preferred Time <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mutedgray" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-ivory/40 border border-taupe-border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso"
                    >
                      <option value="09:00">09:00 AM (Morning Coffee & Breakfast)</option>
                      <option value="10:30">10:30 AM</option>
                      <option value="12:00">12:00 PM (Lunch)</option>
                      <option value="13:30">01:30 PM</option>
                      <option value="15:00">03:00 PM (Afternoon Brews & Reading)</option>
                      <option value="17:00">05:00 PM (High Tea & Desserts)</option>
                      <option value="19:00">07:00 PM (Dinner)</option>
                      <option value="20:30">08:30 PM</option>
                      <option value="21:30">09:30 PM (Late Coffee & Slices)</option>
                    </select>
                  </div>
                  {errors.time && <p className="text-xs text-red-600 mt-1">{errors.time}</p>}
                </div>
              </div>

              {/* Seating Area Preference */}
              <div>
                <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-2">
                  Seating Zone Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {(
                    [
                      'Book Nook',
                      'Main Cafe',
                      'Window Seating',
                      'Open Terrace/Artsy Corner',
                    ] as const
                  ).map((area) => (
                    <label
                      key={area}
                      className={`p-3 rounded border text-xs cursor-pointer flex flex-col justify-between transition-all ${
                        formData.seatingArea === area
                          ? 'border-espresso bg-espresso text-warmwhite font-bold'
                          : 'border-taupe-border bg-ivory/50 text-charcoal hover:border-caramel'
                      }`}
                    >
                      <input
                        type="radio"
                        name="seatingArea"
                        value={area}
                        checked={formData.seatingArea === area}
                        onChange={() => setFormData({ ...formData, seatingArea: area })}
                        className="sr-only"
                      />
                      <span>{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs uppercase tracking-editorial font-bold text-espresso mb-1.5">
                  Special Notes / Requests (Dietary, Book Club, Celebration)
                </label>
                <textarea
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Tell us if you are celebrating an occasion or need a quiet reading table..."
                  className="w-full px-4 py-2.5 bg-ivory/40 border border-taupe-border rounded text-sm text-espresso focus:outline-none focus:ring-1 focus:ring-espresso"
                />
              </div>

              {/* Informative notice */}
              <div className="flex items-start gap-2.5 p-3.5 rounded bg-ivory text-xs text-charcoal-muted border border-taupe-border/60">
                <AlertCircle className="w-4 h-4 text-caramel shrink-0 mt-0.5" />
                <p>
                  Submission prepares your enquiry. Bocca Cafe will review and confirm availability.
                  No pre-payment is collected online.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-espresso text-warmwhite text-xs uppercase tracking-editorial font-bold rounded hover:bg-caramel hover:text-espresso transition-colors shadow-sm"
              >
                Submit Table Enquiry
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
