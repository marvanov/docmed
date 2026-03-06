"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeartPulse, ShieldCheck, CheckCircle2, ScanLine, Activity, ClipboardList } from "lucide-react";

import { useState } from "react";
import Link from 'next/link'
import AppointmentModal from "../components/appointmentModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 }, },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.0, ease: "easeOut" } },
  };

  // Функция для плавного скролла с учетом высоты плавающей шапки
  const scrollToAbout = () => {
    const element = document.getElementById("about-section");
    if (element) {
      const headerOffset = 100; // Отступ для шапки
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Главный экран (Hero Section) */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Декоративные фоновые элементы */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-teal-100 to-emerald-50 blur-3xl"
          />
          <div className="absolute bottom-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-blue-50 to-teal-50 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-2xl" >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
              <HeartPulse size={16} />
              <span>Ваш участковый терапевт</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl font-bold text-slate-800 leading- mb-6">
              Ваше здоровье <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                в надежных руках
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8 leading-relaxed">
              Терапия — это основа медицины. Мы проводим диагностику, профилактику и лечение широкого спектра заболеваний. Внимательный подход к каждому пациенту, без спешки и очередей.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20 flex items-center gap-2 group">
                Записаться на прием
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={scrollToAbout}
                className="px-8 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-medium hover:border-teal-600 hover:text-teal-600 transition-colors">
                Узнать больше
              </button>
            </motion.div>
          </motion.div>

          {/* изображение */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }}// initial={{ opacity: 0, }}
            animate={{ opacity: 1, scale: 1.0 }}// animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.5 }} className="relative hidden lg:block" >
            <div className="aspect-[4/5] rounded-t-full rounded-bl-full bg-slate-200 overflow-hidden relative shadow-2xl">
              <img src="hero.webp" alt="Врач общей практики" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Плавающая плашка */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-12 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-lg">Прием по ОМС</p>
                <p className="text-sm text-slate-500">Государственные гарантии</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Блок "Осмотр терапевта" (на который скроллит кнопка) */}
      <section id="about-section" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0 }} className="text-center max-w-3xl mx-auto mb-20" >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Терапевт — ваш первый шаг к выздоровлению
            </h2>
            <p className="text-lg text-slate-600">
              В медицине терапия имеет статус «королевы» наук. Это широкопрофильный специалист, к которому пациенты обращаются в первую очередь. Мы помогаем взрослым пациентам с патологиями желудочно-кишечного тракта, сердца, легких и других систем организма.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Левая колонка - Процесс приема */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.0 }} >
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <ClipboardList className="text-teal-600" size={28} />
                Как проходит прием?
              </h3>
              <p className="text-slate-600 mb-8">
                В среднем консультация длится около 20 минут. Готовиться специально не нужно — достаточно взять с собой предыдущие выписки и результаты анализов.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Сбор анамнеза", desc: "Внимательно изучаем ваши жалобы, время их появления, наличие аллергий и хронических заболеваний." },
                  { title: "Осмотр пациента", desc: "Оцениваем состояние кожных покровов, слизистых оболочек, выявляем наличие отеков." },
                  { title: "Пальпация и перкуссия", desc: "Методом простукивания и пальпации определяем состояние внутренних органов и локализацию боли." },
                  { title: "Аускультация (прослушивание)", desc: "С помощью фонендоскопа доктор выслушивает легкие, сердце и перистальтику кишечника." },
                  { title: "Измерение показателей", desc: "Включает контроль артериального давления и частоты сердечных сокращений (пульса)." },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-teal-100 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">{step.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Правая колонка - Симптомы и лечение */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.0 }} >
              {/* Блок с симптомами */}
              <div className="bg-gradient-to-br from-teal-600 to-emerald-700 text-white rounded-3xl p-8 mb-10 shadow-xl shadow-teal-900/10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Activity size={28} />
                  С какими симптомами обращаться?
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                  {[
                    "Симптомы простуды (ОРВИ, грипп)",
                    "Слабость, проблемы со сном",
                    "Скачки артериального давления",
                    "Боли в груди или пояснице",
                    "Изжога, тошнота, боли в животе",
                    "Высыпания и зуд на коже",
                    "Одышка, проблемы с дыханием",
                    "Увеличение лимфоузлов"
                  ].map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-teal-200 mt-0.5 flex-shrink-0" />
                      <span className="text-teal-50 text-sm leading-tight">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Блок заболеваний */}
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <HeartPulse className="text-teal-600" size={28} />
                Что мы лечим?
              </h3>
              <p className="text-slate-600 mb-6">
                Мы занимаемся диагностикой и лечением болезней, которые не требуют хирургического вмешательства. В случае необходимости терапевт направит вас к профильному специалисту.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["Бронхит и пневмония", "Гипертония", "ИБС", "Гастрит", "Анемия", "Сахарный диабет", "Цистит", "Болезни суставов"].map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Блок про ОМС (Специфика провинциальной медицины) */}
              <div className="p-6 border-l-4 border-teal-500 bg-teal-50/50 rounded-r-2xl">
                <h4 className="font-bold text-teal-800 mb-2">Бесплатная помощь по полису ОМС</h4>
                <p className="text-sm text-teal-900/80 mb-3">
                  В рамках программы государственных гарантий оказываются услуги с посещением в целях профилактики. Работаем с полисами <b>СОГАЗ-ОМС</b> и <b>Хабаровского краевого ФОМС</b>.
                </p>
                <p className="text-sm font-medium text-teal-800">
                  ⚠️ Пациентам старше 40 лет рекомендуется посещать терапевта для профилактики минимум 1 раз в год.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-gradient-to-tr from-blue-50 to-teal-100 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }} className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[400px] overflow-hidden">
                <img src="ultrasound.jpg" alt="УЗИ диагностика" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white via-transparent to-transparent" />
              </div>

              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 w-fit">
                  <ScanLine size={16} /><span>Диагностика</span>
                </div> */}

                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  Ультразвуковая диагностика (УЗИ)</h2>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  В нашей клинике проводится УЗИ органов брюшной полости, щитовидной железы, суставов и сосудов. Современный аппарат и опыт врача позволяют увидеть мельчайшие изменения.
                </p>

                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {["Органы брюшной полости", "Щитовидная железа", "Сосуды и вены", "Суставы"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                      <CheckCircle2 size={16} className="text-teal-500" />{item}
                    </li>
                  ))}
                </ul>

                <Link href="/ultrasound" className="inline-flex items-center gap-2 text-teal-600 font-bold group w-fit">
                  Подробнее об услуге
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}