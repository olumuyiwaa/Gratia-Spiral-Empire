import { Globe, Shield, Clock, Award } from 'lucide-react';

export default function WhyChoosePage() {
    return (
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
                        alt="Professional Business Presentation"
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
}