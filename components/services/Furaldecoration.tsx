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
  GiFlowerPot,
  GiFlowerStar,
  GiIncense,
  GiCandleHolder,
  GiWoodPile,
  GiWoodenDoor,
  GiWoodenFence,
  GiWoodCabin,
  GiWoodStick,
  GiFireplace,
  GiFireBowl,
  GiFireFlower,
  GiFireAce,
  GiFire,
  GiFireRay,
  GiFlowerTwirl,
  GiFlowerHat,
  GiFlowerEmblem,
  GiPalisade,
  GiFlowers,
  GiPlantRoots,
  GiLeafSwirl,
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
  FaLeaf,
  FaTree,
  FaFire,
  FaWater,
  FaMountain,
  FaSun,
  FaMoon,
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
  MdLocalFireDepartment,
  MdOutlineLocalFlorist,
  MdAssuredWorkload,
  MdNature,
  MdOutdoorGrill,
  MdCampaign,
  MdDevicesOther,
} from "react-icons/md";
import { PiFlowerLotus, PiFlowerTulip, PiLeaf } from "react-icons/pi";
import {
  BsSuitHeartFill,
  BsChatDots,
  BsTelephone,
  BsTelephoneFill,
  BsDroplet,
  BsDropletHalf,
  BsDropletFill,
  BsFire,
  BsFlower1,
  BsFlower2,
  BsFlower3,
} from "react-icons/bs";
import {
  TbMessageCircle,
  TbPhoneCall,
  TbCrown,
  TbFlower,
  TbFlowerOff,
} from "react-icons/tb";
import { RiCustomerService2Fill, RiOilFill } from "react-icons/ri";
import { IoCall, IoFlower, IoWater } from "react-icons/io5";

function FuneralDecorationServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] =
    useState(null);
  const furaldecoration = "/assets/funeraldecoration.jpeg";
  const flowerDecorationServices = [
    {
      id: 1,
      name: "Flower Decoration (पुष्प सज्जा)",
      icon: GiFlowerHat,
      description:
        "Traditional flower decorations for the funeral pyre and surrounding area with fresh marigolds and roses.",
      longDescription:
        "Complete floral decoration setup for funeral ceremonies. Includes garlands, flower petals, and arrangements around the pyre. Fresh flowers delivered daily, arranged with respect and tradition.",
      location: "Local & Nearby",
      price: "2,499",
      rating: 4.9,
      reviews: 234,
      image: furaldecoration,
      features: [
        "Fresh Flowers Only",
        "Traditional Designs",
        "Full Coverage",
        "Same Day Setup",
      ],
      coordinatorName: "Phool Chandra",
      experience: "18+ years",
      responseTime: "2 hours",
      contactNumber: "+91 98765 43101",
      whatsappNumber: "+91 98765 43101",
      alternateNumber: "+91 99887 66401",
      includes: [
        "Marigold Garlands (50 pcs)",
        "Rose Petals (5 kg)",
        "Floral Mats",
        "Tulsi Leaves",
        "Flower Torans",
      ],
      setupTime: "2-3 hours",
      coverage: "Complete pyre area",
      flowerTypes: ["Marigold", "Rose", "Chrysanthemum", "Tulsi"],
    },
    {
      id: 2,
      name: "Floral Pyre Decoration (चिता पुष्प सज्जा)",
      icon: GiFlowerTwirl,
      description:
        "Specialized flower decoration specifically for the funeral pyre with sacred flowers and traditional patterns.",
      longDescription:
        "Exclusive floral decoration for the pyre itself. Using sacred flowers like marigold, roses, and chrysanthemums arranged in traditional patterns. Includes flower petals for offering and garlands for the departed.",
      location: "Local Only",
      price: "3,499",
      rating: 4.9,
      reviews: 189,
      image: furaldecoration,
      features: [
        "Pyre Coverage",
        "Sacred Flowers",
        "Traditional Pattern",
        "Premium Garlands",
      ],
      coordinatorName: "Mohan Das",
      experience: "20+ years",
      responseTime: "3 hours",
      contactNumber: "+91 98765 43105",
      whatsappNumber: "+91 98765 43105",
      alternateNumber: "+91 99887 66405",
      includes: [
        "Pyre Floral Cover",
        "Premium Garlands (25)",
        "Flower Petals (10 kg)",
        "Sacred Leaves",
        "Floral Torans",
      ],
      setupTime: "2 hours",
      flowers: "Marigold, Rose, Chrysanthemum",
      flowerTypes: ["Marigold", "Rose", "Chrysanthemum"],
    },
    {
      id: 3,
      name: "Flower Garlands & Mala (पुष्प मालाएं)",
      icon: GiFlowers,
      description:
        "Traditional flower garlands made from fresh marigold, roses, and sacred leaves for funeral ceremonies.",
      longDescription:
        "Hand-strung flower garlands using fresh flowers. Includes garlands for the departed, family members, and for decorating the pyre. Made with traditional techniques and sacred flowers.",
      location: "Local & Nearby",
      price: "999",
      rating: 4.8,
      reviews: 156,
      image: furaldecoration,
      features: [
        "Fresh Flowers",
        "Hand-Strung",
        "Traditional Style",
        "Bulk Orders",
      ],
      coordinatorName: "Laxmi Devi",
      experience: "15+ years",
      responseTime: "1 hour",
      contactNumber: "+91 98765 43108",
      whatsappNumber: "+91 98765 43108",
      alternateNumber: "+91 99887 66408",
      includes: [
        "Marigold Garlands (25)",
        "Rose Garlands (10)",
        "Tulsi Mala (5)",
        "Sacred Leaf Garlands",
      ],
      setupTime: "1-2 hours",
      flowerTypes: ["Marigold", "Rose", "Tulsi", "Mogra"],
    },
    {
      id: 4,
      name: "Flower Petals & Offerings (पुष्प वर्षा)",
      icon: GiFlowerPot,
      description:
        "Fresh flower petals in bulk for offerings, path decoration, and ritual use during funeral ceremonies.",
      longDescription:
        "Fresh flower petals collected and packed for funeral rituals. Used for offering, path decoration, and cremation ceremonies. Available in mixed or single flower varieties.",
      location: "Local & Nearby",
      price: "799",
      rating: 4.7,
      reviews: 98,
      image: furaldecoration,
      features: [
        "Fresh Petals",
        "Bulk Quantity",
        "Mixed Varieties",
        "Same Day Delivery",
      ],
      coordinatorName: "Ram Kumar",
      experience: "12+ years",
      responseTime: "1 hour",
      contactNumber: "+91 98765 43109",
      whatsappNumber: "+91 98765 43109",
      alternateNumber: "+91 99887 66409",
      includes: [
        "Rose Petals (5 kg)",
        "Marigold Petals (5 kg)",
        "Mixed Flower Petals",
        "Sacred Leaves",
      ],
      setupTime: "30 mins",
      flowerTypes: ["Rose", "Marigold", "Chrysanthemum", "Jasmine"],
    },
    {
      id: 5,
      name: "Pathway Flower Decoration (पुष्प पथ सज्जा)",
      icon: GiFlowerEmblem,
      description:
        "Beautiful flower decoration for the pathway leading to the pyre with petals, flowers, and traditional patterns.",
      longDescription:
        "Floral decoration along the pathway from entrance to pyre area. Uses fresh flower petals, small flower arrangements, and traditional patterns to create a sacred path for the final journey.",
      location: "Local & Nearby",
      price: "1,999",
      rating: 4.8,
      reviews: 134,
      image: furaldecoration,
      features: [
        "Flower Petal Path",
        "Traditional Patterns",
        "Fresh Flowers",
        "Full Pathway",
      ],
      coordinatorName: "Sita Bai",
      experience: "14+ years",
      responseTime: "2 hours",
      contactNumber: "+91 98765 43110",
      whatsappNumber: "+91 98765 43110",
      alternateNumber: "+91 99887 66410",
      includes: [
        "Flower Petals (15 kg)",
        "Small Floral Arrangements",
        "Decorative Flower Pots",
        "Sacred Flower Designs",
      ],
      setupTime: "2-3 hours",
      length: "50-100 ft pathway",
      flowerTypes: ["Marigold", "Rose", "Jasmine", "Chrysanthemum"],
    },
    {
      id: 6,
      name: "Premium Flower Decoration (प्रीमियम पुष्प सज्जा)",
      icon: GiFlowerStar,
      description:
        "Premium flower decoration with exotic and rare flowers for those seeking special floral arrangements.",
      longDescription:
        "Premium floral decoration using exotic and rare flowers. Includes specialized arrangements, premium garlands, and elaborate floral designs for those who want something extra special for their loved one's final journey.",
      location: "Local & Nearby",
      price: "5,999",
      rating: 4.9,
      reviews: 67,
      image: furaldecoration,
      features: [
        "Exotic Flowers",
        "Premium Designs",
        "Elaborate Setup",
        "Special Arrangements",
      ],
      coordinatorName: "Rajesh Florist",
      experience: "22+ years",
      responseTime: "3 hours",
      contactNumber: "+91 98765 43111",
      whatsappNumber: "+91 98765 43111",
      alternateNumber: "+91 99887 66411",
      includes: [
        "Premium Garlands (50)",
        "Exotic Flower Arrangements",
        "Flower Petals (20 kg)",
        "Decorative Floral Structures",
        "Rare Flower Varieties",
      ],
      setupTime: "3-4 hours",
      flowerTypes: ["Orchids", "Lilies", "Roses", "Carnations", "Tuberose"],
    },
    {
      id: 7,
      name: "Complete Flower Decoration Package (संपूर्ण पुष्प सज्जा)",
      icon: GiFlowerTwirl,
      description:
        "All-in-one flower decoration package covering pyre, pathway, garlands, and all floral needs for funeral.",
      longDescription:
        "Complete floral decoration solution for funeral ceremonies. Includes pyre decoration, pathway flowers, all garlands, flower petals, and all floral elements. Coordinated traditional designs with fresh flowers throughout.",
      location: "Local & Nearby",
      price: "8,999",
      rating: 4.9,
      reviews: 189,
      image: furaldecoration,
      features: [
        "Complete Floral",
        "Premium Flowers",
        "All Garlands",
        "Coordinated Design",
      ],
      coordinatorName: "Vishnu Kanta",
      experience: "25+ years",
      responseTime: "2 hours",
      contactNumber: "+91 98765 43107",
      whatsappNumber: "+91 98765 43107",
      alternateNumber: "+91 99887 66407",
      includes: [
        "Pyre Flower Decoration",
        "Pathway Flower Setup",
        "Floral Garlands (100)",
        "Flower Petals (25 kg)",
        "Floral Torans (10)",
        "Sacred Flower Designs",
        "Fresh Flower Arrangements",
      ],
      setupTime: "4-5 hours",
      teamSize: "6-8 members",
      flowerTypes: ["Marigold", "Rose", "Chrysanthemum", "Jasmine", "Tulsi"],
    },
    {
      id: 8,
      name: "Sacred Flower Arrangements (पवित्र पुष्प सज्जा)",
      icon: GiFlowerEmblem,
      description:
        "Special flower arrangements featuring sacred flowers and leaves used in Hindu funeral rituals.",
      longDescription:
        "Specialized floral arrangements using flowers and leaves considered sacred in Hindu funeral traditions. Includes Tulsi, Bel leaves, marigold, and other ritualistically important flowers arranged according to traditional requirements.",
      location: "Local Only",
      price: "2,499",
      rating: 4.8,
      reviews: 89,
      image: furaldecoration,
      features: [
        "Sacred Flowers",
        "Ritual Appropriate",
        "Traditional Setup",
        "Tulsi Included",
      ],
      coordinatorName: "Gopal Shastri",
      experience: "16+ years",
      responseTime: "3 hours",
      contactNumber: "+91 98765 43112",
      whatsappNumber: "+91 98765 43112",
      alternateNumber: "+91 99887 66412",
      includes: [
        "Tulsi Arrangements",
        "Marigold Sacred Setup",
        "Bel Leaf Decor",
        "Sacred Flower Garlands",
        "Ritual Flower Offerings",
      ],
      setupTime: "2-3 hours",
      flowerTypes: ["Tulsi", "Marigold", "Bel Leaves", "Dhatura", "Aak"],
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
            src="https://images.pexels.com/photos/931170/pexels-photo-931170.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Funeral Flower Decoration"
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
              <GiFlowerHat className="text-2xl" />
              <span className="text-sm tracking-widest">
                ॐ FUNERAL FLOWER DECORATION ॐ • अंतिम संस्कार पुष्प सज्जा
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              Funeral Flower Decoration Services
              <span className="block text-xl md:text-2xl font-light text-[#F5E9D9] mt-3">
                Traditional Floral Decor for Last Rites with Fresh Flowers
              </span>
            </h1>

            <p className="text-base md:text-lg text-white mb-6 max-w-2xl mx-auto">
              Respectful and traditional flower decoration for funeral
              ceremonies. Fresh marigold, roses, and sacred flowers arranged
              with dignity and tradition.
            </p>

            {/* Emergency Contact */}
            <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <FaPhoneAlt className="text-white text-xl animate-pulse" />
              <span className="text-white font-bold text-xl">
                24/7 Flower Decoration: +91 1800 123 4580
              </span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              <div>
                <div className="text-2xl text-white">5K+</div>
                <div className="text-sm text-[#F5E9D9]">
                  Ceremonies with Flowers
                </div>
              </div>
              <div>
                <div className="text-2xl text-white">100%</div>
                <div className="text-sm text-[#F5E9D9]">Fresh Flowers</div>
              </div>
              <div>
                <div className="text-2xl text-white">24/7</div>
                <div className="text-sm text-[#F5E9D9]">Flower Setup</div>
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

      {/* Flower Decoration Services Section */}
      <section className="py-4 px-6 max-w-7xl mx-auto">
        {/* Section Header with Decorative Lines */}
        <div className="text-center mb-12 relative">
          {/* Decorative Elements */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-20 h-20 opacity-10">
            <GiFlowerHat className="w-full h-full text-[#8B5E3C]" />
          </div>

          <div className="relative">
            <span className="text-[#C89B6D] tracking-widest text-sm">
              ॐ FUNERAL FLOWER DECORATION ॐ
            </span>

            <h2 className="text-3xl md:text-4xl font-serif text-[#5A3E2B] mt-3 mb-4">
              Flower Decoration Packages
              <span className="block text-[#8B5E3C]">
                for Funeral Ceremonies
              </span>
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-[#C89B6D]"></div>
              <GiStarSwirl className="text-xl text-[#C89B6D]" />
              <div className="w-10 h-px bg-[#C89B6D]"></div>
            </div>

            <p className="text-sm text-[#7B5E47] max-w-2xl mx-auto">
              Respectful flower decoration services using fresh marigold, roses,
              and sacred flowers for funeral ceremonies. Traditional floral
              arrangements with dignity.
            </p>
          </div>
        </div>

        {/* Services Grid - Flower Decoration Only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {flowerDecorationServices.map((service) => {
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

                  {/* Flower Types Badge */}
                  <div className="absolute bottom-2 right-2 z-20 bg-[#8B5E3C]/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    <span className="text-white text-[10px] font-medium">
                      {service.flowerTypes?.length} Flowers
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

                  {/* Flower Types */}
                  <div className="flex flex-wrap justify-center gap-1 mb-2">
                    {service.flowerTypes?.slice(0, 3).map((flower, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-1.5 py-0.5 bg-[#F5E9D9] text-[#8B5E3C] rounded-full flex items-center gap-0.5"
                      >
                        <IoFlower className="text-[8px]" />
                        {flower}
                      </span>
                    ))}
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

                  {/* Setup Time and Price */}
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

                  {/* Includes Preview */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {service.includes?.slice(0, 2).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[8px] px-1 py-0.5 bg-[#C89B6D]/10 text-[#8B5E3C] rounded"
                      >
                        {item}
                      </span>
                    ))}
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
              Why Choose Our Flower Decoration?
            </h2>
            <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: MdVerified,
                title: "Fresh Flowers",
                desc: "Daily fresh flowers guaranteed",
              },
              {
                icon: FaClock,
                title: "24/7 Flower Setup",
                desc: "Round-the-clock floral service",
              },
              {
                icon: FaLeaf,
                title: "Eco-friendly",
                desc: "Biodegradable flower materials",
              },
              {
                icon: IoFlower,
                title: "Sacred Flowers",
                desc: "Traditional ritual flowers",
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
            How to Book Flower Decoration
          </h2>
          <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full mb-4"></div>
          <p className="text-sm text-[#7B5E47] max-w-2xl mx-auto">
            Simple process to arrange traditional flower decoration
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
              title: "Choose Flowers",
              desc: "Select flower types & quantity",
              icon: GiFlowerHat,
            },
            {
              step: "03",
              title: "Confirm Details",
              desc: "Share venue & timing",
              icon: MdVerified,
            },
            {
              step: "04",
              title: "Flower Setup",
              desc: "Fresh flowers before ceremony",
              icon: GiFlowerStar,
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

      {/* Flower Types Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-[#5A3E2B] mb-3">
            Flowers Used in Funeral Decoration
          </h2>
          <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: GiFlowerHat,
              name: "Marigold",
              desc: "Sacred & Traditional",
              color: "orange-500",
            },
            {
              icon: GiFlowerPot,
              name: "Rose",
              desc: "Respect & Love",
              color: "red-500",
            },
            {
              icon: GiFlowerEmblem,
              name: "Tulsi",
              desc: "Sacred Holy Basil",
              color: "green-600",
            },
            {
              icon: GiFlowerStar,
              name: "Chrysanthemum",
              desc: "Honor & Respect",
              color: "yellow-500",
            },
            {
              icon: IoFlower,
              name: "Jasmine",
              desc: "Purity & Peace",
              color: "white",
            },
            {
              icon: GiFlowerTwirl,
              name: "Mogra",
              desc: "Fragrant Offering",
              color: "white",
            },
            {
              icon: GiLeafSwirl,
              name: "Bel Leaves",
              desc: "Sacred Rituals",
              color: "green-700",
            },
            {
              icon: GiPlantRoots,
              name: "Tuberose",
              desc: "Evening Fragrance",
              color: "white",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="text-center p-3">
                <div
                  className={`w-12 h-12 mx-auto mb-2 rounded-full bg-${item.color}/10 flex items-center justify-center`}
                >
                  <Icon className={`text-${item.color} text-xl`} />
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
            What Families Say About Our Flower Decoration
          </h2>
          <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "Priya Sharma",
              location: "Delhi",
              text: "The floral decoration was beautiful and respectful. Fresh marigolds and roses arranged traditionally. They understood our requirements perfectly.",
              rating: 5,
            },
            {
              name: "Vikram Singh",
              location: "Mumbai",
              text: "The flower garlands were fresh and fragrant. Pyre decoration with marigolds was exactly as we wanted. Thank you for the respectful service.",
              rating: 5,
            },
            {
              name: "Anita Desai",
              location: "Lucknow",
              text: "They decorated with fresh flowers throughout. The pathway flower decoration with petals was very traditional. Highly recommended for flower needs.",
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
          <GiFlowerHat className="text-5xl mx-auto mb-4 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Need Flower Decoration Immediately?
          </h2>
          <p className="text-base md:text-lg text-white mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            We understand the urgency. Our 24/7 flower decoration service
            ensures fresh floral setup whenever needed. Marigold, roses, and
            sacred flowers arranged with respect.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => handleCallNow("+9118001234580")}
              className="px-8 py-3 bg-white text-[#8B5E3C] rounded-lg font-medium text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <FaPhoneAlt />
              Call Flower Helpline
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
              <p className="text-[#F5E9D9]">Delhi NCR</p>
              <p className="font-bold">+91 98765 43101</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <p className="text-[#F5E9D9]">Mumbai</p>
              <p className="font-bold">+91 98765 43104</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <p className="text-[#F5E9D9]">24/7 Helpline</p>
              <p className="font-bold">+91 1800 123 4580</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FuneralDecorationServices;
