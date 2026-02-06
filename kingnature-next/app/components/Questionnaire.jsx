'use client';

import { useState } from 'react';
import { HealthIcons, GenderIcons, YesNoIcons, ExerciseIcons, NutritionIcons } from './Icons';

// Health categories data
const healthCategories = [
    { id: 'erkaeltung', label: 'Erkältung / Infekt', Icon: HealthIcons.erkaeltung },
    { id: 'gelenke', label: 'Gelenke & Knochen', Icon: HealthIcons.gelenke },
    { id: 'haut', label: 'Haut & Haar', Icon: HealthIcons.haut },
    { id: 'herz', label: 'Herz-Kreislauf', Icon: HealthIcons.herz },
    { id: 'immun', label: 'Immunsystem', Icon: HealthIcons.immun },
    { id: 'leistung', label: 'Leistungsfähigkeit', Icon: HealthIcons.leistung },
    { id: 'muedigkeit', label: 'Müdigkeit / Energie', Icon: HealthIcons.muedigkeit },
    { id: 'stress', label: 'Stress', Icon: HealthIcons.stress },
    { id: 'longevity', label: 'Longevity', Icon: HealthIcons.longevity },
    { id: 'schmerzen', label: 'Schmerzen', Icon: HealthIcons.schmerzen },
    { id: 'gewicht', label: 'Gewicht', Icon: HealthIcons.gewicht },
    { id: 'verdauung', label: 'Verdauung', Icon: HealthIcons.verdauung },
];

const genderOptions = [
    { id: 'male', label: 'Männlich', Icon: GenderIcons.male },
    { id: 'female', label: 'Weiblich', Icon: GenderIcons.female },
    { id: 'diverse', label: 'Divers', Icon: GenderIcons.diverse },
];

const allergyOptions = [
    { id: 'fisch', label: 'Fisch' },
    { id: 'meeresfruechte', label: 'Meeresfrüchte' },
    { id: 'milch', label: 'Milchprodukte' },
    { id: 'soja', label: 'Soja' },
    { id: 'gluten', label: 'Gluten' },
    { id: 'andere', label: 'Andere' },
];

const medicationOptions = [
    { id: 'morphium', label: 'Schmerzmittel mit Morphium', wide: true },
    { id: 'saeurehemmer', label: 'Säurehemmer wie Pantoprazol oder Ondansetron', wide: true },
    { id: 'antiepileptika', label: 'Antiepileptika wie Clobazam (Frisium)', wide: true },
    { id: 'risperidon', label: 'Risperidon (Risperdal)', wide: false },
    { id: 'blutverduenner', label: 'Blutverdünner', wide: false },
    { id: 'statine', label: 'Statine (Cholesterinsenker)', wide: true },
    { id: 'antidepressiva', label: 'Antidepressiva', wide: false },
    { id: 'andere', label: 'Andere', wide: false },
];

const exerciseOptions = [
    { id: 'frequent', label: '3-5 mal in der Woche', Icon: ExerciseIcons.frequent },
    { id: 'moderate', label: '1-2 mal in der Woche', Icon: ExerciseIcons.moderate },
    { id: 'rarely', label: 'Selten bis nie', Icon: ExerciseIcons.rarely },
];

const nutritionOptions = [
    { id: 'balanced', label: 'Ausgewogen', Icon: NutritionIcons.balanced },
    { id: 'vegetarian', label: 'Vegetarisch', Icon: NutritionIcons.vegetarian },
    { id: 'vegan', label: 'Vegan', Icon: NutritionIcons.vegan },
    { id: 'lowCarb', label: 'Low Carb', Icon: NutritionIcons.lowCarb },
    { id: 'unbalanced', label: 'Eher unausgewogen', Icon: NutritionIcons.unbalanced },
];

// Product data
const products = {
    magnesium: {
        name: 'Magnesium Vida',
        image: '/webp/Magnesium.webp',
        description: 'Nahrungsergänzungsmittel mit Magnesium-Taurat, Magnesium-Chlorid, Magnesium-Malat und Magnesium-Carbonat für Muskeln, Nerven und Energie.'
    },
    msm: {
        name: 'MSM Vida',
        image: '/webp/msm.webp',
        description: 'Nahrungsergänzungsmittel mit MSM, Glucosamin, Chondroitin, Vitamin E und Mangan für gesunde Gelenke und Knorpel.'
    },
    omega3: {
        name: 'Omega-3 Vida',
        image: '/webp/omega3.webp',
        description: 'Nahrungsergänzungsmittel mit Omega-3 Fettsäuren aus Fischöl und Astaxanthin für Herz, Gehirn und Augen.'
    },
    oregano: {
        name: 'Oregano Vida',
        image: '/webp/oregano.webp',
        description: 'Nahrungsergänzungsmittel mit Oregano, Thymian, Zink und Vitamin D3 zur Unterstützung des Immunsystems.'
    },
    probiotic: {
        name: 'Probiotic Vida',
        image: '/webp/probiotic.webp',
        description: 'Nahrungsergänzungsmittel mit 13 verschiedenen Kulturen von Milchsäurebakterien und präbiotischen Zusätzen für eine gesunde Darmflora.'
    },
    q10: {
        name: 'Q10 Vida',
        image: '/webp/q10.webp',
        description: 'Nahrungsergänzungsmittel mit Coenzym Q10 aus biofermentativer Produktion für Energie und Zellschutz.'
    },
    relax: {
        name: 'Relax Vida',
        image: '/webp/relax.webp',
        description: 'Nahrungsergänzungsmittel mit Schlafbeerenwurzelpulver, L-Tryptophan, hydrolisiertem Proteinpulver und Biotin für Entspannung und erholsamen Schlaf.'
    },
    vino: {
        name: 'Vino Vida',
        image: '/webp/vino.webp',
        description: 'Nahrungsergänzungsmittel mit Traubenkern-Extrakt und Vitamin C aus Acerola für antioxidativen Schutz und Langlebigkeit.'
    },
    vitamin: {
        name: 'Vitamin K2 Vida',
        image: '/webp/vitamin.webp',
        description: 'Nahrungsergänzungsmittel mit fermentativ gewonnenem Vitamin K2 (Menachinon-7) für Knochen und Blutgerinnung.'
    }
};

// Recommendations mapping
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

export default function Questionnaire() {
    const [step, setStep] = useState(1);
    const [responses, setResponses] = useState({
        healthConcern: null,
        gender: null,
        hasAllergies: null,
        allergies: [],
        hasMedications: null,
        medications: [],
        exercise: null,
        nutrition: null,
    });
    const [showAllergyDetails, setShowAllergyDetails] = useState(false);
    const [showMedicationDetails, setShowMedicationDetails] = useState(false);
    const [recommendedProduct, setRecommendedProduct] = useState(null);

    const totalSteps = 6;
    const progress = (step / totalSteps) * 100;

    const handleHealthSelect = (id) => {
        setResponses({ ...responses, healthConcern: id });
        setTimeout(() => setStep(2), 300);
    };

    const handleGenderSelect = (id) => {
        setResponses({ ...responses, gender: id });
        setTimeout(() => setStep(3), 300);
    };

    const handleAllergyYesNo = (hasAllergies) => {
        if (hasAllergies) {
            setShowAllergyDetails(true);
        } else {
            setResponses({ ...responses, hasAllergies: false, allergies: [] });
            setTimeout(() => setStep(4), 300);
        }
    };

    const handleAllergyToggle = (id) => {
        const newAllergies = responses.allergies.includes(id)
            ? responses.allergies.filter((a) => a !== id)
            : [...responses.allergies, id];
        setResponses({ ...responses, allergies: newAllergies, hasAllergies: true });
    };

    const handleAllergyContinue = () => {
        setStep(4);
        setShowAllergyDetails(false);
    };

    const handleMedicationYesNo = (hasMedications) => {
        if (hasMedications) {
            setShowMedicationDetails(true);
        } else {
            setResponses({ ...responses, hasMedications: false, medications: [] });
            setTimeout(() => setStep(5), 300);
        }
    };

    const handleMedicationToggle = (id) => {
        const newMedications = responses.medications.includes(id)
            ? responses.medications.filter((m) => m !== id)
            : [...responses.medications, id];
        setResponses({ ...responses, medications: newMedications, hasMedications: true });
    };

    const handleMedicationContinue = () => {
        setStep(5);
        setShowMedicationDetails(false);
    };

    const handleExerciseSelect = (id) => {
        setResponses({ ...responses, exercise: id });
        setTimeout(() => setStep(6), 300);
    };

    const handleNutritionSelect = (id) => {
        setResponses({ ...responses, nutrition: id });
        calculateRecommendation(id);
    };

    const calculateRecommendation = (nutrition) => {
        const concern = responses.healthConcern;
        let possibleProducts = [...(recommendations[concern] || ['magnesium'])];

        // Filter based on allergies
        if (responses.hasAllergies) {
            if (responses.allergies.includes('fisch') || responses.allergies.includes('meeresfruechte')) {
                possibleProducts = possibleProducts.filter((p) => p !== 'omega3');
            }
            if (responses.allergies.includes('milch')) {
                possibleProducts = possibleProducts.filter((p) => p !== 'probiotic');
            }
        }

        // Adjust for exercise
        if (responses.exercise === 'frequent') {
            if (possibleProducts.includes('q10')) {
                setRecommendedProduct(products.q10);
                setTimeout(() => setStep(7), 300);
                return;
            }
            if (possibleProducts.includes('magnesium')) {
                setRecommendedProduct(products.magnesium);
                setTimeout(() => setStep(7), 300);
                return;
            }
        }

        // Adjust for nutrition
        if (nutrition === 'vegan' || nutrition === 'vegetarian') {
            if (possibleProducts.includes('vitamin')) {
                setRecommendedProduct(products.vitamin);
                setTimeout(() => setStep(7), 300);
                return;
            }
        }

        const productKey = possibleProducts[0] || 'magnesium';
        setRecommendedProduct(products[productKey]);
        setTimeout(() => setStep(7), 300);
    };

    const handleRestart = () => {
        setStep(1);
        setResponses({
            healthConcern: null,
            gender: null,
            hasAllergies: null,
            allergies: [],
            hasMedications: null,
            medications: [],
            exercise: null,
            nutrition: null,
        });
        setShowAllergyDetails(false);
        setShowMedicationDetails(false);
        setRecommendedProduct(null);
    };

    const handlePreorder = () => {
        alert('Vielen Dank für dein Interesse! Die Vorbestellung ist bald verfügbar.');
    };

    return (
        <section className="py-8 md:py-16 px-4 md:px-6 min-h-screen flex items-start justify-center" id="questionnaire">
            <div className="max-w-4xl w-full bg-white rounded-2xl p-4 md:p-8 shadow-xl">
                {/* Progress Bar */}
                {step <= 6 && (
                    <div className="mb-8">
                        <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-2">
                            Schritt {step} von {totalSteps}
                        </p>
                    </div>
                )}

                {/* Step 1: Health Concerns */}
                {step === 1 && (
                    <div className="animate-fadeIn">
                        <h2 className="text-2xl font-semibold text-center mb-8">
                            Wo wünschst du dir am dringendsten eine Veränderung?
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                            {healthCategories.map(({ id, label, Icon }) => (
                                <button
                                    key={id}
                                    onClick={() => handleHealthSelect(id)}
                                    className={`flex flex-col items-center justify-center p-4 min-h-[120px] bg-gray-50 border-2 rounded-xl transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:-translate-y-1 hover:shadow-md ${responses.healthConcern === id ? 'border-primary bg-primary/10' : 'border-gray-200'
                                        }`}
                                >
                                    <div className="w-12 h-12 text-primary mb-2">
                                        <Icon />
                                    </div>
                                    <span className="text-sm font-medium text-center">{label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Gender */}
                {step === 2 && (
                    <div className="animate-fadeIn">
                        <h2 className="text-2xl font-semibold text-center mb-8">
                            Welches Geschlecht hast du?
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
                            {genderOptions.map(({ id, label, Icon }) => (
                                <button
                                    key={id}
                                    onClick={() => handleGenderSelect(id)}
                                    className={`flex flex-col items-center justify-center p-6 min-h-[160px] bg-gray-50 border-2 rounded-xl transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:-translate-y-1 hover:shadow-md ${responses.gender === id ? 'border-primary bg-primary/10' : 'border-gray-200'
                                        }`}
                                >
                                    <div className="w-16 h-16 text-primary mb-3">
                                        <Icon />
                                    </div>
                                    <span className="font-medium">{label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 3: Allergies */}
                {step === 3 && (
                    <div className="animate-fadeIn">
                        <h2 className="text-2xl font-semibold text-center mb-8">
                            Hast du Allergien oder Unverträglichkeiten?
                        </h2>

                        {!showAllergyDetails ? (
                            <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
                                <button
                                    onClick={() => handleAllergyYesNo(true)}
                                    className="flex flex-col items-center justify-center p-6 min-h-[160px] bg-gray-50 border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="w-16 h-16 text-primary mb-3">
                                        <YesNoIcons.yes />
                                    </div>
                                    <span className="font-medium">Ja</span>
                                </button>
                                <button
                                    onClick={() => handleAllergyYesNo(false)}
                                    className="flex flex-col items-center justify-center p-6 min-h-[160px] bg-gray-50 border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="w-16 h-16 text-primary mb-3">
                                        <YesNoIcons.no />
                                    </div>
                                    <span className="font-medium">Nein</span>
                                </button>
                            </div>
                        ) : (
                            <div className="animate-fadeIn">
                                <h3 className="text-xl font-medium text-center mb-2">Welche Allergien hast du?</h3>
                                <p className="text-gray-500 text-center mb-6">Wähle alle zutreffenden aus</p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
                                    {allergyOptions.map(({ id, label }) => (
                                        <button
                                            key={id}
                                            onClick={() => handleAllergyToggle(id)}
                                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${responses.allergies.includes(id)
                                                ? 'border-primary bg-primary/10'
                                                : 'border-gray-200 bg-gray-50 hover:border-primary'
                                                }`}
                                        >
                                            <span className="font-medium">{label}</span>
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={handleAllergyContinue}
                                    className="block w-full max-w-xs mx-auto py-3 px-6 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                                >
                                    Weiter
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Step 4: Medications */}
                {step === 4 && (
                    <div className="animate-fadeIn">
                        <h2 className="text-2xl font-semibold text-center mb-8">
                            Nimmst du regelmäßig Medikamente?
                        </h2>

                        {!showMedicationDetails ? (
                            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                                <button
                                    onClick={() => handleMedicationYesNo(true)}
                                    className="flex flex-col items-center justify-center p-6 min-h-[160px] bg-gray-50 border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="w-16 h-16 text-primary mb-3">
                                        <YesNoIcons.yes />
                                    </div>
                                    <span className="font-medium">Ja</span>
                                </button>
                                <button
                                    onClick={() => handleMedicationYesNo(false)}
                                    className="flex flex-col items-center justify-center p-6 min-h-[160px] bg-gray-50 border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="w-16 h-16 text-primary mb-3">
                                        <YesNoIcons.no />
                                    </div>
                                    <span className="font-medium">Nein</span>
                                </button>
                            </div>
                        ) : (
                            <div className="animate-fadeIn">
                                <h3 className="text-xl font-medium text-center mb-2">Welche Medikamente?</h3>
                                <p className="text-gray-500 text-center mb-6">Wähle alle zutreffenden aus</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
                                    {medicationOptions.map(({ id, label, wide }) => (
                                        <button
                                            key={id}
                                            onClick={() => handleMedicationToggle(id)}
                                            className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${wide ? 'md:col-span-2' : ''
                                                } ${responses.medications.includes(id)
                                                    ? 'border-primary bg-primary/10'
                                                    : 'border-gray-200 bg-gray-50 hover:border-primary'
                                                }`}
                                        >
                                            <span className="font-medium">{label}</span>
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={handleMedicationContinue}
                                    className="block w-full max-w-xs mx-auto py-3 px-6 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                                >
                                    Weiter
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Step 5: Exercise */}
                {step === 5 && (
                    <div className="animate-fadeIn">
                        <h2 className="text-2xl font-semibold text-center mb-8">
                            Wie oft treibst du Sport?
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
                            {exerciseOptions.map(({ id, label, Icon }) => (
                                <button
                                    key={id}
                                    onClick={() => handleExerciseSelect(id)}
                                    className={`flex flex-col items-center justify-center p-6 min-h-[160px] bg-gray-50 border-2 rounded-xl transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:-translate-y-1 hover:shadow-md ${responses.exercise === id ? 'border-primary bg-primary/10' : 'border-gray-200'
                                        }`}
                                >
                                    <div className="w-16 h-16 text-primary mb-3">
                                        <Icon />
                                    </div>
                                    <span className="font-medium text-center text-sm">{label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 6: Nutrition */}
                {step === 6 && (
                    <div className="animate-fadeIn">
                        <h2 className="text-2xl font-semibold text-center mb-8">
                            Wie würdest du deine Ernährung beschreiben?
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto">
                            {nutritionOptions.map(({ id, label, Icon }) => (
                                <button
                                    key={id}
                                    onClick={() => handleNutritionSelect(id)}
                                    className={`flex flex-col items-center justify-center p-4 min-h-[140px] bg-gray-50 border-2 rounded-xl transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:-translate-y-1 hover:shadow-md ${responses.nutrition === id ? 'border-primary bg-primary/10' : 'border-gray-200'
                                        }`}
                                >
                                    <div className="w-14 h-14 text-primary mb-2">
                                        <Icon />
                                    </div>
                                    <span className="font-medium text-center text-sm">{label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 7: Result */}
                {step === 7 && recommendedProduct && (
                    <div className="animate-fadeIn text-center">
                        <h2 className="text-3xl font-bold text-primary mb-2">
                            Deine persönliche Empfehlung
                        </h2>
                        <p className="text-gray-500 text-lg mb-8">
                            Basierend auf deinen Antworten empfehlen wir dir:
                        </p>

                        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg mb-8 max-w-lg mx-auto">
                            <img
                                src={recommendedProduct.image}
                                alt={recommendedProduct.name}
                                className="max-w-[280px] max-h-[320px] object-contain mx-auto mb-6 animate-float"
                            />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {recommendedProduct.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {recommendedProduct.description}
                            </p>
                        </div>

                        <button
                            onClick={handlePreorder}
                            className="inline-flex items-center gap-2 py-4 px-8 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                        >
                            <span>Vorbestellen</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button
                            onClick={handleRestart}
                            className="block mx-auto mt-6 py-2 px-6 text-gray-500 border-2 border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                        >
                            Erneut starten
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
