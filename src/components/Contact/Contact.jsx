/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import { useSearchParams } from '@router'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Initialize EmailJS using Next.js public environment variables.
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";
emailjs.init(PUBLIC_KEY);

const EMAILJS_CONFIG = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID_HERE',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
    receiverEmail: process.env.NEXT_PUBLIC_RECEIVER_EMAIL || 'your-email@example.com'
};

export default function Contact() {
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel: '',
        service: searchParams.get('service') || '',
        plan: searchParams.get('plan') || '',
        price: searchParams.get('price') || '',
        message: ''
    });

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            service: searchParams.get('service') || '',
            plan: searchParams.get('plan') || '',
            price: searchParams.get('price') || ''
        }));
    }, [searchParams]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus(null);

        try {
            // Check if EmailJS is properly configured
            if (EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID_HERE') {
                // Fallback to mailto if not configured
                const subject = `Service Inquiry: ${formData.service} - ${formData.plan} Plan ($${formData.price}/month)`;
                const body = `
Hi,

I am interested in your ${formData.service} service.

Plan: ${formData.plan}
Price: $${formData.price}/month

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.tel}

Message: ${formData.message}

Please get back to me with more details.

Thank you!
                `.trim();
                
                window.location.href = `mailto:${EMAILJS_CONFIG.receiverEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                return;
            }

            // Send email using EmailJS
            const templateParams = {
                to_email: EMAILJS_CONFIG.receiverEmail,
                user_name: formData.name,
                user_email: formData.email,
                user_phone: formData.tel,
                user_service: formData.service || 'General Inquiry',
                user_plan: formData.plan || 'Not specified',
                user_price: formData.price || 'N/A',
                user_message: formData.message,
                reply_to: formData.email
            };

            const response = await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams
            );

            if (response.status === 200) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    tel: '',
                    service: searchParams.get('service') || '',
                    plan: searchParams.get('plan') || '',
                    price: searchParams.get('price') || '',
                    message: ''
                });
                setTimeout(() => setSubmitStatus(null), 5000);
            }
        } catch (error) {
            // Detailed logging for EmailJS errors
            try {
                // EmailJSResponseStatus may include status and text
                console.error('EmailJS error details:', {
                    name: error.name,
                    message: error.message,
                    status: error.status || (error && error.statusCode),
                    text: error.text || (error && error.response && error.response.text)
                });
            } catch (logErr) {
                console.error('Error logging failure:', logErr);
            }

            setSubmitStatus('error');

            // Fallback: open mail client with populated subject/body
            try {
                const subject = `Service Inquiry: ${formData.service} - ${formData.plan} Plan ($${formData.price}/month)`;
                const body = `\nHi,\n\nI am interested in your ${formData.service} service.\n\nPlan: ${formData.plan}\nPrice: $${formData.price}/month\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.tel}\n\nMessage: ${formData.message}\n\nPlease get back to me with more details.\n\nThank you!`.trim();
                window.location.href = `mailto:${EMAILJS_CONFIG.receiverEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            } catch (mailtoErr) {
                console.error('Fallback mailto failed:', mailtoErr);
            }

            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-gray-700 dark:text-gray-400 text-base sm:text-lg md:text-xl">Have a question or project idea? We'd love to hear from you!</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12 md:mb-16">
                    {/* Contact Info Cards */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/50 dark:to-blue-800/30 backdrop-blur border border-blue-200 dark:border-blue-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-500 group">
                        <div className="flex items-start gap-4 sm:gap-6">
                            <div className="bg-blue-100 dark:bg-blue-500/20 p-3 sm:p-4 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-500/40 transition-all duration-500">
                                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Location</h3>
                                <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-500">E11/2, Islamabad, Pakistan - 44000</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/50 dark:to-pink-800/30 backdrop-blur border border-pink-200 dark:border-pink-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 hover:border-pink-400 dark:hover:border-pink-500 transition-all duration-500 group">
                        <div className="flex items-start gap-4 sm:gap-6">
                            <div className="bg-pink-100 dark:bg-pink-500/20 p-3 sm:p-4 rounded-lg group-hover:bg-pink-200 dark:group-hover:bg-pink-500/40 transition-all duration-500">
                                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600 dark:text-pink-400" />
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
                                <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-500">+92 3336005482</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/50 dark:to-purple-800/30 backdrop-blur border border-purple-200 dark:border-purple-700/50 rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-500 group">
                        <div className="flex items-start gap-4 sm:gap-6">
                            <div className="bg-purple-100 dark:bg-purple-500/20 p-3 sm:p-4 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-500/40 transition-all duration-500">
                                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Email</h3>
                                <p className="text-gray-700 dark:text-gray-400 text-xs sm:text-sm break-words group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-500">muhammadyousaf5482@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-gray-50 dark:bg-slate-800/50 backdrop-blur border border-gray-200 dark:border-purple-700/30 rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg dark:shadow-2xl dark:shadow-purple-500/10">
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className="mb-6 p-4 sm:p-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-500/20 dark:to-emerald-500/20 border border-green-300 dark:border-green-500/50 rounded-lg">
                            <p className="text-green-900 dark:text-green-300 font-bold flex items-center gap-2">
                                <span className="text-2xl">âœ“</span> Message sent successfully! We'll get back to you soon.
                            </p>
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="mb-6 p-4 sm:p-6 bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-500/20 dark:to-rose-500/20 border border-red-300 dark:border-red-500/50 rounded-lg">
                            <p className="text-red-900 dark:text-red-300 font-bold flex items-center gap-2">
                                <span className="text-2xl">âœ•</span> Error sending message. Please try again.
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {/* Service Details Alert */}
                        {formData.service && (
                            <div className="mb-8 p-4 sm:p-6 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-500/20 dark:to-pink-500/20 border border-orange-300 dark:border-orange-500/50 rounded-lg">
                                <p className="text-orange-900 dark:text-white font-bold mb-3 flex items-center gap-2">
                                    <span className="text-orange-600 dark:text-orange-400">âœ“</span> Service Selected
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
                                    <div className="text-orange-800 dark:text-gray-300"><span className="text-orange-700 dark:text-gray-400 font-semibold">Service:</span> {formData.service}</div>
                                    <div className="text-orange-800 dark:text-gray-300"><span className="text-orange-700 dark:text-gray-400 font-semibold">Plan:</span> {formData.plan}</div>
                                    <div className="text-orange-800 dark:text-gray-300"><span className="text-orange-700 dark:text-gray-400 font-semibold">Price:</span> ${formData.price}/month</div>
                                </div>
                            </div>
                        )}

                        {/* Form Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-gray-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full py-3 px-4 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 hover:border-gray-400 dark:hover:border-purple-500/50 focus:border-orange-500 dark:focus:border-orange-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-500/20 rounded-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full py-3 px-4 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 hover:border-gray-400 dark:hover:border-purple-500/50 focus:border-orange-500 dark:focus:border-orange-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-500/20 rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="tel" className="block text-sm font-semibold text-gray-900 dark:text-gray-300 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="+92 xxxxxxxxxx"
                                value={formData.tel}
                                onChange={handleChange}
                                required
                                className="w-full py-3 px-4 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 hover:border-gray-400 dark:hover:border-purple-500/50 focus:border-orange-500 dark:focus:border-orange-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-500/20 rounded-lg"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-gray-300 mb-2">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Tell us more about your project or inquiry..."
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full py-3 px-4 bg-white dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 hover:border-gray-400 dark:hover:border-purple-500/50 focus:border-orange-500 dark:focus:border-orange-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-500/20 rounded-lg resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full sm:w-auto inline-flex items-center gap-2 ${
                                isLoading 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50'
                            } text-white font-bold py-3 px-8 rounded-lg transition-all duration-300`}
                        >
                            {isLoading ? (
                                <>
                                    <span className="animate-spin">â³</span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

