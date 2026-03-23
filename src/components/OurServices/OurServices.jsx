import React from "react";
import { useNavigate } from "@router";
import { BarChart3, Code, TrendingUp, Zap } from "lucide-react";

export default function OurServices() {
  const navigate = useNavigate();

  const services = [
    {
      id: "web-development",
      icon: <Code size={60} className="text-orange-500" />,
      title: "Web Development & Hosting",
      description: "Scalable, responsive websites and web applications from design to deployment.",
      pricing: { starter: 500, growth: 1200, scale: 2500 },
    },
    {
      id: "ai-automation",
      icon: <Zap size={60} className="text-orange-500" />,
      title: "AI Automation & CRM Integration",
      description: "AI-powered workflows, CRM automation, and operational efficiency systems.",
      pricing: { starter: 800, growth: 1800, scale: 3500 },
    },
    {
      id: "digital-marketing",
      icon: <TrendingUp size={60} className="text-orange-500" />,
      title: "Digital Marketing",
      description: "Campaign strategy, SEO, social media growth, and reporting support.",
      pricing: { starter: 600, growth: 1500, scale: 3000 },
    },
    {
      id: "data-analysis",
      icon: <BarChart3 size={60} className="text-orange-500" />,
      title: "Data Analysis",
      description: "Actionable analytics, dashboards, visualizations, and business intelligence.",
      pricing: { starter: 700, growth: 1600, scale: 2800 },
    },
  ];

  return (
    <div className="mx-auto min-h-screen w-full bg-gradient-to-b from-white to-gray-50 px-3 py-8 transition-colors dark:from-gray-900 dark:to-black sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="mb-8 flex flex-col items-center justify-center sm:mb-12 md:mb-16">
        <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Our-<span className="text-orange-500 dark:text-orange-400">Services</span>
        </h1>
        <p className="mt-3 max-w-2xl px-2 text-center text-xs text-gray-600 dark:text-gray-300 sm:mt-4 sm:text-sm md:text-base">
          Complete solutions for modern businesses, built to work beautifully on mobile, tablet, and desktop.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-4 sm:mb-16 sm:grid-cols-2 sm:gap-6 md:mb-20 md:gap-8 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate(`/service/${service.id}`)}
            className="cursor-pointer rounded-lg border border-gray-200 bg-white p-4 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 sm:rounded-xl sm:p-6 md:p-8"
          >
            <div className="mb-3 flex justify-center sm:mb-4 md:mb-6">
              {service.icon && React.cloneElement(service.icon, { size: 40, className: "sm:h-16 sm:w-16 md:h-20 md:w-20" })}
            </div>
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white sm:mb-3 sm:text-xl md:mb-4 md:text-2xl">
              {service.title}
            </h2>
            <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300 sm:text-sm md:text-base">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-900 sm:rounded-xl sm:p-6 md:p-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white sm:mb-12 sm:text-3xl md:text-4xl">
          Service <span className="text-orange-500 dark:text-orange-400">Pricing</span>
        </h2>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/70 sm:p-5">
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 dark:text-white sm:text-lg">{service.title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-white p-3 text-center dark:bg-gray-900">
                  <div className="text-xs font-semibold text-orange-500">Starter</div>
                  <div className="mt-1 text-lg font-bold text-gray-900 dark:text-white">${service.pricing.starter}</div>
                </div>
                <div className="rounded-xl border border-orange-200 bg-orange-50 p-3 text-center dark:border-orange-800 dark:bg-orange-950/40">
                  <div className="text-xs font-semibold text-orange-600">Growth</div>
                  <div className="mt-1 text-lg font-bold text-gray-900 dark:text-white">${service.pricing.growth}</div>
                </div>
                <div className="rounded-xl bg-white p-3 text-center dark:bg-gray-900">
                  <div className="text-xs font-semibold text-orange-700">Scale</div>
                  <div className="mt-1 text-lg font-bold text-gray-900 dark:text-white">${service.pricing.scale}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6 md:mt-16 md:gap-8">
          <div className="rounded-lg border border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 p-4 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 sm:rounded-xl sm:p-6 md:p-8">
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white sm:mb-6 sm:text-xl md:text-2xl">Starter Plan</h3>
            <ul className="mb-6 space-y-2 text-xs text-gray-700 dark:text-gray-300 sm:mb-8 sm:text-sm md:text-base">
              <li className="flex items-center"><span className="mr-2 text-lg text-orange-500 sm:mr-3 sm:text-xl">+</span> Core service delivery</li>
              <li className="flex items-center"><span className="mr-2 text-lg text-orange-500 sm:mr-3 sm:text-xl">+</span> Email support</li>
              <li className="flex items-center"><span className="mr-2 text-lg text-orange-500 sm:mr-3 sm:text-xl">+</span> Responsive setup</li>
              <li className="flex items-center"><span className="mr-2 text-lg text-orange-500 sm:mr-3 sm:text-xl">+</span> Fast launch</li>
            </ul>
            <button className="w-full rounded-lg bg-orange-500 px-4 py-2 font-bold text-white transition-colors hover:bg-orange-600 sm:text-base">Choose Starter</button>
          </div>

          <div className="rounded-lg border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 p-4 shadow-md dark:from-gray-700 dark:to-gray-800 sm:rounded-xl sm:p-6 md:p-8">
            <div className="mb-3 rounded-lg bg-orange-500 py-1 text-center text-xs font-bold text-white sm:mb-4 sm:py-2 sm:text-sm">MOST POPULAR</div>
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white sm:mb-6 sm:text-xl md:text-2xl">Growth Plan</h3>
            <ul className="mb-6 space-y-2 text-xs text-gray-700 dark:text-gray-300 sm:mb-8 sm:text-sm md:text-base">
              <li className="flex items-center"><span className="mr-2 text-lg text-orange-600 sm:mr-3 sm:text-xl">+</span> Full service scope</li>
              <li className="flex items-center"><span className="mr-2 text-lg text-orange-600 sm:mr-3 sm:text-xl">+</span> Priority support</li>
              <li className="flex items-center"><span className="mr-2 text-lg text-orange-600 sm:mr-3 sm:text-xl">+</span> CRM and dashboard features</li>
              <li className="flex items-center"><span className="mr-2 text-lg text-orange-600 sm:mr-3 sm:text-xl">+</span> Growth-focused delivery</li>
            </ul>
            <button className="w-full rounded-lg bg-orange-600 px-4 py-2 font-bold text-white transition-colors hover:bg-orange-700 sm:text-base">Choose Growth</button>
          </div>

          <div className="rounded-lg border border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 p-4 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 sm:rounded-xl sm:p-6 md:p-8">
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white sm:mb-6 sm:text-xl md:text-2xl">Scale Plan</h3>
            <ul className="mb-6 space-y-2 text-xs text-gray-700 dark:text-gray-300 sm:mb-8 sm:text-sm md:text-base">
              <li className="flex items-center"><span className="mr-2 text-lg text-orange-500 sm:mr-3 sm:text-xl">+</span> End-to-end execution</li>
              <li className="flex items-center"><span className="mr-2 text-lg text-orange-500 sm:mr-3 sm:text-xl">+</span> 24/7 support</li>
              <li className="flex items-center"><span className="mr-2 text-lg text-orange-500 sm:mr-3 sm:text-xl">+</span> Custom architecture</li>
              <li className="flex items-center"><span className="mr-2 text-lg text-orange-500 sm:mr-3 sm:text-xl">+</span> Long-term optimization</li>
            </ul>
            <button className="w-full rounded-lg bg-orange-500 px-4 py-2 font-bold text-white transition-colors hover:bg-orange-600 sm:text-base">Choose Scale</button>
          </div>
        </div>
      </div>
    </div>
  );
}
