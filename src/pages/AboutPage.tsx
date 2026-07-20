import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Award,
  Globe,
  Shield,
  Sparkles,
  TrendingUp,
  BookOpen,
  Rocket,
  Star,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Zap,
} from 'lucide-react';

const vision = `To be the leading catalyst in transforming educational institutions into innovation powerhouses, where every student is equipped with industry-relevant skills, practical experience, and the mindset to excel in an ever-evolving global economy.`;

const mission = `Empower educational institutions to bridge the gap between academic learning and real-world application through innovative programs, expert mentorship, and industry partnerships that create measurable outcomes for students and institutions alike.`;

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We constantly evolve our approaches to stay ahead of industry trends.',
  },
  {
    icon: Users,
    title: 'Student-Centric',
    description: 'Every decision is guided by what creates the best outcomes for learners.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest standards of honesty and transparency.',
  },
  {
    icon: TrendingUp,
    title: 'Impact Driven',
    description: 'We measure success by tangible outcomes we create.',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Quality education should be available to institutions everywhere.',
  },
  {
    icon: Heart,
    title: 'Collaboration',
    description: 'We believe in building long-term transformative partnerships.',
  },
];

const milestones = [
  { year: '2020', title: 'The Beginning', description: 'Quantum Learn founded with a vision to transform education.' },
  { year: '2021', title: 'First Partnerships', description: 'Established partnerships with 5 engineering colleges.' },
  { year: '2022', title: 'Program Expansion', description: 'Launched Knowledge, Engagement, and Development programs.' },
  { year: '2023', title: 'Scale & Impact', description: 'Expanded to 15+ institutions and reached 500+ learners.' },
  { year: '2024', title: 'Industry Recognition', description: 'Achieved 95% participant satisfaction rate.' },
  { year: '2025', title: 'Future Ready', description: 'Building the next generation of innovation ecosystems.' },
];

const whatWeDo = [
  { icon: BookOpen, title: 'Curriculum Design', description: 'Industry-aligned programs co-created with academic institutions.' },
  { icon: Users, title: 'Expert Mentorship', description: 'Access to industry veterans and subject matter experts.' },
  { icon: Rocket, title: 'Innovation Labs', description: 'Hands-on experiences through projects and hackathons.' },
  { icon: Award, title: 'Certifications', description: 'Industry-recognized credentials enhancing employability.' },
];

const stats = [
  { value: '10+', label: 'Industry Experts' },
  { value: '50+', label: 'Mentor Network' },
  { value: '15+', label: 'Institution Partners' },
  { value: '20+', label: 'Programs Delivered' },
];

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative max-w-7xl mx-auto px-6 lg:px-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              About Quantum Learn
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8">
              Transforming Education Through
              <span className="gradient-text"> Innovation</span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 font-light max-w-3xl mx-auto">
              We are an institutional innovation and practical learning partner dedicated to
              bridging the gap between academic learning and real-world industry application.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/30 to-navy-900" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-gold rounded-3xl p-10 lg:p-12 group hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-8 shadow-2xl shadow-gold-500/40 group-hover:shadow-gold-500/60 transition-shadow">
                <Eye className="w-8 h-8 text-navy-900" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-6">Our Vision</h3>
              <p className="text-white/60 leading-relaxed text-lg">{vision}</p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-electric rounded-3xl p-10 lg:p-12 group hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-500 to-electric-600 flex items-center justify-center mb-8 shadow-2xl shadow-electric-500/40 group-hover:shadow-electric-500/60 transition-shadow">
                <Target className="w-8 h-8 text-navy-900" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-6">Our Mission</h3>
              <p className="text-white/60 leading-relaxed text-lg">{mission}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
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
              <Zap className="w-4 h-4" />
              Our Approach
            </div>
            <h2 className="section-heading text-white mb-6">What We Do</h2>
            <p className="section-subheading mx-auto">
              Comprehensive solutions that empower institutions to create real impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-strong rounded-3xl p-8 text-center card-3d"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-24">
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
              <Heart className="w-4 h-4" />
              Our Culture
            </div>
            <h2 className="section-heading text-white mb-6">Core Values</h2>
            <p className="section-subheading mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group glass-medium rounded-3xl p-8 flex items-start gap-5 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-white/50 text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Our Journey
            </div>
            <h2 className="section-heading text-white mb-6">The Quantum Learn Story</h2>
            <p className="section-subheading mx-auto">
              From a vision to a movement transforming education.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-16 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-500 via-electric-500 to-gold-500" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative flex items-start gap-8 md:pl-8"
                >
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 items-center justify-center flex-shrink-0 shadow-2xl shadow-gold-500/40">
                    <span className="text-navy-900 font-bold text-sm">{milestone.year}</span>
                  </div>

                  <div className="glass-strong rounded-3xl p-8 flex-grow hover:border-gold-500/30 transition-all duration-500">
                    <div className="flex md:hidden items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-white/50">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/30 to-navy-900" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Our Network
            </div>
            <h2 className="section-heading text-white mb-6">Strength in Numbers</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong rounded-3xl p-8 text-center"
              >
                <div className="text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Why Partner With Us
              </div>

              <h2 className="section-heading text-white mb-6">
                Built for Institutions That Want
                <span className="gradient-text"> Real Impact</span>
              </h2>

              <p className="text-white/50 text-lg mb-8">
                Unlike traditional coaching centers, we focus on creating comprehensive
                institutional transformations that produce measurable results.
              </p>

              <div className="space-y-4">
                {[
                  'Long-term institutional partnerships, not one-time engagements',
                  'Industry-aligned curriculum co-created with experts',
                  'Measurable outcomes for students and institutions',
                  'Custom programs tailored to institutional needs',
                  'End-to-end support from planning to execution',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold-500" />
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-gold rounded-3xl p-10"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Our Institutional Philosophy
              </h3>
              <blockquote className="text-white/70 italic border-l-2 border-gold-500 pl-6 mb-8">
                "We don't just deliver programs—we build innovation ecosystems that continue
                to create value long after our direct involvement ends."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30">
                  <span className="text-xl font-display font-bold text-navy-900">M</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Mithun M</p>
                  <p className="text-white/50 text-sm">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-gold rounded-[2rem] p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-white/50 text-lg mb-8">
              Let's discuss how Quantum Learn can help you build an innovation ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary group">
                Start Partnership
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/917760270540"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
