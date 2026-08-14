"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { useRouter, usePathname } from "next/navigation";
import {
  FaHandHoldingHeart,
  FaStar,
  FaPrayingHands,
  FaLeaf,
  FaUserCircle,
  FaBookOpen,
  FaHistory,
  FaHeart,
  FaAmbulance,
  FaPlaceOfWorship,
  FaDonate,
  FaHandsHelping,
} from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isPathActive = (path: string) => {
    if (path.startsWith("#")) return false;
    return path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);
  };
  const isItemActive = (item: { path: string; dropdown?: { path: string }[] }) =>
    item.dropdown ? item.dropdown.some((child) => isPathActive(child.path)) : isPathActive(item.path);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);
      if (currentScroll > 80 && currentScroll > lastScroll) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const bar = document.getElementById("topbar");
    if (!bar) return;

    if (hideTopBar) {
      bar.style.transform = "translateY(-100%)";
    } else {
      bar.style.transform = "translateY(0)";
    }
  }, [hideTopBar]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openDropdown &&
        !(event.target as Element).closest(".dropdown-container")
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  const handleNavigation = (path: string) => {
    setOpenDropdown(null);
    setOpen(false);

    if (path.startsWith("#")) {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push(path);
    }
  };

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <FaHandHoldingHeart />,
      type: "page",
    },
    {
      name: "About",
      path: "/about",
      icon: <FaPrayingHands />,
      type: "page",
    },
    {
      name: "Our Sewa",
      path: "#services",
      icon: <FaStar />,
      type: "dropdown",
      dropdown: [
        {
          name: "Wood & Ritual Items",
          path: "/furalservices",
          icon: <FaHandHoldingHeart />,
          type: "page",
        },

        {
          name: "Priest Support",
          path: "/panditservices",
          icon: <FaPrayingHands />,
          type: "page",
        },
        {
          name: "Ambulance",
          path: "/ambulanceservices",
          icon: <FaAmbulance />,
          type: "page",
        },
        {
          name: "Ground & Prayer Support",
          path: "/prayerhallservices",
          icon: <FaPlaceOfWorship />,
          type: "page",
        },
        {
          name: "Family Support",
          path: "/specialservices",
          icon: <FaHandsHelping />,
          type: "page",
        },

      ],
    },
    {
      name: "Blog",
      path: "/blog",
      icon: <FaBookOpen />,
      type: "page",
    },
    {
      name: "Moksha Gallery",
      path: "/mokshagallery",
      icon: <FaHeart />,
      type: "dropdown",
      dropdown: [
        {
          name: "Moksha Gallery",
          path: "/mokshagallery",
          icon: <FaLeaf />,
          type: "page",
        },
        {
          name: "Moksha Video Gallery",
          path: "/mokshavediogallery",
          icon: <FaHistory />,
          type: "page",
        },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <FaUserCircle />,
      type: "page",
    },
    {
      name: "Volunteer",
      path: "/volunteer/register",
      icon: <FaHandHoldingHeart />,
      type: "page",
    },
    {
      name: "Request Help",
      path: "/request-help",
      icon: <FaHandsHelping />,
      type: "page",
    },
    {
      name: "Donate",
      path: "/donation",
      icon: <FaDonate />,
      type: "page",
    },
  ];

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <>
      <nav
        className={`fixed ${hideTopBar ? "top-0" : "top-11"} left-0 w-full z-50 transition-all duration-150 ${scrolled
          ? "bg-white backdrop-blur-lg shadow-sm py-0"
          : "bg-white py-0 "
          } font-sans`}
      >
        <div className="max-w-7xl mx-auto px-0">
          <div className="flex items-center h-12 relative">
            <div className="absolute top-1 left-0 z-10">
              <button onClick={() => handleNavigation("/")} aria-label="Moksha Sewa home">
                <div className="w-12 h-12 sm:w-24 sm:h-24 rounded-md border border-[#D8B982] bg-white p-1.5 sm:p-2 shadow-[0_10px_28px_rgba(92,58,27,0.28)] ring-1 ring-white/80">
                  <Image
                    src="/assets/logo-moksha-seva.png"
                    alt="Moksha Sewa Logo"
                    width={96}
                    height={96}
                    priority
                    sizes="(max-width: 640px) 48px, 96px"
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>
            </div>
            <div className="hidden lg:flex items-center space-x-0 dropdown-container ml-auto h-full">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group flex items-center h-full"
                >
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`relative px-4 py-2 transition-colors duration-200 flex items-center gap-1 h-full ${isItemActive(item)
                        ? "text-[#8B6A3E]"
                        : "text-[#5A4030] hover:text-[#8B6A3E]"
                        }`}
                    >
                      <span className="font-medium">{item.name}</span>
                      <HiChevronDown
                        className={`transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""}`}
                      />
                      <span
                        aria-hidden
                        className={`absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-[#8B6A3E] transition-opacity ${isItemActive(item) ? "opacity-100" : "opacity-0"
                          }`}
                      />
                    </button>
                  ) : item.name === "Donate" ? (
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="donate-nav-sparkle group relative ml-2 flex items-center gap-1.5 overflow-hidden rounded-full border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-4 py-1.5 text-sm font-bold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
                    >
                      <span className="donate-nav-shine" aria-hidden />
                      <FaDonate className="relative z-10 h-3 w-3" />
                      <span className="relative z-10">{item.name}</span>
                      <FaStar className="donate-star donate-star-one" aria-hidden />
                      <FaStar className="donate-star donate-star-two" aria-hidden />
                    </button>
                  ) : item.name === "Request Help" ? (
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="ml-2 flex items-center gap-1.5 rounded-full bg-[#8B6A3E] px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#73532F] hover:shadow-md"
                    >
                      <FaHandsHelping className="h-3 w-3" />
                      {item.name}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.path)}
                      aria-current={isItemActive(item) ? "page" : undefined}
                      className={`relative px-4 py-2 transition-colors duration-200 flex items-center gap-1 h-full ${isItemActive(item)
                        ? "text-[#8B6A3E]"
                        : "text-[#5A4030] hover:text-[#8B6A3E]"
                        }`}
                    >
                      <span className="font-medium">{item.name}</span>
                      <span
                        aria-hidden
                        className={`absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-[#8B6A3E] transition-opacity ${isItemActive(item) ? "opacity-100" : "opacity-0"
                          }`}
                      />
                    </button>
                  )}

                  {item.dropdown && (
                    <div
                      className={`absolute left-0 top-[100%] w-64 bg-white border border-gray-200 transition-all duration-200 z-50 rounded-lg shadow-2xl ${openDropdown === item.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                        }`}
                    >
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() =>
                              handleNavigation(subItem.path)
                            }
                            aria-current={isPathActive(subItem.path) ? "page" : undefined}
                            className={`flex items-center space-x-2 w-full px-4 py-2 transition-all duration-150 ${isPathActive(subItem.path) ? "bg-[#8B6A3E]/10 text-[#8B6A3E]" : "text-[#5A4030] hover:bg-gray-50"
                              }`}
                          >
                            <span className={isPathActive(subItem.path) ? "text-[#8B6A3E] w-5" : "text-[#5A4030]/80 w-5"}>
                              {subItem.icon}
                            </span>
                            <span className={`font-medium flex-1 text-left ${isPathActive(subItem.path) ? "text-[#8B6A3E]" : "text-[#5A4030]"}`}>
                              {subItem.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#4A2F2A] ml-auto"
            >
              {open ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div
          className={`lg:hidden fixed left-0 ${hideTopBar ? "top-12" : "top-24"
            } w-full max-h-[calc(100vh-48px)] overflow-y-auto bg-white/95 backdrop-blur-xl shadow-lg z-40 font-sans`}
        >
          <div className="px-3 py-3 space-y-0.5">
            {navItems.map((item) => (
              <div key={item.name} className="dropdown-container">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-lg ${isItemActive(item) ? "bg-[#8B6A3E]/10 text-[#8B6A3E]" : "text-[#5A4030] hover:bg-gray-50"
                      }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-[15px] font-medium">
                        {item.name}
                      </span>
                    </div>
                    <HiChevronDown
                      className={`transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                ) : item.name === "Donate" ? (
                  <button
                    onClick={() => handleNavigation(item.path)}
                    aria-current={isItemActive(item) ? "page" : undefined}
                    className="donate-nav-sparkle relative flex w-full items-center space-x-2 overflow-hidden rounded-lg border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-3 py-2 text-white shadow-[0_0_18px_rgba(229,169,62,0.38)]"
                  >
                    <span className="donate-nav-shine" aria-hidden />
                    <span className="relative z-10 text-base">{item.icon}</span>
                    <span className="relative z-10 text-[15px] font-bold">{item.name}</span>
                    <FaStar className="donate-star donate-star-one" aria-hidden />
                    <FaStar className="donate-star donate-star-two" aria-hidden />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.path)}
                    aria-current={isItemActive(item) ? "page" : undefined}
                    className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg ${isItemActive(item) ? "bg-[#8B6A3E]/10 text-[#8B6A3E]" : "text-[#5A4030] hover:bg-gray-50"
                      }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="text-[15px] font-medium">{item.name}</span>
                  </button>
                )}

                {openDropdown === item.name && item.dropdown && (
                  <div className="ml-5 mt-1 space-y-0.5 bg-white rounded-lg p-1.5 border border-gray-100">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => {
                          handleNavigation(subItem.path);
                          setOpen(false);
                        }}
                        aria-current={isPathActive(subItem.path) ? "page" : undefined}
                        className={`flex items-center space-x-2 w-full px-3 py-1.5 rounded-md transition-all duration-150 ${isPathActive(subItem.path) ? "bg-[#8B6A3E]/10 text-[#8B6A3E]" : "text-[#5A4030] hover:bg-gray-100"
                          }`}
                      >
                        <span className={isPathActive(subItem.path) ? "text-[#8B6A3E]" : "text-[#5A4030]/70"}>
                          {subItem.icon}
                        </span>
                        <span className="text-[14px] font-medium">
                          {subItem.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="h-16 w-16"></div>
    </>
  );
}
