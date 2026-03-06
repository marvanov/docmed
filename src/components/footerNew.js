"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Stethoscope, Mail, Phone, MapPin, ChevronUp, Clock } from "lucide-react";

export default function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);
  // const footerRef = useRef < HTMLElement > (null);
  const footerRef = useRef(null);
  // Отслеживаем скролл для автоматического разворачивания
  useEffect(() => {
    const handleScroll = () => {
      // Вычисляем, достигли ли мы конца страницы (с небольшим запасом в 50px)
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.body.offsetHeight;
      if (documentHeight - scrollPosition <= 50) setIsExpanded(true);
      else setIsExpanded(false);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Функция для скролла в самый низ при клике на свернутый футер
  const scrollToBottom = () => {
    if (!isExpanded) window.scrollTo({ top: document.body.offsetHeight, behavior: "smooth", });
  };

  return (
    <>
      <div className="h-[650px] md:h-[350px] w-full pointer-events-none" aria-hidden="true" />

      <motion.footer
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full bg-slate-950/90 text-slate-300 z-40 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col"
        initial={false}
        animate={{ height: isExpanded ? "auto" : "72px" }}
        transition={{ duration: 0.8, ease:[0.32, 0.72, 0, 1] }}>

        {/* МИНИМАЛИСТИЧНЫЙ ВИД */}
        <div onClick={scrollToBottom}
          className={`absolute top-0 left-0 w-full h-[72px] px-6 md:px-12 flex items-center justify-between cursor-pointer hover:bg-slate-800/50 transition-colors duration-300 z-10 ${isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <div className="flex items-center gap-2">
            <Stethoscope size={24} className="text-teal-500" />
            <span className="font-serif text-xl text-white font-bold tracking-tight">
              Докмед
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <span className="flex items-center gap-2 text-slate-400">
              <Clock size={16} className="text-teal-500" />
              Пн-Пт: 10:00 - 18:00
            </span>
            <span className="flex items-center gap-2 text-white font-medium">
              <Phone size={16} className="text-teal-500" />
              +7 (994) 140-19-03
            </span>
          </div>

          <div className="flex items-center gap-2 text-teal-400 text-sm font-medium">
            <span className="hidden sm:inline">Развернуть</span>
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} >
              <ChevronUp size={20} />
            </motion.div>
          </div>
        </div>

        {/* РАЗВЕРНУТЫЙ ВИД */}
        <div className={`pt-16 pb-12 px-6 md:px-12 w-full mx-auto transition-opacity duration-500 delay-100 ${isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          {/* ИЗМЕНЕНО: 4 колонки на больших экранах вместо 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* 1. Брендинг */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-3 text-white">
                {/* <div className="bg-white/10 p-1.5 rounded-xl backdrop-blur-sm"> */}
                  <img src="/logo.png" alt="Докмед" className="w-10 h-10 object-contain" />
                {/* </div> */}
                <span className="font-serif text-3xl font-bold tracking-tight">Докмед</span>
              </Link>
              <p className="text-slate-400 text-sm">Здоровье в надёжных руках: опытный терапевт в Вашем городе.</p>
            </div>

            {/* 2. Навигация */}
            <div>
              <h3 className="text-white font-medium text-lg mb-4">Пациентам</h3>
              <ul className="space-y-3 text-sm">
                {['Главная', 'Бесплатная помощь', 'Контакты', 'Для слабовидящих'].map((item) => (
                  <li key={item}><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>

            {/* 3. ДОБАВЛЕНО: Партнеры / ОМС */}
            <div>
              <h3 className="text-white font-medium text-lg mb-4">Партнеры</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://www.sogaz-med.ru/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                    СОГАЗ-ОМС
                  </a>
                </li>
                <li>
                  <a href="https://www.khfoms.ru/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                    Хабаровский краевой ФОМС
                  </a>
                </li>
              </ul>
            </div>

            {/* 4. Контакты */}
            <div>
              <h3 className="text-white font-medium text-lg mb-4">Контакты</h3>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-start gap-3 hover:text-white transition-colors">
                  <MapPin size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>г. Советская Гавань, <br />ул. Ленина, д.21</span>
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={18} className="text-teal-500 flex-shrink-0" />
                  <a href="tel:+79941401903">+7 (994) 140-19-03</a>
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={18} className="text-teal-500 flex-shrink-0" />
                  <a href="mailto:sovgav@list.ru">sovgav@list.ru</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Копирайт и ссылка на разработчика */}
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4 text-center md:text-left">
            <div className="flex flex-col gap-1">
              <p>© {new Date().getFullYear()} ООО "Докмед". ОГРН 1242700016118.</p>
              <p>
                Разработка сайта — <a href="https://ruslan.marvanov.ru" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">Бизнес-софт</a>
                 {/* underline decoration-slate-700 underline-offset-4 */}
              </p>
            </div>
            <p className="px-4 py-2 bg-slate-800/50 rounded-lg text-slate-400">
              Лицензия № Л041-01189-27/03100104 от 02.09.2025
            </p>
          </div>
        </div>
      </motion.footer>
    </>
  );
}