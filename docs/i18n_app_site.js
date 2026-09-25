/**
 * =============================================================================
 * @file i18n_app_site.js
 * @brief App Site Common Layout 10-Language Dictionary
 * @details Hỗ trợ 10 ngôn ngữ (Tiếng Việt mặc định #1)
 * =============================================================================
 */
(function(window) {
    'use strict';
    const TRANSLATIONS = {
// --- G1. TỪ VỰNG TRANG APP CON CHUYÊN DỤNG (APP_SITE) ---
        app_site: {
            display_title: {
                vi: "Màn Hình Điều Khiển Thời Gian Thực", en: "Real-time Control Display", zh: "实时控制监控显示",
                es: "Pantalla de Control en Tiempo Real", fr: "Affichage de Contrôle en Temps Réel", de: "Echtzeit-Steuerungsanzeige",
                ja: "リアルタイム制御ディスプレイ", ko: "실시간 제어 디스플레이", ru: "Экран Управления в Реальном Времени", ar: "شاشة التحكم في الوقت الفعلي"
            },
            telemetry_title: {
                vi: "Thông Số & Nhật Ký Hoạt Động", en: "Telemetry & Operation Logs", zh: "遥测参数与运行日志",
                es: "Telemetría y Registro de Operaciones", fr: "Télémétrie et Journaux d'Opération", de: "Telemetrie & Betriebsprotokolle",
                ja: "テレメトリ＆動作ログ", ko: "원격 측정 및 작동 로그", ru: "Телеметрия и Логи Работы", ar: "القياس عن بعد وسجلات التشغيل"
            },
            alt_title: {
                vi: "Chế Độ Hoạt Động Không Dùng Camera DVP", en: "Non-Camera Operational Mode", zh: "非 DVP 摄像头工作模式",
                es: "Modo Operativo Sin Cámara", fr: "Mode Opérationnel Sans Caméra", de: "Betriebsmodus ohne DVP-Kamera",
                ja: "非DVPカメラ動作モード", ko: "비카메라 동작 모드", ru: "Режим Работы Без Камеры", ar: "وضع التشغيل بدون كاميرا DVP"
            },
            alt_desc: {
                vi: "Dữ liệu thu thập cảm biến và điều khiển đang được truyền trực tiếp qua WebSocket.",
                en: "Sensor telemetry and controls are streaming live via WebSocket.",
                zh: "传感器采集数据与控制指令正在通过 WebSocket 实时双向传输。",
                es: "Los datos de sensores y controles se transmiten en vivo vía WebSocket.",
                fr: "Les données de capteurs et commandes sont transmises en direct via WebSocket.",
                de: "Sensordaten und Steuerungen werden live über WebSocket übertragen.",
                ja: "センサーデータと制御は WebSocket を介してライブ配信されています。",
                ko: "센서 데이터 및 제어가 WebSocket을 통해 실시간으로 전송됩니다.",
                ru: "Данные датчиков и управление передаются в реальном времени через WebSocket.",
                ar: "يتم بث بيانات المستشعر والتحكم مباشرة عبر WebSocket."
            },
            log_title: {
                vi: "Nhật Ký Sự Kiện Real-time:", en: "Real-time Event Log:", zh: "实时事件日志:",
                es: "Registro de Eventos en Tiempo Real:", fr: "Journal des Événements en Direct :", de: "Echtzeit-Ereignisprotokoll:",
                ja: "リアルタイムイベントログ:", ko: "실시간 이벤트 로그:", ru: "Лог Событий в Реальном Времени:", ar: "سجل الأحداث في الوقت الفعلي:"
            },
            btn_snap: { vi: "Chụp Ảnh", en: "Snapshot", zh: "截图拍照", es: "Captura", fr: "Prendre Photo", de: "Schnappschuss", ja: "写真撮影", ko: "사진 촬영", ru: "Снимок", ar: "لقطة" },
            btn_record: { vi: "Ghi Dữ Liệu", en: "Record Data", zh: "记录数据", es: "Grabar Datos", fr: "Enregistrer", de: "Daten aufzeichnen", ja: "データ記録", ko: "데이터 기록", ru: "Запись", ar: "تسجيل البيانات" },
            btn_flash: { vi: "Đèn Flash", en: "Flash LED", zh: "补光灯", es: "Flash LED", fr: "Lampe Flash", de: "Blitz-LED", ja: "フラッシュ", ko: "플래시", ru: "Вспышка", ar: "فلاش" },
            btn_reset: { vi: "Khởi Động Lại", en: "Restart", zh: "重启", es: "Reiniciar", fr: "Redémarrer", de: "Neustart", ja: "再起動", ko: "재시작", ru: "Сброс", ar: "إعادة تشغيل" },
            metric_status: { vi: "Trạng Thái Xử Lý", en: "Processing Status", zh: "处理状态", es: "Estado de Procesamiento", fr: "État de Traitement", de: "Verarbeitungsstatus", ja: "処理ステータス", ko: "처리 상태", ru: "Статус Обработки", ar: "حالة المعالجة" },
            footer: {
                vi: "© 2026 <b>ESP32-S3 All-in-One Multi-Site Engine</b>. Quản lý 20 ứng dụng độc lập trên Flash 16MB.",
                en: "© 2026 <b>ESP32-S3 All-in-One Multi-Site Engine</b>. Managing 20 standalone apps on 16MB Flash.",
                zh: "© 2026 <b>ESP32-S3 All-in-One Multi-Site Engine</b>. 在 16MB Flash 上管理 20 个独立应用。",
                es: "© 2026 <b>ESP32-S3 All-in-One Multi-Site Engine</b>. Gestión de 20 aplicaciones en Flash de 16MB.",
                fr: "© 2026 <b>ESP32-S3 All-in-One Multi-Site Engine</b>. Gestion de 20 applications sur Flash 16Mo.",
                de: "© 2026 <b>ESP32-S3 All-in-One Multi-Site Engine</b>. 20 eigenständige Apps auf 16MB Flash.",
                ja: "© 2026 <b>ESP32-S3 All-in-One Multi-Site Engine</b>. 16MB Flash で20の独立アプリを管理。",
                ko: "© 2026 <b>ESP32-S3 All-in-One Multi-Site Engine</b>. 16MB Flash에서 20개 독립 앱 관리.",
                ru: "© 2026 <b>ESP32-S3 All-in-One Multi-Site Engine</b>. Управление 20 приложениями на Flash 16MB.",
                ar: "© 2026 <b>ESP32-S3 All-in-One Multi-Site Engine</b>. إدارة 20 تطبيقاً مستقلاً على فلاش 16 ميجابايت."
            }
        }
    };

    if (window.I18N) {
        window.I18N.extend(TRANSLATIONS);
    } else {
        window._pendingI18n = window._pendingI18n || [];
        window._pendingI18n.push(TRANSLATIONS);
    }
})(window);
