import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Handshake,
  Building2,
  GraduationCap,
  Globe,
  Award,
  TrendingUp,
  Users,
  BookOpen,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Lightbulb,
  Target,
  Zap,
  Shield,
  Heart,
  Briefcase,
  MessageSquare,
  Calendar,
} from 'lucide-react';

const partnershipTypes = [
  {
    icon: GraduationCap,
    title: 'For Schools',
    description: 'Build innovation mindset early through engaging programs.',
    benefits: ['Foundation programs', 'Career awareness', 'Parent engagement', 'Teacher development'],
  },
  {
    icon: BookOpen,
    title: 'For PU Colleges',
    description: 'Bridge the gap between school and university.',
    benefits: ['Stream selection guidance', 'Industry exposure', 'Competitive exams', 'Skill foundation'],
  },
  {
    icon: Building2,
    title: 'For Degree Colleges',
    description: 'Enhance graduate employability with industry programs.',
    benefits: ['Employability training', 'Industry mentorship', 'Placement prep', 'Certifications'],
  },
  {
    icon: Globe,
    title: 'For Engineering Colleges',
    description: 'Build innovation ecosystems producing industry-ready engineers.',
    benefits: ['Technical bootcamps', 'Industry projects', 'Innovation labs', 'Research collabs'],
  },
  {
    icon: Award,
    title: 'For Polytechnic Colleges',
    description: 'Connect diploma education with industry needs.',
    benefits: ['Practical skills', 'Apprenticeships', 'Entrepreneurship', 'Certifications'],
  },
  {
    icon: Handshake,
    title: 'For Educational Trusts',
    description: 'Systematic transformation across multiple institutions.',
    benefits: ['Multi-institution rollout', 'Standardized programs', 'Impact measurement', 'Trust reporting'],
  },
];

const partnershipModel = [
  { step: 1, icon: MessageSquare, title: 'Initial Consultation', description: 'Understanding your goals and challenges.' },
  { step: 2, icon: Target, title: 'Program Design', description: 'Tailoring programs to your needs.' },
  { step: 3, icon: Calendar, title: 'Planning', description: 'Integration with your calendar.' },
  { step: 4, icon: Rocket, title: 'Delivery', description: 'Expert-led sessions and mentorship.' },
  { step: 5, icon: TrendingUp, title: 'Assessment', description: 'Measuring outcomes and feedback.' },
];

const whyPartner = [
  { icon: Target, title: 'Measurable Outcomes', description: 'Every partnership designed with clear metrics.' },
  { icon: Users, title: 'Expert Network', description: 'Access to industry professionals and mentors.' },
  { icon: Zap, title: 'Turnkey Solutions', description: 'End-to-end program management.' },
  { icon: Shield, title: 'Long-term Commitment', description: 'Multi-year partnerships creating lasting change.' },
];

const institutionalBenefits = [
  { icon: TrendingUp, title: 'Enhanced Placement Rates', description: 'Students with practical skills are more employable.' },
  { icon: Star, title: 'Brand Value', description: 'Differentiate with industry-connected programs.' },
  { icon: Heart, title: 'Student Satisfaction', description: 'Engaged students with clear career paths.' },
  { icon: Lightbulb, title: 'Innovation Culture', description: 'Foster creativity and entrepreneurial thinking.' },
];

export default function PartnershipsPage() {
  return (
    <div className="relative pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-8">
              <Handshake className="w-4 h-4" />
              Partner With Us
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8">
              Build an Innovation
              <span className="gradient-text"> Ecosystem</span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 font-light max-w-3xl mx-auto mb-12">
              Partner with Quantum Learn to transform your institution into a hub of practical
              learning and industry-ready student preparation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg group">
                Start Partnership
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://wa.me/917760270540" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg">
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/30 to-navy-900" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-500 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Partnership Benefits
            </div>
            <h2 className="section-heading text-white mb-6">Why Partner With Quantum Learn</h2>
            <p className="section-subheading mx-auto">
              Institutions see measurable improvements in student outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPartner.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong rounded-3xl p-8 card-3d"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Who We Serve
            </div>
            <h2 className="section-heading text-white mb-6">Partnerships for Every Institution</h2>
            <p className="section-subheading mx-auto">
              Customized programs for different educational levels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group glass-strong rounded-3xl p-8 card-3d"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <type.icon className="w-7 h-7 text-gold-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{type.title}</h3>
                </div>

                <p className="text-white/50 text-sm mb-6">{type.description}</p>

                <div className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/30 to-navy-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-500 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Process
            </div>
            <h2 className="section-heading text-white mb-6">How Partnerships Work</h2>
            <p className="section-subheading mx-auto">
              A structured approach ensuring success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {partnershipModel.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-strong rounded-3xl p-6 text-center hover:border-gold-500/30 transition-all duration-500">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-xs font-bold text-navy-900 shadow-lg">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center mb-4 mt-4">
                    <item.icon className="w-7 h-7 text-gold-500" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-xs">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Benefits */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                For Institutions
              </div>

              <h2 className="section-heading text-white mb-6">
                Tangible Benefits for Your
                <span className="gradient-text"> Institution</span>
              </h2>

              <p className="text-white/50 text-lg mb-8">
                Our partnerships create measurable improvements in key institutional metrics.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {['95% Student Satisfaction', '40% Placement Improvement', '15+ Industry Partners', '500+ Students Trained'].map((stat, index) => (
                  <div key={index} className="glass-medium rounded-2xl p-4 border-gold-500/10">
                    <p className="text-gold-500 font-semibold">{stat}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {institutionalBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-strong rounded-2xl p-6 hover:border-gold-500/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                      <p className="text-white/50 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-gold rounded-[2rem] p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Let's discuss how Quantum Learn can help you build an innovation ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link to="/contact" className="btn-primary text-lg group">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://wa.me/917760270540" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg">
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-500" />
                <span>+91 7760270540</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-500" />
                <span>Bangarpet, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
