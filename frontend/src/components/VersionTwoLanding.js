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