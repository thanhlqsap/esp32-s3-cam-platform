/**
 * =============================================================================
 * @file i18n_smart_iot.js
 * @brief Smart Home & Matter 10-Language Dictionary
 * @details Hỗ trợ 10 ngôn ngữ (Tiếng Việt mặc định #1)
 * =============================================================================
 */
(function(window) {
    'use strict';
    const TRANSLATIONS = {
// --- F. TỪ VỰNG SMART HOME & MATTER (SMART_HOME) ---
        smart_home: {
            matter_bridge_title: {
                vi: "Cầu Nối Matter 1.3 Bridge", en: "Matter 1.3 Bridge Controller", zh: "Matter 1.3 桥接网关",
                es: "Puente Matter 1.3", fr: "Pont Matter 1.3", de: "Matter 1.3 Bridge",
                ja: "Matter 1.3 ブリッジ", ko: "Matter 1.3 브릿지", ru: "Мост Matter 1.3", ar: "جسر Matter 1.3"
            },
            matter_pairing_code: {
                vi: "Mã Ghép Nối (Pairing Code)", en: "Matter Pairing Code", zh: "Matter 配对码",
                es: "Código de Emparejamiento", fr: "Code d'Appairage", de: "Kopplungscode",
                ja: "ペアリングコード", ko: "페어링 코드", ru: "Код Сопряжения", ar: "رمز الاقتران"
            },
            matter_scan_qr: {
                vi: "Quét mã QR bằng ứng dụng Apple Home hoặc Google Home",
                en: "Scan QR code with Apple Home or Google Home app",
                zh: "使用 Apple 家庭或 Google Home App 扫描二维码",
                es: "Escanee el código QR con Apple Home o Google Home",
                fr: "Scannez le code QR avec Apple Home ou Google Home",
                de: "QR-Code mit Apple Home oder Google Home App scannen",
                ja: "Apple Home または Google Home アプリで QR をスキャン",
                ko: "Apple Home 또는 Google Home 앱으로 QR 코드를 스캔하세요",
                ru: "Сканируйте QR-код в приложении Apple Home или Google Home",
                ar: "امسح رمز QR باستخدام تطبيق Apple Home أو Google Home"
            },
            node_devices: { vi: "Thiết Bị Kết Nối", en: "Connected Nodes", zh: "已连接设备", es: "Dispositivos Conectados", fr: "Appareils Connectés", de: "Verbundene Geräte", ja: "接続機器", ko: "연결된 기기", ru: "Подключенные Устройства", ar: "الأجهزة المتصلة" },
            relay_toggle: { vi: "Bật/Tắt Relay", en: "Toggle Relay", zh: "开关继电器", es: "Alternar Relé", fr: "Basculer Relais", de: "Relais schalten", ja: "リレー切替", ko: "릴레이 전환", ru: "Переключить Реле", ar: "تبديل المرحل" }
        }
    };

    if (window.I18N) {
        window.I18N.extend(TRANSLATIONS);
    } else {
        window._pendingI18n = window._pendingI18n || [];
        window._pendingI18n.push(TRANSLATIONS);
    }
})(window);
