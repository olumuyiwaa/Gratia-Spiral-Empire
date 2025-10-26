'use client';

import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, Globe ,Loader2} from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const publicKey = "Kg029yKXJTfsBld2c";
        if (publicKey) {
            emailjs.init(publicKey);
        } else {
            // Optional: warn in dev if the key is missing
            console.warn('EMAILJS_PUBLIC_KEY is not set');
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitting) return;

        const serviceId = "service_lej2two";
        const templateId = "template_b88boyc";
        const publicKey = "Kg029yKXJTfsBld2c";

        if (!serviceId || !templateId || !publicKey) {
            alert('Email service is not configured. Please try again later.');
            return;
        }

        try {
            setIsSubmitting(true);

            // Ensure your EmailJS template has variables matching these keys:
            // from_name, from_email, company, message, to_email (optional if set in dashboard)
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    company: formData.company,
                    message: formData.message,
                    to_email: 'gratiaspiralempireou@outlook.com',
                },
                publicKey // you can omit this if you called emailjs.init above
            );

            alert(`Thank you for your message ${formData.name}! We will get back to you via ${formData.email} within 24 hours.`);
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch (err: any) {
            // eslint-disable-next-line no-console
            console.error('Email send failed:', err);
            console.error('Error details:', {
                message: err?.message,
                text: err?.text,
                status: err?.status,
                full: err
            });
            alert(`Sorry, there was an error sending your message: ${err?.text || err?.message || 'Unknown error'}. Please try again later.`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Let's work together. Have a question or want to request a quote? Reach out today—our team will respond within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black placeholder-gray-500"
                                    placeholder="Your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black placeholder-gray-500"
                                    placeholder="your.email@company.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black placeholder-gray-500"
                                    placeholder="Your company name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black placeholder-gray-500"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                aria-busy={isSubmitting}
                                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="ml-2" size={20} />
                                    </>
                                )}
                            </button>

                        </form>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                                    <Mail className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                    <p className="text-gray-600">info@gratiaspiral.com</p>
                                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <Phone className="text-blue-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                    <p className="text-gray-600">+372 XXX XXX XXX</p>
                                    <p className="text-sm text-gray-500">Business hours: 9AM - 6PM EET</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                    <MapPin className="text-purple-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                                    <p className="text-gray-600">Tallinn, Estonia</p>
                                    <p className="text-sm text-gray-500">European headquarters</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp/Telegram */}
                        <div className="mt-8 bg-emerald-50 rounded-xl p-6">
                            <h3 className="font-bold text-gray-900 mb-4">Instant Messaging</h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                For quick inquiries and real-time communication, reach us on:
                            </p>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                                >
                                    <div className="flex gap-2">
                                        <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.607 1.94 6.563L4 29l7.687-1.97A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-1.97 0-3.89-.523-5.56-1.51l-.396-.234-4.563 1.17 1.22-4.445-.258-.41A10.91 10.91 0 015.083 15c0-6.025 4.892-10.917 10.917-10.917S26.917 8.975 26.917 15 22.025 25.917 16 25.917zm5.49-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.23 5.12 4.4.72.28 1.28.45 1.72.58.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.08-.13-.27-.2-.57-.34z"/>
                                        </svg>
                                        WhatsApp
                                    </div>
                                </button>
                                <button
                                    onClick={() => window.open('https://t.me/yourtelegram', '_blank')}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                                >
                                    <div className="flex gap-2">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.944 4.667a1.5 1.5 0 00-1.62-.217L3.47 11.44c-1.06.44-1.03 1.97.05 2.36l3.44 1.23 2.02 6.38c.29.92 1.48 1.09 1.97.25l2.13-3.57 3.97 2.92c.83.61 2.01.17 2.23-.8l3.13-13.13a1.5 1.5 0 00-.35-1.36zm-3.41 2.02l-8.19 7.16 1.97 6.23 2.13-3.57a1.5 1.5 0 01.97-.67l4.97-.87-1.85-8.28zm-8.19 7.16l-3.44-1.23 11.63-4.84-8.19 7.16z"/>
                                        </svg>
                                        Telegram
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Global Presence</h3>
                    <div className="w-full h-64 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                            <Globe className="text-emerald-600 mx-auto mb-4" size={48} />
                            <p className="text-gray-700 font-medium">Interactive map coming soon</p>
                            <p className="text-gray-500 text-sm">Estonia HQ • West Africa Operations • Global Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;