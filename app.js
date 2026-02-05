/**
 * Kingnature - Landing Page Application
 * Multi-step questionnaire with product recommendations
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============================
    // Carousel Functionality
    // ============================
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    const slides = document.querySelectorAll('.carousel-slide');
    
    let currentSlide = 0;
    let slideWidth = 296; // 280px + 16px gap
    let visibleSlides = 3;
    let autoplayInterval;
    
    // Calculate visible slides based on viewport
    function calculateVisibleSlides() {
        const containerWidth = carouselTrack.parentElement.offsetWidth;
        if (containerWidth < 480) {
            visibleSlides = 1;
            slideWidth = 196;
        } else if (containerWidth < 768) {
            visibleSlides = 2;
            slideWidth = 216;
        } else if (containerWidth < 1024) {
            visibleSlides = 3;
            slideWidth = 256;
        } else {
            visibleSlides = 3;
            slideWidth = 296;
        }
    }
    
    // Create dots
    function createDots() {
        dotsContainer.innerHTML = '';
        const totalDots = Math.ceil(slides.length / visibleSlides);
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i * visibleSlides));
            dotsContainer.appendChild(dot);
        }
    }
    
    // Update dots
    function updateDots() {
        const dots = document.querySelectorAll('.carousel-dot');
        const activeDotIndex = Math.floor(currentSlide / visibleSlides);
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeDotIndex);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        const maxSlide = slides.length - visibleSlides;
        currentSlide = Math.max(0, Math.min(index, maxSlide));
        
        gsap.to(carouselTrack, {
            x: -currentSlide * slideWidth,
            duration: 0.5,
            ease: 'power2.out'
        });
        
        updateDots();
    }
    
    // Next slide
    function nextSlide() {
        if (currentSlide >= slides.length - visibleSlides) {
            goToSlide(0);
        } else {
            goToSlide(currentSlide + 1);
        }
    }
    
    // Previous slide
    function prevSlide() {
        if (currentSlide <= 0) {
            goToSlide(slides.length - visibleSlides);
        } else {
            goToSlide(currentSlide - 1);
        }
    }
    
    // Start autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 4000);
    }
    
    // Stop autoplay
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // Initialize carousel
    function initCarousel() {
        calculateVisibleSlides();
        createDots();
        goToSlide(0);
        startAutoplay();
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        stopAutoplay();
        prevSlide();
        startAutoplay();
    });
    
    nextBtn.addEventListener('click', () => {
        stopAutoplay();
        nextSlide();
        startAutoplay();
    });
    
    // Pause on hover
    carouselTrack.addEventListener('mouseenter', stopAutoplay);
    carouselTrack.addEventListener('mouseleave', startAutoplay);
    
    // Resize handler
    window.addEventListener('resize', () => {
        calculateVisibleSlides();
        createDots();
        goToSlide(currentSlide);
    });
    
    // Initialize
    initCarousel();
    
    // ============================
    // Questionnaire Functionality
    // ============================
    const steps = document.querySelectorAll('.step');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    let currentStep = 1;
    const totalSteps = 6;
    
    // User responses
    const userResponses = {
        healthConcern: null,
        gender: null,
        hasAllergies: false,
        allergies: [],
        hasMedications: false,
        medications: [],
        exerciseFrequency: null,
        nutrition: null
    };
    
    // Product data
    const products = {
        magnesium: {
            name: 'Magnesium Vida',
            image: 'webp/Magnesium.webp',
            description: 'Nahrungsergänzungsmittel mit Magnesium-Taurat, Magnesium-Chlorid, Magnesium-Malat und Magnesium-Carbonat für Muskeln, Nerven und Energie.'
        },
        msm: {
            name: 'MSM Vida',
            image: 'webp/msm.webp',
            description: 'Nahrungsergänzungsmittel mit MSM, Glucosamin, Chondroitin, Vitamin E und Mangan für gesunde Gelenke und Knorpel.'
        },
        omega3: {
            name: 'Omega-3 Vida',
            image: 'webp/omega3.webp',
            description: 'Nahrungsergänzungsmittel mit Omega-3 Fettsäuren aus Fischöl und Astaxanthin für Herz, Gehirn und Augen.'
        },
        oregano: {
            name: 'Oregano Vida',
            image: 'webp/oregano.webp',
            description: 'Nahrungsergänzungsmittel mit Oregano, Thymian, Zink und Vitamin D3 zur Unterstützung des Immunsystems.'
        },
        probiotic: {
            name: 'Probiotic Vida',
            image: 'webp/probiotic.webp',
            description: 'Nahrungsergänzungsmittel mit 13 verschiedenen Kulturen von Milchsäurebakterien und präbiotischen Zusätzen für eine gesunde Darmflora.'
        },
        q10: {
            name: 'Q10 Vida',
            image: 'webp/q10.webp',
            description: 'Nahrungsergänzungsmittel mit Coenzym Q10 aus biofermentativer Produktion für Energie und Zellschutz.'
        },
        relax: {
            name: 'Relax Vida',
            image: 'webp/relax.webp',
            description: 'Nahrungsergänzungsmittel mit Schlafbeerenwurzelpulver, L-Tryptophan, hydrolisiertem Proteinpulver und Biotin für Entspannung und erholsamen Schlaf.'
        },
        vino: {
            name: 'Vino Vida',
            image: 'webp/vino.webp',
            description: 'Nahrungsergänzungsmittel mit Traubenkern-Extrakt und Vitamin C aus Acerola für antioxidativen Schutz und Langlebigkeit.'
        },
        vitamin: {
            name: 'Vitamin K2 Vida',
            image: 'webp/vitamin.webp',
            description: 'Nahrungsergänzungsmittel mit fermentativ gewonnenem Vitamin K2 (Menachinon-7) für Knochen und Blutgerinnung.'
        }
    };
    
    // Product recommendations based on health concerns
    const recommendations = {
        erkaeltung: ['oregano', 'vitamin'],
        gelenke: ['msm', 'omega3'],
        haut: ['omega3', 'vitamin', 'vino'],
        herz: ['omega3', 'q10', 'vino'],
        immun: ['oregano', 'probiotic', 'vitamin'],
        leistung: ['q10', 'magnesium'],
        muedigkeit: ['magnesium', 'q10'],
        stress: ['relax', 'magnesium'],
        longevity: ['vino', 'q10'],
        schmerzen: ['msm', 'magnesium'],
        gewicht: ['probiotic', 'omega3'],
        verdauung: ['probiotic', 'oregano']
    };
    
    // Update progress bar
    function updateProgress() {
        const progress = (currentStep / totalSteps) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `Schritt ${currentStep} von ${totalSteps}`;
    }
    
    // Show step with animation
    function showStep(stepNumber) {
        steps.forEach(step => step.classList.remove('active'));
        
        if (stepNumber === 'result') {
            document.getElementById('stepResult').classList.add('active');
            // Hide progress when showing result
            document.querySelector('.progress-container').style.display = 'none';
        } else {
            const targetStep = document.getElementById(`step${stepNumber}`);
            if (targetStep) {
                targetStep.classList.add('active');
                gsap.from(targetStep, {
                    opacity: 0,
                    y: 30,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            }
        }
        
        updateProgress();
    }
    
    // Go to next step
    function goToNextStep() {
        if (currentStep < totalSteps) {
            currentStep++;
            showStep(currentStep);
        } else {
            showResult();
        }
    }
    
    // Recommend product based on responses
    function getRecommendedProduct() {
        const concern = userResponses.healthConcern;
        const possibleProducts = recommendations[concern] || ['magnesium'];
        
        // Filter out products based on allergies
        let filteredProducts = [...possibleProducts];
        
        if (userResponses.hasAllergies) {
            if (userResponses.allergies.includes('fisch') || userResponses.allergies.includes('meeresfruechte')) {
                filteredProducts = filteredProducts.filter(p => p !== 'omega3');
            }
            if (userResponses.allergies.includes('milch')) {
                filteredProducts = filteredProducts.filter(p => p !== 'probiotic');
            }
        }
        
        // Adjust based on exercise and nutrition
        if (userResponses.exerciseFrequency === 'frequent') {
            // Active people may benefit more from Q10 and Magnesium
            if (filteredProducts.includes('q10')) {
                return products.q10;
            }
            if (filteredProducts.includes('magnesium')) {
                return products.magnesium;
            }
        }
        
        if (userResponses.nutrition === 'vegan' || userResponses.nutrition === 'vegetarian') {
            // Vegans may need Vitamin K2
            if (filteredProducts.includes('vitamin')) {
                return products.vitamin;
            }
        }
        
        // Return first available product
        const productKey = filteredProducts[0] || 'magnesium';
        return products[productKey];
    }
    
    // Show result
    function showResult() {
        const product = getRecommendedProduct();
        
        document.getElementById('resultImage').src = product.image;
        document.getElementById('resultImage').alt = product.name;
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;
        
        showStep('result');
        
        // Animate result
        gsap.from('.result-product', {
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            ease: 'back.out(1.2)'
        });
        
        gsap.from('.preorder-btn', {
            opacity: 0,
            y: 20,
            duration: 0.4,
            delay: 0.4,
            ease: 'power2.out'
        });
    }
    
    // Step 1: Health Concern Selection
    document.querySelectorAll('#step1 .option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove previous selection
            document.querySelectorAll('#step1 .option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            
            userResponses.healthConcern = btn.dataset.value;
            
            // Animate and go to next step
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.15,
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    setTimeout(goToNextStep, 200);
                }
            });
        });
    });
    
    // Step 2: Gender Selection
    document.querySelectorAll('#step2 .option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#step2 .option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            
            userResponses.gender = btn.dataset.value;
            
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.15,
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    setTimeout(goToNextStep, 200);
                }
            });
        });
    });
    
    // Step 3: Allergies
    const allergyYes = document.getElementById('allergyYes');
    const allergyNo = document.getElementById('allergyNo');
    const allergyDetails = document.getElementById('allergyDetails');
    const allergyContinue = document.getElementById('allergyContinue');
    
    allergyYes.addEventListener('click', () => {
        allergyYes.classList.add('selected');
        allergyNo.classList.remove('selected');
        userResponses.hasAllergies = true;
        
        // Show allergy selection
        document.querySelector('.allergy-initial').style.display = 'none';
        allergyDetails.classList.remove('hidden');
        
        gsap.from(allergyDetails, {
            opacity: 0,
            y: 20,
            duration: 0.3
        });
    });
    
    allergyNo.addEventListener('click', () => {
        allergyNo.classList.add('selected');
        allergyYes.classList.remove('selected');
        userResponses.hasAllergies = false;
        userResponses.allergies = [];
        
        gsap.to(allergyNo, {
            scale: 1.05,
            duration: 0.15,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                setTimeout(goToNextStep, 200);
            }
        });
    });
    
    // Multi-select for allergies
    document.querySelectorAll('#allergyDetails .option-btn.multi').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
            
            const value = btn.dataset.value;
            if (btn.classList.contains('selected')) {
                if (!userResponses.allergies.includes(value)) {
                    userResponses.allergies.push(value);
                }
            } else {
                userResponses.allergies = userResponses.allergies.filter(a => a !== value);
            }
        });
    });
    
    allergyContinue.addEventListener('click', goToNextStep);
    
    // Step 4: Medications
    const medicationYes = document.getElementById('medicationYes');
    const medicationNo = document.getElementById('medicationNo');
    const medicationDetails = document.getElementById('medicationDetails');
    const medicationContinue = document.getElementById('medicationContinue');
    
    medicationYes.addEventListener('click', () => {
        medicationYes.classList.add('selected');
        medicationNo.classList.remove('selected');
        userResponses.hasMedications = true;
        
        document.querySelector('.medication-initial').style.display = 'none';
        medicationDetails.classList.remove('hidden');
        
        gsap.from(medicationDetails, {
            opacity: 0,
            y: 20,
            duration: 0.3
        });
    });
    
    medicationNo.addEventListener('click', () => {
        medicationNo.classList.add('selected');
        medicationYes.classList.remove('selected');
        userResponses.hasMedications = false;
        userResponses.medications = [];
        
        gsap.to(medicationNo, {
            scale: 1.05,
            duration: 0.15,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                setTimeout(goToNextStep, 200);
            }
        });
    });
    
    // Multi-select for medications
    document.querySelectorAll('#medicationDetails .option-btn.multi').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
            
            const value = btn.dataset.value;
            if (btn.classList.contains('selected')) {
                if (!userResponses.medications.includes(value)) {
                    userResponses.medications.push(value);
                }
            } else {
                userResponses.medications = userResponses.medications.filter(m => m !== value);
            }
        });
    });
    
    medicationContinue.addEventListener('click', goToNextStep);
    
    // Step 5: Exercise
    document.querySelectorAll('#step5 .option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#step5 .option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            
            userResponses.exerciseFrequency = btn.dataset.value;
            
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.15,
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    setTimeout(goToNextStep, 200);
                }
            });
        });
    });
    
    // Step 6: Nutrition
    document.querySelectorAll('#step6 .option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#step6 .option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            
            userResponses.nutrition = btn.dataset.value;
            
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.15,
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    setTimeout(showResult, 300);
                }
            });
        });
    });
    
    // Pre-order button
    document.getElementById('preorderBtn').addEventListener('click', () => {
        alert('Vielen Dank für dein Interesse! Die Vorbestellung ist bald verfügbar.');
    });
    
    // Restart button
    document.getElementById('restartBtn').addEventListener('click', () => {
        // Reset responses
        userResponses.healthConcern = null;
        userResponses.gender = null;
        userResponses.hasAllergies = false;
        userResponses.allergies = [];
        userResponses.hasMedications = false;
        userResponses.medications = [];
        userResponses.exerciseFrequency = null;
        userResponses.nutrition = null;
        
        // Reset UI
        document.querySelectorAll('.option-btn.selected').forEach(btn => btn.classList.remove('selected'));
        
        // Reset allergy section
        document.querySelector('.allergy-initial').style.display = '';
        allergyDetails.classList.add('hidden');
        
        // Reset medication section
        document.querySelector('.medication-initial').style.display = '';
        medicationDetails.classList.add('hidden');
        
        // Show progress bar
        document.querySelector('.progress-container').style.display = '';
        
        // Go back to step 1
        currentStep = 1;
        showStep(1);
    });
    
    // Smooth scroll to questionnaire when clicking start
    document.querySelector('.carousel-section').addEventListener('click', (e) => {
        if (e.target.closest('.carousel-slide')) {
            document.getElementById('questionnaire').scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    // Initialize first step
    showStep(1);
});
