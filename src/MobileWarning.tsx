import React, { useState, useEffect } from 'react';

export type Language = 'en' | 'ko' | 'ja' | 'zh' | 'es' | 'fr' | 'de';

export interface Translations {
  title: string;
  message: string;
  tip: string;
}

const translations: Record<Language, Translations> = {
  en: {
    title: 'Desktop Access Required',
    message: 'This platform is only accessible\nfrom a desktop computer.',
    tip: 'When accessing from a PC,\nplease maximize your window size.',
  },
  ko: {
    title: 'PC 접속 필요',
    message: '본 플랫폼은 PC(데스크톱)에서만\n접속 가능합니다.',
    tip: 'PC에서 접속 시에도\n창 크기를 최대로 해주세요.',
  },
  ja: {
    title: 'PCアクセスが必要',
    message: 'このプラットフォームはPC（デスクトップ）からのみ\nアクセス可能です。',
    tip: 'PCからアクセスする場合も\nウィンドウサイズを最大化してください。',
  },
  zh: {
    title: '需要桌面访问',
    message: '此平台仅可从\n桌面电脑访问。',
    tip: '从PC访问时，\n请最大化窗口大小。',
  },
  es: {
    title: 'Acceso de Escritorio Requerido',
    message: 'Esta plataforma solo es accesible\ndesde una computadora de escritorio.',
    tip: 'Al acceder desde una PC,\nmaximice el tamaño de la ventana.',
  },
  fr: {
    title: 'Accès Bureau Requis',
    message: 'Cette plateforme n\'est accessible\nque depuis un ordinateur de bureau.',
    tip: 'Lors de l\'accès depuis un PC,\nveuillez maximiser la taille de la fenêtre.',
  },
  de: {
    title: 'Desktop-Zugriff Erforderlich',
    message: 'Diese Plattform ist nur\nvon einem Desktop-Computer aus zugänglich.',
    tip: 'Beim Zugriff von einem PC\nmaximieren Sie bitte die Fenstergröße.',
  },
};

/**
 * Detect browser language and return supported language code
 */
const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined' || !navigator.language) {
    return 'en';
  }

  const browserLang = navigator.language.toLowerCase();
  const langCode = browserLang.split('-')[0]; // Extract base language code (e.g., 'en' from 'en-US')

  // Map browser language to supported language
  const languageMap: Record<string, Language> = {
    en: 'en',
    ko: 'ko',
    ja: 'ja',
    zh: 'zh',
    es: 'es',
    fr: 'fr',
    de: 'de',
  };

  return languageMap[langCode] || 'en';
};

export interface MobileWarningProps {
  /**
   * Language code for translations. If not provided, will auto-detect from browser language.
   * Set to null to disable auto-detection.
   * @default auto-detected from browser
   */
  language?: Language | null;
  /**
   * Minimum screen width (px). Screens smaller than this will be considered mobile
   * @default 1024
   */
  minWidth?: number;
  /**
   * Minimum screen height (px). Screens smaller than this will be considered mobile
   * @default 600
   */
  minHeight?: number;
  /**
   * Modal title (overrides language setting)
   */
  title?: string;
  /**
   * Modal message (overrides language setting)
   */
  message?: string;
  /**
   * Tip message (overrides language setting)
   */
  tip?: string;
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Custom class name for overlay background
   */
  overlayClassName?: string;
  /**
   * Custom class name for modal container
   */
  modalClassName?: string;
}

const MobileWarning: React.FC<MobileWarningProps> = ({
  language,
  minWidth = 1024,
  minHeight = 600,
  title,
  message,
  tip,
  className,
  overlayClassName,
  modalClassName,
}) => {
  // Auto-detect language if not provided, use English if explicitly set to null
  const detectedLanguage = language === null ? 'en' : (language ?? detectBrowserLanguage());
  const t = translations[detectedLanguage];
  const finalTitle = title ?? t.title;
  const finalMessage = message ?? t.message;
  const finalTip = tip ?? t.tip;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileSize = window.innerWidth < minWidth || window.innerHeight < minHeight;
      setIsMobile(isMobileSize);
    };

    // 초기 체크
    checkScreenSize();

    // 화면 크기 변경 감지
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [minWidth, minHeight]);

  if (!isMobile) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm ${overlayClassName || ''} ${className || ''}`}>
      <div className={`bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-2xl ${modalClassName || ''}`}>
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-full flex items-center justify-center shadow-lg ring-4 ring-red-100">
            <svg
              className="w-10 h-10 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {finalTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {finalMessage}
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800 whitespace-pre-line">
            <strong>{finalTip}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileWarning;

