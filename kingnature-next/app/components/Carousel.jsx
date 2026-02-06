'use client';

import { useState, useEffect, useRef } from 'react';

const products = [
    { id: 1, name: 'Magnesium Vida', image: '/webp/Magnesium.webp' },
    { id: 2, name: 'MSM Vida', image: '/webp/msm.webp' },
    { id: 3, name: 'Omega-3 Vida', image: '/webp/omega3.webp' },
    { id: 4, name: 'Oregano Vida', image: '/webp/oregano.webp' },
    { id: 5, name: 'Probiotic Vida', image: '/webp/probiotic.webp' },
    { id: 6, name: 'Q10 Vida', image: '/webp/q10.webp' },
    { id: 7, name: 'Relax Vida', image: '/webp/relax.webp' },
    { id: 8, name: 'Vino Vida', image: '/webp/vino.webp' },
    { id: 9, name: 'Vitamin K2 Vida', image: '/webp/vitamin.webp' },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const trackRef = useRef(null);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev >= products.length - 3 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index) => {
        const maxIndex = products.length - 3;
        setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    };

    const nextSlide = () => {
        setIsAutoPlaying(false);
        goToSlide(currentIndex >= products.length - 3 ? 0 : currentIndex + 1);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        goToSlide(currentIndex <= 0 ? products.length - 3 : currentIndex - 1);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/5 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/5 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto overflow-hidden rounded-2xl">
                <div
                    ref={trackRef}
                    className="flex gap-4 px-6 py-8 transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 296}px)` }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex-shrink-0 w-[280px] flex justify-center items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="max-w-full max-h-80 object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all duration-200 z-10"
                    aria-label="Previous"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all duration-200 z-10"
                    aria-label="Next"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsAutoPlaying(false);
                            goToSlide(index * 3);
                            setTimeout(() => setIsAutoPlaying(true), 5000);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${Math.floor(currentIndex / 3) === index
                                ? 'bg-primary scale-125'
                                : 'bg-gray-300 hover:bg-primary/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
