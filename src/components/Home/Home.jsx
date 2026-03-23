/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "@router";
import { BarChart3, Code, TrendingUp, Zap } from "lucide-react";
import ProjectCard from "../ProjectCard/ProjectCard";

const serviceSections = [
  ["web-development", "Web Development", Code, "text-blue-500 dark:text-cyan-400"],
  ["ai-automation", "AI Automation & CRM", Zap, "text-purple-500 dark:text-pink-400"],
  ["digital-marketing", "Digital Marketing", TrendingUp, "text-orange-500 dark:text-orange-400"],
  ["data-analysis", "Data Analysis", BarChart3, "text-green-500 dark:text-cyan-400"],
];

export default function Home() {
  const navigate = useNavigate();

  const services = [
    {
      id: "web-development",
      icon: <Code size={40} className="text-orange-500" />,
      title: "Web Development",
      description: "Responsive websites, dashboards, custom portals, and scalable full-stack applications.",
    },
    {
      id: "ai-automation",
      icon: <Zap size={40} className="text-orange-500" />,
      title: "AI Automation & CRM",
      description: "AI workflows, CRM automation, lead handling systems, and business process optimization.",
    },
    {
      id: "digital-marketing",
      icon: <TrendingUp size={40} className="text-orange-500" />,
      title: "Digital Marketing",
      description: "SEO, campaign management, reporting dashboards, and performance-focused growth support.",
    },
    {
      id: "data-analysis",
      icon: <BarChart3 size={40} className="text-orange-500" />,
      title: "Data Analysis",
      description: "Business intelligence, analytics dashboards, KPI reporting, and decision-ready insights.",
    },
  ];

  const projects = [
    {
      title: "Custom CRM Platform",
      description: "Fully functional CRM project with pipeline management, follow-up reminders, reporting, and user roles.",
      link: "/contact?service=Web+Development&project=Custom+CRM+Platform",
      image: "",
      icon: "CRM",
      service: "web-development",
    },
    {
      title: "Logistics App with Real-Time GPS",
      description: "Logistics and dispatch application with real-time GPS tracking, shipment updates, and operations dashboards.",
      link: "/contact?service=Web+Development&project=Logistics+App+with+GPS",
      image: "",
      icon: "GPS",
      service: "web-development",
    },
    {
      title: "WhatsApp Customer System",
      description: "Fully functional WhatsApp workflow for support, lead capture, follow-up automation, and customer engagement.",
      link: "/contact?service=Web+Development&project=WhatsApp+Customer+System",
      image: "",
      icon: "WA",
      service: "web-development",
    },
    {
      title: "Business Portfolio Platform",
      description: "Responsive portfolio platform with services, admin features, content sections, and conversion-focused pages.",
      link: "/contact?service=Web+Development&project=Business+Portfolio+Platform",
      image: "",
      icon: "WEB",
      service: "web-development",
    },
    {
      title: "Analytics Admin Dashboard",
      description: "Professional analytics dashboard with charts, KPIs, reporting filters, and business monitoring tools.",
      link: "/contact?service=Web+Development&project=Analytics+Admin+Dashboard",
      image: "",
      icon: "BI",
      service: "web-development",
    },
    {
      title: "AI CRM Automation",
      description: "Lead routing, follow-up automations, status tracking, and customer lifecycle workflows connected to CRM tools.",
      link: "/contact?service=AI+Automation&project=AI+CRM+Automation",
      image: "",
      icon: "AI",
      service: "ai-automation",
    },
    {
      title: "WhatsApp Lead Automation",
      description: "WhatsApp automation for qualification, auto-replies, team assignment, and inquiry management.",
      link: "/contact?service=AI+Automation&project=WhatsApp+Lead+Automation",
      image: "",
      icon: "BOT",
      service: "ai-automation",
    },
    {
      title: "Intelligent Support Assistant",
      description: "AI-assisted support system for customer questions, classification, and fast response workflows.",
      link: "/contact?service=AI+Automation&project=Intelligent+Support+Assistant",
      image: "",
      icon: "GPT",
      service: "ai-automation",
    },
    {
      title: "Workflow Automation Suite",
      description: "End-to-end automation flows connecting forms, CRM, notifications, and approvals across the business.",
      link: "/contact?service=AI+Automation&project=Workflow+Automation+Suite",
      image: "",
      icon: "API",
      service: "ai-automation",
    },
    {
      title: "Social Media Campaign Manager",
      description: "Campaign planning, scheduling, and reporting support across multiple channels.",
      link: "/contact?service=Digital+Marketing&project=Social+Media+Campaign+Manager",
      image: "",
      icon: "SM",
      service: "digital-marketing",
    },
    {
      title: "Email Marketing Automation",
      description: "Automated email journeys, campaign segmentation, and nurture flows focused on conversion performance.",
      link: "/contact?service=Digital+Marketing&project=Email+Marketing+Automation",
      image: "",
      icon: "EM",
      service: "digital-marketing",
    },
    {
      title: "SEO Analytics Dashboard",
      description: "SEO tracking dashboard for rankings, technical fixes, performance analysis, and content opportunities.",
      link: "/contact?service=Digital+Marketing&project=SEO+Analytics+Dashboard",
      image: "",
      icon: "SEO",
      service: "digital-marketing",
    },
    {
      title: "Performance Marketing Reports",
      description: "Reporting system for traffic, conversions, ad spend, cost per lead, and campaign ROI insights.",
      link: "/contact?service=Digital+Marketing&project=Performance+Marketing+Reports",
      image: "",
      icon: "ROI",
      service: "digital-marketing",
    },
    {
      title: "Sales Analytics Platform",
      description: "Sales dashboards with trend analysis, performance monitoring, and revenue reporting for decision-making.",
      link: "/contact?service=Data+Analysis&project=Sales+Analytics+Platform",
      image: "",
      icon: "SQL",
      service: "data-analysis",
    },
    {
      title: "Financial Dashboard",
      description: "Real-time financial dashboard for expenses, revenue, budgeting, and key business metrics.",
      link: "/contact?service=Data+Analysis&project=Financial+Dashboard",
      image: "",
      icon: "FIN",
      service: "data-analysis",
    },
    {
      title: "Customer Behavior Analytics",
      description: "Behavior analysis, segmentation, and retention insights to support smarter product and marketing decisions.",
      link: "/contact?service=Data+Analysis&project=Customer+Behavior+Analytics",
      image: "",
      icon: "CX",
      service: "data-analysis",
    },
    {
      title: "Business Intelligence Platform",
      description: "Interactive BI solution with reporting, dashboard filters, KPI visibility, and executive summaries.",
      link: "/contact?service=Data+Analysis&project=Business+Intelligence+Platform",
      image: "",
      icon: "BI",
      service: "data-analysis",
    },
  ];

  return (
    <div className="mx-auto min-h-screen w-full bg-gradient-to-b from-white via-blue-50 to-cyan-50 transition-colors duration-300 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      <aside className="relative w-full overflow-hidden text-black dark:text-white">
        <div className="mx-auto max-w-7xl px-3 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="flex flex-col-reverse items-center justify-between gap-6 sm:gap-8 lg:flex-row lg:gap-12">
            <div className="mb-8 w-full space-y-4 text-center sm:space-y-6 lg:mb-0 lg:w-1/2 lg:space-y-8 lg:text-left">
              <h2 className="text-3xl font-black leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text dark:from-orange-400 dark:via-pink-400 dark:to-purple-400">
                  Muhammad Yousaf
                </span>
                <span className="mt-2 block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-lg text-transparent dark:from-cyan-400 dark:to-blue-300 sm:mt-3 sm:text-2xl md:text-3xl lg:text-4xl">
                  Full Stack Developer & AI Automation Expert
                </span>
              </h2>
              <p className="text-sm font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base lg:text-lg">
                Hi, I'm Muhammad Yousaf with 5+ years of professional experience in web development, data analysis,
                and AI automation. I build scalable MERN applications, CRM systems, dashboards, and business workflows
                that are practical, responsive, and ready for real-world use.
              </p>
              <a
                href="/Muhammad_Yousaf_Resume.pdf"
                download="Muhammad_Yousaf_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-4 py-2 text-xs font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-base"
              >
                <svg
                  fill="white"
                  width="18"
                  height="18"
                  className="sm:h-5 sm:w-5 md:h-6 md:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>

            <div className="mb-8 flex w-full justify-center lg:mb-0 lg:w-1/2">
              <div className="group relative h-40 w-40 sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-96 lg:w-96">
                <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-75 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  className="relative h-full w-full rounded-full border-4 border-white object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105 dark:border-slate-800"
                  src="/images/yousaf.jpeg"
                  alt="Yousaf's Profile"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center rounded-xl border border-cyan-100 bg-gradient-to-br from-white/80 to-cyan-50/80 px-4 py-8 shadow-lg backdrop-blur-sm dark:border-purple-700/50 dark:from-slate-800/80 dark:to-purple-900/80 sm:mt-10 sm:rounded-2xl sm:px-6 sm:py-10 sm:shadow-2xl md:px-8 md:py-12 lg:mt-12">
            <h1 className="mb-6 text-center text-2xl font-black sm:mb-8 sm:text-3xl md:text-4xl">
              My-<span className="text-orange-500 dark:text-orange-400">Services</span>
            </h1>
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 md:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/service/${service.id}`)}
                  className={`cursor-pointer rounded-lg border border-white/50 p-4 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-white/10 sm:rounded-xl sm:p-5 sm:shadow-lg sm:hover:shadow-2xl md:rounded-2xl md:p-6 ${
                    index === 0
                      ? "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900"
                      : index === 1
                        ? "bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-900"
                        : index === 2
                          ? "bg-gradient-to-br from-green-50 to-teal-100 dark:from-green-950 dark:to-teal-900"
                          : "bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950 dark:to-red-900"
                  }`}
                >
                  <div className="mb-2 flex justify-center sm:mb-3 md:mb-4">{service.icon}</div>
                  <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white sm:text-lg md:text-xl">{service.title}</h3>
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-white/80 to-blue-50/80 px-4 py-8 shadow-lg backdrop-blur-sm dark:border-purple-700/50 dark:from-slate-800/80 dark:to-purple-900/80 sm:mt-10 sm:rounded-2xl sm:px-6 sm:py-10 sm:shadow-2xl md:px-8 md:py-12 lg:mt-12">
            <h1 className="mb-2 text-center text-2xl font-black sm:text-3xl md:text-4xl">
              My-<span className="text-orange-500 dark:text-orange-400">Projects</span>
            </h1>
            <p className="mb-6 text-center text-xs font-medium text-gray-600 dark:text-gray-400 sm:mb-8 sm:text-sm md:text-base">
              Selected projects across web apps, CRM systems, real-time logistics, WhatsApp automation, and analytics.
            </p>

            {serviceSections.map(([serviceKey, label, Icon, iconColor]) => (
              <div key={serviceKey} className="mb-12 w-full last:mb-0 lg:mb-16">
                <h2 className="mb-4 flex items-center text-lg font-bold text-gray-900 dark:text-white sm:mb-6 sm:text-xl md:text-2xl">
                  <Icon size={24} className={`mr-2 sm:mr-3 ${iconColor}`} /> {label}
                </h2>
                <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 md:gap-6">
                  {projects
                    .filter((project) => project.service === serviceKey)
                    .map((project, index) => (
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
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-cyan-100 bg-gradient-to-br from-white/80 to-cyan-50/80 p-4 shadow-2xl backdrop-blur-sm dark:border-purple-700/50 dark:from-slate-800/80 dark:to-purple-900/80 sm:p-6 md:p-8">
            <h1 className="mb-6 text-center text-2xl font-black sm:mb-8 sm:text-3xl md:text-4xl">
              Service-<span className="text-orange-500 dark:text-orange-400">Pricing</span>
            </h1>

            <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3 md:gap-8">
              <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50 p-5 shadow-lg transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl dark:border-blue-800 dark:from-gray-900 dark:to-blue-950 sm:p-6 md:p-8">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">Starter</h3>
                <p className="mb-4 font-medium text-gray-600 dark:text-gray-400">Ideal for landing pages and small business websites.</p>
                <div className="mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">$500</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="mb-8 space-y-3 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
                  <li className="flex items-center"><span className="mr-3 text-xl text-blue-500 dark:text-blue-400">+</span> Responsive design</li>
                  <li className="flex items-center"><span className="mr-3 text-xl text-blue-500 dark:text-blue-400">+</span> Up to 5 core pages</li>
                  <li className="flex items-center"><span className="mr-3 text-xl text-blue-500 dark:text-blue-400">+</span> Contact form setup</li>
                  <li className="flex items-center"><span className="mr-3 text-xl text-blue-500 dark:text-blue-400">+</span> Basic deployment support</li>
                </ul>
                <button
                  onClick={() => navigate("/contact?service=Service+Plan&plan=Starter&price=500")}
                  className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-blue-600 hover:to-cyan-600"
                >
                  Get Started
                </button>
              </div>

              <div className="relative z-10 rounded-2xl border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-pink-50 p-5 shadow-2xl transition-all dark:border-orange-600 dark:from-orange-950 dark:to-pink-950 sm:p-6 md:p-8 lg:scale-105">
                <div className="mb-4 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 py-2 text-center text-sm font-bold text-white shadow-lg sm:py-3 sm:text-lg">
                  Most Popular
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">Growth</h3>
                <p className="mb-4 font-medium text-gray-600 dark:text-gray-400">Best for CRM systems, portals, and integrated workflows.</p>
                <div className="mb-6">
                  <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">$1200</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="mb-8 space-y-3 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
                  <li className="flex items-center"><span className="mr-3 text-xl text-orange-500 dark:text-orange-400">+</span> Advanced responsive UI</li>
                  <li className="flex items-center"><span className="mr-3 text-xl text-orange-500 dark:text-orange-400">+</span> CRM or admin dashboard</li>
                  <li className="flex items-center"><span className="mr-3 text-xl text-orange-500 dark:text-orange-400">+</span> API integrations</li>
                  <li className="flex items-center"><span className="mr-3 text-xl text-orange-500 dark:text-orange-400">+</span> Priority support</li>
                </ul>
                <button
                  onClick={() => navigate("/contact?service=Service+Plan&plan=Growth&price=1200")}
                  className="w-full rounded-lg bg-gradient-to-r from-orange-600 to-pink-600 px-4 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-orange-700 hover:to-pink-700"
                >
                  Get Started
                </button>
              </div>

              <div className="rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-5 shadow-lg transition-all hover:-translate-y-1 hover:border-purple-500 hover:shadow-2xl dark:border-purple-800 dark:from-purple-950 dark:to-pink-950 sm:p-6 md:p-8">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">Scale</h3>
                <p className="mb-4 font-medium text-gray-600 dark:text-gray-400">For custom products, automation systems, and long-term support.</p>
                <div className="mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">$2500</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="mb-8 space-y-3 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
                  <li className="flex items-center"><span className="mr-3 text-xl text-purple-500 dark:text-purple-400">+</span> Full custom development</li>
                  <li className="flex items-center"><span className="mr-3 text-xl text-purple-500 dark:text-purple-400">+</span> AI and WhatsApp automation</li>
                  <li className="flex items-center"><span className="mr-3 text-xl text-purple-500 dark:text-purple-400">+</span> Real-time reporting systems</li>
                  <li className="flex items-center"><span className="mr-3 text-xl text-purple-500 dark:text-purple-400">+</span> Ongoing optimization support</li>
                </ul>
                <button
                  onClick={() => navigate("/contact?service=Service+Plan&plan=Scale&price=2500")}
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-purple-700 hover:to-pink-700"
                >
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
