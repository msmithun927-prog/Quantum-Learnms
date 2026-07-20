import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Users,
  Award,
  Building2,
  BookOpen,
  Star,
  Quote,
  Target,
  Zap,
  Globe,
  Heart,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Rocket,
  GraduationCap,
  MessageCircle,
} from 'lucide-react';

const mainMetrics = [
  { value: 500, suffix: '+', label: 'Learners Engaged', icon: Users },
  { value: 20, suffix: '+', label: 'Programs Delivered', icon: BookOpen },
  { value: 15, suffix: '+', label: 'Institution Partners', icon: Building2 },
  { value: 95, suffix: '%', label: 'Satisfaction Rate', icon: Star },
];

const programMetrics = [
  { label: 'Knowledge Programs', value: 8, color: 'from-gold-500 to-gold-600' },
  { label: 'Engagement Programs', value: 6, color: 'from-electric-500 to-electric-600' },
  { label: 'Development Programs', value: 8, color: 'from-gold-500 to-gold-600' },
];

const studentOutcomes = [
  { label: 'Industry Certifications', value: '200+' },
  { label: 'Projects Completed', value: '150+' },
  { label: 'Internships Secured', value: '80+' },
  { label: 'Career Transitions', value: '50+' },
];

const testimonials = [
  {
    quote: "Quantum Learn transformed how we prepare students for careers. Their industry-connected approach significantly improved our placement rates.",
    author: 'Dr. Sharma',
    role: 'Principal',
    institution: 'City Engineering College',
    gradient: 'from-gold-500 to-gold-600',
  },
  {
    quote: "The mentorship and practical experience my students received was invaluable. They gained real skills that employers actually want.",
    author: 'Prof. Patel',
    role: 'HOD, Computer Science',
    institution: 'State Polytechnic',
    gradient: 'from-electric-500 to-electric-600',
  },
  {
    quote: "Working with Quantum Learn helped us build an innovation ecosystem that continues to create value for our students.",
    author: 'Mrs. Gupta',
    role: 'Administrator',
    institution: 'Modern PU College',
    gradient: 'from-gold-500 to-gold-600',
  },
];

const successStories = [
  { institution: 'Premier Engineering College', program: 'Full-Stack Bootcamp', outcome: '40% increase in placement rates', students: 85, duration: '12 weeks', icon: Rocket },
  { institution: 'City Degree College', program: 'Corporate Readiness', outcome: '90% cleared first interviews', students: 120, duration: '4 weeks', icon: GraduationCap },
  { institution: 'State PU College', program: 'Career Discovery', outcome: 'Informed career decisions', students: 200, duration: '2 weeks', icon: Target },
  { institution: 'Technical Polytechnic', program: 'Industry Immersion', outcome: '60% secured apprenticeships', students: 75, duration: '6 weeks', icon: Globe },
];

const impactAreas = [
  { icon: Zap, title: 'Skill Development', description: 'Practical, industry-relevant skills through hands-on projects.', stat: '85%', statLabel: 'Skill Improvement' },
  { icon: Target, title: 'Career Clarity', description: 'Clear understanding of career paths and informed decisions.', stat: '92%', statLabel: 'Career Clarity' },
  { icon: Heart, title: 'Confidence Building', description: 'Confidence to pursue goals through practical experience.', stat: '88%', statLabel: 'Confidence Gain' },
  { icon: Globe, title: 'Industry Exposure', description: 'Direct connections with industry professionals.', stat: '40+', statLabel: 'Industry Mentors' },
];

export default function ImpactPage() {
  return (
    <div className="relative pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-8">
              <TrendingUp className="w-4 h-4" />
              Our Impact
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8">
              Measurable Results,
              <span className="gradient-text"> Real Transformations</span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 font-light max-w-3xl mx-auto">
              Every program we deliver is designed to create lasting impact. Here's what we've achieved together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Metrics */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/50 to-navy-900" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {mainMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-strong rounded-3xl p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center mb-4">
                  <metric.icon className="w-7 h-7 text-gold-500" />
                </div>
                <div className="relative">
                  <span className="text-4xl md:text-5xl font-display font-bold gradient-text">
                    {metric.value}
                  </span>
                  <span className="text-4xl md:text-5xl font-display font-bold text-white/80">
                    {metric.suffix}
                  </span>
                </div>
                <p className="mt-2 text-white/50 text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-500 text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Where We Create Value
            </div>
            <h2 className="section-heading text-white mb-6">Impact Across Dimensions</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong rounded-3xl p-8 text-center card-3d"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center mb-6">
                  <area.icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
                <p className="text-white/50 text-sm mb-4">{area.description}</p>
                <div className="text-3xl font-display font-bold gradient-text">{area.stat}</div>
                <p className="text-white/40 text-xs">{area.statLabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Distribution */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/30 to-navy-900" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Program Delivery
              </div>

              <h2 className="section-heading text-white mb-6">
                20+ Programs Delivered
              </h2>

              <p className="text-white/50 text-lg mb-8">
                Our three-pillar approach ensures comprehensive coverage of student development needs.
              </p>

              <div className="space-y-4">
                {programMetrics.map((program, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/70">{program.label}</span>
                      <span className="text-white font-semibold">{program.value}</span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(program.value / 20) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${program.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-gold rounded-3xl p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-500" />
                Student Outcomes
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {studentOutcomes.map((outcome, index) => (
                  <div key={index} className="glass-subtle rounded-2xl p-4">
                    <div className="text-2xl font-display font-bold gradient-text mb-1">{outcome.value}</div>
                    <p className="text-white/50 text-sm">{outcome.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              <Star className="w-4 h-4" />
              Success Stories
            </div>
            <h2 className="section-heading text-white mb-6">Transformational Outcomes</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong rounded-3xl p-8 card-3d"
              >
                <div className="flex items-start gap-5 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center flex-shrink-0">
                    <story.icon className="w-7 h-7 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{story.institution}</h3>
                    <p className="text-gold-500 text-sm">{story.program}</p>
                  </div>
                </div>

                <p className="text-white/60 mb-6">{story.outcome}</p>

                <div className="flex items-center gap-6 text-sm text-white/40">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{story.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{story.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/30 to-navy-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-500 text-sm font-medium mb-6">
              <Quote className="w-4 h-4" />
              Testimonials
            </div>
            <h2 className="section-heading text-white mb-6">What Partners Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong rounded-3xl p-8 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gold-500/20" />
                <p className="text-white/70 italic mb-8 leading-relaxed">{testimonial.quote}</p>

                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-navy-900 font-bold text-lg">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-white/50 text-sm">{testimonial.role}, {testimonial.institution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <Sparkles className="w-12 h-12 mx-auto text-gold-500 mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-white/50 text-lg mb-8">
              Join our network of forward-thinking institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/partnerships" className="btn-primary group">
                Partner With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://wa.me/917760270540" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
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
