import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Grip,
  User,
  Menu,
} from "lucide-react";

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

  const activeData = navigationData.find(
    (nav) => nav.label === activeMenu,
  );

  const handleMenuEnter = (label: string) => {
    setActiveMenu(label);
  };

  const closeMenus = () => {
    setActiveMenu(null);
  };

  return (
    <div className="relative min-h-[100px] w-full font-sans">
      {/* Background overlay */}
      <div
        className={`
          fixed inset-0 z-30
          bg-black/60
          backdrop-blur-[2px]
          transition-all duration-300 ease-out
          ${
            activeData
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Main navbar container */}
      <div
        className="relative z-50 mx-auto w-full max-w-[1400px] px-3"
        onMouseLeave={closeMenus}
      >
        {/* Navbar */}
        <header
          className="
            flex h-[68px] w-full items-center rounded-3xl bg-white
            px-4 shadow-sm md:px-6
          "
        >
          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Open menu"
            className="
              mr-4 inline-flex h-10 w-10 shrink-0 items-center
              justify-center rounded-full text-slate-700
              transition-colors hover:bg-slate-100 lg:hidden
            "
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <a
            href="/"
            className="
              mr-6 flex shrink-0 items-center gap-2
              md:mr-8
            "
          >
            <div
              className="
                flex h-8 w-8 items-center justify-center
                rounded-full bg-blue-100 text-xl font-bold
                text-blue-600
              "
            >
              G
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigationData.map((item) => (
              <button
                key={item.label}
                type="button"
                onMouseEnter={() => handleMenuEnter(item.label)}
                className={`
                  relative rounded-full px-5 py-2.5 text-[15px]
                  font-medium transition-all duration-200
                  ${
                    activeMenu === item.label
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }
                `}
              >
                {item.label}
              </button>
            ))}

            {/* Support */}
            <a
              href="/support"
              onMouseEnter={closeMenus}
              className="
                rounded-full px-5 py-2.5 text-[15px] font-medium
                text-slate-600 transition-colors
                hover:bg-slate-100 hover:text-slate-900
              "
            >
              Support
            </a>
          </nav>

          {/* Right side icons */}
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="
                inline-flex h-10 w-10 items-center justify-center
                rounded-full text-slate-700 transition-colors
                hover:bg-slate-100
              "
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Cart */}
            <button
              type="button"
              aria-label="Shopping cart"
              className="
                inline-flex h-10 w-10 items-center justify-center
                rounded-full text-slate-700 transition-colors
                hover:bg-slate-100
              "
            >
              <ShoppingCart className="h-5 w-5" />
            </button>

            {/* User */}
            <button
              type="button"
              aria-label="Account"
              className="
                ml-1 flex h-9 w-9 items-center justify-center
                rounded-full border border-slate-200 bg-slate-100
                text-slate-500 transition-colors
                hover:border-slate-300 sm:ml-2
              "
            >
              <User className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Gap between navbar and mega menu */}
        <div className="h-2" />

        {/* Mega menu */}
        <div
          className={`
            absolute left-3 right-3 top-[78px] overflow-hidden
            rounded-3xl bg-white
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            transition-all duration-300 ease-out
            ${
              activeData
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }
          `}
        >
          {activeData && (
            <div className="px-6 py-7 md:px-8 md:py-8">
              {/* Product grid */}
              <div
                className="
                  grid grid-cols-2 gap-4
                  sm:grid-cols-4
                  lg:grid-cols-6
                  xl:grid-cols-8
                "
              >
                {activeData.mainItems.map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="
                      group flex min-w-0 flex-col overflow-hidden
                      rounded-2xl bg-slate-50
                      transition-all duration-300 ease-out
                      hover:bg-slate-100 hover:shadow-sm
                    "
                  >
                    {/* Product image */}
                    <div
                      className={`
                        flex h-[110px] w-full items-center
                        justify-center overflow-hidden rounded-2xl
                        ${item.bg}
                        transition-all duration-300 ease-out
                        group-hover:brightness-95
                      `}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="
                          h-[71%] max-w-full object-contain
                          mix-blend-multiply
                          transition-all duration-300 ease-out
                          group-hover:scale-[1.03]
                          group-hover:brightness-110
                        "
                      />
                    </div>

                    {/* Product name */}
                    <span
                      className="
                        flex min-h-[50px] items-center justify-center
                        p-2 text-center text-[13px] font-medium
                        leading-tight text-slate-800
                        transition-colors duration-300
                        group-hover:text-slate-950
                      "
                    >
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Mobile backdrop */}
          <div
            className="
              absolute inset-0 bg-black/40 backdrop-blur-sm
            "
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Drawer */}
          <aside
            className="
              relative h-full w-[85%] max-w-[320px]
              bg-white shadow-2xl
              animate-in slide-in-from-left duration-300
            "
          >
            {/* Drawer header */}
            <div
              className="
                flex items-center border-b border-slate-100 p-4
              "
            >
              <button
                type="button"
                aria-label="Close menu"
                className="
                  inline-flex h-10 w-10 items-center justify-center
                  rounded-full text-slate-700
                  transition-colors hover:bg-slate-100
                "
                onClick={() => setIsMobileOpen(false)}
              >
                <Menu className="h-6 w-6" />
              </button>

              <div
                className="
                  ml-2 flex h-8 w-8 items-center justify-center
                  rounded-full bg-blue-100 text-lg font-bold
                  text-blue-600
                "
              >
                G
              </div>
            </div>

            {/* Mobile navigation */}
            <nav className="flex flex-col gap-2 p-4">
              {navigationData.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  onClick={() => setIsMobileOpen(false)}
                  className="
                    rounded-2xl px-4 py-3 text-[17px]
                    font-medium text-slate-800
                    transition-colors hover:bg-slate-50
                  "
                >
                  {item.label}
                </a>
              ))}

              <div className="mx-4 my-2 h-px bg-slate-100" />

              <a
                href="/support"
                onClick={() => setIsMobileOpen(false)}
                className="
                  rounded-2xl px-4 py-3 text-[17px]
                  font-medium text-slate-800
                  transition-colors hover:bg-slate-50
                "
              >
                Support
              </a>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}