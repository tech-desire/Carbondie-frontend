import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Grip,
  User,
  Menu,
} from "lucide-react";

// --- Cleaned data focusing only on the premium product grid ---
const navigationData = [
  {
    label: "Processors",
    title: "Processors",
    mainItems: [
      {
        name: "Intel Core i3",
        bg: "bg-blue-100",
        img: "/images/processors/intel/i3.jpg",
      },
      {
        name: "Intel Core i5",
        bg: "bg-blue-100",
        img: "/images/processors/intel/i5.jpg",
      },
      {
        name: "Intel Core i7",
        bg: "bg-blue-100",
        img: "/images/processors/intel/i7.jpg",
      },
      {
        name: "Intel Core i9",
        bg: "bg-blue-100",
        img: "/images/processors/intel/i9.jpg",
      },
      {
        name: "Ryzen 3",
        bg: "bg-orange-100",
        img: "/images/processors/amd/ryzen 3.webp",
      },
      {
        name: "Ryzen 5",
        bg: "bg-orange-100",
        img: "/images/processors/amd/ryzen 5.jpg",
      },
      {
        name: "Ryzen 7",
        bg: "bg-orange-100",
        img: "/images/processors/amd/ryzen 7.jpg",
      },
      {
        name: "Ryzen 9",
        bg: "bg-orange-100",
        img: "/images/processors/amd/ryzen 9.jpg",
      },
    ],
  },
  {
    label: "Graphics",
    title: "Graphics Cards",
    mainItems: [
      {
        name: "RTX 4090",
        bg: "bg-green-50",
        img: "/images/graphics/rtx-4090.jpg",
      },
      {
        name: "RX 7900 XTX",
        bg: "bg-red-50",
        img: "/images/graphics/rx-7900.jpg",
      },
      {
        name: "RTX 4080",
        bg: "bg-green-50",
        img: "/images/graphics/rtx-4080.jpg",
      },
      {
        name: "RX 7800 XT",
        bg: "bg-red-50",
        img: "/images/graphics/rx-7800.jpg",
      },
    ],
  },
  {
    label: "Storage",
    title: "Storage Solutions",
    mainItems: [
      {
        name: "2TB NVMe Gen4",
        bg: "bg-slate-100",
        img: "/images/storage/nvme.jpg",
      },
      {
        name: "4TB SATA SSD",
        bg: "bg-slate-100",
        img: "/images/storage/ssd.jpg",
      },
      {
        name: "8TB HDD",
        bg: "bg-slate-100",
        img: "/images/storage/hdd.jpg",
      },
    ],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const activeData = navigationData.find((nav) => nav.label === activeMenu);

  return (
    <div
      className="  w-full font-sans flex justify-center "
      // onMouseLeave={() => setActiveMenu(null)}
    >
      {/* --- Main Top Navbar --- */}
      <header className="relative z-50 flex  h-[68px] w-[1200px] justify-center items-center bg-white px-4 md:px-6 s">
        {/* Mobile Hamburger */}
        <button
          className="mr-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo */}
        <a href="/" className="mr-8 flex shrink-0 items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
            G
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigationData.map((item) => (
            <button
              key={item.label}
              onMouseEnter={() => setActiveMenu(item.label)}
              className={`rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors ${
                activeMenu === item.label
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/support"
            className="rounded-full px-5 py-2.5 text-[15px] font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            onMouseEnter={() => setActiveMenu(null)}
          >
            Support
          </a>
        </nav>

        {/* Right Utility Icons */}
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors">
            <Grip className="h-5 w-5" />
          </button>
          <button className="ml-2 h-9 w-9 rounded-full bg-slate-100 overflow-hidden border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-center">
            <User className="h-5 w-5 text-slate-500" />
          </button>
        </div>
      </header>

      {/* --- Desktop Mega Menu Dropdown --- */}
      {activeData && (
        <div className="absolute left-0 top-[68px] z-40 w-full animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="mx-auto w-full max-w-[1200px] px-2 py-8 ">
            
            {/* Product Cards Grid - Clean, no sidebars */}
            <div className="flex flex-wrap justify-evenly">
              {activeData.mainItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group flex flex-col w-[120px] rounded-2xl bg-slate-50"
                >
                  {/* Rounded Image Container */}
                  <div
                    className={`h-[120px] w-full rounded-2xl flex items-center justify-center overflow-hidden transition-transform duration-300 ease-out group-hover:scale-[1.03] ${item.bg} `}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="object-contain h-[71%]  mix-blend-multiply"
                      // mix-blend-multiply helps images with white backgrounds blend into the colored div
                    />
                  </div>
                  {/* Clean Text Below */}
                  <span className=" p-2 text-[13px] font-medium text-slate-800  text-center group-hover:text-slate-900 transition-colors ">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- Mobile Menu Drawer --- */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="relative w-[85%] max-w-[320px] bg-white h-full shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="p-4 border-b border-slate-100 flex items-center">
              <button 
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100"
                onClick={() => setIsMobileOpen(false)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                G
              </div>
            </div>
            <nav className="flex flex-col p-4 gap-2">
              {navigationData.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="px-4 py-3 text-[17px] font-medium text-slate-800 rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-slate-100 my-2 mx-4" />
              <a 
                href="#" 
                className="px-4 py-3 text-[17px] font-medium text-slate-800 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                Support
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}