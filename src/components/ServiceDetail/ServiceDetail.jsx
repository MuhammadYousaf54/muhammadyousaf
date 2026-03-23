import { useNavigate, useParams } from "@router";
import { BarChart3, Code, Mail, MessageCircle, Phone, TrendingUp, Zap } from "lucide-react";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function ServiceDetail() {
  const params = useParams();
  const serviceId = params?.serviceId;
  const navigate = useNavigate();

  const serviceData = {
    "web-development": {
      title: "Web Development & Hosting",
      icon: <Code size={80} className="text-orange-500" />,
      fullDescription:
        "Build scalable, responsive websites and web applications with modern technologies. From business websites to CRM platforms and dashboards, everything is designed to work smoothly across mobile, tablet, and desktop.",
      techStack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vite", "HTML5", "CSS3", "JavaScript", "TypeScript", "Webpack"],
      projects: [
        {
          title: "Custom CRM Platform",
          description: "Fully functional CRM with lead tracking, pipeline stages, reminders, reporting, and team permissions.",
          link: "/contact?service=Web+Development&project=Custom+CRM+Platform",
          image: "",
          icon: "CRM",
        },
        {
          title: "Logistics App with Real-Time GPS",
          description: "Logistics system with shipment updates, dispatch management, and real-time GPS tracking.",
          link: "/contact?service=Web+Development&project=Logistics+App+with+GPS",
          image: "",
          icon: "GPS",
        },
        {
          title: "WhatsApp Customer System",
          description: "Customer communication workflow with WhatsApp support, automation, and lead handling.",
          link: "/contact?service=Web+Development&project=WhatsApp+Customer+System",
          image: "",
          icon: "WA",
        },
      ],
      pricing: { starter: 500, growth: 1200, scale: 2500 },
    },
    "ai-automation": {
      title: "AI Automation & CRM Integration",
      icon: <Zap size={80} className="text-orange-500" />,
      fullDescription:
        "Streamline operations with AI-powered automation, CRM integration, lead handling, and support systems that reduce manual work and improve customer response speed.",
      techStack: ["Python", "OpenAI API", "HubSpot", "Zapier", "Make.com", "Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Webhooks", "Automation Flows"],
      projects: [
        {
          title: "AI CRM Automation",
          description: "Lead routing, follow-up triggers, task creation, and CRM lifecycle automation.",
          link: "/contact?service=AI+Automation&project=AI+CRM+Automation",
          image: "",
          icon: "AI",
        },
        {
          title: "WhatsApp Lead Automation",
          description: "WhatsApp auto-replies, qualification flows, and CRM sync for sales inquiries.",
          link: "/contact?service=AI+Automation&project=WhatsApp+Lead+Automation",
          image: "",
          icon: "BOT",
        },
        {
          title: "Workflow Automation Suite",
          description: "Business process automation using APIs, triggers, approvals, and reporting.",
          link: "/contact?service=AI+Automation&project=Workflow+Automation+Suite",
          image: "",
          icon: "API",
        },
      ],
      pricing: { starter: 800, growth: 1800, scale: 3500 },
    },
    "digital-marketing": {
      title: "Digital Marketing",
      icon: <TrendingUp size={80} className="text-orange-500" />,
      fullDescription:
        "Boost online visibility with SEO, campaign planning, content support, reporting dashboards, and growth strategies focused on measurable results.",
      techStack: ["Google Analytics", "Google Ads", "Meta Ads", "SEO Tools", "Mailchimp", "Content Strategy", "Social Media", "A/B Testing", "Reporting Dashboards", "Performance Tracking"],
      projects: [
        {
          title: "Social Media Campaign Manager",
          description: "Campaign planning and scheduling support across multiple channels.",
          link: "/contact?service=Digital+Marketing&project=Social+Media+Campaign+Manager",
          image: "",
          icon: "SM",
        },
        {
          title: "Email Marketing Automation",
          description: "Automated campaign flows, segmentation, and nurture sequences.",
          link: "/contact?service=Digital+Marketing&project=Email+Marketing+Automation",
          image: "",
          icon: "EM",
        },
        {
          title: "SEO Analytics Dashboard",
          description: "Keyword tracking, performance reporting, and optimization insights.",
          link: "/contact?service=Digital+Marketing&project=SEO+Analytics+Dashboard",
          image: "",
          icon: "SEO",
        },
      ],
      pricing: { starter: 600, growth: 1500, scale: 3000 },
    },
    "data-analysis": {
      title: "Data Analysis",
      icon: <BarChart3 size={80} className="text-orange-500" />,
      fullDescription:
        "Turn raw data into decisions with clean dashboards, KPI tracking, reporting, forecasting support, and business intelligence systems.",
      techStack: ["Python", "Pandas", "NumPy", "Power BI", "Tableau", "SQL", "Excel", "Scikit-learn", "Jupyter", "Google Sheets", "Reporting", "Dashboards"],
      projects: [
        {
          title: "Sales Analytics Platform",
          description: "Sales performance tracking, forecasting, and operational insight reporting.",
          link: "/contact?service=Data+Analysis&project=Sales+Analytics+Platform",
          image: "",
          icon: "SQL",
        },
        {
          title: "Financial Dashboard",
          description: "Revenue, expenses, cash flow, and business metric visualization.",
          link: "/contact?service=Data+Analysis&project=Financial+Dashboard",
          image: "",
          icon: "FIN",
        },
        {
          title: "Business Intelligence Platform",
          description: "Interactive KPI dashboards and decision-support reporting systems.",
          link: "/contact?service=Data+Analysis&project=Business+Intelligence+Platform",
          image: "",
          icon: "BI",
        },
      ],
      pricing: { starter: 700, growth: 1600, scale: 2800 },
    },
  };

  const service = serviceData[serviceId];

  const handleGetStarted = (planName, price) => {
    const serviceName = serviceData[serviceId]?.title || "Service";
    navigate(`/contact?service=${serviceName}&plan=${planName}&price=${price}`);
  };

  if (!service) {
    return (
      <div className="mx-auto min-h-screen w-full max-w-7xl bg-gradient-to-b from-white to-gray-50 px-4 py-12 text-center transition-colors dark:from-gray-900 dark:to-black">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Service not found</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl bg-gradient-to-b from-white to-gray-50 px-3 py-8 transition-colors dark:from-gray-900 dark:to-black sm:px-4 sm:py-12 lg:px-6">
      <div className="mb-8 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:mb-12 sm:p-8 md:mb-16 md:p-12">
        <div className="mb-6 flex justify-center">{service.icon}</div>
        <h1 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:mb-6 md:text-5xl">{service.title}</h1>
        <p className="max-w-3xl text-center text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl">{service.fullDescription}</p>
      </div>

      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:mb-12 sm:p-8 md:mb-16 md:p-12">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold text-gray-900 dark:text-white sm:mb-12 sm:text-3xl md:text-4xl">
          Tech <span className="text-orange-500 dark:text-orange-400">Stack</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {service.techStack.map((tech, index) => (
            <div
              key={index}
              className="rounded-lg border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-3 text-center transition-shadow hover:shadow-lg dark:border-gray-600 dark:from-gray-800 dark:to-gray-700 sm:p-5 md:p-6"
            >
              <p className="text-sm font-semibold text-gray-900 dark:text-white sm:text-base md:text-lg">{tech}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:mb-12 sm:p-8 md:mb-16 md:p-12">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold text-gray-900 dark:text-white sm:mb-12 sm:text-3xl md:text-4xl">
          Related <span className="text-orange-500 dark:text-orange-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {service.projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} link={project.link} image={project.image} icon={project.icon} />
          ))}
        </div>
      </div>

      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:mb-12 sm:p-8 md:mb-16 md:p-12">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold text-gray-900 dark:text-white sm:mb-12 sm:text-3xl md:text-4xl">
          Service <span className="text-orange-500 dark:text-orange-400">Pricing</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-5 shadow-lg transition-shadow hover:shadow-xl dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 sm:p-6 md:p-8">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">Starter</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">Best for smaller websites and simple launches.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-orange-500">${service.pricing.starter}</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <button onClick={() => handleGetStarted("Starter", service.pricing.starter)} className="mb-4 w-full rounded-lg bg-orange-500 px-4 py-3 font-bold text-white transition-colors hover:bg-orange-600">
              Get Started
            </button>
          </div>

          <div className="rounded-lg border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 p-5 shadow-lg transition-shadow hover:shadow-xl dark:from-gray-700 dark:to-gray-800 sm:p-6 md:p-8 lg:scale-105">
            <div className="mb-4 rounded-lg bg-orange-500 py-2 text-center font-bold text-white">POPULAR</div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">Growth</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">Perfect for CRM systems and integrated products.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-orange-600">${service.pricing.growth}</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <button onClick={() => handleGetStarted("Growth", service.pricing.growth)} className="mb-4 w-full rounded-lg bg-orange-600 px-4 py-3 font-bold text-white transition-colors hover:bg-orange-700">
              Get Started
            </button>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-5 shadow-lg transition-shadow hover:shadow-xl dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 sm:p-6 md:p-8">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">Scale</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">Built for advanced apps, automation, and support.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-orange-500">${service.pricing.scale}</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <button onClick={() => handleGetStarted("Scale", service.pricing.scale)} className="mb-4 w-full rounded-lg bg-orange-500 px-4 py-3 font-bold text-white transition-colors hover:bg-orange-600">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:p-8 md:p-12">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold text-gray-900 dark:text-white sm:mb-12 sm:text-3xl md:text-4xl">
          Get <span className="text-orange-500 dark:text-orange-400">In Touch</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
          <a href="mailto:muhammadyousaf5482@gmail.com" className="rounded-lg border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-5 text-center transition-all hover:scale-105 hover:shadow-lg dark:border-gray-600 dark:from-gray-800 dark:to-gray-700 sm:p-6 md:p-8">
            <Mail size={60} className="mx-auto mb-4 text-orange-500" />
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">Email</h3>
            <p className="break-words text-gray-700 dark:text-gray-300">muhammadyousaf5482@gmail.com</p>
            <button className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2 font-bold text-white transition-colors hover:bg-orange-600">Send Email</button>
          </a>

          <a href="tel:+923336005482" className="rounded-lg border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-5 text-center transition-all hover:scale-105 hover:shadow-lg dark:border-gray-600 dark:from-gray-800 dark:to-gray-700 sm:p-6 md:p-8">
            <Phone size={60} className="mx-auto mb-4 text-orange-500" />
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">Phone</h3>
            <p className="text-gray-700 dark:text-gray-300">+92 333 6005482</p>
            <button className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2 font-bold text-white transition-colors hover:bg-orange-600">Call Now</button>
          </a>

          <a href="https://wa.me/923336005482" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-5 text-center transition-all hover:scale-105 hover:shadow-lg dark:border-gray-600 dark:from-gray-800 dark:to-gray-700 sm:p-6 md:p-8">
            <MessageCircle size={60} className="mx-auto mb-4 text-orange-500" />
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">WhatsApp</h3>
            <p className="text-gray-700 dark:text-gray-300">+92 333 6005482</p>
            <button className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2 font-bold text-white transition-colors hover:bg-orange-600">Message on WhatsApp</button>
          </a>
        </div>
      </div>
    </div>
  );
}
