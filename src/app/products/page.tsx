'use client';

import React, { useState } from 'react';

type ProductCategoryKey = 'minerals' | 'precious' | 'agricultural';

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState<ProductCategoryKey>('minerals');

    const productCategories: Record<ProductCategoryKey, {
        title: string;
        icon: string;
        description: string;
        products: { name: string; image: string; description: string }[];
    }> = {
        minerals: {
            title: 'Solid Minerals',
            icon: '🪨',
            description: 'High-quality minerals sourced responsibly from verified mines across West Africa.',
            products: [
                { name: 'Lithium', image: 'product/lithium.jpg', description: 'Battery-grade lithium compounds for energy storage applications' },
                { name: 'Lead', image: 'product/lead.webp', description: 'Industrial-grade lead for construction and manufacturing' },
                { name: 'Copper', image: 'product/copper.jpg', description: 'High-purity copper for electrical and industrial applications' },
                { name: 'Zinc', image: 'product/zinc.jpg',description: 'Premium zinc for galvanization and alloy production' },
                { name: 'Mica', image: 'product/mica.jpg',description: 'Industrial mica for electrical insulation and cosmetics' },
                { name: 'Rose Quartz', image: 'product/rosequartz.webp',description: 'Decorative and industrial quartz varieties' }
            ]
        },
        precious: {
            title: 'Precious Stones',
            icon: '💎',
            description: 'Certified precious stones with secure handling and international delivery.',
            products: [
                { name: 'Ruby', image: 'product/ruby.jpg',description: 'Premium rubies in various cuts and grades' },
                { name: 'Sapphire', image: 'product/sapphire.webp',description: 'Blue and fancy sapphires with certification' },
                { name: 'Emerald', image: 'product/emerald.jpeg',description: 'High-quality emeralds with authenticity guarantees' },
                { name: 'Tourmaline', image: 'product/tourmaline.jpg',description: 'Multi-colored tourmaline in collector grades' },
                { name: 'Gold', image: 'product/gold.jpeg',description: 'Refined gold in various forms and purities' },
                { name: 'Aquamarine', image: 'product/aquamarine.webp',description: 'Clear aquamarine stones for jewelry applications' }
            ]
        },
        agricultural: {
            title: 'Agricultural Products',
            icon: '🌾',
            description: 'Fresh agricultural commodities sourced directly from farmers with fair trade practices.',
            products: [
                { name: 'Maize', image: 'product/maize.jpg',description: 'Yellow and white corn varieties for food and feed' },
                { name: 'Cassava', image: 'product/cassava.webp',description: 'Fresh cassava roots and processed flour' },
                { name: 'Groundnut', image: 'product/groundnut.jpg',description: 'Premium peanuts for oil production and consumption' },
                { name: 'Cashew', image: 'product/cashew.webp',description: 'Raw cashew nuts from sustainable farms' },
                { name: 'Cocoa', image: 'product/cocoa.jpg',description: 'High-quality cocoa beans for chocolate production' },
                { name: 'Sesame', image: 'product/sesame.jpeg',description: 'White and black sesame seeds for oil and food use' },
                { name: 'Ginger/Garlic', image: 'product/ginger-garlic.jpg',description: 'Fresh spices and aromatics for global markets' }
            ]
        }
    };

    return (
        <section className="py-20 bg-gray-50">
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
                                <img
                                    src={product.image}
                                    alt="Global Business Leadership"
                                    className="w-full h-40 object-cover rounded-md shadow-lg"
                                />
                                <p className="text-gray-600 text-sm mt-3">{product.description}</p>
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

export default ProductsPage;