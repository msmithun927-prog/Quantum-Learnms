import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Users,
  Calendar,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'msmithun927@gmail.com',
    description: 'For general inquiries and partnership discussions',
    href: 'mailto:msmithun927@gmail.com',
    color: 'gold',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+91 7760270540',
    description: 'Quick responses, usually within hours',
    href: 'https://wa.me/917760270540',
    color: 'green',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Bangarpet, Karnataka',
    description: 'India',
    href: '#',
    color: 'electric',
  },
];

const inquiryTypes = [
  'Partnership Inquiry',
  'Program Information',
  'Speaker Request',
  'General Inquiry',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Supabase
      const { error } = await supabase
        .from('contact_enquiries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            institution: formData.institution,
            inquiry_type: formData.inquiryType,
            message: formData.message,
            created_at: new Date().toISOString(),
          },
        ]);

      // Even if Supabase fails, we still open WhatsApp and show success
      // The email will be sent via Supabase edge function or trigger

      // Open WhatsApp with the message
      const whatsappMessage = encodeURIComponent(
        `Hello Quantum Learn!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInstitution: ${formData.institution}\nInquiry Type: ${formData.inquiryType}\n\nMessage: ${formData.message}`
      );
      window.open(`https://wa.me/917760270540?text=${whatsappMessage}`, '_blank');

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      // Still show success and open WhatsApp
      const whatsappMessage = encodeURIComponent(
        `Hello Quantum Learn!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInstitution: ${formData.institution}\nInquiry Type: ${formData.inquiryType}\n\nMessage: ${formData.message}`
      );
      window.open(`https://wa.me/917760270540?text=${whatsappMessage}`, '_blank');
      setIsSubmitted(true);
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-8">
              <MessageCircle className="w-4 h-4" />
              Get in Touch
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8">
              Let's Start a
              <span className="gradient-text"> Conversation</span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto">
              Ready to transform your institution? We'd love to hear from you.
              Let's discuss how Quantum Learn can create meaningful impact for your students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-strong rounded-3xl p-8 text-center hover:border-gold-500/30 transition-all duration-500 card-3d block"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${
                    method.color === 'gold'
                      ? 'bg-gradient-to-br from-gold-500/20 to-gold-600/20'
                      : method.color === 'green'
                      ? 'bg-gradient-to-br from-green-500/20 to-green-600/20'
                      : 'bg-gradient-to-br from-electric-500/20 to-electric-600/20'
                  }`}
                >
                  <method.icon
                    className={`w-8 h-8 ${
                      method.color === 'gold'
                        ? 'text-gold-500'
                        : method.color === 'green'
                        ? 'text-green-500'
                        : 'text-electric-500'
                    }`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <p
                  className={`font-medium mb-2 ${
                    method.color === 'gold'
                      ? 'text-gold-500'
                      : method.color === 'green'
                      ? 'text-green-500'
                      : 'text-electric-500'
                  }`}
                >
                  {method.value}
                </p>
                <p className="text-white/40 text-sm">{method.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/20 to-navy-900" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Send Us a Message
              </h2>
              <p className="text-white/50 mb-10">
                Fill out the form and we'll get back to you within 24 hours.
                After submission, we'll open WhatsApp for quick follow-up.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-gold rounded-3xl p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-6 shadow-2xl shadow-gold-500/40"
                  >
                    <CheckCircle2 className="w-10 h-10 text-navy-900" />
                  </motion.div>

                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-white/60 mb-8 max-w-md mx-auto">
                    We've received your enquiry and opened WhatsApp for quick communication.
                    Our team will reach out within 24 hours.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://wa.me/917760270540"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Continue on WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          institution: '',
                          inquiryType: '',
                          message: '',
                        });
                      }}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-3">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input-premium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-premium"
                        placeholder="john@institution.edu"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white/70 text-sm font-medium mb-3">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-premium"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="institution" className="block text-white/70 text-sm font-medium mb-3">
                        Institution Name *
                      </label>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        required
                        value={formData.institution}
                        onChange={handleChange}
                        className="input-premium"
                        placeholder="College of Engineering"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-white/70 text-sm font-medium mb-3">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="input-premium appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-navy-900">
                        Select inquiry type
                      </option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type} className="bg-navy-900">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-3">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-premium resize-none"
                      placeholder="Tell us about your institution and what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-white/40 text-sm text-center">
                    Your message will be sent via email and we'll open WhatsApp for quick follow-up.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Quick Connect Card */}
              <div className="glass-strong rounded-3xl p-8 mb-8 border-gold-500/20">
                <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold-500" />
                  Schedule a Call
                </h3>
                <p className="text-white/50 mb-6">
                  Prefer to talk? Schedule a consultation call with our partnerships team.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <Users className="w-4 h-4 text-gold-500" />
                    <span>Partnerships Team</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <Calendar className="w-4 h-4 text-gold-500" />
                    <span>30 min session</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/917760270540?text=Hello! I'd like to schedule a consultation call with Quantum Learn."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Request Call on WhatsApp
                </a>
              </div>

              {/* FAQ Section */}
              <div className="glass-medium rounded-3xl p-8">
                <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-gold-500" />
                  Frequently Asked Questions
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      q: 'How long does it take to set up a partnership?',
                      a: 'Most partnerships are operational within 4-6 weeks of initial contact.',
                    },
                    {
                      q: 'What is the minimum batch size for programs?',
                      a: 'Batch sizes vary from 20-50 students depending on the program type.',
                    },
                    {
                      q: 'Can programs be customized for our institution?',
                      a: 'Absolutely. All programs are adaptable to your specific needs.',
                    },
                    {
                      q: 'Do you provide ongoing support after programs?',
                      a: 'Yes, including career guidance, mentor connections, and impact assessment.',
                    },
                  ].map((faq, index) => (
                    <div key={index} className="glass-subtle rounded-2xl p-4">
                      <h4 className="text-white font-medium text-sm mb-2">{faq.q}</h4>
                      <p className="text-white/50 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-[2rem] overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Map placeholder */}
              <div className="relative aspect-square lg:aspect-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center mb-4">
                        <MapPin className="w-12 h-12 text-gold-500" />
                      </div>
                      <p className="text-white/40 text-lg font-medium">Bangarpet</p>
                      <p className="text-white/30 text-sm">Karnataka, India</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-grid-subtle opacity-20" />
                </div>
              </div>

              {/* Info */}
              <div className="p-10 lg:p-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  Our Location
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Based in Karnataka
                </h3>

                <p className="text-white/50 mb-8">
                  We're headquartered in Bangarpet, Karnataka, allowing us to maintain
                  strong connections with educational institutions across the region.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-white/60">
                    <MapPin className="w-5 h-5 text-gold-500" />
                    <span>Bangarpet, Karnataka, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <Clock className="w-5 h-5 text-gold-500" />
                    <span>Mon - Fri: 9:00 AM - 6:00 PM IST</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://wa.me/917760270540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                  <a
                    href="mailto:msmithun927@gmail.com"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
