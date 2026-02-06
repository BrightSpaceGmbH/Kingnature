'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const products = [
    { id: 1, name: 'Vino Vida', image: '/webp/vino.webp', color: 'bg-[#722F37]' },
    { id: 2, name: 'Q10 Vida', image: '/webp/q10.webp', color: 'bg-[#E5B82A]' },
    { id: 3, name: 'MSM Vida', image: '/webp/msm.webp', color: 'bg-[#4A5568]' },
    { id: 4, name: 'Probiotic Vida', image: '/webp/probiotic.webp', color: 'bg-[#C4A962]' },
    { id: 5, name: 'Relax Vida', image: '/webp/relax.webp', color: 'bg-[#2C3E50]' },
    { id: 6, name: 'Oregano Vida', image: '/webp/oregano.webp', color: 'bg-[#2D5016]' },
    { id: 7, name: 'Vitamin K2 Vida', image: '/webp/vitamin.webp', color: 'bg-[#6B5B7F]' },
    { id: 8, name: 'Magnesium Vida', image: '/webp/Magnesium.webp', color: 'bg-[#7C7F83]' },
    { id: 9, name: 'Omega-3 Vida', image: '/webp/omega3.webp', color: 'bg-[#5B9BD5]' },
];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(3);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);

    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const goToSlide = (index) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex(index);
        setTimeout(() => setIsAnimating(false), 400);
    };

    const nextSlide = () => {
        const newIndex = (activeIndex + 1) % products.length;
        goToSlide(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (activeIndex - 1 + products.length) % products.length;
        goToSlide(newIndex);
    };

    // Handle touch/mouse drag
    const handleDragStart = (e) => {
        setIsDragging(true);
        setStartX(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX);
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        setDragOffset(currentX - startX);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        if (dragOffset > 50) { // More sensitive on mobile
            prevSlide();
        } else if (dragOffset < -50) {
            nextSlide();
        }
        setDragOffset(0);
    };

    // Calculate position and styles for each product
    const getItemStyle = (index) => {
        const diff = index - activeIndex;
        const normalizedDiff = ((diff + products.length + Math.floor(products.length / 2)) % products.length) - Math.floor(products.length / 2);

        const isCenter = normalizedDiff === 0;
        const absPos = Math.abs(normalizedDiff);

        // Scale: center = 1.3 (bigger!), decrease as we move away
        // On mobile, we might want less drastic scaling or smaller base
        const scale = isCenter ? (isMobile ? 1.1 : 1.3) : Math.max(0.5, (isMobile ? 0.9 : 0.85) - absPos * 0.1);

        // X position: tighter overlap (90px spacing for bigger images)
        // Adjust spacing for mobile
        const spacing = isMobile ? 50 : 90;
        const xOffset = normalizedDiff * spacing + (isDragging ? dragOffset * 0.3 : 0);

        // Z position: center is front, others recede more dramatically
        const zOffset = isCenter ? 150 : 50 - absPos * 40;

        // Opacity: all products fully visible
        const opacity = 1;

        // No rotation - removes the distortion effect
        return {
            transform: `translateX(${xOffset}px) translateZ(${zOffset}px) scale(${scale})`,
            opacity,
            zIndex: 20 - absPos,
            filter: isCenter ? 'none' : `blur(${Math.min(absPos * 1, 2.5)}px)`,
        };
    };

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Mountain Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/matterhornkingnature.webp"
                    alt="Swiss Mountains"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient overlay for readability - fades to body color at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f5f5f5]/40 via-50% to-[#f5f5f5]" />
            </div>

            {/* Header */}
            <header className="relative z-20 py-4 px-4 md:py-6 md:px-8">
                <div className="max-w-4xl mx-auto flex items-center justify-between px-2 md:px-4">
                    {/* Logo */}
                    <div className="h-10 w-32 md:h-12 md:w-44 relative z-50">
                        <Image
                            src="/kingnature_logo_rgb.png"
                            alt="Kingnature"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-800 z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Mobile Menu Overlay */}
                    {isMenuOpen && (
                        <div className="fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 md:hidden">
                            <a href="#questionnaire" className="text-2xl font-medium text-gray-800" onClick={() => setIsMenuOpen(false)}>Vital-Test</a>
                            <a href="#" className="text-2xl font-medium text-gray-800" onClick={() => setIsMenuOpen(false)}>Shop</a>
                            <a href="#" className="px-8 py-3 bg-[#B23E2E] text-white rounded-full font-semibold text-xl" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
                        </div>
                    )}

                    {/* Desktop Center Navigation - Pill Container */}
                    <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center bg-white/70 backdrop-blur-md rounded-full px-2 py-2 shadow-lg border border-white/50">
                        <a
                            href="#questionnaire"
                            className="px-6 py-2.5 text-gray-700 hover:text-primary hover:bg-white/80 transition-all duration-200 font-medium rounded-full"
                        >
                            Vital-Test
                        </a>
                        <a
                            href="#"
                            className="px-6 py-2.5 text-gray-700 hover:text-primary hover:bg-white/80 transition-all duration-200 font-medium rounded-full"
                        >
                            Shop
                        </a>
                    </nav>

                    {/* Desktop Contact Button */}
                    <a
                        href="#"
                        className="hidden md:block px-6 py-2.5 md:px-8 md:py-3 bg-[#B23E2E] text-white rounded-full font-semibold hover:bg-[#8f3225] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        Kontakt
                    </a>
                </div>
            </header>

            {/* Hero Content */}
            <div className="relative z-10 pt-4 pb-4 px-4 md:px-6">
                {/* Headline */}
                <div className="text-center mb-4 md:mb-8">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-2 md:mb-4 italic">
                        Mehr <span className="font-bold not-italic text-[#B23E2E]">Lebensqualität</span> für mich
                    </h1>
                    <p className="text-base md:text-xl text-gray-600 font-medium">
                        Supplements, Sportlernahrung und Naturkosmetik
                    </p>
                </div>

                {/* 3D Carousel */}
                <div
                    ref={containerRef}
                    className="relative h-[380px] md:h-[450px] max-w-6xl mx-auto"
                    style={{ perspective: '1200px' }}
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={handleDragStart}
                    onTouchMove={handleDragMove}
                    onTouchEnd={handleDragEnd}
                >
                    {/* Products Container */}
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                onClick={() => goToSlide(index)}
                                className={`absolute cursor-pointer transition-all duration-400 ease-out ${index === activeIndex ? 'drop-shadow-2xl' : 'drop-shadow-lg'
                                    }`}
                                style={getItemStyle(index)}
                            >
                                <div className="relative w-[200px] h-[310px] md:w-[260px] md:h-[400px] lg:w-[300px] lg:h-[450px]">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 200px, 300px"
                                        style={{ clipPath: 'inset(18% 5% 18% 5%)' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-white hover:scale-110 transition-all duration-200"
                        aria-label="Previous product"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 md:w-6 md:h-6">
                            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-white hover:scale-110 transition-all duration-200"
                        aria-label="Next product"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 md:w-6 md:h-6">
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col items-center mt-2 md:mt-6">
                    <a
                        href="#questionnaire"
                        className="group flex flex-col items-center gap-2 md:gap-3 text-gray-700 hover:text-[#B23E2E] transition-colors duration-300"
                    >
                        <span className="text-base md:text-xl font-medium text-center px-4">
                            Finden Sie heraus, was am besten zu Ihnen passt
                        </span>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#B23E2E] shadow-lg flex items-center justify-center group-hover:bg-[#8f3225] group-hover:scale-110 transition-all duration-300">
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6 animate-bounce">
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
