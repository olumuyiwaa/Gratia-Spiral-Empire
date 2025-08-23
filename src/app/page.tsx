'use client'
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Send, ArrowRight, Globe, Shield, Clock, Award } from 'lucide-react';
import emailjs from 'emailjs-com';

const GratiaSpiral = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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


// Sends email using EmailJS
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    await emailjs.send(
      'service_id', // to replace with EmailJS service ID
      'template_id', // to replace with EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: 'oladoyinemmanuel@gmail.com'
      },
      'user_id' // to replace with  EmailJS public key
    );
    alert(`Thank you for your message ${formData.name}! We will get back to you via ${formData.email} within 24 hours.`);
    setFormData({ name: '', email: '', company: '', message: '' });
  } catch (error) {
    alert('Sorry, there was an error sending your message. Please try again later.');
  }
};

 const scrollToSection = (sectionId: string) => {
   setActiveSection(sectionId);
   setIsMenuOpen(false);
 };

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <HomeSection scrollToSection={scrollToSection} />;
      case 'about':
        return <AboutSection />;
      case 'products':
        return <ProductsSection />;
      case 'export':
        return <ExportSection />;
      case 'why-choose':
        return <WhyChooseSection />;
      case 'contact':
        return <ContactSection formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />;
      default:
        return <HomeSection scrollToSection={scrollToSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Gratia Spiral Empire</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'products', label: 'Products' },
                { id: 'export', label: 'Export & Sourcing' },
                { id: 'why-choose', label: 'Why Choose Us' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-emerald-600'
                      : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'products', label: 'Products' },
                { id: 'export', label: 'Export & Sourcing' },
                { id: 'why-choose', label: 'Why Choose Us' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div 
              onClick={() => scrollToSection('home')}
              className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-xl">G</span>
                </div>
                <span className="ml-3 text-xl font-bold">Gratia Spiral Empire</span>
              </div>
              <p className="text-emerald-100 mb-6 max-w-md">
                Your trusted partner in global commodity trade, connecting Africa's natural wealth to global markets through ethical sourcing and strategic partnerships.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-400 transition-colors"
                >
                  <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2.05C15.67 2.02 14.33 2 13 2C7.48 2 3 6.48 3 12c0 4.84 3.66 8.84 8.34 9.8v-6.93H8.1v-2.87h3.24V9.84c0-3.2 1.92-4.96 4.85-4.96 1.41 0 2.89.25 2.89.25v3.18h-1.63c-1.61 0-2.11.99-2.11 2v2.4h3.59l-.57 2.87h-3.02v6.93C20.34 20.84 24 16.84 24 12c0-5.52-4.48-10-10-10-.33 0-.67.01-1 .05z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-400 transition-colors"
                >
                  <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.48 4.48 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.67 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.56-.03-.83-.08.56 1.76 2.19 3.04 4.13 3.08A9.01 9.01 0 012 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.87 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-400 transition-colors"
                >
                  <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" x="2" y="2" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="https://t.me/yourtelegramusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-400 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.944 4.667a1.5 1.5 0 00-1.62-.217L3.47 11.44c-1.06.44-1.03 1.97.05 2.36l3.44 1.23 2.02 6.38c.29.92 1.48 1.09 1.97.25l2.13-3.57 3.97 2.92c.83.61 2.01.17 2.23-.8l3.13-13.13a1.5 1.5 0 00-.35-1.36zm-3.41 2.02l-8.19 7.16 1.97 6.23 2.13-3.57a1.5 1.5 0 01.97-.67l4.97-.87-1.85-8.28zm-8.19 7.16l-3.44-1.23 11.63-4.84-8.19 7.16z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-400 transition-colors"
                >
                  <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.607 1.94 6.563L4 29l7.687-1.97A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-1.97 0-3.89-.523-5.56-1.51l-.396-.234-4.563 1.17 1.22-4.445-.258-.41A10.91 10.91 0 015.083 15c0-6.025 4.892-10.917 10.917-10.917S26.917 8.975 26.917 15 22.025 25.917 16 25.917zm5.49-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.23 5.12 4.4.72.28 1.28.45 1.72.58.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.08-.13-.27-.2-.57-.34z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-emerald-100">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection('export')} className="hover:text-white transition-colors">Export & Sourcing</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-emerald-100 mb-4 text-sm">Subscribe for market updates and industry insights.</p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 bg-white/10 border border-emerald-400 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-emerald-500 mt-8 pt-8 text-center text-emerald-100">
            <p>&copy; 2025 Gratia Spiral Empire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

type HomeSectionProps = {
  scrollToSection: (sectionId: string) => void;
};

const HomeSection = ({ scrollToSection }: HomeSectionProps) => (
  <div>
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-emerald-50 to-emerald-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in
              <span className="text-emerald-600 block">Global Commodity Trade</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Welcome to Gratia Spiral Empire, a premier Estonian-based trading company specializing in solid minerals, precious stones, and agricultural products. With deep sourcing roots across West Africa and a global vision, we connect high-quality resources to global markets—ethically, reliably, and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
               onClick={() => scrollToSection('products')}
               className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center">
                Explore Our Products
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
                Partner With Us
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/global-logistics-transportation-network.jpg"
              alt="Global Logistics Transportation Network"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '50+', label: 'Global Partners' },
            { number: '15+', label: 'Product Categories' },
            { number: '10+', label: 'Years Experience' },
            { number: '99%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Connecting Africa's Wealth to Global Markets</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in three core areas of commodity trade, ensuring quality, sustainability, and reliable delivery across all our product lines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Solid Minerals',
              description: 'Premium quality lithium, copper, zinc, mica, and other essential minerals sourced responsibly from West Africa.',
              icon: '🪨',
              color: 'from-blue-500 to-blue-600'
            },
            {
              title: 'Precious Stones',
              description: 'Certified gemstones including ruby, sapphire, emerald, and gold with secure handling and delivery.',
              icon: '💎',
              color: 'from-purple-500 to-purple-600'
            },
            {
              title: 'Agricultural Products',
              description: 'Fresh agricultural commodities from maize and cassava to cocoa and sesame, directly from farmers.',
              icon: '🌾',
              color: 'from-green-500 to-green-600'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center text-2xl mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Trading?</h2>
        <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
          Join our network of global partners and discover how we can help you access premium commodities from West Africa.
        </p>
        <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
          Get Started Today
        </button>
      </div>
    </section>
  </div>
);

const AboutSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Gratia Spiral Empire</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A global commodity trading company connecting Africa's natural wealth to international markets through ethical sourcing and strategic partnerships.
        </p>
      </div>

      {/* Company Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Gratia Spiral Empire is a global commodity trading company headquartered in Estonia, with strong operational presence in West Africa. We specialize in the sourcing and export of natural resources including solid minerals, precious gemstones, and agricultural commodities.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our expertise lies in creating sustainable value chains that benefit both local communities and global markets, ensuring transparency and quality at every step of the trading process.
          </p>
        </div>
        <img
              src="/closeup-shot-male-wearing-leather-jacket-holding-globe-front-him.jpg"
              alt="Global Logistics Transportation Network"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-emerald-50 p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To create sustainable value by connecting Africa's natural wealth to global industries through ethical sourcing, transparency, and strategic partnerships.
          </p>
        </div>
        <div className="bg-blue-50 p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To be a trusted global leader in responsible commodity trade, setting new standards for ethical business practices.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: 'Integrity', description: 'Transparent and honest business practices' },
            { icon: Globe, title: 'Sustainability', description: 'Environmental and social responsibility' },
            { icon: Award, title: 'Excellence', description: 'Highest quality standards in everything we do' },
            { icon: Clock, title: 'Partnership', description: 'Long-term relationships built on trust' }
          ].map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

type ProductCategoryKey = 'minerals' | 'precious' | 'agricultural';

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategoryKey>('minerals');

  const productCategories: Record<ProductCategoryKey, {
    title: string;
    icon: string;
    description: string;
    products: { name: string; description: string }[];
  }> = {
    minerals: {
      title: 'Solid Minerals',
      icon: '🪨',
      description: 'High-quality minerals sourced responsibly from verified mines across West Africa.',
      products: [
        { name: 'Lithium', description: 'Battery-grade lithium compounds for energy storage applications' },
        { name: 'Lead', description: 'Industrial-grade lead for construction and manufacturing' },
        { name: 'Copper', description: 'High-purity copper for electrical and industrial applications' },
        { name: 'Zinc', description: 'Premium zinc for galvanization and alloy production' },
        { name: 'Mica', description: 'Industrial mica for electrical insulation and cosmetics' },
        { name: 'Rose Quartz', description: 'Decorative and industrial quartz varieties' }
      ]
    },
    precious: {
      title: 'Precious Stones',
      icon: '💎',
      description: 'Certified precious stones with secure handling and international delivery.',
      products: [
        { name: 'Ruby', description: 'Premium rubies in various cuts and grades' },
        { name: 'Sapphire', description: 'Blue and fancy sapphires with certification' },
        { name: 'Emerald', description: 'High-quality emeralds with authenticity guarantees' },
        { name: 'Tourmaline', description: 'Multi-colored tourmaline in collector grades' },
        { name: 'Gold', description: 'Refined gold in various forms and purities' },
        { name: 'Aquamarine', description: 'Clear aquamarine stones for jewelry applications' }
      ]
    },
    agricultural: {
      title: 'Agricultural Products',
      icon: '🌾',
      description: 'Fresh agricultural commodities sourced directly from farmers with fair trade practices.',
      products: [
        { name: 'Maize', description: 'Yellow and white corn varieties for food and feed' },
        { name: 'Cassava', description: 'Fresh cassava roots and processed flour' },
        { name: 'Groundnut', description: 'Premium peanuts for oil production and consumption' },
        { name: 'Cashew', description: 'Raw cashew nuts from sustainable farms' },
        { name: 'Cocoa', description: 'High-quality cocoa beans for chocolate production' },
        { name: 'Sesame', description: 'White and black sesame seeds for oil and food use' },
        { name: 'Ginger/Garlic', description: 'Fresh spices and aromatics for global markets' }
      ]
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of commodities, each sourced with the highest standards of quality and sustainability.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg flex">
            {Object.entries(productCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key as ProductCategoryKey)}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeCategory === key
                    ? 'bg-white text-emerald-600 shadow-sm'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Content */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {productCategories[activeCategory].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {productCategories[activeCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories[activeCategory].products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                {/* <button className="mt-4 text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors">
                  Learn More →
                </button> */}
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-emerald-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            All our products undergo rigorous quality checks and meet international export standards. We provide complete traceability and certification for every shipment.
          </p>
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
            Request Product Catalog
          </button>
        </div>
      </div>
    </section>
  );
};

const ExportSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Export & Sourcing</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our comprehensive approach to responsible sourcing and efficient export logistics ensures your commodities reach global markets safely and on time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        {/* Responsible Sourcing */}
        <div>
          <div className="mb-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <Shield className="text-emerald-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsible Sourcing</h2>
            <p className="text-gray-600 leading-relaxed">
              We work directly with local miners and farmers to ensure that our materials are ethically sourced, environmentally sound, and economically beneficial to local communities. Our sourcing network spans across multiple West African countries, giving us access to diverse, high-quality resources.
            </p>
          </div>

          <div className="space-y-4">
            {[
              'Direct partnerships with local suppliers',
              'Environmental impact assessments',
              'Fair trade pricing and community benefits',
              'Regular quality and compliance audits'
            ].map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Export Logistics */}
        <div>
          <div className="mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Globe className="text-blue-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Export Logistics</h2>
            <p className="text-gray-600 leading-relaxed">
              With strategic logistics partners across Africa and Europe, we ensure smooth, on-time deliveries to clients in Asia, Europe, and the Americas. All export documentation, compliance checks, and certifications are handled by our internal team.
            </p>
          </div>

          <div className="space-y-4">
            {[
              'Global shipping and logistics coordination',
              'Complete export documentation handling',
              'Quality control and product certification',
              'Real-time shipment tracking and updates'
            ].map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Export Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Source', description: 'Direct sourcing from verified suppliers' },
            { step: '02', title: 'Quality Check', description: 'Rigorous testing and certification' },
            { step: '03', title: 'Documentation', description: 'Complete export paperwork processing' },
            { step: '04', title: 'Delivery', description: 'Secure shipping to global destinations' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                {item.step}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Gratia Spiral Empire</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Partner with us for unmatched expertise, reliability, and commitment to sustainable commodity trading.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Sets Us Apart</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Global Expertise, Local Sourcing',
                description: 'Combining international business acumen with deep local knowledge and relationships across West Africa.',
                icon: Globe
              },
              {
                title: 'Transparent & Ethical Operations',
                description: 'Complete transparency in our supply chain with ethical sourcing practices that benefit local communities.',
                icon: Shield
              },
              {
                title: 'Customized Logistics Solutions',
                description: 'Tailored shipping and handling solutions to meet your specific requirements and timelines.',
                icon: Clock
              },
              {
                title: 'Competitive Pricing',
                description: 'Direct sourcing relationships enable us to offer competitive prices without compromising quality.',
                icon: Award
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <feature.icon className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src="/african-man-black-suit-big-tv-screen-guy-shows-presentation.jpg"
          alt="Global Logistics Transportation Network"
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Fast & Reliable Fulfillment */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast & Reliable Fulfillment</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're sourcing in bulk or seeking long-term trade partners, Gratia Spiral Empire is your trusted ally for consistent, high-quality commodity supply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { metric: '24hrs', label: 'Response Time', description: 'Quick quote turnaround' },
            { metric: '99%', label: 'On-Time Delivery', description: 'Reliable logistics network' },
            { metric: '50+', label: 'Global Partners', description: 'Worldwide reach' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{item.metric}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{item.label}</div>
              <div className="text-gray-600 text-sm">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

type ContactSectionProps = {
  formData: {
    name: string;
    email: string;
    company: string;
    message: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const ContactSection = ({ formData, handleInputChange, handleSubmit }: ContactSectionProps) => (
  <section className="py-20">
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
              className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center"
            >
              Send Message
              <Send className="ml-2" size={20} />
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
              className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
               <div className="flex gap-2">
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.607 1.94 6.563L4 29l7.687-1.97A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-1.97 0-3.89-.523-5.56-1.51l-.396-.234-4.563 1.17 1.22-4.445-.258-.41A10.91 10.91 0 015.083 15c0-6.025 4.892-10.917 10.917-10.917S26.917 8.975 26.917 15 22.025 25.917 16 25.917zm5.49-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.23 5.12 4.4.72.28 1.28.45 1.72.58.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.08-.13-.27-.2-.57-.34z"/>
              </svg>
               WhatsApp </div>
              </button>
              <button 
              onClick={() => window.open('https://t.me/yourtelegram', '_blank')}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
              <div className="flex gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.944 4.667a1.5 1.5 0 00-1.62-.217L3.47 11.44c-1.06.44-1.03 1.97.05 2.36l3.44 1.23 2.02 6.38c.29.92 1.48 1.09 1.97.25l2.13-3.57 3.97 2.92c.83.61 2.01.17 2.23-.8l3.13-13.13a1.5 1.5 0 00-.35-1.36zm-3.41 2.02l-8.19 7.16 1.97 6.23 2.13-3.57a1.5 1.5 0 01.97-.67l4.97-.87-1.85-8.28zm-8.19 7.16l-3.44-1.23 11.63-4.84-8.19 7.16z"/>
              </svg>
              Telegram </div> 
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
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

export default GratiaSpiral;
