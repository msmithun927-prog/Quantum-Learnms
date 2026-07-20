import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Building2,
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
  Handshake,
  GraduationCap,
  ArrowRight,
  Play,
  CheckCircle2,
  Zap,
  Globe,
  Star,
  Heart,
  MessageCircle,
  Phone,
  Mail,
} from 'lucide-react';

interface StatProps {
  value: string;
  suffix?: string;
  label: string;
  delay?: number;
}

function Stat({ value, suffix, label, delay = 0 }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="relative inline-block">
        <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text">
          {value}
        </span>
        {suffix && (
          <span className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white/80">
            {suffix}
          </span>
        )}
        <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/10 to-electric-500/10 blur-2xl -z-10" />
      </div>
      <p className="mt-3 text-white/50 text-sm font-medium">{label}</p>
    </motion.div>
  );
}

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  const impactMetrics = [
    { value: '500', suffix: '+', label: 'Learners Engaged' },
    { value: '20', suffix: '+', label: 'Programs Delivered' },
    { value: '15', suffix: '+', label: 'Institution Collaborations' },
    { value: '95', suffix: '%', label: 'Participant Satisfaction' },
  ];

  const whyQuantumLearn = [
    {
      icon: Target,
      title: 'Industry-Focused Learning',
      description: 'Curriculum designed with direct industry input to ensure students gain relevant, employable skills.',
    },
    {
      icon: Zap,
      title: 'Practical Learning',
      description: 'Hands-on projects, real-world case studies, and experiential learning that bridges theory and application.',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Industry veterans and subject matter experts guide students through their learning journey.',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Comprehensive career support including resume building, interview preparation, and industry connections.',
    },
    {
      icon: Award,
      title: 'Certifications & Recognition',
      description: 'Industry-recognized certifications that validate skills and enhance employability.',
    },
    {
      icon: Building2,
      title: 'Institutional Support',
      description: 'End-to-end partnership model supporting institutions in building innovation ecosystems.',
    },
  ];

  const programCategories = [
    {
      icon: BookOpen,
      title: 'Knowledge Programs',
      description: 'Comprehensive workshops and seminars covering industry trends and professional skills.',
      color: 'from-gold-500/20 to-gold-600/20',
      border: 'border-gold-500/30',
    },
    {
      icon: Sparkles,
      title: 'Engagement Programs',
      description: 'Interactive hackathons and innovation challenges fostering creativity and collaboration.',
      color: 'from-electric-500/20 to-electric-600/20',
      border: 'border-electric-500/30',
    },
    {
      icon: Rocket,
      title: 'Development Programs',
      description: 'Intensive bootcamps for deep skill acquisition and career advancement.',
      color: 'from-gold-500/20 to-electric-500/20',
      border: 'border-gold-500/30',
    },
  ];

  const studentJourney = [
    { icon: Lightbulb, title: 'Discover', description: 'Explore opportunities' },
    { icon: BookOpen, title: 'Learn', description: 'Acquire skills' },
    { icon: Zap, title: 'Apply', description: 'Real-world projects' },
    { icon: Rocket, title: 'Innovate', description: 'Create solutions' },
    { icon: Handshake, title: 'Collaborate', description: 'Work with experts' },
    { icon: Star, title: 'Excel', description: 'Achieve success' },
  ];

  const values = [
    'Innovation-first approach',
    'Industry-relevant curriculum',
    'Practical hands-on learning',
    'Long-term partnerships',
    'Measurable outcomes',
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900 to-navy-800" />
        <div className="absolute inset-0 bg-grid-subtle" />
        <div className="absolute inset-0 bg-noise" />

        {/* Radial glow from center */}
        <div className="absolute inset-0 bg-radial-glow" />

        {/* Perspective lines */}
        <div className="absolute inset-0 perspective-lines opacity-30" />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20"
        >
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-gold-500 text-sm font-medium mb-12"
            >
              <Sparkles className="w-4 h-4" />
              <span>Institutional Innovation Partner</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-[9rem] font-display font-bold tracking-tight text-white leading-[0.95]">
                Shaping Minds.
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-[9rem] font-display font-bold tracking-tight leading-[0.95] mt-2 md:mt-4">
                <span className="gradient-text text-glow-gold">Building Futures.</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-lg md:text-xl lg:text-2xl text-white/50 max-w-2xl mx-auto mb-16 font-light leading-relaxed"
            >
              Empowering educational institutions through practical learning,
              innovation ecosystems, and industry-ready experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact" className="btn-primary text-lg group">
                Partner With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/programs" className="btn-secondary text-lg group">
                <Play className="w-5 h-5" />
                Explore Programs
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <div className="w-8 h-14 rounded-full border-2 border-white/10 flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1.5 h-1.5 rounded-full bg-gold-500"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-900 to-transparent" />
      </section>

      {/* Impact Metrics */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/30 to-navy-900" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Our Impact
            </div>
            <h2 className="section-heading text-white mb-6">
              Transforming Education
            </h2>
            <p className="section-subheading mx-auto">
              Measurable outcomes that demonstrate our commitment to educational excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {impactMetrics.map((stat, i) => (
              <Stat key={i} {...stat} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Quantum Learn */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-subtle opacity-50" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-500 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="section-heading text-white mb-6">
              The Quantum Learn
              <span className="gradient-text"> Advantage</span>
            </h2>
            <p className="section-subheading mx-auto">
              We combine industry expertise with educational excellence to deliver programs that create real impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyQuantumLearn.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group glass-strong rounded-3xl p-8 card-3d"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Ecosystem */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/20 to-navy-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Programs
            </div>
            <h2 className="section-heading text-white mb-6">
              Holistic Learning
              <span className="gradient-text"> Ecosystem</span>
            </h2>
            <p className="section-subheading mx-auto">
              A comprehensive suite of programs designed to address every aspect of student development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programCategories.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative glass-strong rounded-3xl p-10 overflow-hidden ${program.border} card-3d`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <program.icon className="w-8 h-8 text-gold-500" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">{program.title}</h3>
                  <p className="text-white/50 leading-relaxed mb-6">{program.description}</p>

                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-2 text-gold-500 font-medium text-sm group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Journey */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-500 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              The Journey
            </div>
            <h2 className="section-heading text-white mb-6">
              From Discovery to
              <span className="gradient-text"> Excellence</span>
            </h2>
            <p className="section-subheading mx-auto">
              A structured pathway guiding students through transformative learning experiences.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-500/20 via-electric-500/30 to-gold-500/20 -translate-y-1/2" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
              {studentJourney.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-2xl shadow-gold-500/40">
                      <step.icon className="w-10 h-10 text-navy-900" />
                    </div>
                    <div className="absolute -inset-2 bg-gold-500/30 rounded-3xl blur-xl opacity-50" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-navy-900 border-2 border-gold-500 flex items-center justify-center text-xs font-bold text-gold-500">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/40 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/30 to-navy-900" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-navy-800 to-electric-500/10" />
                <div className="absolute inset-0 glass-medium" />

                {/* Founder Portrait Placeholder with premium styling */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-2xl shadow-gold-500/50">
                      <span className="text-7xl font-display font-bold text-navy-900">M</span>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/40 to-electric-500/40 rounded-full blur-2xl -z-10" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-gold-500/20 rounded-3xl" />
              <div className="absolute -top-8 -left-8 w-32 h-32 border border-electric-500/20 rounded-3xl" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-strong rounded-2xl px-6 py-4 border-gold-500/30"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                    <span className="text-navy-900 font-display font-bold text-lg">M</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Mithun M</p>
                    <p className="text-gold-500 text-sm">Founder & CEO</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Leadership
              </div>

              <h2 className="section-heading text-white mb-8">
                Meet Our
                <span className="gradient-text"> Founder</span>
              </h2>

              <blockquote className="text-xl text-white/70 italic mb-8 border-l-2 border-gold-500 pl-6 leading-relaxed">
                "Education is not just about acquiring knowledge—it's about building the mindset,
                skills, and resilience to thrive in an ever-evolving world. At Quantum Learn,
                we're committed to bridging the gap between academic learning and real-world success."
              </blockquote>

              <div className="space-y-6 text-white/60 leading-relaxed">
                <p>
                  With a vision to transform educational institutions into innovation powerhouses,
                  Mithun founded Quantum Learn to address the critical gap between traditional
                  academics and industry expectations.
                </p>
                <p>
                  Under his leadership, the organization has partnered with over 15 institutions,
                  impacting 500+ learners through 20+ meticulously designed programs.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/about" className="btn-secondary text-sm">
                  Learn More About Us
                </Link>
                <a
                  href="https://wa.me/917760270540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Connect on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Institutions Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/20 to-navy-900" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-500 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Who We Serve
            </div>
            <h2 className="section-heading text-white mb-6">
              Partnering Across
              <span className="gradient-text"> Education</span>
            </h2>
            <p className="section-subheading mx-auto">
              We collaborate with diverse educational institutions to create tailored programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: GraduationCap, name: 'Schools' },
              { icon: BookOpen, name: 'PU Colleges' },
              { icon: Building2, name: 'Degree Colleges' },
              { icon: Globe, name: 'Engineering Colleges' },
              { icon: Award, name: 'Polytechnic Colleges' },
            ].map((inst, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group glass-medium rounded-2xl p-6 text-center hover:border-gold-500/30 transition-all duration-500"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <inst.icon className="w-7 h-7 text-gold-500" />
                </div>
                <p className="text-white font-medium text-sm">{inst.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-electric-500/5 to-gold-500/5" />
        <div className="absolute inset-0 bg-grid-subtle opacity-20" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-gold rounded-[2rem] p-12 lg:p-16 text-center relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-electric-500/10 opacity-50" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-8 shadow-2xl shadow-gold-500/40"
              >
                <Heart className="w-8 h-8 text-navy-900" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                Ready To Build The Next
                <span className="gradient-text"> Success Story?</span>
              </h2>

              <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
                Join our growing network of forward-thinking institutions that are transforming
                student outcomes through industry-relevant, practical learning experiences.
              </p>

              {/* Value propositions */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold-500" />
                    <span className="text-sm text-white/70">{value}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-lg group">
                  Start Partnership
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/917760270540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>

              {/* Direct contact */}
              <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/40 text-sm">
                <a href="mailto:msmithun927@gmail.com" className="flex items-center gap-2 hover:text-gold-500 transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 7760270540
                </a>
                <a href="mailto:msmithun927@gmail.com" className="flex items-center gap-2 hover:text-gold-500 transition-colors">
                  <Mail className="w-4 h-4" />
                  msmithun927@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
