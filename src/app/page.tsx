import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
const featureToCategory: Record<string, 'minerals' | 'precious' | 'agricultural'> = {
  'Solid Minerals': 'minerals',
  'Precious Stones': 'precious',
  'Agricultural Products': 'agricultural',
};

export default function HomePage() {
  return (
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
                  <Link
                      href="/products"
                      className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center"
                  >
                    Explore Our Products
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <Link
                      href="/contact"
                      className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors text-center"
                  >
                    Partner With Us
                  </Link>
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
                  <Link href={`/products#${featureToCategory[feature.title] || 'minerals'}`} className="block">
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group-hover:shadow-xl">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center text-2xl mb-6`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </Link>

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
            <Link
                href="/contact"
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </div>
  );
}