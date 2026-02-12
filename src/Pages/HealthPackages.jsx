import React, { useState, useEffect } from 'react';
import { Filter, ChevronDown, Search, CheckCircle2, SlidersHorizontal, ArrowUpDown, Activity, Crown, Sun, Zap, Star, UserCheck, ClipboardList, Heart, Droplets, Thermometer } from 'lucide-react';
import BookAppointment from '../Components/bookingModal';
import HeroModal from '../Components/HeroModal';

const HealthPackages = () => {
    const [sortBy, setSortBy] = useState('recommended');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [selectedTests, setSelectedTests] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Mock Data
    const packages = [
        {
            id: 0,
            title: "50% Off – Full Body Health Check",
            testCount: "60+",
            tests: ["CBC", "Fasting & PP Blood Sugar", "Lipid Profile", "Liver Function", "Kidney Function", "Thyroid", "ECG", "Urine Routine"],
            price: 1199,
            originalPrice: 2399,
            discount: "50% off",
            tags: ["Premium Health Package", "Limited Time Offer"],
            category: "Full Body",
            color: "bg-blue-50 text-blue-700 border-blue-100",
            icon: Activity
        },
        {
            id: 1,
            title: "Olir Prime Health Plan",
            testCount: 68,
            tests: ["CBC", "Diabetes Screen", "Lipid Profile", "Liver Function", "Kidney Function", "Thyroid"],
            price: 2049,
            originalPrice: 5123,
            discount: "60% off",
            tags: ["Buy 2, Get EXTRA OFF", "Best Seller"],
            category: "Full Body",
            color: "bg-purple-50 text-purple-700 border-purple-100",
            icon: Crown
        },
        {
            id: 2,
            title: "Olir Vitamin Check - Basic",
            testCount: 3,
            tests: ["Vitamin D", "Vitamin B12", "Calcium"],
            price: 2240,
            originalPrice: 5600,
            discount: "60% off",
            tags: ["Essential"],
            category: "Vitamins",
             color: "bg-blue-50 text-blue-700 border-blue-100",
             icon: Sun
        },
        {
            id: 3,
            title: "Thyroid Assessment - Basic",
            testCount: 3,
            tests: ["T3", "T4", "TSH"],
            price: 911,
            originalPrice: 2278,
            discount: "60% off",
            tags: ["Top Selling"],
            category: "Thyroid",
             color: "bg-teal-50 text-teal-700 border-teal-100",
             icon: Zap
        },
        {
            id: 4,
            title: "Olir Superior Health Plan",
            testCount: 89,
            tests: ["Complete Hemogram", "Iron Deficiency", "Liver Profile", "Lipid Profile", "Renal Profile", "Thyroid", "Diabetes"],
            price: 3249,
            originalPrice: 9283,
            discount: "65% off",
            tags: ["Includes FREE Vitamin D Test"],
            category: "Full Body",
             color: "bg-rose-50 text-rose-700 border-rose-100",
             icon: Star
        },
        {
            id: 5,
            title: "Olir Basic Full Body Check",
            testCount: 8,
            tests: ["CBC", "FBS", "Cholesterol", "Creatinine"],
            price: 770,
            originalPrice: 2200,
            discount: "65% off",
            tags: ["Budget Friendly"],
            category: "Full Body",
             color: "bg-indigo-50 text-indigo-700 border-indigo-100",
             icon: UserCheck
        },
        {
            id: 6,
            title: "Annual Health Check-Up",
            testCount: 88,
            tests: ["Comprehensive Screen", "Organ Function", "Vitamin Profile"],
            price: 2449,
            originalPrice: 6123,
            discount: "60% off",
            tags: ["Recommended"],
            category: "Full Body",
             color: "bg-amber-50 text-amber-700 border-amber-100",
             icon: ClipboardList
        },
        {
            id: 7,
            title: "Full Body Checkup Female - Advance",
            testCount: 97,
            tests: ["Women Specific Hormones", "Iron Studies", "Bone Health", "Complete Organ Function"],
            price: 5999,
            originalPrice: 17140,
            discount: "65% off",
            tags: ["For Women"],
            category: "Women's Health",
             color: "bg-pink-50 text-pink-700 border-pink-100",
             icon: Heart
        },
        {
            id: 8,
            title: "Kidney Check - Essential",
            testCount: 63,
            tests: ["Urea", "Creatinine", "Uric Acid", "Electrolytes", "Urine Routine"],
            price: 1610,
            originalPrice: 4026,
            discount: "60% off",
            tags: ["Organ Specific"],
            category: "Kidney",
             color: "bg-cyan-50 text-cyan-700 border-cyan-100",
             icon: Droplets
        },
        {
            id: 9,
            title: "Fever Panel - Basic",
            testCount: 53,
            tests: ["CBC", "ESR", "Malaria", "Typhoid", "Urine Analysis"],
            price: 1500,
            originalPrice: 3000,
            discount: "50% off",
            tags: ["Seasonal"],
            category: "Fever",
             color: "bg-orange-50 text-orange-700 border-orange-100",
             icon: Thermometer
        }
    ];

    const categories = ["All", "Full Body", "Women's Health", "Vitamins", "Thyroid", "Kidney", "Fever"];
    const popularTests = ["CBC", "HbA1c", "Thyroid", "Lipid Profile", "Liver Function", "Vitamin D", "Diabetes Screen"];

    const toggleTest = (test) => {
        setSelectedTests(prev => 
            prev.includes(test) ? prev.filter(t => t !== test) : [...prev, test]
        );
    };

    const filteredPackages = packages.filter(pkg => {
        const matchesCategory = selectedCategory === 'All' || pkg.category === selectedCategory;
        const matchesTests = selectedTests.length === 0 || 
            selectedTests.some(test => 
                pkg.tests.some(t => t.toLowerCase().includes(test.toLowerCase()))
            );
        return matchesCategory && matchesTests;
    });

    const sortedPackages = [...filteredPackages].sort((a, b) => {
        switch (sortBy) {
            case 'priceLow': return a.price - b.price;
            case 'priceHigh': return b.price - a.price;
            case 'discount': return parseInt(b.discount) - parseInt(a.discount);
            case 'tests': return b.testCount - a.testCount;
            default: return 0;
        }
    });

    return (
        <div className="min-h-screen bg-gray-50 font-sans">

            <div className="max-w-7xl mx-auto px-4 pt-28 pb-4">
                <h1 className="text-3xl font-bold text-[#0B3D4C]">Health Packages</h1>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 relative">
                
                {/* Mobile Filter Toggle */}
                <div className="lg:hidden mb-4 flex justify-between items-center">
                    <button 
                        onClick={() => setShowMobileFilters(!showMobileFilters)}
                        className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-gray-700 font-medium"
                    >
                        <SlidersHorizontal size={18} /> Filters
                    </button>
                     <div className="text-gray-600 font-medium">{filteredPackages.length} Packages</div>
                </div>

                {/* Sidebar Filters */}
                <div className={`lg:w-1/4 flex-shrink-0 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-gray-800">Filters</h2>
                            <button 
                                onClick={() => setSelectedCategory('All')} 
                                className="text-xs text-blue-600 font-semibold hover:underline"
                            >
                                Clear All
                            </button>
                        </div>

                        {/* Categories */}
                        <div className="mb-8">
                            <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Categories</h3>
                            <div className="space-y-2">
                                {categories.map(cat => (
                                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedCategory === cat ? 'bg-teal-500 border-teal-500' : 'border-gray-300 group-hover:border-teal-400'}`}>
                                            {selectedCategory === cat && <CheckCircle2 size={14} className="text-white" />}
                                        </div>
                                        <input 
                                            type="radio" 
                                            name="category" 
                                            className="hidden" 
                                            checked={selectedCategory === cat} 
                                            onChange={() => setSelectedCategory(cat)} 
                                        />
                                        <span className={`text-sm ${selectedCategory === cat ? 'text-teal-700 font-semibold' : 'text-gray-600'}`}>{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                         {/* Common Tests Filter */}
                         <div>
                            <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Must Have Tests</h3>
                            <div className="space-y-2">
                                {popularTests.map(test => (
                                    <label key={test} className="flex items-center gap-3 cursor-pointer group" onClick={() => toggleTest(test)}>
                                         <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                                            selectedTests.includes(test) 
                                                ? 'bg-teal-500 border-teal-500' 
                                                : 'border-gray-300 group-hover:border-teal-400'
                                         }`}>
                                            {selectedTests.includes(test) && (
                                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                         </div>
                                        <span className={`text-sm ${selectedTests.includes(test) ? 'text-teal-700 font-medium' : 'text-gray-600'}`}>{test}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:w-3/4 flex-grow">
                    
                    {/* Toolbar */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100 gap-4">
                        <h2 className="text-xl font-bold text-gray-800">
                            Health Packages <span className="text-gray-400 font-normal">({sortedPackages.length})</span>
                        </h2>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Sort By:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer outline-none"
                            >
                                <option value="recommended">Popularity</option>
                                <option value="priceLow">Price: Low to High</option>
                                <option value="priceHigh">Price: High to Low</option>
                                <option value="discount">Highest Discount</option>
                                <option value="tests">Most Tests</option>
                            </select>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {sortedPackages.map(pkg => (
                            <div key={pkg.id} onClick={() => setSelectedPackage({
                                title: pkg.title,
                                price: pkg.price,
                                originalPrice: pkg.originalPrice,
                                discount: pkg.discount,
                                tag: pkg.tags[0],
                                features: pkg.tests,
                                description: `Includes ${pkg.testCount} tests.`
                            })} className={`${pkg.category === "Women's Health" ? 'bg-pink-50 border-pink-100' : 'bg-white border-gray-100'} rounded-2xl border p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer`}>
                                
                                {/* Header / Icon Area */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pkg.color}`}>
                                        <pkg.icon className="h-6 w-6" />
                                    </div>
                                    {pkg.tags[0] && (
                                        <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                                            {pkg.tags[0]}
                                        </span>
                                    )}
                                </div>

                                {/* Title & Meta */}
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-gray-800 leading-tight mb-2 group-hover:text-teal-600 transition-colors">
                                        {pkg.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 font-medium bg-gray-50 inline-block px-2 py-1 rounded">
                                        Includes {pkg.testCount} Tests
                                    </p>
                                </div>

                                {/* Included Tests Preview */}
                                <div className="mb-6 flex-grow">
                                    <ul className="space-y-1">
                                        {pkg.tests.slice(0, 3).map((t, i) => (
                                            <li key={i} className="text-xs text-gray-500 flex items-center gap-1.5">
                                                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                                                {t}
                                            </li>
                                        ))}
                                        {pkg.tests.length > 3 && (
                                            <li className="text-xs text-blue-500 font-medium pl-2.5">
                                                + {pkg.tests.length - 3} more
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                {/* Pricing & Action */}
                                <div className="mt-auto pt-4 border-t border-gray-50">
                                    <div className="flex justify-between items-end mb-3">
                                        <div>
                                            <div className="flex items-center gap-2 mb-0.5">
                                                <span className="text-lg font-bold text-gray-900">₹{pkg.price}</span>
                                                <span className="text-xs text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-[pulse-glow_2s_ease-in-out_infinite]">{pkg.discount}</span>
                                            </div>
                                            <span className="text-xs text-gray-400 line-through">₹{pkg.originalPrice}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <button 
                                            onClick={() => setSelectedPackage({
                                                title: pkg.title,
                                                price: pkg.price,
                                                originalPrice: pkg.originalPrice,
                                                discount: pkg.discount,
                                                tag: pkg.tags[0],
                                                features: pkg.tests, // Mapping tests to features for modal
                                                description: `Includes ${pkg.testCount} tests.`
                                            })}
                                            className="w-full py-2.5 rounded-lg bg-[#0B3D4C] text-white text-sm font-semibold hover:bg-[#092e3a] transition-colors shadow-md hover:shadow-lg"
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Booking Modal */}
            <HeroModal 
                isOpen={!!selectedPackage} 
                onClose={() => setSelectedPackage(null)} 
                packageData={selectedPackage}
            />
            
            <div className="px-4 pb-8">
                <BookAppointment isInline={true} />
            </div>

        </div>
    );
};

export default HealthPackages;
