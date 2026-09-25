/**
 * =============================================================================
 * @file i18n_gadgets.js
 * @brief Technical Gadgets & Oscilloscope 10-Language Dictionary
 * @details Hỗ trợ 10 ngôn ngữ (Tiếng Việt mặc định #1)
 * =============================================================================
 */
(function(window) {
    'use strict';
    const TRANSLATIONS = {
// --- G. TỪ VỰNG CÔNG CỤ KỸ THUẬT & GADGETS (GADGETS) ---
        gadgets: {
            oscillo_title: {
                vi: "Máy Hiện Sóng Mini DMA ADC", en: "2-Channel DMA Oscilloscope", zh: "双通道 DMA 示波器",
                es: "Osciloscopio Digital DMA", fr: "Oscilloscope DMA 2 Canaux", de: "2-Kanal DMA-Oszilloskop",
                ja: "2ch 高速 DMA オシロスコープ", ko: "2채널 DMA 오실로스코프", ru: "2-Канальный Осциллограф DMA", ar: "راسم ذبذبات DMA بقناتين"
            },
            timebase: { vi: "Thời Gian/Chia (Timebase)", en: "Timebase", zh: "时基", es: "Base de Tiempo", fr: "Base de Temps", de: "Zeitbasis", ja: "タイムベース", ko: "타임베이스", ru: "Развертка", ar: "قاعدة الوقت" },
            voltage_div: { vi: "Điện Áp/Chia (Volt/Div)", en: "Volt/Div", zh: "电压档位", es: "Volt/Div", fr: "Volt/Div", de: "Volt/Div", ja: "電圧レンジ", ko: "전압 범위", ru: "Вольт/Дел", ar: "فولت/قسم" },
            trigger_level: { vi: "Mức Trigger", en: "Trigger Level", zh: "触发电平", es: "Nivel de Disparo", fr: "Niveau de Déclenchement", de: "Trigger-Pegel", ja: "トリガレベル", ko: "트리거 레벨", ru: "Уровень Триггера", ar: "مستوى التشغيل" },
            fft_spectrum: { vi: "Phổ Tần Số FFT", en: "FFT Spectrum", zh: "FFT 频谱分析", es: "Espectro FFT", fr: "Spectre FFT", de: "FFT-Spektrum", ja: "FFT スペクトル", ko: "FFT 스펙트럼", ru: "Спектр FFT", ar: "طيف FFT" },
            dpad_up: { vi: "Lên", en: "Up", zh: "上", es: "Arriba", fr: "Haut", de: "Hoch", ja: "上", ko: "위", ru: "Вверх", ar: "أعلى" },
            dpad_down: { vi: "Xuống", en: "Down", zh: "下", es: "Abajo", fr: "Bas", de: "Runter", ja: "下", ko: "아래", ru: "Вниз", ar: "أسفل" },
            dpad_left: { vi: "Trái", en: "Left", zh: "左", es: "Izquierda", fr: "Gauche", de: "Links", ja: "左", ko: "왼쪽", ru: "Влево", ar: "يسار" },
            dpad_right: { vi: "Phải", en: "Right", zh: "右", es: "Derecha", fr: "Droite", de: "Rechts", ja: "右", ko: "오른쪽", ru: "Вправо", ar: "يمين" },
            terminal_title: { vi: "Bảng Lệnh An Ninh Marauder", en: "Marauder Security Terminal", zh: "Marauder 安全测试终端", es: "Terminal de Seguridad Marauder", fr: "Terminal de Sécurité Marauder", de: "Marauder Sicherheits-Terminal", ja: "Marauder セキュリティ端末", ko: "Marauder 보안 터미널", ru: "Терминал Безопасности Marauder", ar: "محطة أمان Marauder" },
            epaper_calendar: { vi: "Lịch Thông Minh E-Paper", en: "Smart E-Paper Calendar", zh: "电子墨水屏智能日历", es: "Calendario Inteligente E-Paper", fr: "Calendrier E-Paper", de: "E-Paper Kalender", ja: "電子ペーパーカレンダー", ko: "전자종이 캘린더", ru: "E-Paper Календарь", ar: "تقويم E-Paper الذكي" }
        }
    };

    if (window.I18N) {
        window.I18N.extend(TRANSLATIONS);
    } else {
        window._pendingI18n = window._pendingI18n || [];
        window._pendingI18n.push(TRANSLATIONS);
    }
})(window);
