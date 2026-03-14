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
} from "react-icons/tb";
import { RiCustomerService2Fill, RiOilFill } from "react-icons/ri";
import { IoCall, IoFlower, IoWater } from "react-icons/io5";

function FuralSamagriServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] =
    useState(null);
  const funerlsamagri = "/assets/funeralsamagri.jpeg";
  const furalSamagriServices = [
    {
      id: 1,
      name: "Wood for Pyre (चिता के लिए लकड़ी)",
      icon: GiWoodPile,
      description:
        "High-quality sandalwood and mango wood logs for funeral pyre, properly dried and cut.",
      longDescription:
        "Premium quality wood specifically selected for funeral pyres. Includes sandalwood, mango wood, and other sacred woods. Properly dried, cut to size, and delivered to the cremation ground.",
      location: "Pan India",
      price: "3,999",
      rating: 4.9,
      reviews: 456,
      image: funerlsamagri,
      features: [
        "Sandalwood Mix",
        "Properly Dried",
        "Cut to Size",
        "Delivery Included",
      ],
      coordinatorName: "Ganga Ram",
      experience: "25+ years",
      responseTime: "2 hours",
      contactNumber: "+91 98765 43210",
      whatsappNumber: "+91 98765 43210",
      alternateNumber: "+91 99887 66554",

      weight: "100 kg",
      includes: ["Sandalwood", "Mango Wood", "Ghee", "Camphor"],
    },
    {
      id: 2,
      name: "Ghee & Camphor (घी और कपूर)",
      icon: RiOilFill,
      description:
        "Pure desi ghee and high-quality camphor for funeral rituals and pyre ignition.",
      longDescription:
        "Pure desi cow ghee and premium quality camphor specifically for funeral ceremonies. Essential for rituals and helping the pyre ignite properly.",
      location: "Pan India",
      price: "999",
      rating: 4.8,
      reviews: 312,
      image: funerlsamagri,
      features: [
        "Pure Desi Ghee",
        "Premium Camphor",
        "Ritual Grade",
        "Proper Packaging",
      ],
      coordinatorName: "Laxmi Narayan",
      experience: "15+ years",
      responseTime: "1 hour",
      contactNumber: "+91 98765 43211",
      whatsappNumber: "+91 98765 43211",
      alternateNumber: "+91 99887 66553",

      weight: "5 kg Ghee, 1 kg Camphor",
      includes: ["Desi Ghee", "Camphor Tablets", "Matchbox", "Cotton Wicks"],
    },
    {
      id: 3,
      name: "Flower Garlands (पुष्प माला)",
      icon: GiFlowerPot,
      description:
        "Fresh marigold and rose garlands for funeral ceremonies and last respects.",
      longDescription:
        "Fresh flower garlands made with marigold, roses, and other sacred flowers. Delivered fresh on the day of the ceremony for paying last respects.",
      location: "Local Delivery",
      price: "499",
      rating: 4.7,
      reviews: 234,
      image: funerlsamagri,
      features: [
        "Fresh Flowers",
        "Marigold & Rose",
        "Same Day Delivery",
        "Eco-friendly",
      ],
      coordinatorName: "Phool Chand",
      experience: "12+ years",
      responseTime: "3 hours",
      contactNumber: "+91 98765 43212",
      whatsappNumber: "+91 98765 43212",
      alternateNumber: "+91 99887 66552",

      quantity: "10 Garlands",
      includes: ["Marigold", "Roses", "Tulsi Leaves", "Floral Thread"],
    },
    {
      id: 4,
      name: "Sacred Cloth (कफन)",
      icon: GiWoodenDoor,
      description:
        "Pure white cotton cloth for shroud (kafan) as per religious traditions.",
      longDescription:
        "High-quality pure white cotton cloth for shroud (kafan) as per Hindu and other religious traditions. Properly washed and sanctified.",
      location: "Pan India",
      price: "799",
      rating: 4.8,
      reviews: 189,
      image: funerlsamagri,
      features: ["Pure Cotton", "White Color", "Sanctified", "Proper Size"],
      coordinatorName: "Ram Vilas",
      experience: "20+ years",
      responseTime: "2 hours",
      contactNumber: "+91 98765 43213",
      whatsappNumber: "+91 98765 43213",
      alternateNumber: "+91 99887 66551",

      length: "9 meters",
      includes: ["Main Cloth", "Small Pieces", "Cotton Thread"],
    },
    {
      id: 5,
      name: "Sacred Water (गंगा जल)",
      icon: IoWater,
      description:
        "Pure Ganga Jal in copper vessels for funeral rituals and purification.",
      longDescription:
        "Authentic Ganga Jal sourced directly from Haridwar and Rishikesh. Packed in pure copper vessels for ritual purity. Used for final purification rites.",
      location: "Pan India",
      price: "299",
      rating: 4.9,
      reviews: 567,
      image: funerlsamagri,
      features: [
        "Pure Ganga Jal",
        "Copper Vessel",
        "Ritual Grade",
        "Sealed Pack",
      ],
      coordinatorName: "Ganga Das",
      experience: "18+ years",
      responseTime: "4 hours",
      contactNumber: "+91 98765 43214",
      whatsappNumber: "+91 98765 43214",
      alternateNumber: "+91 99887 66550",

      quantity: "2 Liters",
      includes: ["Copper Vessel", "Ganga Jal", "Sacred Thread", "Prasad"],
    },
    {
      id: 6,
      name: "Tulsi & Sacred Leaves (तुलसी दल)",
      icon: PiLeaf,
      description:
        "Fresh Tulsi leaves and other sacred herbs for funeral rituals.",
      longDescription:
        "Fresh Tulsi (Holy Basil) leaves and other sacred herbs used in funeral ceremonies. Essential for placing in the mouth of the departed as per tradition.",
      location: "Local Delivery",
      price: "199",
      rating: 4.7,
      reviews: 145,
      image: funerlsamagri,
      features: ["Fresh Tulsi", "Sacred Herbs", "Same Day", "Ritual Ready"],
      coordinatorName: "Vrinda Devi",
      experience: "10+ years",
      responseTime: "2 hours",
      contactNumber: "+91 98765 43215",
      whatsappNumber: "+91 98765 43215",
      alternateNumber: "+91 99887 66549",

      quantity: "100 leaves",
      includes: [
        "Tulsi Leaves",
        "Bel Patra",
        "Durva Grass",
        "Sandalwood Paste",
      ],
    },
    {
      id: 7,
      name: "Copper & Brass Utensils (तांबा-पीतल के बर्तन)",
      icon: GiFireBowl,
      description:
        "Traditional copper and brass utensils for funeral rituals and offerings.",
      longDescription:
        "Pure copper and brass utensils specifically for funeral ceremonies. Includes kalash, thali, diya, and other ritual items. Sanctified and ready to use.",
      location: "Pan India",
      price: "1,999",
      rating: 4.8,
      reviews: 98,
      image: funerlsamagri,
      features: ["Pure Copper", "Brass Items", "Ritual Set", "Sanctified"],
      coordinatorName: "Sunder Lal",
      experience: "30+ years",
      responseTime: "6 hours",
      contactNumber: "+91 98765 43216",
      whatsappNumber: "+91 98765 43216",
      alternateNumber: "+91 99887 66548",

      setIncludes: ["Kalash", "Thali", "Diya", "Lota", "Chamach"],
    },
    {
      id: 8,
      name: "Complete Funeral Kit (संपूर्ण सामग्री किट)",
      icon: GiFlowerStar,
      description:
        "All-in-one funeral samagri kit with everything needed for last rites.",
      longDescription:
        "Complete funeral kit containing all essential items for Hindu last rites. Includes wood, ghee, camphor, flowers, kafan, ganga jal, and all ritual items. Delivered together for convenience.",
      location: "Pan India",
      price: "5,999",
      rating: 4.9,
      reviews: 234,
      image: funerlsamagri,
      features: [
        "Complete Set",
        "All Items Included",
        "Ready to Use",
        "Doorstep Delivery",
      ],
      coordinatorName: "Moksh Das",
      experience: "22+ years",
      responseTime: "3 hours",
      contactNumber: "+91 98765 43217",
      whatsappNumber: "+91 98765 43217",
      alternateNumber: "+91 99887 66547",
      languages: " ",
      kitIncludes: [
        "Wood (50kg)",
        "Ghee (2kg)",
        "Camphor",
        "Flower Garlands",
        "Kafan",
        "Ganga Jal",
        "Tulsi Leaves",
        "Copper Utensils",
        "Agarbatti",
        "Matchbox",
      ],
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
            src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Funeral Samagri"
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
              <GiIncense className="text-2xl" />
              <span className="text-sm tracking-widest">
                ॐ FUNERAL SAMAGRI ॐ • अंतिम संस्कार सामग्री
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              Funeral Samagri Services
              <span className="block text-xl md:text-2xl font-light text-[#F5E9D9] mt-3">
                Complete Funeral Supplies for Last Rites
              </span>
            </h1>

            <p className="text-base md:text-lg text-white mb-6 max-w-2xl mx-auto">
              All essential items for funeral ceremonies delivered to your
              doorstep. Pure, sanctified, and ready-to-use samagri as per
              religious traditions.
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
                <div className="text-2xl text-white">10K+</div>
                <div className="text-sm text-[#F5E9D9]">Families Served</div>
              </div>
              <div>
                <div className="text-2xl text-white">100%</div>
                <div className="text-sm text-[#F5E9D9]">Pure Products</div>
              </div>
              <div>
                <div className="text-2xl text-white">24/7</div>
                <div className="text-sm text-[#F5E9D9]">Delivery</div>
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
            <GiIncense className="w-full h-full text-[#8B5E3C]" />
          </div>

          <div className="relative">
            <span className="text-[#C89B6D] tracking-widest text-sm">
              ॐ FUNERAL SAMAGRI ॐ
            </span>

            <h2 className="text-3xl md:text-4xl font-serif text-[#5A3E2B] mt-3 mb-4">
              Complete Funeral Supplies
              <span className="block text-[#8B5E3C]">for Last Rites</span>
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-[#C89B6D]"></div>
              <GiStarSwirl className="text-xl text-[#C89B6D]" />
              <div className="w-10 h-px bg-[#C89B6D]"></div>
            </div>

            <p className="text-sm text-[#7B5E47] max-w-2xl mx-auto">
              All essential items for funeral ceremonies, sourced with purity
              and delivered with respect. Traditional samagri as per Hindu
              rites.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {furalSamagriServices.map((service) => {
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
                      <span className="truncate">{service.contactNumber}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-[#7B5E47]">
                      <FaWhatsapp className="text-[#25D366] text-[10px]" />
                      <span className="truncate">{service.whatsappNumber}</span>
                    </div>
                  </div>

                  {/* Quantity/Weight and Price */}
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
              Why Choose Our Funeral Samagri?
            </h2>
            <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: MdVerified,
                title: "100% Pure",
                desc: "Authentic and pure ritual items",
              },
              {
                icon: FaClock,
                title: "24/7 Delivery",
                desc: "Round-the-clock emergency service",
              },
              {
                icon: FaLeaf,
                title: "Eco-friendly",
                desc: "Environmentally conscious products",
              },
              {
                icon: FaHeart,
                title: "Respectful Service",
                desc: "Handled with dignity and care",
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
            How to Order Funeral Samagri
          </h2>
          <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full mb-4"></div>
          <p className="text-sm text-[#7B5E47] max-w-2xl mx-auto">
            Simple process to get all funeral supplies delivered
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
              title: "Tell Requirements",
              desc: "Share what samagri you need",
              icon: FaEnvelope,
            },
            {
              step: "03",
              title: "Confirm Order",
              desc: "Verify items and delivery location",
              icon: MdVerified,
            },
            {
              step: "04",
              title: "Get Delivery",
              desc: "Items delivered to cremation ground",
              icon: GiWoodPile,
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

      {/* Traditional Items Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-[#5A3E2B] mb-3">
            Traditional Funeral Items
          </h2>
          <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: GiWoodPile, name: "Wood", desc: "Sandalwood, Mango wood" },
            { icon: RiOilFill, name: "Ghee", desc: "Pure desi ghee" },
            { icon: GiCandleHolder, name: "Camphor", desc: "Premium kapur" },
            { icon: GiFlowerPot, name: "Flowers", desc: "Marigold, Roses" },
            { icon: GiWoodenDoor, name: "Kafan", desc: "Pure cotton cloth" },
            { icon: IoWater, name: "Ganga Jal", desc: "Sacred water" },
            { icon: PiLeaf, name: "Tulsi", desc: "Holy basil leaves" },
            { icon: GiFireBowl, name: "Utensils", desc: "Copper, Brass" },
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
              name: "Rajesh Gupta",
              location: "Delhi",
              text: "During our difficult time, they delivered all samagri within an hour. Pure products and respectful service. Thank you.",
              rating: 5,
            },
            {
              name: "Sunita Sharma",
              location: "Mumbai",
              text: "The complete funeral kit was very helpful. Everything was arranged perfectly. Grateful for their support.",
              rating: 5,
            },
            {
              name: "Amit Kumar",
              location: "Lucknow",
              text: "Pure Ganga Jal and proper wood for pyre. They handled everything with respect. Highly recommended.",
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
          <GiIncense className="text-5xl mx-auto mb-4 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Need Funeral Samagri Immediately?
          </h2>
          <p className="text-base md:text-lg text-white mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            We understand the urgency. Our 24/7 service ensures all funeral
            supplies reach you whenever needed. Pure, sanctified, and delivered
            with respect.
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
              <p className="text-[#F5E9D9]">Delhi NCR</p>
              <p className="font-bold">+91 98765 43210</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <p className="text-[#F5E9D9]">Mumbai</p>
              <p className="font-bold">+91 98765 43213</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <p className="text-[#F5E9D9]">24/7 Helpline</p>
              <p className="font-bold">+91 1800 123 4567</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FuralSamagriServices;
