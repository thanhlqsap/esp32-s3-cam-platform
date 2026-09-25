/**
 * =============================================================================
 * @file i18n_voice.js
 * @brief Voice AI & Audio Processing 10-Language Dictionary
 * @details Hỗ trợ 10 ngôn ngữ (Tiếng Việt mặc định #1)
 * =============================================================================
 */
(function(window) {
    'use strict';
    const TRANSLATIONS = {
// --- E. TỪ VỰNG VOICE AI & ÂM THANH (VOICE) ---
        voice: {
            gemini_title: {
                vi: "Trợ Lý Giọng Nói Gemini Live", en: "Gemini Live Voice Assistant", zh: "Gemini Live 语音助手",
                es: "Asistente de Voz Gemini Live", fr: "Assistant Vocal Gemini Live", de: "Gemini Live Sprachassistent",
                ja: "Gemini Live 音声アシスタント", ko: "Gemini Live 음성 비서", ru: "Голосовой Помощник Gemini", ar: "مساعد Gemini Live الصوتي"
            },
            push_to_talk: {
                vi: "Nhấn Giữ Để Nói", en: "Push to Talk", zh: "按住说话",
                es: "Mantener para Hablar", fr: "Maintenir pour Parler", de: "Drücken zum Sprechen",
                ja: "長押しで話す", ko: "누르고 말하기", ru: "Удерживайте для Речи", ar: "اضغط مع الاستمرار للتحدث"
            },
            listening: {
                vi: "Đang lắng nghe...", en: "Listening...", zh: "正在倾听...",
                es: "Escuchando...", fr: "Écoute en cours...", de: "Höre zu...",
                ja: "聞き取り中...", ko: "듣는 중...", ru: "Слушаю...", ar: "جارٍ الاستماع..."
            },
            thinking: {
                vi: "AI đang suy nghĩ...", en: "AI is thinking...", zh: "AI 思考中...",
                es: "La IA está pensando...", fr: "L'IA réfléchit...", de: "KI denkt nach...",
                ja: "AI が考え中...", ko: "AI 생각 중...", ru: "AI думает...", ar: "الذكاء الاصطناعي يفكر..."
            },
            speaking: {
                vi: "Đang phát âm thanh...", en: "Speaking audio...", zh: "正在播放语音...",
                es: "Reproduciendo audio...", fr: "Lecture audio...", de: "Spricht...",
                ja: "音声再生中...", ko: "음성 출력 중...", ru: "Воспроизведение...", ar: "جارٍ نطق الصوت..."
            },
            translate_from: { vi: "Dịch từ", en: "Translate from", zh: "源语言", es: "Traducir de", fr: "Traduire de", de: "Übersetzen von", ja: "翻訳元", ko: "번역 원본", ru: "Перевести с", ar: "ترجمة من" },
            translate_to: { vi: "Sang", en: "To", zh: "目标语言", es: "A", fr: "Vers", de: "Nach", ja: "翻訳先", ko: "번역 대상", ru: "На", ar: "إلى" },
            mute_mic: { vi: "Tắt Micro", en: "Mute Mic", zh: "静音麦克风", es: "Silenciar Mic", fr: "Couper Micro", de: "Mikrofon stumm", ja: "マイクミュート", ko: "마이크 음소거", ru: "Выкл. Микрофон", ar: "كتم الميكروفون" },
            unmute_mic: { vi: "Bật Micro", en: "Unmute Mic", zh: "开启麦克风", es: "Activar Mic", fr: "Activer Micro", de: "Mikrofon an", ja: "マイク有効", ko: "마이크 켜기", ru: "Вкл. Микрофон", ar: "تشغيل الميكروفون" },
            audio_volume: { vi: "Âm Lượng", en: "Volume", zh: "音量", es: "Volumen", fr: "Volume", de: "Lautstärke", ja: "音量", ko: "음량", ru: "Громкость", ar: "مستوى الصوت" }
        }
    };

    if (window.I18N) {
        window.I18N.extend(TRANSLATIONS);
    } else {
        window._pendingI18n = window._pendingI18n || [];
        window._pendingI18n.push(TRANSLATIONS);
    }
})(window);
