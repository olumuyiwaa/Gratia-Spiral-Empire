import { Shield, Globe } from 'lucide-react';

export default function ExportPage() {
    return (
        <section className="py-20 bg-gray-50">
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
}