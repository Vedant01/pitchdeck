import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft,
  ChevronRight,
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
  ExternalLink,
  User,
  Settings,
  Activity,
  DollarSign,
  Layers,
  GitBranch,
  Cloud,
  Database
} from 'lucide-react';

const VersionTwoLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  // Slide data
  const slides = [
    {
      id: 'hero',
      title: 'VersionTwo',
      subtitle: 'The Future of Human-Computer Interaction',
      content: '"Look. Speak. Done."',
      type: 'hero'
    },
    {
      id: 'problem',
      title: "We're Drowning in Digital Chaos",
      subtitle: 'The Human Cost of Digital Complexity',
      type: 'problem'
    },
    {
      id: 'futureops',
      title: 'FutureOps Framework',
      subtitle: 'Transforming Future-Ready Operations',
      type: 'futureops'
    },
    {
      id: 'market',
      title: '$2.1 Trillion Convergent Market by 2030',
      subtitle: 'Explosive Market Opportunity',
      type: 'market'
    },
    {
      id: 'system',
      title: 'Revolutionary Simplicity',
      subtitle: 'How It Actually Works',
      type: 'system'
    },
    {
      id: 'vora',
      title: 'VORA - Your Personal Jarvis',
      subtitle: 'AI Agent That Actually Understands Your World',
      type: 'vora'
    },
    {
      id: 'vora-tech',
      title: 'VORA - Technical Superiority',
      subtitle: 'Advanced AI Architecture That Delivers',
      type: 'vora-tech'
    },
    {
      id: 'vision',
      title: 'VISION - Smart Wearables Revolution',
      subtitle: 'Bridge Physical & Digital Worlds Seamlessly',
      type: 'vision'
    },
    {
      id: 'vision-magic',
      title: 'VISION - Real-World Magic',
      subtitle: 'Universal Application Across Every Industry',
      type: 'vision-magic'
    },
    {
      id: 'integration',
      title: 'VORA + VISION Integration',
      subtitle: 'The Magic of Perfect Integration',
      type: 'integration'
    },
    {
      id: 'verse',
      title: 'VERSE - Rebuilding Human Dignity',
      subtitle: 'Virtual Economy Platform for Displaced Professionals',
      type: 'verse'
    },
    {
      id: 'verse-metrics',
      title: 'VERSE - Proven Success Metrics',
      subtitle: 'Market Validation That Speaks Volumes',
      type: 'verse-metrics'
    },
    {
      id: 'verse-tech',
      title: 'VERSE - Technology Excellence',
      subtitle: 'Advanced Virtual Economy Infrastructure',
      type: 'verse-tech'
    },
    {
      id: 'financials',
      title: 'Financial Projections',
      subtitle: 'Explosive Growth Trajectory',
      type: 'financials'
    },
    {
      id: 'advantage',
      title: 'Why VersionTwo Will Dominate',
      subtitle: 'Unbeatable Competitive Moats',
      type: 'advantage'
    },
    {
      id: 'team',
      title: 'Experienced Leadership Team',
      subtitle: 'Proven Track Record',
      type: 'team'
    },
    {
      id: 'investment',
      title: 'Ready to Join the Revolution?',
      subtitle: 'Series A: $25M for 20% Equity',
      type: 'investment'
    }
  ];

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(nextSlide, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const slideTransition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.3 }
  };

  // Slide content components
  const HeroSlide = () => (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-4">
          VersionTwo
        </h1>
        <p className="text-2xl md:text-3xl text-cyan-400 mb-6">
          The Future of Human-Computer Interaction
        </p>
        <div className="text-5xl md:text-6xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8">
          "Look. Speak. Done."
        </div>
        <p className="text-xl text-gray-300 mb-8">
          The Universal Interface Revolution
        </p>
        <div className="text-gray-400 space-y-2">
          <p>versiontwo.world | @versiontwo.world | +91 9711390266</p>
        </div>
      </motion.div>
    </div>
  );

  const ProblemSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">
          We're Drowning in Digital Chaos
        </h2>
        <p className="text-2xl text-gray-300">The Daily Struggle</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Sarah, 34, Marketing Manager</h3>
            <p className="text-gray-300">
              Spends 3 hours daily switching between 12 different apps just to do her job
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cpu className="w-10 h-10 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Mike, 42, Software Engineer</h3>
            <p className="text-gray-300">
              Laid off after 15 years, can't figure out how to "sell himself" on modern platforms
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Lisa, 28, Designer</h3>
            <p className="text-gray-300">
              Misses important client messages buried across 8 different communication tools
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">The Brutal Reality</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-900/50 rounded-full flex items-center justify-center">
                <span className="text-red-400 font-bold text-lg">80+</span>
              </div>
              <div>
                <p className="text-white font-semibold">apps on average phone</p>
                <p className="text-gray-400">most forgotten and unused</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-900/50 rounded-full flex items-center justify-center">
                <span className="text-orange-400 font-bold text-lg">23</span>
              </div>
              <div>
                <p className="text-white font-semibold">minutes daily wasted</p>
                <p className="text-gray-400">searching for basic information</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                <span className="text-purple-400 font-bold text-lg">151K</span>
              </div>
              <div>
                <p className="text-white font-semibold">skilled professionals laid off in 2024</p>
                <p className="text-gray-400">talent wasted</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl border border-gray-700">
            <h4 className="text-2xl font-bold mb-4 text-red-400">The Human Cost</h4>
            <p className="text-lg text-gray-300">
              We built technology to serve us, but we've become slaves to our interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const FutureOpsSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">
          FutureOps Framework
        </h2>
        <p className="text-2xl text-cyan-400 mb-4">Transforming Future-Ready Operations</p>
        <p className="text-xl text-gray-300">
          How DevOps and FinOps Handle Developer and Financial Operations
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div className="space-y-8">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center">
                <GitBranch className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">DevOps Revolution</h3>
                <p className="text-gray-300 mb-4">
                  Traditional DevOps focuses on development and operations. We transform it into intelligent, predictive workflows.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• AI-powered deployment predictions</li>
                  <li>• Autonomous error detection and resolution</li>
                  <li>• Context-aware infrastructure scaling</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">FinOps Evolution</h3>
                <p className="text-gray-300 mb-4">
                  Financial operations become predictive and automated, eliminating waste and maximizing ROI.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Real-time cost optimization</li>
                  <li>• Predictive budget forecasting</li>
                  <li>• Automated resource rightsizing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="FutureOps Dashboard"
            className="rounded-2xl shadow-2xl border border-gray-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h4 className="text-xl font-bold text-white mb-2">FutureOps Dashboard</h4>
            <p className="text-gray-300">Unified operations intelligence</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">The FutureOps Advantage</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-cyan-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Predictive Operations</h4>
            <p className="text-gray-400">AI predicts and prevents issues before they occur</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Unified Platform</h4>
            <p className="text-gray-400">One interface for all operational needs</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Cost Reduction</h4>
            <p className="text-gray-400">60% reduction in operational overhead</p>
          </div>
        </div>
      </div>
    </div>
  );

  const MarketSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">
          $2.1 Trillion Convergent Market by 2030
        </h2>
        <p className="text-2xl text-cyan-400">Explosive Market Opportunity</p>
      </div>

      <div className="mb-12">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-4 px-6 text-xl">Market Segment</th>
                <th className="text-center py-4 px-6 text-xl">2024 Value</th>
                <th className="text-center py-4 px-6 text-xl">2030 Projection</th>
                <th className="text-center py-4 px-6 text-xl">CAGR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6 font-semibold text-lg">AI Agents</td>
                <td className="py-4 px-6 text-center text-lg">$5.1B</td>
                <td className="py-4 px-6 text-center text-lg">$47.1B</td>
                <td className="py-4 px-6 text-center font-bold text-green-400 text-lg">44.8%</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6 font-semibold text-lg">Wearable Computing</td>
                <td className="py-4 px-6 text-center text-lg">$85.3B</td>
                <td className="py-4 px-6 text-center text-lg">$532.2B</td>
                <td className="py-4 px-6 text-center font-bold text-green-400 text-lg">20.1%</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-lg">Metaverse Economy</td>
                <td className="py-4 px-6 text-center text-lg">$132.6B</td>
                <td className="py-4 px-6 text-center text-lg">$1.58T</td>
                <td className="py-4 px-6 text-center font-bold text-green-400 text-lg">36.4%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-white mb-6">The Opportunity</h3>
          <p className="text-xl mb-8 text-gray-300">
            First company to unify all three explosive markets into one seamless experience
          </p>
          <h4 className="text-2xl font-bold mb-4 text-cyan-400">Why Now:</h4>
          <ul className="space-y-4 text-lg text-gray-300">
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
            className="rounded-2xl shadow-2xl border border-gray-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </div>
  );

  // Navigation Controls
  const NavigationControls = () => (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gray-900/90 backdrop-blur-lg rounded-full px-6 py-4 border border-gray-700">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );

  // Slide Progress
  const SlideProgress = () => (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <div 
        className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300"
        style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
      />
    </div>
  );

  // Slide Info
  const SlideInfo = () => (
    <div className="fixed top-8 right-8 z-50">
      <div className="bg-gray-900/90 backdrop-blur-lg rounded-lg px-4 py-2 border border-gray-700">
        <span className="text-gray-300 text-sm">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  );

  const renderSlideContent = (slide) => {
    switch (slide.type) {
      case 'hero':
        return <HeroSlide />;
      case 'problem':
        return <ProblemSlide />;
      case 'futureops':
        return <FutureOpsSlide />;
      case 'market':
        return <MarketSlide />;
      case 'system':
        return <SystemSlide />;
      case 'vora':
        return <VoraSlide />;
      case 'vora-tech':
        return <VoraTechSlide />;
      case 'vision':
        return <VisionSlide />;
      case 'vision-magic':
        return <VisionMagicSlide />;
      case 'integration':
        return <IntegrationSlide />;
      case 'verse':
        return <VerseSlide />;
      case 'verse-metrics':
        return <VerseMetricsSlide />;
      case 'verse-tech':
        return <VerseTechSlide />;
      case 'financials':
        return <FinancialsSlide />;
      case 'advantage':
        return <AdvantageSlide />;
      case 'team':
        return <TeamSlide />;
      case 'investment':
        return <InvestmentSlide />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-12">
            <h2 className="text-6xl font-bold text-white mb-6">{slide.title}</h2>
            <p className="text-2xl text-cyan-400">{slide.subtitle}</p>
            <div className="mt-12 text-gray-400">
              <p>Slide content coming soon...</p>
            </div>
          </div>
        );
    }
  };

  // Additional slide components
  const SystemSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">Revolutionary Simplicity</h2>
        <p className="text-2xl text-cyan-400">How It Actually Works</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center">
              <Eye className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Glasses</h3>
              <p className="text-gray-300">Camera instantly reads menus, signs, products</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0 w-16 h-16 bg-indigo-900/50 rounded-full flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Wristband</h3>
              <p className="text-gray-300">NFC reader provides contextual interaction</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0 w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center">
              <Brain className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">AI Assistant</h3>
              <p className="text-gray-300">Processes everything intelligently in real-time</p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">The Result</h3>
            <p className="text-xl text-cyan-400 mb-4">One universal remote control for ALL digital interactions</p>
            <p className="text-lg text-gray-300">No more apps. No more passwords. No more friction.</p>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/17485657/pexels-photo-17485657.png"
            alt="AI Interface"
            className="rounded-2xl shadow-2xl border border-gray-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </div>
  );

  const VoraSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">VORA - Your Personal Jarvis</h2>
        <p className="text-2xl text-cyan-400">AI Agent That Actually Understands Your World</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Beyond Every Other AI Assistant</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-cyan-900/50 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Personal Memory</h4>
                <p className="text-gray-300">Remembers your preferences, schedule, relationships</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                <Cpu className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Code Generation</h4>
                <p className="text-gray-300">Creates actual scripts and automations, not just answers</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-2xl font-bold text-cyan-400 mb-2">$29</div>
                <div className="text-gray-400 text-sm">Monthly Subscription</div>
              </div>
              <div className="text-center bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-2xl font-bold text-cyan-400 mb-2">78%</div>
                <div className="text-gray-400 text-sm">Gross Margin</div>
              </div>
              <div className="text-center bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-2xl font-bold text-cyan-400 mb-2">4.8/5</div>
                <div className="text-gray-400 text-sm">User Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6">Real Power in Action</h3>
          <div className="space-y-4">
            <div className="bg-gray-700/50 rounded-lg p-4">
              <p className="text-gray-300 mb-2">"Schedule dinner with Mom when she's free next week"</p>
              <p className="text-cyan-400 text-sm">→ Calendar magic happens</p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4">
              <p className="text-gray-300 mb-2">"Create a Python script to analyze my spending patterns"</p>
              <p className="text-cyan-400 text-sm">→ Executable code delivered</p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4">
              <p className="text-gray-300 mb-2">"Order my usual coffee when I'm near the café"</p>
              <p className="text-cyan-400 text-sm">→ Location-based automation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const VoraTechSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">VORA - Technical Superiority</h2>
        <p className="text-2xl text-cyan-400">Advanced AI Architecture That Delivers</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Core Capabilities</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Multimodal Processing</h4>
                <p className="text-gray-300">Text, voice, images, sensor data from Vision hardware</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-900/50 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Personal Knowledge Base</h4>
                <p className="text-gray-300">Retrieval-augmented generation with your data</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6">Competitive Domination</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-2">Feature</th>
                  <th className="text-center py-2">Others</th>
                  <th className="text-center py-2">VORA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2">Personal Memory</td>
                  <td className="text-center py-2 text-red-400">✗</td>
                  <td className="text-center py-2 text-green-400">✓</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2">Code Generation</td>
                  <td className="text-center py-2 text-yellow-400">Basic</td>
                  <td className="text-center py-2 text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="py-2">Real-World Context</td>
                  <td className="text-center py-2 text-red-400">✗</td>
                  <td className="text-center py-2 text-green-400">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">4.8/5</div>
                <p className="text-gray-400 text-sm">User satisfaction</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">89%</div>
                <p className="text-gray-400 text-sm">Task completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const VisionSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">VISION - Smart Wearables Revolution</h2>
        <p className="text-2xl text-cyan-400">Bridge Physical & Digital Worlds Seamlessly</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Premium Hardware That Works</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-cyan-900/50 rounded-full flex items-center justify-center">
                <Eye className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Smart Glasses</h4>
                <p className="text-gray-300">8MP camera, micro-OLED display, 8-hour battery (only 35g)</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Smart Wristband</h4>
                <p className="text-gray-300">NFC reader, biometric sensors, 5-day battery, IP68 waterproof</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="text-center bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-2xl font-bold text-cyan-400 mb-2">$449</div>
                <div className="text-gray-400 text-sm">Hardware Bundle</div>
              </div>
              <div className="text-center bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-2xl font-bold text-cyan-400 mb-2">42%</div>
                <div className="text-gray-400 text-sm">Gross Margin</div>
              </div>
              <div className="text-center bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-2xl font-bold text-cyan-400 mb-2">18%</div>
                <div className="text-gray-400 text-sm">Repeat Rate</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/5081424/pexels-photo-5081424.jpeg"
            alt="Smart Wearables"
            className="rounded-2xl shadow-2xl border border-gray-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </div>
  );

  const VisionMagicSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">VISION - Real-World Magic</h2>
        <p className="text-2xl text-cyan-400">Universal Application Across Every Industry</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 text-red-400 mr-3" />
              Healthcare Revolution
            </h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>→ Scan prescription bottles → Instant dosage reminders</p>
              <p>→ Tap hospital wristbands → Complete medical records</p>
              <p>→ Emergency situations → Auto-contact professionals</p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <BarChart3 className="w-6 h-6 text-purple-400 mr-3" />
              Retail & Commerce
            </h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>→ Look at any product → Instant price comparison</p>
              <p>→ Tap payment terminals → Seamless transactions</p>
              <p>→ Scan barcodes → Real-time inventory</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Target className="w-6 h-6 text-blue-400 mr-3" />
              Transportation Simplified
            </h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>→ Look at bus stops → Live arrival information</p>
              <p>→ Tap transit cards → Optimized routes</p>
              <p>→ Navigation assistance → Turn-by-turn directions</p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Star className="w-6 h-6 text-green-400 mr-3" />
              Food & Restaurant Experience
            </h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>→ Scan any menu → Dietary information</p>
              <p>→ Tap table tags → Direct ordering system</p>
              <p>→ Voice commands → "Something spicy under $15"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const IntegrationSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">VORA + VISION Integration</h2>
        <p className="text-2xl text-cyan-400">The Magic of Perfect Integration</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Exponential Power When Combined</h3>
          <p className="text-xl text-gray-300 mb-6">
            Vision's hardware provides context → Vora's AI becomes exponentially more intelligent
          </p>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <h4 className="text-xl font-bold text-white mb-4">Real-World Example</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-xs font-bold text-black">1</div>
                <p className="text-gray-300 text-sm">Vision sees restaurant menu through smart glasses</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-xs font-bold text-black">2</div>
                <p className="text-gray-300 text-sm">Vision taps NFC tag on table</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-xs font-bold text-black">3</div>
                <p className="text-gray-300 text-sm">Vora processes your preferences and budget</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-xs font-bold text-black">4</div>
                <p className="text-gray-300 text-sm">You speak: "Something healthy under $20"</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-xs font-bold text-black">5</div>
                <p className="text-gray-300 text-sm">Order placed and payment processed automatically</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Unbeatable Competitive Advantage</h3>
          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-4 border border-gray-700">
              <p className="text-white text-sm">No other company combines AI intelligence with contextual hardware</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-4 border border-gray-700">
              <p className="text-white text-sm">Network effects - more usage improves both products exponentially</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-4 border border-gray-700">
              <p className="text-white text-sm">Data moat - personal context creates massive switching costs</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-cyan-400 mb-1">73%</div>
                <p className="text-gray-400 text-sm">First-try success rate</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-cyan-400 mb-1">4.8/5</div>
                <p className="text-gray-400 text-sm">User satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const VerseSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">VERSE - Rebuilding Human Dignity</h2>
        <p className="text-2xl text-cyan-400">Virtual Economy Platform for Displaced Professionals</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-red-400 mb-4">The Crisis</h3>
            <p className="text-lg text-red-200">
              151,484 skilled tech workers laid off in 2024 - talent wasted, dreams shattered
            </p>
          </div>
          
          <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">The Solution - VERSE Basecamp</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-white text-sm">Personal 3D Workspace - Interactive resume that tells your story</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-white text-sm">Room Templates - Modern Loft, Zen Office, Hacker Bunker</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-white text-sm">Work Artifacts - Projects, skills, videos as interactive experiences</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-white text-sm">Custom Domains - Professional URLs (verse.to/yourname)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/32832530/pexels-photo-32832530.jpeg"
            alt="Virtual Workspace"
            className="rounded-2xl shadow-2xl border border-gray-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h4 className="text-xl font-bold text-white mb-2">Dignity-First Design</h4>
            <p className="text-gray-300">$85 average hourly rate vs $65 on traditional platforms</p>
          </div>
        </div>
      </div>
    </div>
  );

  const VerseMetricsSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">VERSE - Proven Success Metrics</h2>
        <p className="text-2xl text-cyan-400">Market Validation That Speaks Volumes</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Beta Program Results</h3>
          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-white">Average hourly rate</span>
                <span className="text-emerald-400 font-bold text-xl">$85</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">31% higher than Upwork/Fiverr</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-white">Client retention rate</span>
                <span className="text-emerald-400 font-bold text-xl">68%</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">Industry average: 45%</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-white">Booking rate (30 days)</span>
                <span className="text-emerald-400 font-bold text-xl">73%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Revenue Model</h3>
          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4">Subscription Tiers</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-white font-semibold">Free</span>
                    <p className="text-gray-400 text-xs">1 template, 3 projects</p>
                  </div>
                  <span className="text-emerald-400 font-bold">$0</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-white font-semibold">Pro</span>
                    <p className="text-gray-400 text-xs">5 templates, unlimited projects</p>
                  </div>
                  <span className="text-emerald-400 font-bold">$29/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-white font-semibold">Elite</span>
                    <p className="text-gray-400 text-xs">AI assistant, analytics</p>
                  </div>
                  <span className="text-emerald-400 font-bold">$99/mo</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-white">Platform fee</span>
                <span className="text-emerald-400 font-bold">Only 5%</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">vs 20% on Upwork</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const VerseTechSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">VERSE - Technology Excellence</h2>
        <p className="text-2xl text-cyan-400">Advanced Virtual Economy Infrastructure</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Technical Architecture</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                <Cpu className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">3D Rendering</h4>
                <p className="text-gray-300 text-sm">WebGL-based virtual environments, cross-platform</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-900/50 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Real-Time Communication</h4>
                <p className="text-gray-300 text-sm">WebRTC for seamless video meetings</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">AI Matching Engine</h4>
                <p className="text-gray-300 text-sm">Machine learning for perfect talent-opportunity pairing</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6">Competitive Domination</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-white font-semibold">Platform</span>
              <span className="text-white font-semibold">VERSE Advantage</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-300">LinkedIn</span>
              <span className="text-purple-400 font-semibold text-sm">Immersive 3D workspaces</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-300">Upwork</span>
              <span className="text-purple-400 font-semibold text-sm">Premium positioning</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-300">Fiverr</span>
              <span className="text-purple-400 font-semibold text-sm">Relationship building</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-300">Zoom</span>
              <span className="text-purple-400 font-semibold text-sm">Integrated showcase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FinancialsSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">Financial Projections</h2>
        <p className="text-2xl text-cyan-400">Explosive Growth Trajectory</p>
      </div>

      <div className="mb-8">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Revenue Projections</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-3 px-4">Year</th>
                  <th className="text-center py-3 px-4">Vora</th>
                  <th className="text-center py-3 px-4">Vision</th>
                  <th className="text-center py-3 px-4">Verse</th>
                  <th className="text-center py-3 px-4">Total</th>
                  <th className="text-center py-3 px-4">Growth</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-bold">2025</td>
                  <td className="py-3 px-4 text-center">$2.1M</td>
                  <td className="py-3 px-4 text-center">$1.8M</td>
                  <td className="py-3 px-4 text-center">$2.4M</td>
                  <td className="py-3 px-4 text-center font-bold text-cyan-400">$6.3M</td>
                  <td className="py-3 px-4 text-center text-yellow-400">Launch</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-bold">2026</td>
                  <td className="py-3 px-4 text-center">$12.4M</td>
                  <td className="py-3 px-4 text-center">$18.7M</td>
                  <td className="py-3 px-4 text-center">$12.8M</td>
                  <td className="py-3 px-4 text-center font-bold text-cyan-400">$43.9M</td>
                  <td className="py-3 px-4 text-center text-green-400 font-bold">597%</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4 font-bold">2027</td>
                  <td className="py-3 px-4 text-center">$45.2M</td>
                  <td className="py-3 px-4 text-center">$67.3M</td>
                  <td className="py-3 px-4 text-center">$38.5M</td>
                  <td className="py-3 px-4 text-center font-bold text-cyan-400">$151.0M</td>
                  <td className="py-3 px-4 text-center text-green-400 font-bold">244%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">2028</td>
                  <td className="py-3 px-4 text-center">$128.6M</td>
                  <td className="py-3 px-4 text-center">$156.8M</td>
                  <td className="py-3 px-4 text-center">$89.2M</td>
                  <td className="py-3 px-4 text-center font-bold text-cyan-400">$374.6M</td>
                  <td className="py-3 px-4 text-center text-green-400 font-bold">148%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Unit Economics</h3>
          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-4 border border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-white">Customer Acquisition Cost</span>
                <span className="text-cyan-400 font-bold">$67</span>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-4 border border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-white">Customer Lifetime Value</span>
                <span className="text-cyan-400 font-bold">$1,424</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">21x CAC ratio</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-4 border border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-white">Payback Period</span>
                <span className="text-cyan-400 font-bold">2.9 months</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Path to Profitability</h3>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-green-400 mb-2">Month 18</div>
              <p className="text-gray-400">Break-even timeline</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">35K</div>
              <p className="text-gray-400">Required active users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AdvantageSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">Why VersionTwo Will Dominate</h2>
        <p className="text-2xl text-cyan-400">Unbeatable Competitive Moats</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-900/50 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">First-Mover Advantage</h3>
                <p className="text-gray-300 text-sm">Only integrated AI + wearable + virtual economy platform</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Network Effects</h3>
                <p className="text-gray-300 text-sm">Each product makes the others exponentially more valuable</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Data Moat</h3>
                <p className="text-gray-300 text-sm">Personal context creates massive switching costs</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Market Positioning</h3>
          <div className="space-y-4">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 border-l-4 border-l-orange-500">
              <h4 className="text-lg font-bold text-white mb-1">vs. Big Tech</h4>
              <p className="text-gray-300 text-sm">Privacy-first, user-controlled data</p>
            </div>
            
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 border-l-4 border-l-purple-500">
              <h4 className="text-lg font-bold text-white mb-1">vs. Startups</h4>
              <p className="text-gray-300 text-sm">Comprehensive ecosystem, not point solutions</p>
            </div>
            
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 border-l-4 border-l-blue-500">
              <h4 className="text-lg font-bold text-white mb-1">vs. Hardware Companies</h4>
              <p className="text-gray-300 text-sm">Software-first approach with AI intelligence</p>
            </div>
          </div>
          
          <div className="mt-8 text-center bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
            <h4 className="text-2xl font-bold text-white mb-4">The Reality</h4>
            <p className="text-gray-300 mb-4">No competitor can replicate our integrated approach</p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">$10B+</div>
                <p className="text-gray-400 text-xs">Investment needed</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">3-5</div>
                <p className="text-gray-400 text-xs">Years to market</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">0</div>
                <p className="text-gray-400 text-xs">Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TeamSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">Experienced Leadership Team</h2>
        <p className="text-2xl text-cyan-400">Proven Track Record</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
          <div className="text-center">
            <div className="w-20 h-20 bg-cyan-900/50 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User className="w-10 h-10 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Vedant Agarwal</h3>
            <p className="text-cyan-400 font-semibold mb-4">CEO</p>
            <div className="text-left text-sm space-y-2">
              <p className="text-gray-300"><Mail className="w-4 h-4 inline mr-2" />vedant@versiontwo.world</p>
              <p className="text-gray-300 mt-3"><strong>Expertise:</strong> AI/ML architecture</p>
              <p className="text-gray-300"><strong>Leadership:</strong> Technical strategy</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-900/50 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Debarun Karmakar</h3>
            <p className="text-purple-400 font-semibold mb-4">CPO</p>
            <div className="text-left text-sm space-y-2">
              <p className="text-gray-300"><Mail className="w-4 h-4 inline mr-2" />debarun@versiontwo.world</p>
              <p className="text-gray-300 mt-3"><strong>Expertise:</strong> Hardware engineering</p>
              <p className="text-gray-300"><strong>Leadership:</strong> Product innovation</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-900/50 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Siri Kaparthi</h3>
            <p className="text-green-400 font-semibold mb-4">CGO</p>
            <div className="text-left text-sm space-y-2">
              <p className="text-gray-300"><Mail className="w-4 h-4 inline mr-2" />siri@versiontwo.world</p>
              <p className="text-gray-300 mt-3"><strong>Expertise:</strong> Go-to-market strategy</p>
              <p className="text-gray-300"><strong>Leadership:</strong> Growth execution</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Proven Track Record</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-white">Working prototypes across all three products</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-white">2,500 beta users with exceptional metrics</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-white">45 enterprise partnerships secured</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-white">$127K pre-orders for Vision hardware</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const InvestmentSlide = () => (
    <div className="flex flex-col h-full p-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-white mb-6">Ready to Join the Revolution?</h2>
        <p className="text-3xl text-cyan-400 mb-8">Series A: $25M for 20% Equity</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Use of Funds</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white">Product Development</span>
                <span className="text-cyan-400 font-bold">40% ($10M)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Go-to-Market</span>
                <span className="text-cyan-400 font-bold">30% ($7.5M)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Infrastructure</span>
                <span className="text-cyan-400 font-bold">20% ($5M)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Team Expansion</span>
                <span className="text-cyan-400 font-bold">10% ($2.5M)</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Investment Returns</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white">Expected ROI</span>
                <span className="text-cyan-400 font-bold">15-25x over 5-7 years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Exit Strategy</span>
                <span className="text-cyan-400 font-bold">IPO by 2030</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Key Milestones</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-900/50 rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-sm">6</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Month 6: 10K active users</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-900/50 rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-sm">12</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Month 12: Vision manufacturing at scale</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-900/50 rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-sm">18</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Month 18: Break-even profitability</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-900/50 rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-sm">24</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Month 24: 100K users, Series B</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-white">versiontwo.world</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-white">contact@versiontwo.world</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">+91 9711390266</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-white">@versiontwo.world</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button
          className="btn-primary text-lg px-12 py-4"
          onClick={() => window.location.href = 'mailto:contact@versiontwo.world'}
        >
          Contact Us for Investment Discussion
          <ArrowRight className="ml-2 w-5 h-5 inline" />
        </button>
        <p className="text-gray-300 mt-6 text-lg">
          The future of human-computer interaction starts with VersionTwo. Let's build it together.
        </p>
      </div>
    </div>
  );

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden relative">
      <SlideProgress />
      <SlideInfo />
      
      <AnimatePresence mode="wait" custom={currentSlide}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          className="absolute inset-0 w-full h-full"
        >
          {renderSlideContent(slides[currentSlide])}
        </motion.div>
      </AnimatePresence>
      
      <NavigationControls />
      
      {/* Auto-play toggle */}
      <div className="fixed top-8 left-8 z-50">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors border border-gray-700 ${
            isAutoPlay 
              ? 'bg-cyan-400 text-gray-900' 
              : 'bg-gray-900/90 text-gray-300 hover:bg-gray-800'
          }`}
        >
          <Play className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default VersionTwoLanding;