"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AccessibilityContext = createContext(undefined);

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState({
    fontSize: "normal", // normal, large, xlarge
    colorScheme: "standard", // standard, dark, contrast
    imagesEnabled: true,
    animationsEnabled: true,
  });

  // Загрузка настроек из localStorage при первом рендере
  useEffect(() => {
    const savedSettings = localStorage.getItem("accessibility-settings");
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (e) {
        console.error("Failed to parse accessibility settings");
      }
    }
  }, []);

  // Применение классов к <html> и сохранение в localStorage
  useEffect(() => {
    const root = document.documentElement;
    
    // Очистка старых классов
    root.classList.remove("font-normal", "font-large", "font-xlarge");
    root.classList.remove("scheme-standard", "scheme-dark", "scheme-contrast");
    root.classList.remove("img-off", "motion-off");

    // Применение новых классов
    root.classList.add(`font-${settings.fontSize}`);
    root.classList.add(`scheme-${settings.colorScheme}`);
    
    if (!settings.imagesEnabled) root.classList.add("img-off");
    if (!settings.animationsEnabled) root.classList.add("motion-off");

    localStorage.setItem("accessibility-settings", JSON.stringify(settings));
    
    // Управление стилем для картинок напрямую (быстрее работает)
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = settings.imagesEnabled ? '1' : '0';
        // Можно сделать display: none, но opacity сохраняет верстку
    });

  }, [settings]);

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <AccessibilityContext.Provider value={{ settings, updateSetting }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error("useAccessibility must be used within a AccessibilityProvider");
  }
  return context;
}