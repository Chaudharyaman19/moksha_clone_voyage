"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  Leaf,
  Globe,
  Shield,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import mokshalogo from "../../public/assets/logoreal.jpeg";
import mokshaSevaLogo from "../../public/assets/logo Moksha Seva.png";

interface FooterProps {
  variant?: "voyage" | "seva";
}

export default function Footer({ variant = "voyage" }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 2500);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#3A2A1F] text-white">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col lg:flex-row gap-10 mb-12">
          <div className="lg:w-2/5">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-20 h-20 rounded-md bg-white p-2">
                <Image
                  src={variant === "seva" ? mokshaSevaLogo : mokshalogo}
                  alt={variant === "seva" ? "Moksha Sewa" : "Moksha Voyage"}
                  className="w-full h-full object-contain rounded"
                  priority
                />
              </div>
              <div>
                <h2 className="text-lg text-white">
                  {variant === "seva" ? "Moksha Sewa" : "Moksha Voyage"}
                </h2>
                <p className="text-xs text-white/70">
                  {variant === "seva"
                    ? "Dignified Funeral & Ritual Services"
                    : "Compassionate End-of-Life Guidance"}
                </p>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed mb-4 max-w-md">
              {variant === "seva"
                ? "Complete funeral, cremation, pandit, ambulance, hearse van, prayer hall and family support services with dignity, tradition and care."
                : "Providing respectful guidance with dignity, tradition and care for every family."}
            </p>

            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-4 h-4 text-[#E8DBC5]" />
                <h3 className="text-sm text-white">
                  {variant === "seva" ? "Request Support" : "Stay Connected"}
                </h3>
              </div>

              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={variant === "seva" ? "Family contact email" : "Your email"}
                  className="flex-1 px-3 py-2 rounded-md bg-white text-[#3A2A1F] text-sm outline-none"
                  required
                />
                <button
                  type="submit"
                  className={`px-4 py-2 rounded-md text-sm border border-white/30 hover:bg-white hover:text-[#3A2A1F] transition ${
                    subscribed
                      ? "bg-green-500 text-white border-green-500"
                      : "text-white"
                  }`}
                >
                  {subscribed ? "Done" : variant === "seva" ? "Send" : "Join"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12 text-sm">
          <div>
            <h3 className="text-sm font-medium text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white mb-3">Services</h3>
            <ul className="space-y-2 text-white/80">
              {variant === "seva" ? (
                <>
                  <li>Funeral Samagri</li>
                  <li>Pandit Service</li>
                  <li>Ambulance & Hearse Van</li>
                  <li>Prayer Hall Booking</li>
                </>
              ) : (
                <>
                  <li>Ritual Guidance</li>
                  <li>Planning Support</li>
                  <li>Documentation</li>
                  <li>24/7 Care</li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white mb-3">Contact</h3>
            <div className="space-y-2 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#E8DBC5]" />
                <span>Delhi NCR</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#E8DBC5]" />
                <span>
                  {variant === "seva" ? "info@mokshayatra.org" : "info@mokshavoyage.com"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#E8DBC5]" />
                <span>{variant === "seva" ? "+91 96549 00525" : "+91 123 456 7890"}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white mb-3">Values</h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <Heart size={14} className="text-[#E8DBC5]" /> Compassion
              </li>
              <li className="flex items-center gap-2">
                <Shield size={14} className="text-[#E8DBC5]" /> Trust
              </li>
              <li className="flex items-center gap-2">
                <Leaf size={14} className="text-[#E8DBC5]" /> Respect
              </li>
              <li className="flex items-center gap-2">
                <Globe size={14} className="text-[#E8DBC5]" /> Service
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-white/60 pt-6 border-t border-white/10">
          © {new Date().getFullYear()}{" "}
          {variant === "seva" ? "Moksha Sewa" : "Moksha Voyage"} • All rights
          reserved
        </div>
      </div>
    </footer>
  );
}
