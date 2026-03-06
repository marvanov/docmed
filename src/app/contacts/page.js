"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation, ChevronRight, HeartHandshake } from "lucide-react";

export default function ContactsPage() {
  // Настройки анимации для появления элементов
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* Декоративные фоновые элементы (из общей стилистики сайта) */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-40 pointer-events-none">
        <motion.div
          animate={{ scale:[1, 1], rotate:[0, 3, -3, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-teal-100/80 to-emerald-50/80 blur-3xl"
        />
        <div className="absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-blue-50/80 to-teal-50/80 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* Заголовок страницы */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6 shadow-sm"
          >
            <Navigation size={16} />
            <span>Как нас найти</span>
          </motion.div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Свяжитесь с <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">нами</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Мы всегда на связи и готовы помочь вам сохранить здоровье. Запишитесь на прием, уточните детали или просто задайте интересующий вас вопрос.
          </p>
        </motion.div>

        {/* Основной контент (Контакты + Карта) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Левая колонка - Карточки с контактами */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Карточка: Адрес */}
            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-100 transition-all duration-300 flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0 group-hover:-translate-y-1 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-xl mb-2">Наш адрес</h3>
                <p className="text-slate-600 text-lg leading-snug">г. Советская Гавань,<br/>ул. Ленина, д. 21</p>
              </div>
            </motion.div>

            {/* Карточка: Телефон */}
            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-100 transition-all duration-300 flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0 group-hover:-translate-y-1 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                <Phone size={28} />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-slate-800 text-xl mb-2">Телефон</h3>
                <a href="tel:+79941401903" className="text-slate-600 hover:text-teal-600 transition-colors text-xl font-medium inline-block mb-1">
                  +7 (994) 140-19-03
                </a>
                <p className="text-sm text-slate-500">Звоните для записи и консультаций</p>
              </div>
            </motion.div>

            {/* Карточка: Email */}
            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-100 transition-all duration-300 flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0 group-hover:-translate-y-1 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-xl mb-2">Email</h3>
                <a href="mailto:sovgav@list.ru" className="text-slate-600 hover:text-teal-600 transition-colors text-lg inline-block">
                  sovgav@list.ru
                </a>
              </div>
            </motion.div>

            {/* Карточка: Режим работы (Стиль акцента) */}
            <motion.div variants={itemVariants} className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-emerald-700 p-6 sm:p-8 rounded-3xl shadow-xl shadow-teal-900/10 text-white mt-1 group">
              {/* Декоративный переливающийся фон */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-out" />
              
              <div className="relative z-10 flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/20">
                  <Clock size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-white/90">Режим работы</h3>
                  <div className="space-y-2">
                    <p className="text-teal-50 font-medium text-lg">Понедельник — Воскресенье</p>
                    <p className="text-3xl font-bold font-serif tracking-wide">10:00 – 18:00</p>
                    <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20 backdrop-blur-md">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                      </span>
                      <span className="text-sm font-medium text-teal-50">Без перерывов и выходных</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Правая колонка - Интерактивная Карта */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
            className="lg:col-span-7 flex flex-col h-full"
          >
            <div className="relative w-full h-[450px] lg:h-full min-h-[550px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 border-[6px] border-white group">
              
              {/* Плейсхолдер до загрузки карты */}
              <div className="absolute inset-0 bg-slate-100 flex items-center justify-center -z-10">
                <motion.div 
                  animate={{ scale:[1, 1], opacity: [0.5, 1, 0.5] }} 
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin size={48} className="text-slate-300" />
                </motion.div>
              </div>

              {/* Iframe Яндекс.Карт */}
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=140.2955%2C48.9682&z=17&pt=140.2955%2C48.9682%2Cpm2rdm" 
                className="absolute inset-0 w-full h-full grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700" 
                frameBorder="0" 
                allowFullScreen={true}
                title="ООО Докмед на карте - г. Советская Гавань, ул. Ленина, д. 21"
              />

              {/* Плавающая плашка "Маршрут" поверх карты */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-2 left-2 right-6 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex flex-col sm:flex-row items-start sm:items-center justify-between sm:justify-start gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">Ждем вас!</p>
                    <p className="text-xs text-slate-500">Вход со стороны улицы</p>
                  </div>
                </div>
                <a 
                  href="https://yandex.ru/maps/?rtext=~48.9682,140.2955" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 text-white text-sm font-medium rounded-xl hover:bg-teal-600 transition-colors flex items-center justify-center gap-1 group/btn shadow-md"
                >
                  Построить маршрут
                  <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}