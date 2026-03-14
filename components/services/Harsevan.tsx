"use client";
import { useState } from "react";
import Topbar from "../topbar/Topbar";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Image from "next/image";
import {
  GiPhone,
  GiTalk,
  GiStarSwirl,
  GiGlobe,
  GiHearts,
  GiFamilyTree,
  GiConversation,
  GiSoundOn,
  GiSurfBoard,
  GiCarWheel,
  GiFlowerStar,
  GiCoffin,
  GiFlowerPot,
} from "react-icons/gi";
import {
  FaMapMarkerAlt,
  FaStar,
  FaQuoteLeft,
  FaPhoneAlt,
  FaClock,
  FaShieldAlt,
  FaWhatsapp,
  FaVideo,
  FaEnvelope,
  FaUsers,
  FaUserFriends,
  FaHeart,
  FaCar,
  FaSnowflake,
  FaLeaf,
} from "react-icons/fa";
import {
  MdVerified,
  MdSupportAgent,
  MdEmergency,
  MdLanguage,
  MdMessage,
  MdPhone,
  MdPhoneCallback,
  MdCall,
  MdCallEnd,
  MdLocalFlorist,
  MdAcUnit,
} from "react-icons/md";
import { PiFlowerLotus } from "react-icons/pi";
import {
  BsSuitHeartFill,
  BsChatDots,
  BsTelephone,
  BsTelephoneFill,
  BsTruck,
} from "react-icons/bs";
import { TbMessageCircle, TbPhoneCall } from "react-icons/tb";
import { RiCustomerService2Fill, RiEmotionSadLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

function HearseVanServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] =
    useState(null);
  const normalharse = "/assets/normalharse.jpeg";
  const hearseVanServices = [
    {
      id: 1,
      name: "Standard Hearse Van",
      icon: GiCarWheel,
      description:
        "Dignified transportation service for the departed with professional drivers.",
      longDescription:
        "Our standard hearse van service provides respectful and dignified transportation for your loved one. Professional drivers ensure a smooth and solemn journey with complete reverence.",
      location: "City Wide",
      price: "2,999",
      rating: 4.9,
      reviews: 210,
      image: normalharse,
      features: [
        "Professional Driver",
        "Decorated Vehicle",
        "24/7 Availability",
        "Air Conditioned",
      ],
      coordinatorName: "Ravi Sharma",
      experience: "10+ years",
      responseTime: "30 mins",
      contactNumber: "+91 98765 43210",
      whatsappNumber: "+91 98765 43210",
      alternateNumber: "+91 99887 66554",
    },
    {
      id: 2,
      name: "Premium Glass Hearse",
      icon: GiFlowerStar,
      description:
        "Luxury glass hearse van with floral decoration and respectful presentation.",
      longDescription:
        "Premium glass hearse van featuring elegant glass panels for dignified viewing. Beautifully decorated with fresh flowers and professional attendants for the final journey.",
      location: "City Wide",
      price: "4,999",
      rating: 4.8,
      reviews: 165,
      image: normalharse,
      features: [
        "Glass Viewing",
        "Floral Decoration",
        "Professional Staff",
        "Air Conditioned",
      ],
      coordinatorName: "Amit Verma",
      experience: "12+ years",
      responseTime: "20 mins",
      contactNumber: "+91 98765 43211",
      whatsappNumber: "+91 98765 43211",
      alternateNumber: "+91 99887 66553",
    },
    {
      id: 3,
      name: "Freezer Box Hearse Van",
      icon: MdAcUnit,
      description:
        "Hearse van with freezer box facility for long-distance transportation.",
      longDescription:
        "Specialized hearse van equipped with freezer box for maintaining dignity during long-distance transportation. Ideal for inter-city or inter-state transfers.",
      location: "Inter-City",
      price: "5,999",
      rating: 4.9,
      reviews: 132,
      image: normalharse,
      features: [
        "Freezer Box",
        "Long Distance Travel",
        "24/7 Service",
        "Trained Staff",
      ],
      coordinatorName: "Sanjay Gupta",
      experience: "15+ years",
      responseTime: "45 mins",
      contactNumber: "+91 98765 43212",
      whatsappNumber: "+91 98765 43212",
      alternateNumber: "+91 99887 66552",
      languages: "Hindi, English, Gujarati",
    },
    {
      id: 4,
      name: "Luxury Funeral Hearse",
      icon: GiCoffin,
      description:
        "Premium funeral hearse van for dignified final journey with elegant setup.",
      longDescription:
        "Ultimate luxury hearse van with premium interior finishes, elegant drapery, and VIP treatment. Complete with floral arrangements and ceremonial decorations.",
      location: "Premium Service",
      price: "7,999",
      rating: 4.9,
      reviews: 98,
      image: normalharse,
      features: [
        "Luxury Interior",
        "Floral Decoration",
        "Professional Driver",
        "VIP Service",
      ],
      coordinatorName: "Vikas Singh",
      experience: "8+ years",
      responseTime: "1 hour",
      contactNumber: "+91 98765 43213",
      whatsappNumber: "+91 98765 43213",
      alternateNumber: "+91 99887 66551",
      languages: "Hindi, English, Urdu",
    },
    {
      id: 5,
      name: "Tempo Traveller Hearse",
      icon: BsTruck,
      description:
        "Spacious hearse van for large families to accompany the final journey.",
      longDescription:
        "Large capacity hearse van allowing family members to accompany their loved one. Comfortable seating and dignified setup for the procession.",
      location: "Family Package",
      price: "8,999",
      rating: 4.7,
      reviews: 76,
      image: normalharse,
      features: [
        "Family Seating",
        "AC Comfort",
        "Procession Ready",
        "Professional Driver",
      ],
      coordinatorName: "Manoj Tiwari",
      experience: "9+ years",
      responseTime: "1.5 hours",
      contactNumber: "+91 98765 43214",
      whatsappNumber: "+91 98765 43214",
      alternateNumber: "+91 99887 66550",
      languages: "Hindi, English, Bhojpuri",
    },
    {
      id: 6,
      name: "Flower Decorated Hearse",
      icon: GiFlowerPot,
      description:
        "Beautifully decorated hearse van with fresh flowers and garlands.",
      longDescription:
        "Traditional hearse van adorned with fresh marigold flowers and garlands. Respectful and beautiful presentation for the final journey.",
      location: "With Decoration",
      price: "3,999",
      rating: 4.8,
      reviews: 145,
      image: normalharse,
      features: [
        "Fresh Flowers",
        "Traditional Decor",
        "Garlands Included",
        "Fragrant Setup",
      ],
      coordinatorName: "Rajesh Pandey",
      experience: "7+ years",
      responseTime: "2 hours",
      contactNumber: "+91 98765 43215",
      whatsappNumber: "+91 98765 43215",
      alternateNumber: "+91 99887 66549",
      languages: "Hindi, English, Maithili",
    },
  ];

  const handleViewDetails = (service: any) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCallNow = (contactNumber: string) => {
    window.location.href = `tel:${contactNumber}`;
  };

  const handleWhatsApp = (whatsappNumber: string) => {
    window.open(
      `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`,
      "_blank",
    );
  };

  const handleBookNow = (service: any) => {
    setSelectedServiceForBooking(service);
    setShowBookingForm(true);
  };

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      <Topbar />
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/667200/pexels-photo-667200.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Hearse Van"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#8B5E3C]/80 to-[#5A3E2B]/90"></div>
        </div>

        {/* Decorative Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C89B6D] rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Mandala Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-white rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            {/* Sacred Symbol */}
            <div className="flex items-center justify-center gap-2 text-[#F5E9D9] mb-4">
              <GiCarWheel className="text-2xl" />
              <span className="text-sm tracking-widest">
                अंतिम यात्रा • FINAL JOURNEY • ਅੰਤਿਮ ਯਾਤਰਾ
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              Hearse Van Services
              <span className="block text-xl md:text-2xl font-light text-[#F5E9D9] mt-3">
                Dignified Transportation for the Final Journey
              </span>
            </h1>

            <p className="text-base md:text-lg text-white mb-6 max-w-2xl mx-auto">
              Professional hearse van services ensuring a dignified and
              respectful final journey for your loved ones. Available 24/7 with
              compassionate staff.
            </p>

            {/* Emergency Contact */}
            <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <FaPhoneAlt className="text-white text-xl animate-pulse" />
              <span className="text-white font-bold text-xl">
                24/7 Emergency: +91 1800 123 4567
              </span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              <div>
                <div className="text-2xl text-white">5000+</div>
                <div className="text-sm text-[#F5E9D9]">Journeys Completed</div>
              </div>
              <div>
                <div className="text-2xl text-white">15+</div>
                <div className="text-sm text-[#F5E9D9]">Fleet Size</div>
              </div>
              <div>
                <div className="text-2xl text-white">24/7</div>
                <div className="text-sm text-[#F5E9D9]">Availability</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#FDF8F2"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-4 px-6 max-w-7xl mx-auto">
        {/* Section Header with Decorative Lines */}
        <div className="text-center mb-12 relative">
          {/* Decorative Elements */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-20 h-20 opacity-10">
            <GiCarWheel className="w-full h-full text-[#8B5E3C]" />
          </div>

          <div className="relative">
            <span className="text-[#C89B6D] tracking-widest text-sm">
              ॐ HEARSE VAN SERVICES ॐ
            </span>

            <h2 className="text-3xl md:text-4xl font-serif text-[#5A3E2B] mt-3 mb-4">
              Respectful Transportation
              <span className="block text-[#8B5E3C]">
                for the Final Journey
              </span>
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-[#C89B6D]"></div>
              <GiStarSwirl className="text-xl text-[#C89B6D]" />
              <div className="w-10 h-px bg-[#C89B6D]"></div>
            </div>

            <p className="text-sm text-[#7B5E47] max-w-2xl mx-auto">
              Choose from our range of hearse vans designed to provide dignified
              and respectful transportation for your loved ones.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {hearseVanServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image Container with Actual Image */}
                <div className="relative h-36 overflow-hidden">
                  {/* Actual Image */}
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5A3E2B] via-transparent to-transparent z-10"></div>

                  {/* Service Icon as Overlay */}
                  <div className="absolute top-2 left-2 z-20 bg-white/20 backdrop-blur-sm p-1.5 rounded-full">
                    <Icon className="text-white text-lg" />
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-2 right-2 z-20 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <FaStar className="text-yellow-500 text-[10px]" />
                    <span className="text-[11px] text-[#5A3E2B]">
                      {service.rating}
                    </span>
                    <span className="text-[9px] text-[#7B5E47]">
                      ({service.reviews})
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-2 z-20">
                    <h3 className="text-base font-serif text-white drop-shadow-lg">
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-2.5">
                  {/* Description */}
                  <p className="text-sm text-[#7B5E47] mb-1.5 line-clamp-2 text-center leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap justify-center gap-1 mb-2">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-1.5 py-0.5 bg-[#F5E9D9] text-[#8B5E3C] rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#F5E9D9] text-[#8B5E3C] rounded-full">
                      +{service.features.length - 2}
                    </span>
                  </div>

                  {/* Coordinator Info */}
                  <div className="flex items-center gap-1.5 mb-2 p-1.5 bg-[#FDF8F2] rounded-lg">
                    <div className="w-7 h-7 rounded-full bg-[#C89B6D] flex items-center justify-center flex-shrink-0">
                      <RiCustomerService2Fill className="text-white text-sm" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-[#5A3E2B] truncate">
                        {service.coordinatorName}
                      </p>
                      <p className="text-[10px] text-[#7B5E47]">
                        {service.experience}
                      </p>
                    </div>
                    <MdVerified className="text-[#C89B6D] text-sm flex-shrink-0" />
                  </div>

                  {/* Contact Numbers */}
                  <div className="mb-2 space-y-1">
                    <div className="flex items-center gap-1 text-[10px] text-[#7B5E47]">
                      <MdCall className="text-[#C89B6D] text-[10px]" />
                      <span className="truncate">{service.contactNumber}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-[#7B5E47]">
                      <FaWhatsapp className="text-[#25D366] text-[10px]" />
                      <span className="truncate">{service.whatsappNumber}</span>
                    </div>
                  </div>

                  {/* Location and Price */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-[10px] text-[#7B5E47]">
                      <FaClock className="text-[#C89B6D] text-[10px]" />
                      <span className="truncate max-w-[90px]">
                        {service.responseTime}
                      </span>
                    </div>
                    <div className="text-sm text-[#8B5E3C]">
                      ₹{service.price}
                      <span className="text-[9px] text-[#7B5E47] ml-0.5">
                        onwards
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => handleViewDetails(service)}
                      className="flex-1 px-1.5 py-1.5 border border-[#C89B6D] text-[#8B5E3C] rounded-lg text-[10px] hover:bg-[#F5E9D9] transition"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => handleWhatsApp(service.whatsappNumber)}
                      className="flex-1 px-1.5 py-1.5 bg-[#25D366] text-white rounded-lg text-[10px] hover:shadow-sm transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-1"
                    >
                      <FaWhatsapp className="text-[8px]" />
                      WhatsApp
                    </button>
                    <button
                      onClick={() => handleCallNow(service.contactNumber)}
                      className="flex-1 px-1.5 py-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#A9744F] text-white rounded-lg text-[10px] hover:shadow-sm transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-1"
                    >
                      <FaPhoneAlt className="text-[8px]" />
                      Call
                    </button>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#C89B6D]/20 to-transparent rounded-bl-lg"></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-[#F5E9D9] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 h-48 bg-[#C89B6D] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8B5E3C] rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-[#5A3E2B] mb-3">
              Why Choose Our Hearse Van Services?
            </h2>
            <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: MdVerified,
                title: "Professional Drivers",
                desc: "Experienced and respectful drivers",
              },
              {
                icon: FaClock,
                title: "24/7 Availability",
                desc: "Round-the-clock service for emergencies",
              },
              {
                icon: FaShieldAlt,
                title: "Dignified Service",
                desc: "Handled with utmost respect",
              },
              {
                icon: FaLeaf,
                title: "Well Maintained",
                desc: "Clean and well-maintained fleet",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm hover:bg-white transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#8B5E3C] flex items-center justify-center">
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-lg text-[#5A3E2B] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#7B5E47]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-[#5A3E2B] mb-3">
            How Our Service Works
          </h2>
          <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full mb-4"></div>
          <p className="text-sm text-[#7B5E47] max-w-2xl mx-auto">
            Simple and respectful process to arrange hearse van services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: "01",
              title: "Contact Us",
              desc: "Call or WhatsApp our 24/7 helpline",
              icon: FaPhoneAlt,
            },
            {
              step: "02",
              title: "Choose Van",
              desc: "Select the type of hearse van needed",
              icon: GiCarWheel,
            },
            {
              step: "03",
              title: "Provide Details",
              desc: "Share location and time requirements",
              icon: FaMapMarkerAlt,
            },
            {
              step: "04",
              title: "Van Arrives",
              desc: "Hearse van reaches at scheduled time",
              icon: BsTelephoneFill,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#C89B6D] flex items-center justify-center">
                    <Icon className="text-white text-xl" />
                  </div>
                  <span className="text-sm text-[#C89B6D] font-medium">
                    {item.step}
                  </span>
                  <h3 className="text-lg text-[#5A3E2B] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#7B5E47]">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 text-[#C89B6D] text-xl">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-[#5A3E2B] mb-3">
            What Families Say
          </h2>
          <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "Rajesh Gupta",
              location: "Delhi",
              text: "Very respectful and dignified service. The driver was professional and the van was clean. Grateful for their support during difficult time.",
              rating: 5,
            },
            {
              name: "Sunita Sharma",
              location: "Mumbai",
              text: "They handled everything with such care and respect. The floral decoration was beautiful. Thank you for your compassionate service.",
              rating: 5,
            },
            {
              name: "Amit Kumar",
              location: "Bangalore",
              text: "Arranged hearse van at midnight. Very prompt response and professional service. Highly recommended.",
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="relative bg-white p-5 rounded-lg shadow-sm"
            >
              <FaQuoteLeft className="absolute top-3 right-3 text-2xl text-[#C89B6D] opacity-20" />
              <div className="flex gap-1 text-yellow-500 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
              <p className="text-[#7B5E47] mb-3 italic text-sm">
                "{testimonial.text}"
              </p>
              <div>
                <p className="text-[#5A3E2B] text-sm">{testimonial.name}</p>
                <p className="text-sm text-[#7B5E47]">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-r from-[#8B5E3C] to-[#5A3E2B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] bg-repeat"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-6">
          <GiCarWheel className="text-5xl mx-auto mb-4 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Need a Hearse Van Immediately?
          </h2>
          <p className="text-base md:text-lg text-white mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Our 24/7 emergency service ensures a hearse van reaches you whenever
            you need it. Compassionate and professional service always.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => handleCallNow("+9118001234567")}
              className="px-8 py-3 bg-white text-[#8B5E3C] rounded-lg font-medium text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <FaPhoneAlt />
              Call Emergency Helpline
            </button>
            <button
              onClick={() => handleWhatsApp("+919876543210")}
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium text-base hover:bg-white hover:text-[#8B5E3C] transition-all duration-300 flex items-center gap-2"
            >
              <FaWhatsapp />
              WhatsApp Us
            </button>
          </div>

          {/* Emergency Contact Numbers */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <p className="text-[#F5E9D9]">Emergency</p>
              <p className="font-bold">+91 1800 123 4567</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <p className="text-[#F5E9D9]">Delhi NCR</p>
              <p className="font-bold">+91 98765 43210</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <p className="text-[#F5E9D9]">Mumbai</p>
              <p className="font-bold">+91 98765 43213</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HearseVanServices;
