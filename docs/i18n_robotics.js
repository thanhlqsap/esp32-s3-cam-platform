/**
 * =============================================================================
 * @file i18n_robotics.js
 * @brief Robotics, Mecanum & Drone 10-Language Dictionary
 * @details Hỗ trợ 10 ngôn ngữ (Tiếng Việt mặc định #1)
 * =============================================================================
 */
(function(window) {
    'use strict';
    const TRANSLATIONS = {
// --- D. TỪ VỰNG ROBOTICS & DRONE (ROBOTICS) ---
        robotics: {
            joystick_title: {
                vi: "Cần Điều Khiển Ảo 360°", en: "Virtual 360° Joystick", zh: "360° 虚拟摇杆",
                es: "Joystick Virtual 360°", fr: "Joystick Virtuel 360°", de: "Virtueller 360°-Joystick",
                ja: "360° バーチャルジョイスティック", ko: "360° 가상 조이스틱", ru: "Виртуальный Джойстик 360°", ar: "عصا تحكم افتراضية 360 درجة"
            },
            hud_speed: { vi: "Tốc Độ", en: "Speed", zh: "速度", es: "Velocidad", fr: "Vitesse", de: "Geschwindigkeit", ja: "速度", ko: "속도", ru: "Скорость", ar: "السرعة" },
            hud_heading: { vi: "Hướng La Bàn", en: "Heading", zh: "航向", es: "Rumbo", fr: "Cap", de: "Kurs", ja: "方位", ko: "방위", ru: "Курс", ar: "الاتجاه" },
            hud_altitude: { vi: "Độ Cao", en: "Altitude", zh: "高度", es: "Altitud", fr: "Altitude", de: "Höhe", ja: "高度", ko: "고도", ru: "Высота", ar: "الارتفاع" },
            hud_battery: { vi: "Pin Nguồn", en: "Battery", zh: "电池电量", es: "Batería", fr: "Batterie", de: "Batterie", ja: "バッテリー", ko: "배터리", ru: "Батарея", ar: "البطارية" },
            btn_forward: { vi: "Tiến", en: "Forward", zh: "前进", es: "Adelante", fr: "Avancer", de: "Vorwärts", ja: "前進", ko: "전진", ru: "Вперед", ar: "للأمام" },
            btn_backward: { vi: "Lùi", en: "Backward", zh: "后退", es: "Atrás", fr: "Reculer", de: "Rückwärts", ja: "後退", ko: "후진", ru: "Назад", ar: "للخلف" },
            btn_left: { vi: "Trái", en: "Left", zh: "左移", es: "Izquierda", fr: "Gauche", de: "Links", ja: "左移動", ko: "좌측", ru: "Влево", ar: "يسار" },
            btn_right: { vi: "Phải", en: "Right", zh: "右移", es: "Derecha", fr: "Droite", de: "Rechts", ja: "右移動", ko: "우측", ru: "Вправо", ar: "يمين" },
            btn_stop: { vi: "Dừng Lại", en: "Emergency Stop", zh: "紧急停止", es: "Parada de Emergencia", fr: "Arrêt d'Urgence", de: "Not-Aus", ja: "緊急停止", ko: "비상 정지", ru: "СТОП", ar: "توقف طارئ" },
            arm_grab: { vi: "Gắp Sản Phẩm", en: "Grab Item", zh: "抓取物品", es: "Agarrar", fr: "Saisir", de: "Greifen", ja: "把持", ko: "잡기", ru: "Захват", ar: "التقاط" },
            arm_release: { vi: "Thả Sản Phẩm", en: "Release Item", zh: "释放物品", es: "Soltar", fr: "Relâcher", de: "Loslassen", ja: "解放", ko: "놓기", ru: "Отпустить", ar: "إفلات" },
            gps_target: { vi: "Tọa Độ Mục Tiêu", en: "Target Waypoint", zh: "目标航点", es: "Punto de Destino", fr: "Point de Passage", de: "Ziel-Wegpunkt", ja: "目標経由地", ko: "목표 좌표", ru: "Целевая Точка", ar: "نقطة الهدف" }
        }
    };

    if (window.I18N) {
        window.I18N.extend(TRANSLATIONS);
    } else {
        window._pendingI18n = window._pendingI18n || [];
        window._pendingI18n.push(TRANSLATIONS);
    }
})(window);
