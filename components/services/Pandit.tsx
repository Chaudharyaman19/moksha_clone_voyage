"use client";
import { useState } from "react";
import Topbar from "../topbar/Topbar";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Image from "next/image";
import {
  GiCandleFlame,
  GiGraveFlowers,
  GiFireplace,
  GiHouse,
  GiBookCover,
  GiRing,
  GiLotus,
  GiPrayerBeads,
  GiStarSwirl,
} from "react-icons/gi";
import { FaMapMarkerAlt, FaStar, FaQuoteLeft } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { PiFlowerLotus } from "react-icons/pi";
import { TbDropletHeart } from "react-icons/tb";

function MokshaGallery() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] =
    useState(null);

  const grihaPraveshImagePath = "/assets/grahpravesh.jpg";

  const panditServices = [
    {
      id: 1,
      name: "Asthi Visarjan",
      icon: TbDropletHeart,
      description:
        "Sacred immersion of ashes in holy rivers with complete Vedic rituals",
      longDescription:
        "Perform the final sacred ritual for your loved ones at the holiest ghats. Our experienced pandits guide you through every step of this spiritual journey.",
      location: "Haridwar, Rishikesh, Varanasi",
      price: "5,500",
      rating: 4.9,
      reviews: 128,
      image: grihaPraveshImagePath,
      features: ["Vedic Mantras", "Holy Dip", "Pind Daan", "Brahmin Bhoj"],
      panditName: "Pandit Ramesh Sharma",
      experience: "15+ years",
    },
    {
      id: 2,
      name: "Pind Daan",
      icon: GiLotus,
      description: "Offering prayers to ancestors for peace of departed souls",
      longDescription:
        "A sacred ritual to honor your ancestors and ensure their souls attain moksha. Performed at the most sacred sites with authentic Vedic procedures.",
      location: "Gaya, Varanasi, Prayagraj",
      price: "4,500",
      rating: 4.8,
      reviews: 156,
      image: grihaPraveshImagePath,
      features: [
        "Tarpan",
        "Pind Offering",
        "Vedic Chanting",
        "Ancestral Blessings",
      ],
      panditName: "Pandit Suresh Tiwari",
      experience: "12+ years",
    },
    {
      id: 3,
      name: "Shraddh Ceremony",
      icon: GiCandleFlame,
      description:
        "Annual ancestral ritual to honor and remember departed family members",
      longDescription:
        "Annual ceremony performed during Pitru Paksha or death anniversary to honor ancestors and seek their blessings.",
      location: "At your home or holy site",
      price: "3,999",
      rating: 4.7,
      reviews: 98,
      image: grihaPraveshImagePath,
      features: ["Pind Daan", "Tarpan", "Brahmin Bhoj", "Daan"],
      panditName: "Pandit Rajesh Mishra",
      experience: "10+ years",
    },
    {
      id: 4,
      name: "Antim Sanskar Puja",
      icon: GiGraveFlowers,
      description: "Complete funeral rites and final farewell ceremonies",
      longDescription:
        "Comprehensive last rites ceremony performed with dignity and proper Vedic rituals to ensure the soul's peaceful journey.",
      location: "Local crematorium or home",
      price: "6,500",
      rating: 4.9,
      reviews: 87,
      image: grihaPraveshImagePath,
      features: ["Mukhagni", "Asthi Collection", "Pind Daan", "Shanti Path"],
      panditName: "Pandit Mohan Joshi",
      experience: "20+ years",
    },
    {
      id: 5,
      name: "Havan / Yagya",
      icon: GiFireplace,
      description:
        "Sacred fire ceremony for purification and positive energies",
      longDescription:
        "Purify your home or workplace with sacred fire ceremonies. Removes negative energies and brings prosperity and happiness.",
      location: "Your preferred location",
      price: "3,500",
      rating: 4.8,
      reviews: 245,
      image: grihaPraveshImagePath,
      features: [
        "Agni Aahuti",
        "Mantra Chanting",
        "Hawan Samagri",
        "Purnahuti",
      ],
      panditName: "Pandit Vikas Dwivedi",
      experience: "8+ years",
    },
    {
      id: 6,
      name: "Griha Pravesh Puja",
      icon: GiHouse,
      description: "Vastu-compliant house warming ceremony for new beginnings",
      longDescription:
        "Bless your new home with positive energy. Complete Vastu-compliant Griha Pravesh ceremony.",
      location: "Your new home",
      price: "4,200",
      rating: 4.9,
      reviews: 312,
      image: grihaPraveshImagePath,
      features: [
        "Vastu Shanti",
        "Ganesh Puja",
        "Navagraha Puja",
        "Kalash Sthapana",
      ],
      panditName: "Pandit Anil Shukla",
      experience: "18+ years",
    },
    {
      id: 7,
      name: "Satyanarayan Katha",
      icon: GiBookCover,
      description:
        "Narration of Lord Vishnu's stories for prosperity and happiness",
      longDescription:
        "Listen to the sacred tales of Lord Vishnu for prosperity and fulfillment of wishes.",
      location: "Your home or community hall",
      price: "3,200",
      rating: 4.7,
      reviews: 178,
      image: grihaPraveshImagePath,
      features: ["Katha Vachan", "Aarti", "Prasad", "Vishnu Sahasranam"],
      panditName: "Pandit Deepak Pathak",
      experience: "14+ years",
    },
    {
      id: 8,
      name: "Marriage Puja",
      icon: GiRing,
      description: "Complete Vedic wedding rituals with experienced pandits",
      longDescription:
        "Traditional Vedic wedding ceremony performed by expert pandits from Ganesh Puja to Saptapadi.",
      location: "Wedding venue or home",
      price: "8,999",
      rating: 5.0,
      reviews: 456,
      image: grihaPraveshImagePath,
      features: ["Ganesh Puja", "Kanyadaan", "Saptapadi", "Mangalsutra"],
      panditName: "Pandit Dinesh Upadhyay",
      experience: "25+ years",
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

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      <Topbar />
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={grihaPraveshImagePath}
            alt="Pandit Services Hero Background"
            fill
            className="object-conver"
            priority
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
              <PiFlowerLotus className="text-2xl" />
              <span className="text-sm tracking-widest">श्री गणेशाय नमः</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              Priest Services
              <span className="block text-xl md:text-2xl font-light text-[#F5E9D9] mt-3">
                Traditional Vedic Rituals by Experienced Pandits
              </span>
            </h1>

            <p className="text-base md:text-lg text-white mb-6 max-w-2xl mx-auto">
              Book verified pandits for authentic Hindu ceremonies performed
              with proper Vedic traditions and rituals at your preferred
              location.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              <div>
                <div className="text-2xl text-white">50+</div>
                <div className="text-sm text-[#F5E9D9]">Expert Pandits</div>
              </div>
              <div>
                <div className="text-2xl text-white">15+</div>
                <div className="text-sm text-[#F5E9D9]">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl text-white">10K+</div>
                <div className="text-sm text-[#F5E9D9]">Happy Families</div>
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
            <PiFlowerLotus className="w-full h-full text-[#8B5E3C]" />
          </div>

          <div className="relative">
            <span className="text-[#C89B6D] tracking-widest text-sm">
              ॐ OUR SERVICES ॐ
            </span>

            <h2 className="text-3xl md:text-4xl font-serif text-[#5A3E2B] mt-3 mb-4">
              Sacred Rituals Performed with
              <span className="block text-[#8B5E3C]">Vedic Precision</span>
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-[#C89B6D]"></div>
              <GiStarSwirl className="text-xl text-[#C89B6D]" />
              <div className="w-10 h-px bg-[#C89B6D]"></div>
            </div>

            <p className="text-sm text-[#7B5E47] max-w-2xl mx-auto">
              Choose from our comprehensive range of pandit services, each
              performed with authentic Vedic rituals by experienced and verified
              pandits.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {panditServices.map((service) => {
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

                  {/* Pandit Info */}
                  <div className="flex items-center gap-1.5 mb-2 p-1.5 bg-[#FDF8F2] rounded-lg">
                    <div className="w-7 h-7 rounded-full bg-[#C89B6D] flex items-center justify-center flex-shrink-0">
                      <GiPrayerBeads className="text-white text-sm" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-[#5A3E2B] truncate">
                        {service.panditName}
                      </p>
                      <p className="text-[10px] text-[#7B5E47]">
                        {service.experience}
                      </p>
                    </div>
                    <MdVerified className="text-[#C89B6D] text-sm flex-shrink-0" />
                  </div>

                  {/* Location and Price */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-[10px] text-[#7B5E47]">
                      <FaMapMarkerAlt className="text-[#C89B6D] text-[10px]" />
                      <span className="truncate max-w-[90px]">
                        {service.location}
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
                      onClick={() => handleBookNow(service)}
                      className="flex-1 px-1.5 py-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#A9744F] text-white rounded-lg text-[10px] hover:shadow-sm transform hover:scale-105 transition-all duration-300"
                    >
                      Book Now
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
              Why Choose Moksha Voyage?
            </h2>
            <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: MdVerified,
                title: "Verified Pandits",
                desc: "All pandits are verified for authenticity and experience",
              },
              {
                icon: GiPrayerBeads,
                title: "Vedic Rituals",
                desc: "All ceremonies performed as per traditional Vedic methods",
              },
              {
                icon: FaStar,
                title: "Satisfaction Guaranteed",
                desc: "10,000+ families have trusted us",
              },
              {
                icon: PiFlowerLotus,
                title: "Sacred Locations",
                desc: "Services at holy sites across India",
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

      {/* Testimonials Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-[#5A3E2B] mb-3">
            What Our Devotees Say
          </h2>
          <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "Rajesh Kumar",
              location: "Delhi",
              text: "The pandit was very knowledgeable and conducted the Griha Pravesh ceremony perfectly. Highly recommended!",
              rating: 5,
            },
            {
              name: "Priya Sharma",
              location: "Mumbai",
              text: "Thank you for arranging such an experienced pandit for my father's Shraddh ceremony. Everything was done as per rituals.",
              rating: 5,
            },
            {
              name: "Amit Patel",
              location: "Ahmedabad",
              text: "Booked Satyanarayan Katha for our family gathering. The pandit was punctual and the ceremony was beautiful.",
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
            src={grihaPraveshImagePath}
            alt="Pandit Services Background"
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-6">
          <PiFlowerLotus className="text-5xl mx-auto mb-4 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Ready to Perform Sacred Rituals?
          </h2>
          <p className="text-base md:text-lg text-white mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Book verified pandits for your religious ceremonies. Get blessings
            and perform rituals with complete Vedic authenticity.
          </p>
          <button className="px-8 py-3 bg-white text-[#8B5E3C] rounded-lg font-medium text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Book a Pandit Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MokshaGallery;
