"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function AppointmentModal({ isOpen, onClose }) {
  const [status, setStatus] = useState("idle"); // idle, loading, success
  const[formData, setFormData] = useState({ name: "", phone: "", comment: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Здесь будет ваш запрос к бэкенду для отправки в Telegram
    // Имитируем отправку для демонстрации:
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", phone: "", comment: "" });
        onClose();
      }, 3000); // Закроется само через 3 секунды
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Затемнение фона */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />
          
          {/* Само окно */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-3xl w-full max-w-md shadow-2xl relative z-10 overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <button onClick={onClose} className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors bg-slate-100 rounded-full p-2">
                <X size={20} />
              </button>

              {status === "success" ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                  <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 font-serif">Заявка отправлена</h3>
                  <p className="text-slate-600">Мы свяжемся с вами в ближайшее время для подтверждения записи.</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 font-serif">Запись на прием</h3>
                  <p className="text-slate-600 mb-6 text-sm">Оставьте свои контактные данные, и мы перезвоним вам для уточнения удобного времени.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">ФИО</label>
                      <input required type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="Иванов Иван Иванович" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Телефон</label>
                      <input required type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="+7 (999) 000-00-00" />
                    </div>
                    <div>
                      <label htmlFor="comment" className="block text-sm font-medium text-slate-700 mb-1">Комментарий (необязательно)</label>
                      <textarea id="comment" value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none h-20" placeholder="Кратко опишите, что вас беспокоит..." />
                    </div>

                    <button disabled={status === "loading"} type="submit" className="w-full py-4 rounded-xl bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 mt-2 disabled:opacity-70">
                      {status === "loading" ? <Loader2 size={20} className="animate-spin" /> : <><Send size={18} /> Отправить заявку</>}
                    </button>
                  </form>
                  <p className="text-xs text-slate-400 text-center mt-4">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}