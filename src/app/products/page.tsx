'use client';

import React, { useEffect, useState } from 'react';
import ProductImageSlider from "@/components/ProductImageSlider";
import {motion} from "framer-motion";

type Product = {
    name: string;
    images: string[];   // multiple images
    description: string;
};

type ProductCategoryKey = 'minerals' | 'precious' | 'agricultural';

type Category = {
    title: string;
    icon: string;
    description: string;
    products: Product[];
};

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState<ProductCategoryKey>('minerals');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    /* HASH SCROLL */
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const hash = window.location.hash?.replace('#', '') as ProductCategoryKey;
        const valid: ProductCategoryKey[] = ['minerals', 'precious', 'agricultural'];

        if (hash && valid.includes(hash)) {
            setActiveCategory(hash);
            setTimeout(() => {
                document.getElementById(hash)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }, 0);
        }
    }, []);

    /* ---------------- PRODUCTS DATA (FULL LIST) ---------------- */

    const productCategories: Record<ProductCategoryKey, Category> = {
        minerals: {
            title: 'Solid Minerals',
            icon: '🪨',
            description:
                'High-quality minerals sourced responsibly from verified mines across West Africa.',
            products: [
                {
                    name: 'Lithium',
                    images: [
                        'product/lithium.jpg',
                        'product/lithium2.jpeg',
                        'product/lithium3.jpeg',
                        'product/lithium4.jpeg',
                        'product/lithium5.jpeg',
                        'product/lithium6.jpeg',
                    ],
                    description:
                        'Battery-grade lithium compounds for energy storage applications',
                },
                {
                    name: 'Lead',
                    images: [
                        'product/lead.webp',
                        'product/lead2.jpeg',
                        'product/lead3.jpeg',
                        'product/lead4.jpeg',
                        'product/lead5.jpeg',
                        'product/lead6.jpeg',
                    ],
                    description:
                        'Industrial-grade lead for construction and manufacturing',
                },
                {
                    name: 'Copper',
                    images: [
                        'product/copper.jpg',
                        'product/copper2.jpeg',
                        'product/copper3.jpeg',
                        'product/copper4.jpeg',
                        'product/copper5.jpeg',
                        'product/copper6.jpeg',
                    ],
                    description:
                        'High-purity copper for electrical and industrial applications',
                },
                {
                    name: 'Zinc',
                    images: [
                        'product/zinc.jpg',
                        'product/zinc2.jpeg',
                        'product/zinc3.jpeg',
                        'product/zinc4.jpeg',
                        'product/zinc5.jpeg',
                        'product/zinc6.jpeg',
                    ],
                    description: 'Premium zinc for galvanization and alloy production',
                },
                {
                    name: 'Mica',
                    images: [
                        'product/mica.jpg',
                        'product/mica2.jpeg',
                        'product/mica3.jpeg',
                        'product/mica4.jpeg',
                        'product/mica5.jpeg',
                        'product/mica6.jpeg',
                    ],
                    description:
                        'Industrial mica for electrical insulation and cosmetics',
                },
                {
                    name: 'Rose Quartz',
                    images: [
                        'product/rosequartz.webp',
                        'product/rosequartz2.jpeg',
                        'product/rosequartz3.jpeg',
                        'product/rosequartz4.jpeg',
                        'product/rosequartz5.jpeg',
                        'product/rosequartz6.jpeg',
                    ],
                    description: 'Decorative and industrial quartz varieties',
                },
                {
                    name: 'Tin Ore',
                    images: [
                        'product/tin-ore.jpeg',
                        'product/tin-ore2.jpeg',
                        'product/tin-ore3.jpeg',
                        'product/tin-ore4.jpeg',
                        'product/tin-ore5.jpeg',
                        'product/tin-ore6.jpeg',
                    ],
                    description: 'Premium-grade tin ore suitable for industrial refining and export',
                },
                {
                    name: 'Bauxite / Cobalt',
                    images: [
                        'product/bauxite-cobalt1.jpg',
                        'product/bauxite-cobalt2.jpg',
                        'product/bauxite-cobalt3.jpg',
                    ],
                    description: 'High-grade bauxite and cobalt ores sourced for industrial processing and global export',
                },
            ],
        },

        precious: {
            title: 'Precious Stones',
            icon: '💎',
            description:
                'Certified precious stones with secure handling and international delivery.',
            products: [
                {
                    name: 'Ruby',
                    images: [
                        'product/ruby.jpg',
                        'product/ruby2.jpeg',
                        'product/ruby3.jpeg',
                        'product/ruby4.jpeg',
                        'product/ruby5.jpeg',
                        'product/ruby6.jpeg',
                    ],
                    description: 'Premium rubies in various cuts and grades',
                },
                {
                    name: 'Sapphire',
                    images: [
                        'product/sapphire.webp',
                        'product/sapphire2.jpeg',
                        'product/sapphire3.jpeg',
                        'product/sapphire4.jpeg',
                        'product/sapphire5.jpeg',
                        'product/sapphire6.jpeg',
                    ],
                    description: 'Blue and fancy sapphires with certification',
                },
                {
                    name: 'Emerald',
                    images: [
                        'product/emerald.jpeg',
                        'product/emerald2.jpeg',
                        'product/emerald3.jpeg',
                        'product/emerald4.jpeg',
                        'product/emerald5.jpeg',
                        'product/emerald6.jpeg',
                    ],
                    description: 'High-quality emeralds with authenticity guarantees',
                },
                {
                    name: 'Tourmaline',
                    images: [
                        'product/tourmaline.jpg',
                        'product/tourmaline2.jpeg',
                        'product/tourmaline3.jpeg',
                        'product/tourmaline4.jpeg',
                        'product/tourmaline5.jpeg',
                        'product/tourmaline6.jpeg',
                    ],
                    description: 'Multi-colored tourmaline in collector grades',
                },
                {
                    name: 'Gold',
                    images: [
                        'product/gold.jpeg',
                        'product/gold2.jpeg',
                        'product/gold3.jpeg',
                        'product/gold4.jpeg',
                        'product/gold5.jpeg',
                        'product/gold6.jpeg',
                    ],
                    description: 'Refined gold in various forms and purities',
                },
                {
                    name: 'Aquamarine',
                    images: [
                        'product/aquamarine.webp',
                        'product/aquamarine2.jpeg',
                        'product/aquamarine3.jpeg',
                        'product/aquamarine4.jpeg',
                        'product/aquamarine5.jpeg',
                        'product/aquamarine6.jpeg',
                    ],
                    description:
                        'Clear aquamarine stones for jewelry applications',
                },
            ],
        },

        agricultural: {
            title: 'Agricultural Products',
            icon: '🌾',
            description:
                'Fresh agricultural commodities sourced directly from farmers with fair trade practices.',
            products: [
                {
                    name: 'Maize',
                    images: [
                        'product/maize.jpg',
                        'product/maize2.jpeg',
                        'product/maize3.jpeg',
                        'product/maize4.jpeg',
                        'product/maize5.jpeg',
                        'product/maize6.jpeg',
                    ],
                    description:
                        'Yellow and white corn varieties for food and feed',
                },
                {
                    name: 'Cassava',
                    images: [
                        'product/cassava.webp',
                        'product/cassava2.jpeg',
                        'product/cassava3.jpeg',
                        'product/cassava4.jpeg',
                        'product/cassava5.jpeg',
                        'product/cassava6.jpeg',
                    ],
                    description:
                        'Fresh cassava roots and processed flour',
                },
                {
                    name: 'Groundnut',
                    images: [
                        'product/groundnut.jpg',
                        'product/groundnut2.jpeg',
                        'product/groundnut3.jpeg',
                        'product/groundnut4.jpeg',
                        'product/groundnut5.jpeg',
                        'product/groundnut6.jpeg',
                    ],
                    description:
                        'Premium Groundnut for oil production and consumption',
                },
                {
                    name: 'Cashew',
                    images: [
                        'product/cashew.webp',
                        'product/cashew2.jpg',
                        'product/cashew3.jpeg',
                    ],
                    description:
                        'Raw and processed cashew nuts from sustainable farms',
                },
                {
                    name: 'Cocoa',
                    images: [
                        'product/cocoa.jpg',
                        'product/cocoa2.jpeg',
                        'product/cocoa3.jpeg',
                        'product/cocoa4.jpeg',
                        'product/cocoa5.jpeg',
                        'product/cocoa6.jpeg',
                    ],
                    description:
                        'High-quality cocoa beans for chocolate production',
                },
                {
                    name: 'Sesame',
                    images: [
                        'product/sesame.jpeg',
                        'product/sesame2.jpeg',
                        'product/sesame3.jpeg',
                        'product/sesame4.jpeg',
                        'product/sesame5.jpeg',
                        'product/sesame6.jpeg',
                    ],
                    description:
                        'White and black sesame seeds for oil and food use',
                },
                {
                    name: 'Ginger/Garlic',
                    images: [
                        'product/ginger-garlic.jpg',
                        'product/ginger-garlic2.jpeg',
                        'product/ginger-garlic3.jpeg',
                        'product/ginger-garlic4.jpeg',
                        'product/ginger-garlic5.jpeg',
                        'product/ginger-garlic6.jpeg',
                    ],
                    description:
                        'Fresh spices and aromatics for global markets',
                },
                {
                    name: 'Nut (Pumpkin Seed, Kola Nut, Walnut, e.t.c)',
                    images: [
                        'product/nut-mix.jpeg',
                        'product/nut-mix2.jpg',
                        'product/nut-mix3.jpg',
                        'product/nut-mix4.jpg',
                        'product/nut-mix5.jpeg',
                        'product/nut-mix6.jpg',
                        'product/nut-mix7.jpg',
                        'product/nut-mix8.jpg',
                        'product/nut-mix9.png',
                        'product/nut-mix11.jpg',
                        'product/nut-mix12.jpg',
                        'product/nut-mix13.jpg',
                    ],
                    description: 'High-quality edible nuts sourced for global consumption and processing',
                },
                {
                    name: 'Soya Beans',
                    images: [
                        'product/soya-beans1.jpg',
                        'product/soya-beans2.jpg',
                        'product/soya-beans3.jpeg',
                        'product/soya-beans4.jpeg',
                        'product/soya-beans5.jpeg',
                        'product/soya-beans6.jpeg',
                    ],
                    description: 'Clean, export-quality soya beans for food, feed, and oil production',
                },
                {
                    name: 'Black Pepper',
                    images: [
                        'product/black-pepper1.jpg',
                        'product/black-pepper2.jpg',
                        'product/black-pepper3.jpeg',
                    ],
                    description: 'Aromatic black pepper cultivated for culinary and commercial export',
                },
                {
                    name: 'Moringa / Aloe Vera',
                    images: [
                        'product/moringa-aloe1.jpg',
                        'product/moringa-aloe2.jpg',
                        'product/moringa-aloe3.jpg',
                        'product/moringa-aloe4.jpg',
                        'product/moringa-aloe5.jpeg',
                        'product/moringa-aloe6.jpeg',
                    ],
                    description: 'Natural moringa and aloe vera products for wellness and industrial uses',
                },
                {
                    name: 'Hibiscus',
                    images: [
                        'product/hibiscus1.jpg',
                        'product/hibiscus2.jpg',
                        'product/hibiscus3.jpg',
                    ],
                    description: 'Dried hibiscus flowers processed for tea, beverages, and herbal export',
                },
                {
                    name: 'Beans / Lentils',
                    images: [
                        'product/beans-lentils1.jpg',
                        'product/beans-lentils2.jpg',
                        'product/beans-lentils3.jpg',
                        'product/beans-lentils4.jpg',
                        'product/beans-lentils5.jpg',
                        'product/beans-lentils6.jpg',
                        'product/beans-lentils7.jpg',
                    ],
                    description: 'Clean, export-quality beans and lentils suitable for food production and bulk supply',
                },
            ],
        },
    };

    /* ---------------- UI ---------------- */

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        Our Products
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover our comprehensive range of commodities, each sourced with the highest standards.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-gray-100 p-1 rounded-lg flex">
                        {Object.entries(productCategories).map(([key, cat]) => {
                            const k = key as ProductCategoryKey;
                            return (
                                <button
                                    key={k}
                                    onClick={() => {
                                        setActiveCategory(k);
                                        history.replaceState(null, '', `#${k}`);
                                    }}
                                    className={`px-6 py-3 rounded-md font-medium ${
                                        activeCategory === k
                                            ? 'bg-white text-emerald-600 shadow-sm'
                                            : 'text-gray-600 hover:text-emerald-600'
                                    }`}
                                >
                                    <span className="mr-2">{cat.icon}</span>
                                    {cat.title}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productCategories[activeCategory].products.map((product, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedProduct(product)}
                            className="cursor-pointer bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                {product.name}
                            </h3>

                            <div className="relative w-full h-40 mb-4">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            {/*<motion.img*/}
                            {/*    key={index}*/}
                            {/*    src={product.images[1]}*/}
                            {/*    className="w-full h-40 object-cover absolute inset-0"*/}
                            {/*    initial={{ opacity: 0 }}*/}
                            {/*    animate={{ opacity: 1 }}*/}
                            {/*    exit={{ opacity: 0 }}*/}
                            {/*    transition={{ duration: 0.3 }}*/}
                            {/*/>*/}

                            {/*<ProductImageSlider images={product.images} />*/}

                            <p className="text-gray-600 text-sm mt-3">
                                {product.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            {/* MODAL */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl p-6 max-w-4xl w-full relative">

                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
                            onClick={() => setSelectedProduct(null)}
                        >
                            ✕
                        </button>

                        <h2 className="text-xl font-bold mb-4 text-gray-900">
                            {selectedProduct.name}
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {selectedProduct.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    className="w-full h-52 object-cover rounded-lg shadow"
                                />
                            ))}
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
};

export default ProductsPage;
