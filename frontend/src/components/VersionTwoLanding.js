import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ChevronDown, 
  Zap, 
  Eye, 
  Cpu, 
  Brain, 
  Smartphone, 
  TrendingUp, 
  Users, 
  Mail, 
  Phone, 
  Globe,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Target,
  Award,
  Lightbulb,
  Shield,
  Star,
  Play,
  ExternalLink
} from 'lucide-react';

const VersionTwoLanding = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll to show/hide nav
  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Navigation component
  const Navigation = () => {
    const sections = [
      'hero', 'problem', 'market', 'system', 'vora', 'vora-tech', 
      'vision', 'vision-magic', 'integration', 'verse', 'verse-metrics',
      'verse-tech', 'financials', 'advantage', 'team', 'investment'
    ];

    return (
      <AnimatePresence>
        {isNavVisible && (
          <motion.nav
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg z-50 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <motion.div 
                  className="text-2xl font-bold text-gradient"
                  whileHover={{ scale: 1.05 }}
                >
                  VersionTwo
                </motion.div>
                <button
                  onClick={() => scrollToSection('investment')}
                  className="btn-primary"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    );
  };

  // Section wrapper component
  const Section = ({ id, children, className = "", bgImage = null }) => {
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
    });

    return (
      <motion.section
        ref={ref}
        id={id}
        className={`section-spacing relative overflow-hidden ${className}`}
        style={bgImage ? {
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        } : {}}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
      >
        {bgImage && (
          <div className="absolute inset-0 bg-black/50 z-0"></div>
        )}
        <div className="relative z-10">
          {children}
        </div>
      </motion.section>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <Section 
        id="hero" 
        className="min-h-screen flex items-center justify-center gradient-bg"
        bgImage="https://images.pexels.com/photos/3653997/pexels-photo-3653997.jpeg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 hero-title">
              VersionTwo
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-4 hero-subtitle">
              The Future of Human-Computer Interaction
            </p>
            <div className="text-4xl md:text-6xl font-bold text-white mb-8">
              "Look. Speak. Done."
            </div>
            <p className="text-xl text-white/80 mb-12">
              The Universal Interface Revolution
            </p>
            <motion.div 
              className="space-y-4 text-white/70"
              variants={fadeInUp}
            >
              <p>versiontwo.world | @versiontwo.world | +91 9711390266</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown 
              className="w-8 h-8 text-white cursor-pointer"
              onClick={() => scrollToSection('problem')}
            />
          </motion.div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section id="problem" className="bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              We're Drowning in Digital Chaos
            </h2>
            <p className="text-xl text-gray-600 mb-12">The Daily Struggle</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div variants={slideInLeft} className="card">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sarah, 34, Marketing Manager</h3>
                <p className="text-gray-600">
                  Spends 3 hours daily switching between 12 different apps just to do her job
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="card">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cpu className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mike, 42, Software Engineer</h3>
                <p className="text-gray-600">
                  Laid off after 15 years, can't figure out how to "sell himself" on modern platforms
                </p>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="card">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lisa, 28, Designer</h3>
                <p className="text-gray-600">
                  Misses important client messages buried across 8 different communication tools
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">The Brutal Reality</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">80+</span>
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">apps on average phone</p>
                    <p className="text-gray-600">most forgotten and unused</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">23</span>
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">minutes daily wasted</p>
                    <p className="text-gray-600">searching for basic information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">151K</span>
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">skilled professionals laid off in 2024</p>
                    <p className="text-gray-600">talent wasted</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">67%</span>
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">of users feel overwhelmed</p>
                    <p className="text-gray-600">by technology that should help them</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-900 text-white p-8 rounded-2xl">
                <h4 className="text-2xl font-bold mb-4">The Human Cost</h4>
                <p className="text-lg">
                  We built technology to serve us, but we've become slaves to our interfaces.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Market Section */}
      <Section id="market" className="gradient-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-8">
              $2.1 Trillion Convergent Market by 2030
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-16">
            <div className="overflow-x-auto">
              <table className="w-full bg-white/10 backdrop-blur-lg rounded-2xl">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="px-6 py-4 text-left text-white font-semibold">Market Segment</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">2024 Value</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">2030 Projection</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">CAGR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-white">AI Agents</td>
                    <td className="px-6 py-4 text-white">$5.1B</td>
                    <td className="px-6 py-4 text-white">$47.1B</td>
                    <td className="px-6 py-4 text-green-400 font-bold">44.8%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-white">Wearable Computing</td>
                    <td className="px-6 py-4 text-white">$85.3B</td>
                    <td className="px-6 py-4 text-white">$532.2B</td>
                    <td className="px-6 py-4 text-green-400 font-bold">20.1%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-white">Metaverse Economy</td>
                    <td className="px-6 py-4 text-white">$132.6B</td>
                    <td className="px-6 py-4 text-white">$1.58T</td>
                    <td className="px-6 py-4 text-green-400 font-bold">36.4%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={slideInLeft} className="grid md:grid-cols-2 gap-12">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">The Opportunity</h3>
              <p className="text-xl mb-8">
                First company to unify all three explosive markets into one seamless experience
              </p>
              <h4 className="text-2xl font-bold mb-4">Why Now:</h4>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>Post-smartphone era beginning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>AI reaching consumer readiness</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>Remote work creating virtual economy demand</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg"
                alt="Financial Growth"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* System Section */}
      <Section id="system" className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Revolutionary Simplicity: How It Actually Works
            </h2>
            <p className="text-2xl text-gray-600 mb-12">Your New Reality</p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-8">
                <motion.div variants={slideInLeft} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Glasses</h3>
                    <p className="text-gray-600">Camera instantly reads menus, signs, products</p>
                  </div>
                </motion.div>

                <motion.div variants={slideInLeft} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Wristband</h3>
                    <p className="text-gray-600">NFC reader provides contextual interaction</p>
                  </div>
                </motion.div>

                <motion.div variants={slideInLeft} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI Assistant</h3>
                    <p className="text-gray-600">Processes everything intelligently in real-time</p>
                  </div>
                </motion.div>

                <motion.div variants={slideInLeft} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Natural Commands</h3>
                    <p className="text-gray-600">Simply say "I want pad thai, medium spice"</p>
                  </div>
                </motion.div>

                <motion.div variants={slideInLeft} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Automatic Execution</h3>
                    <p className="text-gray-600">Order placed, payment processed, done</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/17485657/pexels-photo-17485657.png"
                alt="AI Interface"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">The Result</h3>
              <p className="text-xl text-gray-600 mb-6">
                One universal remote control for ALL digital interactions
              </p>
              <div className="space-y-2 text-lg text-gray-700">
                <p>No more apps. No more passwords. No more friction.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="investment" className="gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-8">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Series A: $25M for 20% Equity
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-12">
            <motion.div variants={slideInLeft} className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Use of Funds</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Product Development</span>
                    <span className="text-white font-bold">40% ($10M)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Go-to-Market</span>
                    <span className="text-white font-bold">30% ($7.5M)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Infrastructure</span>
                    <span className="text-white font-bold">20% ($5M)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Team Expansion</span>
                    <span className="text-white font-bold">10% ($2.5M)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Investment Returns</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Expected ROI</span>
                    <span className="text-white font-bold">15-25x over 5-7 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Exit Strategy</span>
                    <span className="text-white font-bold">IPO or strategic acquisition by 2030</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Key Milestones</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">6</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Month 6</p>
                      <p className="text-white/80">10K active users across all products</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">12</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Month 12</p>
                      <p className="text-white/80">Vision hardware manufacturing at scale</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">18</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Month 18</p>
                      <p className="text-white/80">Break-even profitability achieved</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">24</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Month 24</p>
                      <p className="text-white/80">100K users, Series B preparation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-white" />
                    <span className="text-white">versiontwo.world</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-white" />
                    <span className="text-white">contact@versiontwo.world</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-white" />
                    <span className="text-white">+91 9711390266</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-white" />
                    <span className="text-white">@versiontwo.world</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-16">
            <motion.button
              className="btn-primary text-lg px-12 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'mailto:contact@versiontwo.world'}
            >
              Contact Us for Investment Discussion
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </motion.button>
            <p className="text-white/90 mt-6 text-lg">
              The future of human-computer interaction starts with VersionTwo. Let's build it together.
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default VersionTwoLanding;