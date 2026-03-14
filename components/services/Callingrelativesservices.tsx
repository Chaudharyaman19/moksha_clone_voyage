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
} from "react-icons/md";
import { PiFlowerLotus } from "react-icons/pi";
import {
  BsSuitHeartFill,
  BsChatDots,
  BsTelephone,
  BsTelephoneFill,
} from "react-icons/bs";
import { TbMessageCircle, TbPhoneCall } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

function CallingRelativesServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] =
    useState(null);
  const callingrelative = "/assets/callingrelative.jpeg";
  const callingServices = [
    {
      id: 1,
      name: "Emergency Family Notification",
      icon: GiSoundOn,
      description:
        "Immediate notification to family members in case of emergency or critical situation",
      longDescription:
        "Rapid notification service to inform family members about emergencies. Our team contacts all listed relatives immediately and coordinates their response.",
      location: "Worldwide",
      price: "999",
      rating: 4.9,
      reviews: 234,
      image: callingrelative,
      features: [
        "24/7 Availability",
        "Multi-language",
        "SMS & Call",
        "Confirmation Tracking",
      ],
      coordinatorName: "Priya Sharma",
      experience: "8+ years",
      responseTime: "5-10 mins",
      contactNumber: "+91 98765 43210",
      whatsappNumber: "+91 98765 43210",
      alternateNumber: "+91 99887 66554",
    },
    {
      id: 2,
      name: "International Relative Connect",
      icon: GiGlobe,
      description:
        "Connect with family members abroad during emergencies or important events",
      longDescription:
        "Specialized service to contact relatives in different countries. We handle time zones, language barriers, and ensure your message reaches them.",
      location: "International",
      price: "2,499",
      rating: 4.8,
      reviews: 156,
      image: callingrelative,
      features: [
        "International Calling",
        "Time Zone Management",
        "Translation",
        "Follow-ups",
      ],
      coordinatorName: "Rajesh Kumar",
      experience: "10+ years",
      responseTime: "30 mins",
      contactNumber: "+91 98765 43211",
      whatsappNumber: "+91 98765 43211",
      alternateNumber: "+91 99887 66553",
    },
    {
      id: 3,
      name: "Mass Notification Service",
      icon: GiSurfBoard,
      description:
        "Simultaneously notify all family members and relatives about important events",
      longDescription:
        "Bulk notification service to inform all family members simultaneously about weddings, funerals, ceremonies, or emergencies.",
      location: "Worldwide",
      price: "1,999",
      rating: 4.7,
      reviews: 189,
      image: callingrelative,
      features: ["Bulk SMS", "Voice Broadcast", "WhatsApp Groups", "Email"],
      coordinatorName: "Anita Desai",
      experience: "6+ years",
      responseTime: "1 hour",
      contactNumber: "+91 98765 43212",
      whatsappNumber: "+91 98765 43212",
      alternateNumber: "+91 99887 66552",
    },
    {
      id: 4,
      name: "Video Calling Assistance",
      icon: FaVideo,
      description:
        "Technical support for video calls with family during ceremonies or emergencies",
      longDescription:
        "We help set up and facilitate video calls with family members who cannot attend in person. Perfect for weddings, funerals, and ceremonies.",
      location: "Remote Support",
      price: "499",
      rating: 4.9,
      reviews: 312,
      image: callingrelative,
      features: [
        "Video Setup",
        "Platform Support",
        "Recording",
        "Multiple Participants",
      ],
      coordinatorName: "Vikram Singh",
      experience: "5+ years",
      responseTime: "15 mins",
      contactNumber: "+91 98765 43213",
      whatsappNumber: "+91 98765 43213",
      alternateNumber: "+91 99887 66551",
    },
    {
      id: 5,
      name: "Funeral Ceremony Invitations",
      icon: GiFamilyTree,
      description:
        "Professional calling service to invite relatives to funeral ceremonies",
      longDescription:
        "Sensitive and respectful calling service to invite family members to funeral ceremonies. We handle the emotional aspect with care and compassion.",
      location: "Pan India",
      price: "2,999",
      rating: 4.9,
      reviews: 278,
      image: callingrelative,
      features: [
        "Personalized Calls",
        "RSVP Tracking",
        "Location Details",
        "Follow-ups",
      ],
      coordinatorName: "Meera Joshi",
      experience: "12+ years",
      responseTime: "24 hours",
      contactNumber: "+91 98765 43214",
      whatsappNumber: "+91 98765 43214",
      alternateNumber: "+91 99887 66550",
    },
    {
      id: 6,
      name: "Wedding Invitation Calls",
      icon: GiHearts,
      description:
        "Traditional invitation calls to relatives for wedding ceremonies",
      longDescription:
        "Professional calling service for wedding invitations. Our team makes warm, personalized calls to invite relatives to your special day.",
      location: "Pan India",
      price: "3,999",
      rating: 4.8,
      reviews: 445,
      image: callingrelative,
      features: [
        "Personalized Script",
        "RSVP Collection",
        "Guest List Management",
        "Follow-up Calls",
      ],
      coordinatorName: "Sneha Reddy",
      experience: "7+ years",
      responseTime: "48 hours",
      contactNumber: "+91 98765 43215",
      whatsappNumber: "+91 98765 43215",
      alternateNumber: "+91 99887 66549",
    },
    {
      id: 7,
      name: "Relatives Locator Service",
      icon: GiConversation,
      description:
        "Find and connect with long-lost relatives anywhere in the world",
      longDescription:
        "Specialized service to locate and establish contact with relatives you've lost touch with. We use various resources to find them.",
      location: "Global",
      price: "4,999",
      rating: 4.6,
      reviews: 98,
      image: callingrelative,
      features: [
        "Tracing Service",
        "Address Verification",
        "Contact Establishment",
        "Confidential",
      ],
      coordinatorName: "Amitabh Thakur",
      experience: "15+ years",
      responseTime: "3-5 days",
      contactNumber: "+91 98765 43216",
      whatsappNumber: "+91 98765 43216",
      alternateNumber: "+91 99887 66548",
    },
    {
      id: 8,
      name: "24/7 Emergency Helpline",
      icon: MdEmergency,
      description:
        "Round-the-clock assistance for contacting family during crises",
      longDescription:
        "24/7 emergency helpline service to help you contact family members during medical emergencies, accidents, or any critical situation.",
      location: "24/7 Support",
      price: "999/month",
      rating: 4.9,
      reviews: 567,
      image: callingrelative,
      features: [
        "24/7 Availability",
        "Emergency Protocols",
        "Multi-language",
        "Priority Response",
      ],
      coordinatorName: "Emergency Team",
      experience: "Always Available",
      responseTime: "Immediate",
      contactNumber: "+91 1800 123 4567",
      whatsappNumber: "+91 98765 43217",
      alternateNumber: "+91 99887 66547",
      languages: " ",
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

  const handleCallNow = (contactNumber: string) => {
    window.location.href = `tel:${contactNumber}`;
  };

  const handleWhatsApp = (whatsappNumber: string) => {
    window.open(
      `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`,
      "_blank",
    );
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
              <GiSoundOn className="text-2xl" />
              <span className="text-sm tracking-widest">
                संपर्क • CONNECT • ਸੰਪਰਕ
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              Calling Relatives Services
              <span className="block text-xl md:text-2xl font-light text-[#F5E9D9] mt-3">
                Stay Connected with Family Anywhere, Anytime
              </span>
            </h1>

            <p className="text-base md:text-lg text-white mb-6 max-w-2xl mx-auto">
              Professional calling services to help you connect with relatives
              during emergencies, ceremonies, and special occasions.
              Compassionate and reliable communication assistance.
            </p>

            {/* Emergency Contact */}
            <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <FaPhoneAlt className="text-white text-xl animate-pulse" />
              <span className="text-white font-bold text-xl">
                24/7 Helpline: +91 1800 123 4567
              </span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              <div>
                <div className="text-2xl text-white">50K+</div>
                <div className="text-sm text-[#F5E9D9]">Calls Connected</div>
              </div>
              <div>
                <div className="text-2xl text-white">15+</div>
                <div className="text-sm text-[#F5E9D9]">Languages</div>
              </div>
              <div>
                <div className="text-2xl text-white">98%</div>
                <div className="text-sm text-[#F5E9D9]">Success Rate</div>
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
            <GiTalk className="w-full h-full text-[#8B5E3C]" />
          </div>

          <div className="relative">
            <span className="text-[#C89B6D] tracking-widest text-sm">
              ॐ CONNECTION SERVICES ॐ
            </span>

            <h2 className="text-3xl md:text-4xl font-serif text-[#5A3E2B] mt-3 mb-4">
              Professional Calling Assistance
              <span className="block text-[#8B5E3C]">for Every Occasion</span>
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-[#C89B6D]"></div>
              <GiStarSwirl className="text-xl text-[#C89B6D]" />
              <div className="w-10 h-px bg-[#C89B6D]"></div>
            </div>

            <p className="text-sm text-[#7B5E47] max-w-2xl mx-auto">
              From emergency notifications to wedding invitations, our
              professional calling services ensure your message reaches every
              family member with care and clarity.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {callingServices.map((service) => {
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

                  {/* Language Badge */}
                  <div className="absolute bottom-2 right-2 z-20 bg-[#8B5E3C]/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    <span className="text-white text-[10px] font-medium">
                      {service.languages}
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
                      <span className="truncate text-[14px]">
                        {service.contactNumber}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-[#7B5E47]">
                      <FaWhatsapp className="text-[#25D366] text-[10px]" />
                      <span className="truncate text-[14px]">
                        {service.whatsappNumber}
                      </span>
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
              Why Choose Our Calling Services?
            </h2>
            <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: MdVerified,
                title: "Professional Callers",
                desc: "Trained professionals for sensitive communications",
              },
              {
                icon: FaClock,
                title: "24/7 Availability",
                desc: "Round-the-clock service for emergencies",
              },
              {
                icon: MdLanguage,
                title: "Multi-Language Support",
                desc: "Call in any Indian or international language",
              },
              {
                icon: FaHeart,
                title: "Compassionate Service",
                desc: "Handling every call with care and empathy",
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
            How Our Calling Service Works
          </h2>
          <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full mb-4"></div>
          <p className="text-sm text-[#7B5E47] max-w-2xl mx-auto">
            Simple and efficient process to connect you with your relatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: "01",
              title: "Share Details",
              desc: "Provide relative contact list and message",
              icon: FaEnvelope,
            },
            {
              step: "02",
              title: "Choose Service",
              desc: "Select the type of calling service needed",
              icon: GiPhone,
            },
            {
              step: "03",
              title: "We Make Calls",
              desc: "Our team contacts all your relatives",
              icon: BsTelephoneFill,
            },
            {
              step: "04",
              title: "Get Confirmation",
              desc: "Receive updates and confirmations",
              icon: MdMessage,
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

      {/* Communication Channels */}
      <section className="py-12 px-6 max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-[#5A3E2B] mb-3">
            Multiple Ways to Connect
          </h2>
          <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: FaPhoneAlt,
              name: "Phone Calls",
              desc: "Direct voice calls",
            },
            { icon: FaWhatsapp, name: "WhatsApp", desc: "Messages & calls" },
            {
              icon: FaVideo,
              name: "Video Calls",
              desc: "Face-to-face connection",
            },
            { icon: FaEnvelope, name: "Email", desc: "Written communication" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="text-center p-3">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#F5E9D9] flex items-center justify-center">
                  <Icon className="text-[#8B5E3C] text-xl" />
                </div>
                <h3 className="text-sm text-[#5A3E2B]">{item.name}</h3>
                <p className="text-xs text-[#7B5E47]">{item.desc}</p>
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
              name: "Sunita Gupta",
              location: "Delhi",
              text: "During my father's last moments, they helped me reach all relatives within minutes. Grateful for their prompt service.",
              rating: 5,
            },
            {
              name: "Rajesh Khanna",
              location: "Mumbai",
              text: "Used their wedding invitation service. All 200+ relatives were called personally. Very professional and warm.",
              rating: 5,
            },
            {
              name: "Priyanka Singh",
              location: "Bangalore",
              text: "Found my long-lost cousin through their locator service. Thank you for reuniting our family!",
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
          <GiSoundOn className="text-5xl mx-auto mb-4 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Need to Reach Your Relatives?
          </h2>
          <p className="text-base md:text-lg text-white mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Whether it's an emergency or a celebration, our professional calling
            team is here to help you connect with every family member.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => handleCallNow("+9118001234567")}
              className="px-8 py-3 bg-white text-[#8B5E3C] rounded-lg font-medium text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <FaPhoneAlt />
              Call Helpline
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
              <p className="text-[#F5E9D9]">Wedding/Event</p>
              <p className="font-bold">+91 98765 43215</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <p className="text-[#F5E9D9]">Funeral/Ceremony</p>
              <p className="font-bold">+91 98765 43214</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CallingRelativesServices;
