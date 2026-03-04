"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Stethoscope, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Бренд */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white">
              <Stethoscope size={28} className="text-teal-500" />
              <span className="font-serif text-2xl font-bold tracking-tight">
                ООО Докмед
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm">
              Современная клиника доказательной медицины. Мы лечим не симптомы, а человека.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Пациентам</h3>
            <ul className="space-y-3">
              {['Главная', 'Бесплатная помощь', 'Услуги и цены', 'Для слабовидящих'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-teal-500 flex-shrink-0 mt-1" />
                <span>г. Советская Гавань, ул. Ленина, д.21</span>
                {/* © 2026 ИП Шамгунова Е.Н. */}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-teal-500 flex-shrink-0" />
                <a href="tel:+79941401903" className="hover:text-white transition-colors">+7 (994) 140-19-03</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-teal-500 flex-shrink-0" />
                <a href="mailto:sovgav@list.ru" className="hover:text-white transition-colors">sovgav@list.ru</a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500"
        >
          <p>© {new Date().getFullYear()} ООО "Докмед". Все права защищены.</p>
          <p className="mt-2 md:mt-0">Профессиональная помощь терапевта. Современные методы диагностики и лечения.</p>
        </motion.div>
      </div>
    </footer>
  );
}