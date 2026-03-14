"use client";
import { useState } from "react";
import Topbar from "../topbar/Topbar";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Image from "next/image";
import {
  GiAmbulance,
  GiHeartPlus,
  GiMedicalPack,
  GiHealing,
  GiStarSwirl,
  GiHealthPotion,
  GiLifeSupport,
} from "react-icons/gi";
import {
  FaMapMarkerAlt,
  FaStar,
  FaQuoteLeft,
  FaPhoneAlt,
  FaClock,
  FaShieldAlt,
  FaHeartbeat,
  FaSyringe,
  FaHospital,
} from "react-icons/fa";
import {
  MdVerified,
  MdLocalHospital,
  MdEmergency,
  MdMedicalServices,
} from "react-icons/md";
import { PiFlowerLotus } from "react-icons/pi";
import { TbAmbulance } from "react-icons/tb";
import { BsSuitHeartFill, BsDroplet } from "react-icons/bs";
import { IoMedkit } from "react-icons/io5";

function AmbulanceServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] =
    useState(null);

  // Local ambulance image path
  const ambulanceImagePath = "/assets/ambulance.avif";

  const ambulanceServices = [
    {
      id: 1,
      name: "Basic Life Support (BLS)",
      icon: GiAmbulance,
      description:
        "Fully equipped ambulance with basic life support equipment and trained staff",
      longDescription:
        "Basic Life Support ambulance equipped with essential medical equipment, oxygen cylinder, stretcher, and trained paramedics for non-emergency patient transport.",
      location: "Available 24/7",
      price: "1,999",
      rating: 4.8,
      reviews: 245,
      image: ambulanceImagePath,
      features: [
        "Oxygen Cylinder",
        "Stretcher",
        "First Aid Kit",
        "Trained Staff",
      ],
      driverName: "Rajesh Kumar",
      experience: "8+ years",
      responseTime: "30 mins",
      contactNumber: "+91 98765 43210",
    },
    {
      id: 2,
      name: "Advanced Life Support (ALS)",
      icon: GiHeartPlus,
      description:
        "ICU on wheels with ventilator, defibrillator, and emergency medications",
      longDescription:
        "Advanced Life Support ambulance equipped with ventilator, defibrillator, cardiac monitor, emergency medications, and critical care paramedics.",
      location: "Available 24/7",
      price: "3,999",
      rating: 4.9,
      reviews: 156,
      image: ambulanceImagePath,
      features: [
        "Ventilator",
        "Defibrillator",
        "Cardiac Monitor",
        "Emergency Meds",
      ],
      driverName: "Suresh Singh",
      experience: "12+ years",
      responseTime: "25 mins",
      contactNumber: "+91 98765 43211",
    },
    {
      id: 3,
      name: "Patient Transport Vehicle",
      icon: IoMedkit,
      description:
        "Comfortable transport for non-emergency patients with basic medical support",
      longDescription:
        "Comfortable vehicle designed for non-emergency patient transport, ideal for hospital discharges, check-ups, and routine medical visits.",
      location: "Available 24/7",
      price: "1,499",
      rating: 4.7,
      reviews: 189,
      image: ambulanceImagePath,
      features: ["Comfortable Seating", "AC", "Basic Medical Kit", "Attendant"],
      driverName: "Mohan Das",
      experience: "6+ years",
      responseTime: "40 mins",
      contactNumber: "+91 98765 43212",
    },
    {
      id: 4,
      name: "Cardiac Care Ambulance",
      icon: FaHeartbeat,
      description:
        "Specialized ambulance for heart patients with cardiac monitoring equipment",
      longDescription:
        "Specialized cardiac care ambulance with ECG monitor, defibrillator, cardiac emergency medications, and trained cardiac care technicians.",
      location: "Available 24/7",
      price: "4,500",
      rating: 4.9,
      reviews: 112,
      image: ambulanceImagePath,
      features: [
        "ECG Monitor",
        "Defibrillator",
        "Cardiac Meds",
        "Oxygen Support",
      ],
      driverName: "Prakash Sharma",
      experience: "10+ years",
      responseTime: "20 mins",
      contactNumber: "+91 98765 43213",
    },
    {
      id: 5,
      name: "Neonatal Ambulance",
      icon: GiHealing,
      description:
        "Specialized ambulance for newborns with incubator and pediatric equipment",
      longDescription:
        "Specially designed ambulance for newborns with incubator, pediatric ventilator, and trained neonatal care specialists.",
      location: "Available 24/7",
      price: "5,999",
      rating: 4.9,
      reviews: 78,
      image: ambulanceImagePath,
      features: [
        "Incubator",
        "Pediatric Ventilator",
        "Warmers",
        "Neonatal Meds",
      ],
      driverName: "Anita Devi",
      experience: "9+ years",
      responseTime: "35 mins",
      contactNumber: "+91 98765 43214",
    },
    {
      id: 6,
      name: "Air Ambulance",
      icon: GiLifeSupport,
      description:
        "Emergency air transport with complete medical team and equipment",
      longDescription:
        "Air ambulance service for critical patients requiring immediate transport across cities or countries. Includes medical team and full ICU setup.",
      location: "Pan India",
      price: "Call for Quote",
      rating: 4.8,
      reviews: 45,
      image: ambulanceImagePath,
      features: [
        "ICU Setup",
        "Medical Team",
        "Ventilator",
        "International Transfer",
      ],
      driverName: "Captain Verma",
      experience: "15+ years",
      responseTime: "2 hours",
      contactNumber: "+91 98765 43215",
    },
    {
      id: 7,
      name: "Dead Body Freezer Van",
      icon: GiMedicalPack,
      description:
        "Respectful and dignified transport with proper preservation facilities",
      longDescription:
        "Specialized vehicle for dignified transport of deceased with proper cold preservation facilities and respectful handling.",
      location: "Available 24/7",
      price: "2,999",
      rating: 4.7,
      reviews: 98,
      image: ambulanceImagePath,
      features: [
        "Cold Storage",
        "Respectful Handling",
        "Clean Vehicle",
        "Documentation Help",
      ],
      driverName: "Gopal Singh",
      experience: "7+ years",
      responseTime: "45 mins",
      contactNumber: "+91 98765 43216",
    },
    {
      id: 8,
      name: "Emergency Response Vehicle",
      icon: TbAmbulance,
      description: "Rapid response vehicle for immediate medical emergencies",
      longDescription:
        "Quick response vehicle for emergency situations with paramedics and essential life support equipment for immediate medical assistance.",
      location: "Available 24/7",
      price: "2,500",
      rating: 4.9,
      reviews: 234,
      image: ambulanceImagePath,
      features: ["Rapid Response", "Paramedics", "Emergency Meds", "First Aid"],
      driverName: "Vikram Rathore",
      experience: "11+ years",
      responseTime: "15 mins",
      contactNumber: "+91 98765 43217",
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
              <MdEmergency className="text-2xl" />
              <span className="text-sm tracking-widest">
                24/7 EMERGENCY SERVICES
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              Ambulance Services
              <span className="block text-xl md:text-2xl font-light text-[#F5E9D9] mt-3">
                Rapid Response Medical Transport with Care
              </span>
            </h1>

            <p className="text-base md:text-lg text-white mb-6 max-w-2xl mx-auto">
              Book well-equipped ambulances with trained medical staff for
              emergency and non-emergency patient transport. Available 24/7 for
              your medical needs.
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
                <div className="text-2xl text-white">50+</div>
                <div className="text-sm text-[#F5E9D9]">Ambulance Fleet</div>
              </div>
              <div>
                <div className="text-2xl text-white">15+</div>
                <div className="text-sm text-[#F5E9D9]">Cities Covered</div>
              </div>
              <div>
                <div className="text-2xl text-white">10K+</div>
                <div className="text-sm text-[#F5E9D9]">Lives Saved</div>
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
            <MdLocalHospital className="w-full h-full text-[#8B5E3C]" />
          </div>

          <div className="relative">
            <span className="text-[#C89B6D] tracking-widest text-sm">
              ॐ MEDICAL SERVICES ॐ
            </span>

            <h2 className="text-3xl md:text-4xl font-serif text-[#5A3E2B] mt-3 mb-4">
              Well-Equipped Ambulances with
              <span className="block text-[#8B5E3C]">
                Trained Medical Staff
              </span>
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-[#C89B6D]"></div>
              <GiStarSwirl className="text-xl text-[#C89B6D]" />
              <div className="w-10 h-px bg-[#C89B6D]"></div>
            </div>

            <p className="text-sm text-[#7B5E47] max-w-2xl mx-auto">
              Choose from our comprehensive range of ambulance services, each
              equipped with modern medical facilities and staffed by experienced
              professionals.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ambulanceServices.map((service) => {
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

                  {/* Response Time Badge */}
                  <div className="absolute bottom-2 right-2 z-20 bg-[#8B5E3C]/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    <span className="text-white text-[10px] font-medium">
                      {service.responseTime}
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

                  {/* Driver Info */}
                  <div className="flex items-center gap-1.5 mb-2 p-1.5 bg-[#FDF8F2] rounded-lg">
                    <div className="w-7 h-7 rounded-full bg-[#C89B6D] flex items-center justify-center flex-shrink-0">
                      <FaShieldAlt className="text-white text-sm" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-[#5A3E2B] truncate">
                        {service.driverName}
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
                      onClick={() => handleEmergencyCall(service.contactNumber)}
                      className="flex-1 px-1.5 py-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#A9744F] text-white rounded-lg text-[10px] hover:shadow-sm transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-1"
                    >
                      <FaPhoneAlt className="text-[8px]" />
                      Call Now
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
              Why Choose Moksha Ambulance?
            </h2>
            <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: MdVerified,
                title: "Verified Fleet",
                desc: "All ambulances are well-maintained and regularly inspected",
              },
              {
                icon: FaClock,
                title: "24/7 Availability",
                desc: "Round-the-clock service for all your medical transport needs",
              },
              {
                icon: BsSuitHeartFill,
                title: "Trained Staff",
                desc: "Experienced paramedics and drivers for patient care",
              },
              {
                icon: MdMedicalServices,
                title: "Modern Equipment",
                desc: "Latest medical equipment in all our ambulances",
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
            What Our Patients Say
          </h2>
          <div className="w-16 h-0.5 bg-[#C89B6D] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "Ramesh Gupta",
              location: "Delhi",
              text: "Quick response time and very professional staff. The ambulance arrived within 15 minutes and the paramedics were very caring.",
              rating: 5,
            },
            {
              name: "Sunita Sharma",
              location: "Mumbai",
              text: "Used their patient transport service for my mother's hospital visit. Very comfortable and affordable. Highly recommended!",
              rating: 5,
            },
            {
              name: "Anil Patel",
              location: "Ahmedabad",
              text: "The ALS ambulance saved my father's life during a cardiac emergency. Grateful for their prompt service and care.",
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
          <div className="absolute inset-0 bg-[url('/images/ambulance-pattern.png')] bg-repeat opacity-10"></div>
        </div>
        <div className="absolute inset-0"></div>

        <div className="relative max-w-4xl mx-auto text-center px-6">
          <MdEmergency className="text-5xl mx-auto mb-4 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Need Emergency Medical Transport?
          </h2>
          <p className="text-base md:text-lg text-white mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Our ambulances are available 24/7 with trained medical staff. Don't
            wait in emergency situations. Call us now for immediate assistance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#8B5E3C] rounded-lg font-medium text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <FaPhoneAlt />
              Call Emergency
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium text-base hover:bg-white hover:text-[#8B5E3C] transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AmbulanceServices;
