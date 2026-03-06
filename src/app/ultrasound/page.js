"use client";

import { motion } from "framer-motion";
import { ArrowRight, ScanLine, HeartPulse, Activity, Bone, Droplets, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import AppointmentModal from "../../components/appointmentModal";
import Link from "next/link";

export default function UziPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
    };

    const cardHover = {
        rest: { scale: 1, y: 0 },
        hover: { scale: 1.03, y: -5, transition: { duration: 0.3 } }
    };

    // Данные об услугах УЗИ
    const uziServices = [
        {
            icon: <Activity size={32} />,
            title: "УЗИ органов брюшной полости",
            desc: "Печень, желчный пузырь, поджелудочная железа, селезенка, почки.",
            color: "bg-blue-50 text-blue-600"
        },
        {
            icon: <Droplets size={32} />,
            title: "УЗИ сосудов (Допплер)",
            desc: "Исследование кровотока в венах и артериях конечностей, сосудах шеи.",
            color: "bg-red-50 text-red-500"
        },
        {
            icon: <Bone size={32} />,
            title: "УЗИ суставов",
            desc: "Диагностика состояния связок, менисков, суставных капсул и хрящей.",
            color: "bg-purple-50 text-purple-600"
        },
        {
            icon: <HeartPulse size={32} />,
            title: "УЗИ щитовидной железы",
            desc: "Оценка структуры, размеров и выявление образований железы.",
            color: "bg-teal-50 text-teal-600"
        },
        {
            icon: <ScanLine size={32} />,
            title: "УЗИ мягких тканей",
            desc: "Исследование лимфоузлов, молочных желез, мышц и подкожной клетчатки.",
            color: "bg-emerald-50 text-emerald-600"
        },
    ];

    return (
        <div className="w-full pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
                {/* Анимированный фон */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-teal-50/30 to-white" />
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.4 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute -top-20 -right-20 w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-teal-100 to-transparent blur-3xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-6 border border-teal-200">
                            <ScanLine size={18} />
                            <span>Современная диагностика</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-6">
                            Ультразвуковая диагностика <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">высокой точности</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-10 leading-relaxed">
                            УЗИ — это безопасный, безболезненный и информативный метод исследования. Мы проводим диагностику органов, сосудов и суставов на современном оборудовании.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={() => setIsModalOpen(true)}
                                className="px-8 py-4 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-all shadow-xl shadow-teal-600/20 flex items-center justify-center gap-2 group">
                                Записаться на УЗИ
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <Link href="#types-section"
                                className="px-8 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-medium hover:border-teal-600 hover:text-teal-600 transition-colors flex items-center justify-center">
                                Виды исследований
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Почему УЗИ важно (Feature Section) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <ShieldCheck size={28} />, title: "Безопасность", desc: "Метод не использует ионизирующее излучение, подходит для частого применения и детей." },
                            { icon: <Clock size={28} />, title: "Быстрота", desc: "Стандартное исследование занимает от 15 до 30 минут. Результат вы сразу получаете на руки." },
                            { icon: <CheckCircle2 size={28} />, title: "Точность", desc: "Высокое разрешение позволяет выявлять патологии на ранних стадиях развития." },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-5">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Виды УЗИ (Grid Section) */}
            <section id="types-section" className="py-24 bg-slate-50 relative">
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-2xl mx-auto mb-16"
                    >
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            Полный спектр исследований
                        </h2>
                        <p className="text-slate-600">Мы проводим ультразвуковую диагностику всех основных систем организма.</p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {uziServices.map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={cardHover}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 cursor-pointer overflow-hidden relative group"
                            >
                                {/* Декоративный круг при наведении */}
                                <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-5 shadow-sm`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Подготовка к УЗИ (Info Block) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-teal-900/20 text-white relative overflow-hidden">

                        {/* Анимированные элементы фона */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />

                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold font-serif mb-4">Как подготовиться?</h2>
                                <p className="text-teal-100 mb-6">
                                    Для получения точного результата к некоторым видам исследований требуется специальная подготовка.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-teal-200 mt-1 flex-shrink-0" />
                                        <span className="text-sm"><b>УЗИ Органов брюшной полости:</b> За 3 дня исключить газообразующие продукты (капуста, бобовые, молочные), приходить натощак.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-teal-200 mt-1 flex-shrink-0" />
                                        <span className="text-sm"><b>УЗИ почек и мочевого пузыря:</b> За 1 час до исследования выпить 1 литр воды, не мочиться.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-teal-200 mt-1 flex-shrink-0" />
                                        <span className="text-sm"><b>Другие виды УЗИ:</b> Специальная подготовка обычно не требуется.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <h4 className="font-bold text-xl mb-3">Есть вопросы?</h4>
                                <p className="text-teal-50 text-sm mb-4">Позвоните нам или оставьте заявку, администратор подскажет, как лучше подготовиться именно к вашему исследованию.</p>
                                <button onClick={() => setIsModalOpen(true)}
                                    className="w-full py-3 bg-white text-teal-700 font-bold rounded-full hover:bg-teal-50 transition-colors shadow-lg">
                                    Позвонить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}