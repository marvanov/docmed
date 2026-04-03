"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  FileText, 
  DownloadCloud, 
  CheckCircle, 
  HeartPulse, 
  AlertCircle,
  Stethoscope,
  Pill
} from "lucide-react";

export default function FreeHelpPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 pt-12 pb-24">
      
      {/* Шапка страницы */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-teal-100/40 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-600 text-white shadow-lg shadow-teal-600/30 mb-8"
          >
            <Shield size={32} />
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6 max-w-4xl mx-auto leading-tight"
          >
            Государственные гарантии <br className="hidden md:block" />
            <span className="text-teal-600">бесплатной медицинской помощи</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Информация о Территориальной программе Хабаровского края на 2026 год и на плановый период 2027 и 2028 годов. Мы работаем в рамках системы ОМС, обеспечивая доступную медицину для каждого.
          </motion.p>
        </div>
      </section>

      {/* Основной контент */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Левая колонка - Краткое содержание программы */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:col-span-2 space-y-8">
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">
                Что включает в себя программа?
              </h2>
              <p className="text-slate-600 mb-6">
                Постановление Правительства Хабаровского края гарантирует гражданам бесплатное оказание медицинской помощи при наступлении страхового случая. В рамках программы амбулаторно-поликлинического приема (работа врача-терапевта) бесплатно предоставляются:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Stethoscope size={24} className="text-teal-500" />,
                    title: "Первичная помощь",
                    desc: "Приемы, консультации и осмотры врача-терапевта участкового."
                  },
                  {
                    icon: <HeartPulse size={24} className="text-teal-500" />,
                    title: "Профилактика",
                    desc: "Диспансеризация и профилактические медицинские осмотры."
                  },
                  {
                    icon: <AlertCircle size={24} className="text-teal-500" />,
                    title: "Неотложная помощь",
                    desc: "Помощь при внезапных острых заболеваниях без явных признаков угрозы жизни."
                  },
                  {
                    icon: <Pill size={24} className="text-teal-500" />,
                    title: "Назначение лечения",
                    desc: "Выписка рецептов, оформление больничных листов и направлений к узким специалистам."
                  },
                  {
                    icon: <HeartPulse size={24} className="text-teal-500" />,
                    title: "Допплерография сердца и сосудов",
                    desc: "Ультразвуковое исследование, позволяющее оценить скорость и направление кровотока."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-teal-50 p-2 rounded-xl h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-slate-800 rounded-3xl p-8 shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4 text-teal-400">Памятка пациенту</h3>
              <ul className="space-y-4">
                {[
                  "Для получения бесплатной помощи необходимо иметь при себе паспорт, полис ОМС и СНИЛС.",
                  "Экстренная медицинская помощь оказывается бесплатно независимо от наличия полиса ОМС.",
                  "Сроки ожидания приема врача-терапевта не должны превышать 24 часов с момента обращения."
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm md:text-base leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Правая колонка - Скачивание документов */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Официальный документ</h3>
              <p className="text-sm text-slate-500 mb-8">
                Ознакомьтесь с полным текстом постановления Правительства Хабаровского края в удобном для вас формате:
              </p>

              <div className="space-y-4">
                {/* ZIP Кнопка */}
                <a href="https://ipshamgunova.ru/uploads/freemedhelp_2026-2028.zip" 
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-200 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FileText size={24} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-800 text-sm">Скачать в ZIP</p>
                      <p className="text-xs text-slate-500">Официальная копия</p>
                    </div>
                  </div>
                  <DownloadCloud size={20} className="text-slate-400 group-hover:text-teal-600" />
                </a>

                {/* PDF Кнопка */}
                {/* <a href="https://ipshamgunova.ru/uploads/freemedhelp_2025.pdf" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-200 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FileText size={24} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-800 text-sm">Скачать в PDF</p>
                      <p className="text-xs text-slate-500">Официальная копия</p>
                    </div>
                  </div>
                  <DownloadCloud size={20} className="text-slate-400 group-hover:text-teal-600" />
                </a> */}

                {/* DOCX Кнопка */}
                {/* <a href="https://ipshamgunova.ru/uploads/freemedhelp.docx"  target="_blank"  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FileText size={24} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-800 text-sm">Скачать в DOCX</p>
                      <p className="text-xs text-slate-500">Текстовый формат</p>
                    </div>
                  </div>
                  <DownloadCloud size={20} className="text-slate-400 group-hover:text-blue-600" />
                </a> */}

              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-400 text-center">
                  Документы размещены в соответствии с требованиями законодательства РФ об информировании пациентов.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}