// import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Code, Zap, TrendingUp, BarChart3, Mail, Phone, MessageCircle } from 'lucide-react';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const handleGetStarted = (planName, price) => {
    const serviceName = serviceData[serviceId]?.title || 'Service';
    navigate(`/contact?service=${serviceName}&plan=${planName}&price=${price}`);
  };

  const serviceData = {
    'web-development': {
      title: 'Web Development & Hosting',
      icon: <Code size={80} className="text-orange-500" />,
      fullDescription: 'Build scalable, responsive websites and web applications with modern technologies. We handle everything from design to deployment and hosting.',
      techStack: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Webpack'],
      projects: [
        {
          title: 'E-Commerce Web App',
          description: 'A full-featured e-commerce platform with payment integration and inventory management.',
          link: '#',
          image: ''
        },
        {
          title: 'Chat Application',
          description: 'Real-time chat application with WebSocket integration and user authentication.',
          link: '#',
          image: ''
        },
        {
          title: 'Cloud Native App',
          description: 'Deployed a cloud-native app on Kubernetes for scalability and resilience.',
          link: '#',
          image: ''
        }
      ],
      pricing: { basic: 500, standard: 1200, premium: 2500 }
    },
    'ai-automation': {
      title: 'AI Automation & CRM Integration',
      icon: <Zap size={80} className="text-orange-500" />,
      fullDescription: 'Streamline your business operations with AI-powered automation and seamless CRM integration for better customer relationships.',
      techStack: ['Python', 'OpenAI API', 'TensorFlow', 'PyTorch', 'Salesforce', 'HubSpot', 'Zapier', 'Make.com', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      projects: [
        {
          title: 'AI Chatbot Integration',
          description: 'Intelligent chatbot powered by OpenAI GPT for customer support automation.',
          link: '#',
          image: ''
        },
        {
          title: 'CRM Automation System',
          description: 'Custom CRM automation workflows using Zapier and HubSpot integration.',
          link: '#',
          image: ''
        },
        {
          title: 'Business Process Automation',
          description: 'End-to-end automation of business processes reducing manual workload by 80%.',
          link: '#',
          image: ''
        }
      ],
      pricing: { basic: 800, standard: 1800, premium: 3500 }
    },
    'digital-marketing': {
      title: 'Digital Marketing Expert',
      icon: <TrendingUp size={80} className="text-orange-500" />,
      fullDescription: 'Boost your online presence with strategic digital marketing, SEO optimization, social media management, and content creation.',
      techStack: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'SEO Tools', 'Hootsuite', 'Canva', 'WordPress', 'Mailchimp', 'Content Strategy', 'Social Media', 'Email Marketing', 'SEM'],
      projects: [
        {
          title: 'SEO Optimization Campaign',
          description: 'Improved search rankings for e-commerce site, increased organic traffic by 250%.',
          link: '#',
          image: ''
        },
        {
          title: 'Social Media Management',
          description: 'Complete social media strategy and management across Instagram, Facebook, and LinkedIn.',
          link: '#',
          image: ''
        },
        {
          title: 'Content Marketing Strategy',
          description: 'Comprehensive content creation and distribution strategy for brand building.',
          link: '#',
          image: ''
        }
      ],
      pricing: { basic: 600, standard: 1500, premium: 3000 }
    },
    'data-analysis': {
      title: 'Data Analysis',
      icon: <BarChart3 size={80} className="text-orange-500" />,
      fullDescription: 'Transform raw data into actionable insights with comprehensive data analysis, visualization, and business intelligence solutions.',
      techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Tableau', 'SQL', 'Excel', 'R', 'Scikit-learn', 'Jupyter', 'Google Sheets'],
      projects: [
        {
          title: 'Sales Data Analytics',
          description: 'Comprehensive sales data analysis with predictive modeling and forecasting.',
          link: '#',
          image: ''
        },
        {
          title: 'Customer Segmentation',
          description: 'Customer behavior analysis and segmentation for targeted marketing strategies.',
          link: '#',
          image: ''
        },
        {
          title: 'Business Intelligence Dashboard',
          description: 'Interactive dashboard with real-time KPI tracking and data visualization.',
          link: '#',
          image: ''
        }
      ],
      pricing: { basic: 700, standard: 1600, premium: 2800 }
    }
  };

  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="mx-auto w-full max-w-7xl px-4 py-12 min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black transition-colors text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Service not found</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black transition-colors">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center mb-16 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-12 border border-gray-200 dark:border-gray-800">
        <div className="flex justify-center mb-6">
          {service.icon}
        </div>
        <h1 className="text-5xl font-bold font-serif text-center text-gray-900 dark:text-white mb-6">
          {service.title}
        </h1>
        <p className="text-xl text-center text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
          {service.fullDescription}
        </p>
      </div>

      {/* Tech Stack Section */}
      <div className="mb-16 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-12 border border-gray-200 dark:border-gray-800">
        <h2 className="text-4xl font-bold font-serif text-center text-gray-900 dark:text-white mb-12">
          Tech <span className="text-orange-500 dark:text-orange-400">Stack</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {service.techStack.map((tech, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 text-center border border-orange-200 dark:border-gray-600 hover:shadow-lg transition-shadow"
            >
              <p className="font-semibold text-gray-900 dark:text-white text-lg">{tech}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-16 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-12 border border-gray-200 dark:border-gray-800">
        <h2 className="text-4xl font-bold font-serif text-center text-gray-900 dark:text-white mb-12">
          Related <span className="text-orange-500 dark:text-orange-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mb-16 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-12 border border-gray-200 dark:border-gray-800">
        <h2 className="text-4xl font-bold font-serif text-center text-gray-900 dark:text-white mb-12">
          Service <span className="text-orange-500 dark:text-orange-400">Pricing</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Basic</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Perfect for getting started</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-orange-500">${service.pricing.basic}</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <button onClick={() => handleGetStarted('Basic', service.pricing.basic)} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors mb-4">Get Started</button>
          </div>

          {/* Standard Plan */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-lg p-8 border-2 border-orange-500 hover:shadow-xl transition-shadow transform scale-105">
            <div className="bg-orange-500 text-white text-center py-2 rounded-lg mb-4 font-bold">POPULAR</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Standard</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Most popular choice</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-orange-600">${service.pricing.standard}</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <button onClick={() => handleGetStarted('Standard', service.pricing.standard)} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mb-4">Get Started</button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Premium</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">For advanced needs</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-orange-500">${service.pricing.premium}</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <button onClick={() => handleGetStarted('Premium', service.pricing.premium)} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors mb-4">Get Started</button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-12 border border-gray-200 dark:border-gray-800">
        <h2 className="text-4xl font-bold font-serif text-center text-gray-900 dark:text-white mb-12">
          Get <span className="text-orange-500 dark:text-orange-400">In Touch</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <a
            href="mailto:muhammadyousaf5482@gmail.com"
            className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 text-center border border-orange-200 dark:border-gray-600 hover:shadow-lg transition-all transform hover:scale-105"
          >
            <Mail size={60} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Email</h3>
            <p className="text-gray-700 dark:text-gray-300 break-words">muhammadyousaf5482@gmail.com</p>
            <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Send Email
            </button>
          </a>

          {/* Phone */}
          <a
            href="tel:+923336005482"
            className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 text-center border border-orange-200 dark:border-gray-600 hover:shadow-lg transition-all transform hover:scale-105"
          >
            <Phone size={60} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
            <p className="text-gray-700 dark:text-gray-300">+92 333 6005482</p>
            <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Call Now
            </button>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/923336005482"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 text-center border border-orange-200 dark:border-gray-600 hover:shadow-lg transition-all transform hover:scale-105"
          >
            <MessageCircle size={60} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
            <p className="text-gray-700 dark:text-gray-300">+92 333 6005482</p>
            <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Message on WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
