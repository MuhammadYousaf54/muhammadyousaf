import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Code, Zap, TrendingUp, BarChart3 } from 'lucide-react'

export default function OurServices() {
  const navigate = useNavigate();

  const services = [
    {
      id: 'web-development',
      icon: <Code size={60} className="text-orange-500" />,
      title: "Web Development & Hosting",
      description: "Build scalable, responsive websites and web applications with modern technologies. We handle everything from design to deployment and hosting.",
      pricing: { basic: 500, standard: 1200, premium: 2500 }
    },
    {
      id: 'ai-automation',
      icon: <Zap size={60} className="text-orange-500" />,
      title: "AI Automation & CRM Integration",
      description: "Streamline your business operations with AI-powered automation and seamless CRM integration for better customer relationships.",
      pricing: { basic: 800, standard: 1800, premium: 3500 }
    },
    {
      id: 'digital-marketing',
      icon: <TrendingUp size={60} className="text-orange-500" />,
      title: "Digital Marketing Expert",
      description: "Boost your online presence with strategic digital marketing, SEO optimization, social media management, and content creation.",
      pricing: { basic: 600, standard: 1500, premium: 3000 }
    },
    {
      id: 'data-analysis',
      icon: <BarChart3 size={60} className="text-orange-500" />,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights with comprehensive data analysis, visualization, and business intelligence solutions.",
      pricing: { basic: 700, standard: 1600, premium: 2800 }
    }
  ];

  return (
    <div className="mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black transition-colors">
      <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white">
          Our-<span className="text-orange-500 dark:text-orange-400">Services</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 text-center mt-3 sm:mt-4 max-w-2xl px-2">
          We offer comprehensive solutions tailored to your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
        {services.map((service, index) => (
          <div 
            key={index}
            onClick={() => navigate(`/service/${service.id}`)}
            className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 md:p-8 text-center hover:scale-105 transform transition-transform border border-gray-200 dark:border-gray-700 cursor-pointer"
          >
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
              {service.icon && React.cloneElement(service.icon, {size: 40, className: "sm:w-16 sm:h-16 md:w-20 md:h-20"})}
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
              {service.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 md:p-12 border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
          Service <span className="text-orange-500 dark:text-orange-400">Pricing</span>
        </h2>

        {/* Pricing Grid */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-center text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800 border-b-2 border-orange-500">
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-900 dark:text-white font-bold text-left text-xs sm:text-sm md:text-base">Service</th>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-900 dark:text-white font-bold">
                  <div className="text-orange-500 text-xs sm:text-sm">Basic</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Starter</div>
                </th>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-900 dark:text-white font-bold">
                  <div className="text-orange-600 text-xs sm:text-sm">Standard</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Popular</div>
                </th>
                <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-900 dark:text-white font-bold">
                  <div className="text-orange-700 text-xs sm:text-sm">Premium</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Enterprise</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-900 dark:text-white font-semibold text-left text-xs sm:text-sm md:text-base">{service.title}</td>
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-500">${service.pricing.basic}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">/month</div>
                  </td>
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-orange-50 dark:bg-gray-700">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600">${service.pricing.standard}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">/month</div>
                  </td>
                  <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-700">${service.pricing.premium}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">/month</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Plan Comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 w-full">
          {/* Basic */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-gray-300 dark:border-gray-700">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Basic Plan</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
              <li className="flex items-center"><span className="text-orange-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span> Core Service</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span> Email Support</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span> Starter Package</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span> 1 Month Setup</li>
            </ul>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm sm:text-base">Choose Basic</button>
          </div>

          {/* Standard */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border-2 border-orange-500 shadow-md sm:shadow-lg">
            <div className="bg-orange-500 text-white text-center py-1 sm:py-2 rounded-lg mb-3 sm:mb-4 font-bold text-xs sm:text-sm">MOST POPULAR</div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Standard Plan</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
              <li className="flex items-center"><span className="text-orange-600 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span> Full Service</li>
              <li className="flex items-center"><span className="text-orange-600 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span> Priority Support</li>
              <li className="flex items-center"><span className="text-orange-600 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span> Advanced Features</li>
              <li className="flex items-center"><span className="text-orange-600 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span> 3 Month Support</li>
            </ul>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm sm:text-base">Choose Standard</button>
          </div>

          {/* Premium */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-gray-300 dark:border-gray-700">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Premium Plan</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
              <li className="flex items-center"><span className="text-orange-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span> All Services</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span> 24/7 Support</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span> Custom Solutions</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span> Unlimited Support</li>
            </ul>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm sm:text-base">Choose Premium</button>
          </div>
        </div>
      </div>
    </div>
  );
}
