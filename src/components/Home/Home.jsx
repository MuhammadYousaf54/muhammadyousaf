/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "@router";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Code, Zap, TrendingUp, BarChart3 } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const services = [
    {
      id: 'web-development',
      icon: <Code size={40} className="text-orange-500" />,
      title: "Web Development",
      description: "Building responsive and scalable web applications with modern technologies"
    },
    {
      id: 'ai-automation',
      icon: <Zap size={40} className="text-orange-500" />,
      title: "AI Automation & CRM",
      description: "Integrating AI solutions and CRM systems to streamline business operations"
    },
    {
      id: 'digital-marketing',
      icon: <TrendingUp size={40} className="text-orange-500" />,
      title: "Digital Marketing",
      description: "Expert digital marketing strategies to boost your online presence"
    },
    {
      id: 'data-analysis',
      icon: <BarChart3 size={40} className="text-orange-500" />,
      title: "Data Analysis",
      description: "Providing insightful data analysis for informed business decisions"
    }
  ];

  const projects = [
    // Web Development Projects
    {
      title: "E-Commerce Web App",
      description: "Full-featured e-commerce platform with payment integration, inventory management, and order tracking.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?ecommerce,shopping,store",
      icon: "ðŸ›ï¸",
      service: "web-development"
    },
    {
      title: "Chat Application",
      description: "Real-time messaging application with WebSocket integration, user authentication, and file sharing.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?chat,messaging,communication",
      icon: "ðŸ’¬",
      service: "web-development"
    },
    {
      title: "Cloud Native App",
      description: "Microservices-based application deployed on Kubernetes for high scalability and resilience.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?cloud,server,infrastructure",
      icon: "â˜ï¸",
      service: "web-development"
    },
    {
      title: "Task Management Portal",
      description: "Collaborative project management platform with Gantt charts, kanban boards, and team analytics.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?task,checklist,organization",
      icon: "âœ…",
      service: "web-development"
    },
    {
      title: "Learning Management System",
      description: "Complete LMS with course creation, student enrollment, progress tracking, and live classes.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?education,learning,online,course",
      icon: "ðŸ“š",
      service: "web-development"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard displaying live metrics, charts, and business intelligence reports.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?analytics,dashboard,data,charts",
      icon: "ðŸ“Š",
      service: "web-development"
    },

    // AI Automation Projects
    {
      title: "AI Chatbot Integration",
      description: "Intelligent chatbot using NLP and machine learning for customer support automation.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?chatbot,artificial intelligence,AI",
      icon: "ðŸ¤–",
      service: "ai-automation"
    },
    {
      title: "Predictive Analytics Engine",
      description: "Machine learning model for sales forecasting and customer behavior prediction.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?machine learning,prediction,forecast",
      icon: "ðŸ”®",
      service: "ai-automation"
    },
    {
      title: "CRM Automation System",
      description: "Automated CRM with lead scoring, email automation, and pipeline management powered by AI.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?CRM,sales,automation,business",
      icon: "ðŸ’¼",
      service: "ai-automation"
    },
    {
      title: "Document Processing AI",
      description: "OCR and document extraction system using AI for automated data processing.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?document,OCR,processing,data",
      icon: "ðŸ“„",
      service: "ai-automation"
    },
    {
      title: "Intelligent Workflow Automation",
      description: "Automated business process workflows with AI-powered decision making and optimization.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?workflow,automation,process,business",
      icon: "âš™ï¸",
      service: "ai-automation"
    },
    {
      title: "Customer Sentiment Analysis",
      description: "AI-powered sentiment analysis tool for social media monitoring and feedback analysis.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?sentiment,analysis,social,AI",
      icon: "ðŸ˜Š",
      service: "ai-automation"
    },

    // Digital Marketing Projects
    {
      title: "Social Media Campaign Manager",
      description: "Complete platform for managing, scheduling, and analyzing multi-channel social media campaigns.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?social media,marketing,campaign",
      icon: "ðŸ“±",
      service: "digital-marketing"
    },
    {
      title: "Email Marketing Automation",
      description: "Advanced email marketing platform with automation workflows, segmentation, and A/B testing.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?email,marketing,automation",
      icon: "âœ‰ï¸",
      service: "digital-marketing"
    },
    {
      title: "SEO Analytics Dashboard",
      description: "Comprehensive SEO tracking tool with keyword monitoring, competitor analysis, and rankings.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?SEO,search,analytics,optimization",
      icon: "ðŸ”",
      service: "digital-marketing"
    },
    {
      title: "Content Calendar System",
      description: "Interactive content planning and calendar management tool for teams and agencies.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?content,calendar,planning,organization",
      icon: "ðŸ“…",
      service: "digital-marketing"
    },
    {
      title: "Influencer Marketing Platform",
      description: "Platform connecting brands with influencers, managing campaigns and tracking ROI.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?influencer,marketing,social,brand",
      icon: "â­",
      service: "digital-marketing"
    },
    {
      title: "Brand Analytics Suite",
      description: "Complete brand monitoring and analytics suite for reputation management and insights.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?brand,monitoring,analytics,business",
      icon: "ðŸŽ¯",
      service: "digital-marketing"
    },

    // Data Analysis Projects
    {
      title: "Sales Analytics Platform",
      description: "Advanced analytics platform for sales forecasting, trend analysis, and performance metrics.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?sales,analytics,data,graphs",
      icon: "ðŸ’¹",
      service: "data-analysis"
    },
    {
      title: "Financial Dashboard",
      description: "Real-time financial analytics dashboard for expense tracking and revenue analysis.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?finance,money,dashboard,data",
      icon: "ðŸ’°",
      service: "data-analysis"
    },
    {
      title: "Customer Behavior Analytics",
      description: "Deep dive into customer data with behavioral analysis, segmentation, and lifetime value prediction.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?customer,behavior,analysis,data",
      icon: "ðŸ‘¥",
      service: "data-analysis"
    },
    {
      title: "Business Intelligence Platform",
      description: "Comprehensive BI tool with data visualization, reporting, and predictive analytics.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?business intelligence,analytics,data,visualization",
      icon: "ðŸ“ˆ",
      service: "data-analysis"
    },
    {
      title: "Market Research Tool",
      description: "Data collection and analysis tool for market research with survey and analytics features.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?market research,data,survey,analysis",
      icon: "ðŸ”¬",
      service: "data-analysis"
    },
    {
      title: "Performance Metrics Dashboard",
      description: "Real-time KPI tracking and performance measurement for business operations.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?performance,metrics,KPI,dashboard",
      icon: "ðŸ“‹",
      service: "data-analysis"
    }
  ];

  return (
    <div className="mx-auto w-full min-h-screen bg-gradient-to-b from-white via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 transition-colors duration-300">
      <aside className="relative w-full overflow-hidden text-black dark:text-white">
        <div className="relative z-10 max-w-7xl px-3 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24 pt-8 sm:pt-16 lg:pt-24 mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12">
            {/* Left Side - Heading, Description, and Resume Button */}
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent dark:from-orange-400 dark:via-pink-400 dark:to-purple-400 leading-tight">
                Muhammad Yousaf
                <span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-2 sm:mt-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-300">
                  Full Stack Developer & AI Automation Expert
                </span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 text-justify leading-relaxed font-medium">
                Hi, I'm Muhammad Yousaf with 5+ years of professional experience in web development, data analysis, and AI automation. I'm a highly skilled full-stack developer specializing in MERN stack (MongoDB, Express, React, Node.js) and building scalable, dynamic web applications. I combine technical expertise with AI solutions to deliver innovative and efficient digital experiences. Passionate about learning new technologies, solving complex problems, and providing seamless user experiences.
              </p>
              <a
                href="/Muhammad_Yousaf_Resume.pdf"
                download="Muhammad_Yousaf_Resume.pdf"
                className="inline-flex mb-6 md:mb-8 text-white items-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-bold text-xs sm:text-sm md:text-base bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  fill="white"
                  width="18"
                  height="18"
                  className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>

            {/* Right Side - Profile Image */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <img className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl group-hover:scale-105 transition-transform duration-300" src="/images/yousaf.jpeg" alt="Yousaf's Profile" />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col items-center justify-center bg-gradient-to-br from-white/80 to-cyan-50/80 dark:from-slate-800/80 dark:to-purple-900/80 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 border border-cyan-100 dark:border-purple-700/50 backdrop-blur-sm">
            <h1 className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl font-black p-2 mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-300">
              My-<span className="text-orange-500 dark:text-orange-400">Services</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full">
              {services.map((service, index) => (
                  <div 
                  key={index} 
                  onClick={() => navigate(`/service/${service.id}`)}
                  className={`bg-gradient-to-br ${
                    index === 0 ? 'from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900' :
                    index === 1 ? 'from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-900' :
                    index === 2 ? 'from-green-50 to-teal-100 dark:from-green-950 dark:to-teal-900' :
                    'from-orange-50 to-red-100 dark:from-orange-950 dark:to-red-900'
                  } p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center cursor-pointer border border-white/50 dark:border-white/10 group`}
                >
                  <div className="flex justify-center mb-2 sm:mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col items-center justify-center bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-slate-800/80 dark:to-purple-900/80 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 border border-blue-100 dark:border-purple-700/50 backdrop-blur-sm">
            <h1 className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl font-black p-2 mb-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-pink-400 dark:to-purple-300">
              My-<span className="text-orange-500 dark:text-orange-400">Projects</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 text-center mb-6 sm:mb-8 font-medium">24+ Professional Projects Across 4 Services</p>

            {/* Web Development Projects */}
            <div className="w-full mb-12 lg:mb-16">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-300">
                <Code size={24} className="text-blue-500 dark:text-cyan-400 mr-2 sm:mr-3" /> Web Development
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full">
                {projects.filter(p => p.service === 'web-development').map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                    icon={project.icon}
                  />
                ))}
              </div>
            </div>

            {/* AI Automation Projects */}
            <div className="w-full mb-12 lg:mb-16">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-pink-400 dark:to-purple-300">
                <Zap size={24} className="text-purple-500 dark:text-pink-400 mr-2 sm:mr-3" /> AI Automation & CRM
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full">
                {projects.filter(p => p.service === 'ai-automation').map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                    icon={project.icon}
                  />
                ))}
              </div>
            </div>

            {/* Digital Marketing Projects */}
            <div className="w-full mb-12 lg:mb-16">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent dark:from-orange-400 dark:to-pink-400">
                <TrendingUp size={24} className="text-orange-500 dark:text-orange-400 mr-2 sm:mr-3" /> Digital Marketing
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full">
                {projects.filter(p => p.service === 'digital-marketing').map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                    icon={project.icon}
                  />
                ))}
              </div>
            </div>

            {/* Data Analysis Projects */}
            <div className="w-full">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center bg-gradient-to-r from-green-600 to-cyan-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-green-300">
                <BarChart3 size={24} className="text-green-500 dark:text-cyan-400 mr-2 sm:mr-3" /> Data Analysis
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full">
                {projects.filter(p => p.service === 'data-analysis').map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                    icon={project.icon}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="flex flex-col items-center justify-center mt-12 bg-gradient-to-br from-white/80 to-cyan-50/80 dark:from-slate-800/80 dark:to-purple-900/80 rounded-2xl shadow-2xl p-8 border border-cyan-100 dark:border-purple-700/50 backdrop-blur-sm">
            <h1 className="flex justify-center items-center text-4xl font-black p-2 mb-8 bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
              Service-<span className="text-orange-500 dark:text-orange-400">Pricing</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* Basic Plan */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 rounded-2xl shadow-lg p-8 border-2 border-gray-200 dark:border-blue-800 hover:shadow-2xl transition-all hover:scale-105 hover:border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">ðŸ’Ž Basic</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Perfect for getting started</p>
                <div className="mb-6">
                  <span className="text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">$500</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-blue-500 dark:text-blue-400 mr-3 text-xl">âœ¦</span> Basic Website</li>
                  <li className="flex items-center"><span className="text-blue-500 dark:text-blue-400 mr-3 text-xl">âœ¦</span> 5 Pages</li>
                  <li className="flex items-center"><span className="text-blue-500 dark:text-blue-400 mr-3 text-xl">âœ¦</span> Email Support</li>
                  <li className="flex items-center"><span className="text-blue-500 dark:text-blue-400 mr-3 text-xl">âœ¦</span> Hosting Included</li>
                </ul>
                <button 
                  onClick={() => navigate('/contact?service=Service+Plan&plan=Basic&price=500')}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                  Get Started
                </button>
              </div>

              {/* Standard Plan */}
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-950 dark:to-pink-950 rounded-2xl shadow-2xl p-8 border-2 border-orange-500 dark:border-orange-600 hover:shadow-2xl transition-all transform scale-105 relative z-10">
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center py-3 rounded-lg mb-4 font-bold text-lg shadow-lg">â­ MOST POPULAR</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">ðŸš€ Standard</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Most popular choice</p>
                <div className="mb-6">
                  <span className="text-5xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">$1200</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-orange-500 dark:text-orange-400 mr-3 text-xl">âœ¦</span> Advanced Website</li>
                  <li className="flex items-center"><span className="text-orange-500 dark:text-orange-400 mr-3 text-xl">âœ¦</span> 20 Pages</li>
                  <li className="flex items-center"><span className="text-orange-500 dark:text-orange-400 mr-3 text-xl">âœ¦</span> CRM Integration</li>
                  <li className="flex items-center"><span className="text-orange-500 dark:text-orange-400 mr-3 text-xl">âœ¦</span> Priority Support</li>
                </ul>
                <button 
                  onClick={() => navigate('/contact?service=Service+Plan&plan=Standard&price=1200')}
                  className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                  Get Started
                </button>
              </div>

              {/* Premium Plan */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-2xl shadow-lg p-8 border-2 border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all hover:scale-105 hover:border-purple-500">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">ðŸ‘‘ Premium</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">For advanced needs</p>
                <div className="mb-6">
                  <span className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">$2500</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center"><span className="text-purple-500 dark:text-purple-400 mr-3 text-xl">âœ¦</span> Full Custom Development</li>
                  <li className="flex items-center"><span className="text-purple-500 dark:text-purple-400 mr-3 text-xl">âœ¦</span> Unlimited Pages</li>
                  <li className="flex items-center"><span className="text-purple-500 dark:text-purple-400 mr-3 text-xl">âœ¦</span> AI Automation</li>
                  <li className="flex items-center"><span className="text-purple-500 dark:text-purple-400 mr-3 text-xl">âœ¦</span> 24/7 Support</li>
                </ul>
                <button 
                  onClick={() => navigate('/contact?service=Service+Plan&plan=Premium&price=2500')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

