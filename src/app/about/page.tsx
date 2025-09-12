import { Shield, Globe, Clock, Award } from 'lucide-react';

export default function AboutPage() {
    return (
        <section className="py-20 bg-gray-50">
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
                        alt="Global Business Leadership"
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
}