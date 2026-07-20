import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Sparkles,
  Rocket,
  Code,
  Palette,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Play,
  Globe,
  Target,
  Briefcase,
  MessageSquare,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

const programCategories = [
  {
    id: 'knowledge',
    icon: BookOpen,
    title: 'Knowledge Programs',
    subtitle: 'Build Foundation & Awareness',
    description: 'Comprehensive workshops and seminars that introduce students to industry trends, emerging technologies, and essential professional skills.',
    color: 'from-gold-500 to-gold-600',
    features: ['Industry Overview Sessions', 'Technology Trend Workshops', 'Professional Skills Seminars', 'Career Pathway Guidance', 'Guest Expert Lectures'],
    outcomes: ['Industry awareness', 'Career clarity', 'Knowledge expansion', 'Professional mindset'],
  },
  {
    id: 'engagement',
    icon: Sparkles,
    title: 'Engagement Programs',
    subtitle: 'Experience & Collaborate',
    description: 'Interactive sessions, hackathons, and innovation challenges that foster creativity, collaboration, and hands-on problem-solving.',
    color: 'from-electric-500 to-electric-600',
    features: ['24-Hour Hackathons', 'Innovation Challenges', 'Team Building Activities', 'Industry Immersion Days', 'Design Thinking Workshops'],
    outcomes: ['Practical experience', 'Team collaboration', 'Creative thinking', 'Problem-solving skills'],
  },
  {
    id: 'development',
    icon: Rocket,
    title: 'Development Programs',
    subtitle: 'Deep Learning & Mastery',
    description: 'Intensive bootcamps and structured learning paths designed for deep skill acquisition and career advancement.',
    color: 'from-gold-500 to-electric-500',
    features: ['Skill-Specific Bootcamps', 'Project-Based Learning', 'Mentor-Led Sessions', 'Industry Certifications', 'Portfolio Development'],
    outcomes: ['Skill mastery', 'Portfolio building', 'Certification', 'Career readiness'],
  },
];

const featuredPrograms = [
  { icon: Code, title: 'Full-Stack Development Immersion', category: 'Development', duration: '12 Weeks', participants: '25-30', description: 'Comprehensive training covering frontend, backend, and deployment.', topics: ['React', 'Node.js', 'Database', 'Cloud'] },
  { icon: Palette, title: 'UX/UI Design Intensive', category: 'Development', duration: '8 Weeks', participants: '20-25', description: 'Master user experience design with hands-on projects.', topics: ['Research', 'Wireframing', 'Prototyping', 'Systems'] },
  { icon: TrendingUp, title: 'Data Analytics Essentials', category: 'Knowledge', duration: '4 Weeks', participants: '30-40', description: 'Foundation program introducing data analysis.', topics: ['Excel', 'Visualization', 'Statistics', 'Insights'] },
  { icon: Users, title: 'Product Management Bootcamp', category: 'Development', duration: '10 Weeks', participants: '20-25', description: 'Build successful products from ideation to launch.', topics: ['Research', 'Strategy', 'Agile', 'Stories'] },
  { icon: MessageSquare, title: 'Innovation Challenge Series', category: 'Engagement', duration: '2 Days', participants: '50-100', description: 'Hackathon-style events solving real challenges.', topics: ['Problem Solving', 'Prototyping', 'Teamwork', 'Pitching'] },
  { icon: Briefcase, title: 'Corporate Readiness Program', category: 'Knowledge', duration: '3 Days', participants: '40-50', description: 'Prepare students for corporate environments.', topics: ['Communication', 'Etiquette', 'Interviews', 'Resume'] },
];

const programBenefits = [
  { icon: Target, title: 'Industry-Aligned Curriculum', description: 'Content designed with direct input from industry experts.' },
  { icon: Users, title: 'Expert Mentorship', description: 'Learn from professionals with decades of experience.' },
  { icon: Globe, title: 'Real-World Projects', description: 'Build portfolios with actual industry projects.' },
  { icon: Award, title: 'Recognized Certifications', description: 'Earn credentials that employers value.' },
];

const stats = [
  { value: '20+', label: 'Programs' },
  { value: '500+', label: 'Trained' },
  { value: '10+', label: 'Mentors' },
  { value: '95%', label: 'Satisfaction' },
];

export default function ProgramsPage() {
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
              <Rocket className="w-4 h-4" />
              Our Programs
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8">
              Comprehensive Learning
              <span className="gradient-text"> Ecosystem</span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 font-light max-w-3xl mx-auto">
              From foundational workshops to intensive bootcamps, our programs create
              transformational learning experiences for students.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass-strong rounded-2xl p-6 text-center">
                <div className="text-3xl font-display font-bold gradient-text mb-1">{stat.value}</div>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Categories */}
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
              <BookOpen className="w-4 h-4" />
              Program Categories
            </div>
            <h2 className="section-heading text-white mb-6">Three Pillars of Learning</h2>
            <p className="section-subheading mx-auto">
              A balanced approach covering awareness, engagement, and skill development.
            </p>
          </motion.div>

          <div className="space-y-12">
            {programCategories.map((category, index) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-strong rounded-[2rem] p-8 md:p-12"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center gap-5 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-2xl shadow-gold-500/30`}>
                        <category.icon className="w-8 h-8 text-navy-900" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white">{category.title}</h3>
                        <p className="text-gold-500 text-sm">{category.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-white/60 text-lg leading-relaxed mb-8">{category.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature, idx) => (
                        <span key={idx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="glass-medium rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gold-500" />
                      Key Outcomes
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {category.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gold-500" />
                          <span className="text-white/70 text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
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
              Featured
            </div>
            <h2 className="section-heading text-white mb-6">Popular Programs</h2>
            <p className="section-subheading mx-auto">
              Our most impactful programs creating measurable outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group glass-strong rounded-3xl p-8 card-3d"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <program.icon className="w-7 h-7 text-gold-500" />
                  </div>
                  <div>
                    <span className="text-xs px-3 py-1 rounded-full bg-gold-500/10 text-gold-500 font-medium">
                      {program.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-2">{program.title}</h3>
                  </div>
                </div>

                <p className="text-white/50 text-sm mb-6">{program.description}</p>

                <div className="flex items-center gap-4 mb-6 text-sm text-white/40">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{program.participants}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {program.topics.map((topic, idx) => (
                    <span key={idx} className="px-2 py-1 rounded bg-white/5 text-white/50 text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              <Award className="w-4 h-4" />
              Why Our Programs Work
            </div>
            <h2 className="section-heading text-white mb-6">Built for Real Impact</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong rounded-3xl p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/50 text-sm">{benefit.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-white/50 text-lg mb-8">
              Let's discuss how our programs can create meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/partnerships" className="btn-primary group">
                Explore Partnerships
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                <Play className="w-5 h-5" />
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
