"use client";
import { useState } from "react";
import Topbar from "../topbar/Topbar";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Image from "next/image";
import {
  GiAirplane,
  GiCoffin,
  GiFlowerPot,
  GiHealing,
  GiPrayerBeads,
  GiStarSwirl,
  GiGlobe,
  GiCommercialAirplane,
  GiDeathNote,
  GiCrossMark,
  GiFlowerEmblem,
} from "react-icons/gi";
import {
  FaMapMarkerAlt,
  FaStar,
  FaQuoteLeft,
  FaPhoneAlt,
  FaClock,
  FaShieldAlt,
  FaPassport,
  FaGlobeAsia,
  FaPlane,
  FaFileContract,
} from "react-icons/fa";
import {
  MdVerified,
  MdLocalHospital,
  MdEmergency,
  MdGavel,
  MdFlight,
  MdDocumentScanner,
  MdSupportAgent,
} from "react-icons/md";
import { PiFlowerLotus } from "react-icons/pi";
import { TbDropletHeart } from "react-icons/tb";
import { BsSuitHeartFill, BsFileEarmarkText } from "react-icons/bs";
import { RiPassportLine } from "react-icons/ri";

function SpecialServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] =
    useState(null);

  // Local UK image path
  const ukImagePath = "/assets/bodytransport.jpeg";

  const specialServices = [
    {
      id: 1,
      name: "UK to India Body Transport",
      icon: GiAirplane,
      description:
        "Complete repatriation services for transporting loved ones from UK to India with dignity",
      longDescription:
        "Full-service repatriation including embalming, coffin procurement, documentation, flight booking, and customs clearance. We handle all legal formalities for smooth transport.",
      location: "UK to India",
      price: "£4,999",
      rating: 4.9,
      reviews: 87,
      image: ukImagePath,
      features: [
        "Embalming",
        "Coffin",
        "Documentation",
        "Customs Clearance",
        "Flight Coordination",
      ],
      coordinatorName: "James Wilson",
      experience: "12+ years",
      responseTime: "24 hours",
      contactNumber: "+44 20 7946 0138",
      countries: "UK, India",
    },
    {
      id: 2,
      name: "USA to India Repatriation",
      icon: GiCommercialAirplane,
      description:
        "Professional repatriation services from USA to India with complete documentation",
      longDescription:
        "Comprehensive repatriation services from any US state to India. Includes embalming, zinc-lined coffin, all necessary permits, and airport coordination.",
      location: "USA to India",
      price: "$6,999",
      rating: 4.8,
      reviews: 64,
      image: ukImagePath,
      features: [
        "Embalming",
        "Zinc Lined Coffin",
        "Death Certificate",
        "Embassy Clearance",
        "Air Transport",
      ],
      coordinatorName: "Michael Chen",
      experience: "15+ years",
      responseTime: "24-48 hours",
      contactNumber: "+1 212 555 0199",
      countries: "USA, India",
    },
    {
      id: 3,
      name: "Canada to India Transport",
      icon: GiGlobe,
      description:
        "Dignified repatriation services from Canada to India with compassionate care",
      longDescription:
        "End-to-end repatriation services from Canada to India. We handle embalming, documentation, flight arrangements, and customs clearance with utmost care and respect.",
      location: "Canada to India",
      price: "CAD 7,999",
      rating: 4.9,
      reviews: 42,
      image: ukImagePath,
      features: [
        "Embalming",
        "Hardwood Coffin",
        "Travel Permit",
        "Air Cargo",
        "Indian Customs",
      ],
      coordinatorName: "David Thompson",
      experience: "10+ years",
      responseTime: "24-48 hours",
      contactNumber: "+1 416 555 0234",
      countries: "Canada, India",
    },
    {
      id: 4,
      name: "Australia to India Repatriation",
      icon: GiCommercialAirplane,
      description:
        "Complete repatriation assistance from Australia to India with legal support",
      longDescription:
        "Professional repatriation services from all Australian cities. Includes embalming, coffin, documentation, flight booking, and coordination with Indian authorities.",
      location: "Australia to India",
      price: "AUD 8,999",
      rating: 4.8,
      reviews: 36,
      image: ukImagePath,
      features: [
        "Embalming",
        "Coffin",
        "Death Certificate",
        "Export Permit",
        "Indian Embassy",
      ],
      coordinatorName: "Sarah Mitchell",
      experience: "9+ years",
      responseTime: "24-48 hours",
      contactNumber: "+61 2 9374 8000",
      countries: "Australia, India",
    },
    {
      id: 5,
      name: "UAE to India Transport",
      icon: GiAirplane,
      description:
        "Hassle-free repatriation services from UAE to India with complete documentation",
      longDescription:
        "Specialized repatriation services from UAE to India. We handle all local procedures, embassy clearance, and ensure smooth transport with proper Islamic practices if required.",
      location: "UAE to India",
      price: "AED 25,999",
      rating: 4.9,
      reviews: 53,
      image: ukImagePath,
      features: [
        "Embalming",
        "Coffin",
        "Consulate Clearance",
        "Flight Booking",
        "Customs",
      ],
      coordinatorName: "Ahmed Hassan",
      experience: "11+ years",
      responseTime: "24 hours",
      contactNumber: "+971 4 123 4567",
      countries: "UAE, India",
    },
    {
      id: 6,
      name: "Europe to India Repatriation",
      icon: GiGlobe,
      description:
        "Comprehensive repatriation services from any European country to India",
      longDescription:
        "Full-service repatriation from Germany, France, Italy, and other European countries. We handle all legal formalities, embalming, and transport arrangements.",
      location: "Europe to India",
      price: "€5,999",
      rating: 4.7,
      reviews: 48,
      image: ukImagePath,
      features: [
        "Embalming",
        "Coffin",
        "Schengen Permit",
        "Air Transport",
        "Indian Customs",
      ],
      coordinatorName: "Hans Mueller",
      experience: "14+ years",
      responseTime: "24-48 hours",
      contactNumber: "+49 30 1234 5678",
      countries: "Europe, India",
    },
    {
      id: 7,
      name: "Documentation & Legal Services",
      icon: MdDocumentScanner,
      description:
        "Complete assistance with all legal documents for international repatriation",
      longDescription:
        "Expert help with all documentation including death certificate attestation, no objection certificates, embassy clearance, and Indian customs documentation.",
      location: "Global",
      price: "£999",
      rating: 4.9,
      reviews: 112,
      image: ukImagePath,
      features: [
        "Death Certificate",
        "Embassy Attestation",
        "NOC",
        "Customs Clearance",
        "Travel Permit",
      ],
      coordinatorName: "Priya Sharma",
      experience: "8+ years",
      responseTime: "12-24 hours",
      contactNumber: "+91 98765 43210",
      countries: "All Countries",
    },
    {
      id: 8,
      name: "Embalming & Preservation",
      icon: GiHealing,
      description:
        "Professional embalming services for international transport of remains",
      longDescription:
        "Expert embalming services following international standards to ensure proper preservation during transit. Performed by certified professionals.",
      location: "Available Worldwide",
      price: "£1,499",
      rating: 4.9,
      reviews: 156,
      image: ukImagePath,
      features: [
        "Arterial Embalming",
        "Cavity Treatment",
        "Restoration",
        "Sanitization",
        "Coffin Preparation",
      ],
      coordinatorName: "Dr. Robert Brown",
      experience: "20+ years",
      responseTime: "4-6 hours",
      contactNumber: "+44 20 7946 0139",
      countries: "All Countries",
    },
  ];

  const handleBookNow = (service: any) => {
    setSelectedServiceForBooking(service);
    setShowBookingForm(true);
  };

  const handleViewDetails = (service: any) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEmergencyCall = (contactNumber: string) => {
    window.location.href = `tel:${contactNumber}`;
  };

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      <Topbar />
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
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
              <GiFlowerEmblem className="text-2xl" />
              <span className="text-sm tracking-widest">
                शांति • PEACE • ਸ਼ਾਂਤੀ
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              International Repatriation Services
              <span className="block text-xl md:text-2xl font-light text-[#F5E9D9] mt-3">
                Dignified Transport of Loved Ones Across Borders
              </span>
            </h1>

            <p className="text-base md:text-lg text-white mb-6 max-w-2xl mx-auto">
              Compassionate and professional assistance for transporting remains
              from anywhere in the world to India. We handle all legal
              formalities with respect and dignity.
            </p>

            {/* Emergency Contact */}
            <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <FaPhoneAlt className="text-white text-xl animate-pulse" />
              <span className="text-white font-bold text-xl">
                24/7 Global Assistance: +44 20 7946 0138
              </span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              <div>
                <div className="text-2xl text-white">25+</div>
                <div className="text-sm text-[#F5E9D9]">Countries Served</div>
              </div>
              <div>
                <div className="text-2xl text-white">500+</div>
                <div className="text-sm text-[#F5E9D9]">Repatriations</div>
              </div>
              <div>
                <div className="text-2xl text-white">100%</div>
                <div className="text-sm text-[#F5E9D9]">Legal Compliance</div>
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
            <GiGlobe className="w-full h-full text-[#8B5E3C]" />
          </div>

          <div className="relative">
            <span className="text-[#C89B6D] tracking-widest text-sm">
              ॐ INTERNATIONAL REPATRIATION SERVICES ॐ
            </span>

            <h2 className="text-3xl md:text-4xl font-serif text-[#5A3E2B] mt-3 mb-4">
              Bringing Loved Ones Home with
              <span className="block text-[#8B5E3C]">Dignity and Respect</span>
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-[#C89B6D]"></div>
              <GiStarSwirl className="text-xl text-[#C89B6D]" />
              <div className="w-10 h-px bg-[#C89B6D]"></div>
            </div>

            <p className="text-sm text-[#7B5E47] max-w-2xl mx-auto">
              We provide complete repatriation services from countries worldwide
              to India, handling all documentation, legal requirements, and
              transportation with utmost care and professionalism.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {specialServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5A3E2B] via-transparent to-transparent z-10"></div>

                  <div className="absolute top-2 left-2 z-20 bg-white/20 backdrop-blur-sm p-1.5 rounded-full">
                    <Icon className="text-white text-lg" />
                  </div>

                  <div className="absolute top-2 right-2 z-20 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <FaStar className="text-yellow-500 text-[10px]" />
                    <span className="text-[11px] text-[#5A3E2B]">
                      {service.rating}
                    </span>
                    <span className="text-[9px] text-[#7B5E47]">
                      ({service.reviews})
                    </span>
                  </div>

                  {/* Country Badge */}
                  <div className="absolute bottom-2 right-2 z-20 bg-[#8B5E3C]/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    <span className="text-white text-[10px] font-medium">
                      {service.countries}
                    </span>
                  </div>

                  {/* Service Name on Image */}
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
                      <MdSupportAgent className="text-white text-sm" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-[#5A3E2B] truncate">
                        {service.coordinatorName}
                      </p>
                      <p className="text-[10px] text-[#7B5E47]">
                        {service.experience} experience
                      </p>
                    </div>
                    <MdVerified className="text-[#C89B6D] text-sm flex-shrink-0" />
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
                      {service.price}
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
                      onClick={() => handleEmergencyCall(service.contactNumber)}
                      className="flex-1 px-1.5 py-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#A9744F] text-white rounded-lg text-[10px] hover:shadow-sm transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-1"
                    >
                      <FaPhoneAlt className="text-[8px]" />
                      Contact
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

      {/* Why Choose Us Section - 4 Columns */}
      <section className="py-12 bg-[#F5E9D9] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 h-48 bg-[#C89B6D] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8B5E3C] rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-[#5A3E2B] mb-3">
              Why Choose Our Repatriation Services?
            </h2>
            <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: MdVerified,
                title: "Verified Partners",
                desc: "Global network of trusted funeral partners",
              },
              {
                icon: FaClock,
                title: "24/7 Support",
                desc: "Round-the-clock assistance in all time zones",
              },
              {
                icon: BsFileEarmarkText,
                title: "Complete Documentation",
                desc: "We handle all paperwork and legal formalities",
              },
              {
                icon: GiPrayerBeads,
                title: "Culturally Sensitive",
                desc: "Respecting all religious and cultural practices",
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

      {/* Process Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-[#5A3E2B] mb-3">
            Repatriation Process
          </h2>
          <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full mb-4"></div>
          <p className="text-sm text-[#7B5E47] max-w-2xl mx-auto">
            We guide you through every step of the repatriation process with
            compassion and professionalism
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: "01",
              title: "Initial Contact",
              desc: "24/7 emergency contact and immediate assistance",
            },
            {
              step: "02",
              title: "Documentation",
              desc: "Complete handling of all legal paperwork",
            },
            {
              step: "03",
              title: "Preparation",
              desc: "Embalming, coffin, and flight arrangements",
            },
            {
              step: "04",
              title: "Transport",
              desc: "Safe and dignified transport to India",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="text-3xl text-[#C89B6D] font-serif opacity-50">
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
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-[#5A3E2B] mb-3">
            Families We've Helped
          </h2>
          <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "Priya Patel",
              location: "London to Ahmedabad",
              text: "During our difficult time, Moksha Voyage handled everything with such compassion. They took care of all paperwork and my father's last journey was dignified.",
              rating: 5,
            },
            {
              name: "Rajiv Singh",
              location: "New York to Delhi",
              text: "Professional and caring service. They guided us through every step of repatriation from USA to India. Highly recommend their services.",
              rating: 5,
            },
            {
              name: "Amrita Kaur",
              location: "Toronto to Amritsar",
              text: "Thank you for making a difficult time easier. Your team handled all documentation and ensured everything was done according to our religious customs.",
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
          <Image
            src={ukImagePath}
            alt="Repatriation Background"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-6">
          <GiFlowerEmblem className="text-5xl mx-auto mb-4 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Need to Transport a Loved One to India?
          </h2>
          <p className="text-base md:text-lg text-white mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            We're here to help 24/7. Our experienced team will guide you through
            the entire repatriation process with compassion and professionalism.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#8B5E3C] rounded-lg font-medium text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <FaPhoneAlt />
              Call Global Helpline
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium text-base hover:bg-white hover:text-[#8B5E3C] transition-all duration-300">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SpecialServices;
