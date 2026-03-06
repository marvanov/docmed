"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Eye, Stethoscope } from "lucide-react";
import Link from "next/link";
import AccessibilityPanel from "../components/accessibilityPanel";

const navLinks = [
  { name: "Главная", href: "/" },
  { name: "Бесплатная помощь", href: "/free-help" },
  { name: "Контакты", href: "/contacts" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false); // Стейт для модалки

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-xs shadow-sm py-3" : "bg-transparent py-5"
          // isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          {/* СЛАБОЗАМЕТНАЯ ССЫЛКА РАЗРАБОТЧИКА (спрятана на мобилках, видна на десктопе в самом верху экрана) */}
          <a href="https://ruslan.marvanov.ru" target="_blank" rel="noreferrer"
            className="hidden md:block absolute top-1 right-2 text-[8px] text-slate-300 hover:text-teal-500 transition-colors uppercase tracking-widest">
            разработчик
          </a>

          {/* Логотип */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div whileHover={{ scale: 1.4, }} className="w-15 h-15 flex-shrink-0">
              <img src="/logo.png" alt="Логотип Докмед" className="w-full h-full object-contain" />
            </motion.div>
            {/* <motion.div whileHover={{ rotate: 15 }} className="text-teal-600">
              <Stethoscope size={28} />
            </motion.div> */}
            <span className="font-serif text-2xl font-bold tracking-tight text-slate-800">Докмед</span>
          </Link>


          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-teal-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Обновленная кнопка */}
            <button
              onClick={() => setAccessibilityOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-teal-600 text-teal-600 text-sm font-medium hover:bg-teal-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label="Открыть настройки для слабовидящих"
            >
              <Eye size={16} />
              <span>Для слабовидящих</span>
            </button>
          </nav>

          {/* Мобильная кнопка */}
          <button
            className="md:hidden text-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Открыть меню"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Мобильное меню */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 px-4 py-6 shadow-lg overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-slate-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                {/* Кнопка в мобильном меню */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAccessibilityOpen(true);
                  }}
                  className="flex items-center gap-2 text-teal-600 text-lg font-medium mt-4"
                >
                  <Eye size={20} />
                  Версия для слабовидящих
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Сама панель настроек */}
      <AccessibilityPanel isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />
    </>
  );
}