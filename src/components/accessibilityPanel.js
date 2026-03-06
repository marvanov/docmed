"use client";

import { X, Sun, Moon, Palette, Type, ImageOff, Play, Square } from "lucide-react";
import { useAccessibility } from "../context/accessibilityContext";

export default function AccessibilityPanel({ isOpen, onClose }) {
  const { settings, updateSetting } = useAccessibility();

  if (!isOpen) return null;

  const fontSizes = [
    { key: "normal", label: "A", size: "text-base" },
    { key: "large", label: "A+", size: "text-xl" },
    { key: "xlarge", label: "A++", size: "text-2xl" },
  ];

  const colorSchemes = [
    { key: "standard", label: "Стандарт", icon: Sun, bg: "bg-white text-black border" },
    { key: "dark", label: "Тёмный", icon: Moon, bg: "bg-black text-white border border-white" },
    { key: "contrast", label: "Контраст", icon: Palette, bg: "bg-blue-700 text-yellow-300" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 bg-black/30 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md mx-4 relative border border-slate-200"
        onClick={(e) => e.stopPropagation()}>
        <button  onClick={onClose} 
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Закрыть панель">
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Sun className="text-teal-600" /> Настройки для слабовидящих
        </h2>

        {/* Размер шрифта */}
        <div className="mb-6">
          <h3 className="font-medium text-slate-500 mb-3 text-sm uppercase tracking-wider">Размер шрифта</h3>
          <div className="flex gap-2">
            {fontSizes.map((fs) => (
              <button
                key={fs.key}
                onClick={() => updateSetting("fontSize", fs.key)}
                className={`flex-1 py-3 rounded-lg border-2 transition-all font-bold ${fs.size} ${
                  settings.fontSize === fs.key
                    ? "border-teal-600 bg-teal-50 text-teal-700"
                    : "border-slate-200 hover:border-slate-400"
                }`}
              >
                {fs.label}
              </button>
            ))}
          </div>
        </div>

        {/* Цветовая схема */}
        <div className="mb-6">
          <h3 className="font-medium text-slate-500 mb-3 text-sm uppercase tracking-wider">Цветовая схема</h3>
          <div className="grid grid-cols-3 gap-2">
            {colorSchemes.map((cs) => (
              <button
                key={cs.key}
                onClick={() => updateSetting("colorScheme", cs.key)}
                className={`p-3 rounded-lg flex flex-col items-center gap-1 transition-all border-2 ${
                  settings.colorScheme === cs.key
                    ? "ring-2 ring-offset-2 ring-teal-500 border-transparent"
                    : "border-transparent"
                } ${cs.bg}`}
              >
                <cs.icon size={18} />
                <span className="text-xs font-medium">{cs.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Тумблеры */}
        {/* <div className="space-y-3 border-t pt-4 border-slate-100">
            <button onClick={() => updateSetting("imagesEnabled", !settings.imagesEnabled)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                    !settings.imagesEnabled ? "bg-red-50 text-red-700" : "bg-slate-50 hover:bg-slate-100"
                }`} >
                <span className="flex items-center gap-2 font-medium"><ImageOff size={18} /> Изображения</span>
                <span className="text-sm font-bold">{settings.imagesEnabled ? "Вкл" : "Выкл"}</span>
            </button>

            <button onClick={() => updateSetting("animationsEnabled", !settings.animationsEnabled)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                    !settings.animationsEnabled ? "bg-red-50 text-red-700" : "bg-slate-50 hover:bg-slate-100"
                }`}>
                <span className="flex items-center gap-2 font-medium">
                    {settings.animationsEnabled ? <Play size={18} /> : <Square size={18} />} Анимации</span>
                <span className="text-sm font-bold">{settings.animationsEnabled ? "Вкл" : "Выкл"}</span>
            </button>
        </div> */}
      </div>
    </div>
  );
}