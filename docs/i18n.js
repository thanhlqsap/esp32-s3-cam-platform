/**
 * =============================================================================
 * @file i18n.js
 * @brief Thư Viện Từ Điển Đa Ngôn Ngữ Trung Tâm (Centralized i18n Dictionary)
 * @details Cung cấp cơ chế dịch thuật 10 ngôn ngữ (Tiếng Việt mặc định #1),
 *          quản lý từ vựng phân tầng theo Namespace và tự động ánh xạ giao diện.
 * =============================================================================
 */

(function(window) {
    'use strict';

    // 1. Danh sách 10 ngôn ngữ được hỗ trợ trong hệ thống
    const SUPPORTED_LANGUAGES = [
        { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳', dir: 'ltr' },
        { code: 'en', name: 'English', flag: '🇺🇸', dir: 'ltr' },
        { code: 'zh', name: '中文', flag: '🇨🇳', dir: 'ltr' },
        { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
        { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
        { code: 'ja', name: '日本語', flag: '🇯🇵', dir: 'ltr' },
        { code: 'ko', name: '한국어', flag: '🇰🇷', dir: 'ltr' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺', dir: 'ltr' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' }
    ];

    // 2. BẢNG TỪ ĐIỂN ĐA NGÔN NGỮ PHÂN TẦNG THEO NAMESPACE (10 NGÔN NGỮ)
    const DICTIONARY = {
// --- A. TỪ VỰNG CHUNG TOÀN HỆ THỐNG (COMMON) ---
        common: {
            title_os: {
                vi: "ESP32-S3 Master OS", en: "ESP32-S3 Master OS", zh: "ESP32-S3 主控系统",
                es: "ESP32-S3 Master OS", fr: "ESP32-S3 Master OS", de: "ESP32-S3 Master OS",
                ja: "ESP32-S3 Master OS", ko: "ESP32-S3 Master OS", ru: "ESP32-S3 Master OS", ar: "ESP32-S3 نظام التشغيل الرئيسي"
            },
            sub_title: {
                vi: "16MB Flash • Dual-OTA • GitHub Cloud Store",
                en: "16MB Flash • Dual-OTA • GitHub Cloud Store",
                zh: "16MB Flash • 双OTA • GitHub 云端商店",
                es: "16MB Flash • Dual-OTA • Tienda Cloud GitHub",
                fr: "16Mo Flash • Dual-OTA • Boutique Cloud GitHub",
                de: "16MB Flash • Dual-OTA • GitHub Cloud Store",
                ja: "16MB Flash • Dual-OTA • GitHub クラウドストア",
                ko: "16MB Flash • 듀얼 OTA • GitHub 클라우드 스토어",
                ru: "16MB Flash • Dual-OTA • Магазин GitHub Cloud",
                ar: "16 ميجابايت فلاش • ترقية مزدوجة OTA • متجر GitHub السحابي"
            },
            back_dashboard: {
                vi: "Về Dashboard", en: "Back to Dashboard", zh: "返回仪表盘",
                es: "Volver al Panel", fr: "Retour au Tableau", de: "Zurück zum Dashboard",
                ja: "ダッシュボードへ戻る", ko: "대시보드로 돌아가기", ru: "Назад в Панель", ar: "العودة للوحة التحكم"
            },
            datasheet: {
                vi: "Tài Liệu Kỹ Thuật", en: "Datasheet", zh: "技术规格书",
                es: "Ficha Técnica", fr: "Fiche Technique", de: "Datenblatt",
                ja: "データシート", ko: "데이터시트", ru: "Техпаспорт", ar: "ورقة البيانات"
            },
            telemetry_title: {
                vi: "Thông Số & Nhật Ký Hoạt Động", en: "System Telemetry & Event Logs", zh: "系统遥测与运行日志",
                es: "Telemetría y Registros del Sistema", fr: "Télémétrie & Journaux Système", de: "Systemtelemetrie & Ereignisprotokolle",
                ja: "システム情報＆動作ログ", ko: "시스템 정보 및 작동 로그", ru: "Телеметрия и Системные Логи", ar: "بيانات النظام وسجلات الأحداث"
            },
            status_online: {
                vi: "TRỰC TUYẾN", en: "ONLINE", zh: "在线",
                es: "EN LÍNEA", fr: "EN LIGNE", de: "ONLINE",
                ja: "オンライン", ko: "온라인", ru: "В СЕТИ", ar: "متصل"
            },
            status_running: {
                vi: "ĐANG CHẠY", en: "RUNNING", zh: "运行中",
                es: "EJECUTANDO", fr: "EN COURS", de: "LÄUFT",
                ja: "稼働中", ko: "실행 중", ru: "РАБОТАЕТ", ar: "قيد التشغيل"
            },
            status_standby: {
                vi: "CHỜ LỆNH", en: "STANDBY", zh: "待机",
                es: "EN ESPERA", fr: "EN ATTENTE", de: "STANDBY",
                ja: "待機中", ko: "대기 중", ru: "ОЖИДАНИЕ", ar: "في وضع الاستعداد"
            },
            free_heap: {
                vi: "RAM Khả dụng", en: "Free Heap", zh: "可用 RAM",
                es: "RAM Libre", fr: "RAM Libre", de: "Freier RAM",
                ja: "空き RAM", ko: "여유 RAM", ru: "Свободная RAM", ar: "ذاكرة RAM المتاحة"
            },
            psram_size: {
                vi: "Bộ nhớ PSRAM", en: "Octal PSRAM", zh: "PSRAM 内存",
                es: "Memoria PSRAM", fr: "Mémoire PSRAM", de: "PSRAM-Speicher",
                ja: "PSRAM メモリ", ko: "PSRAM 메모리", ru: "Память PSRAM", ar: "ذاكرة PSRAM"
            },
            ip_address: {
                vi: "Địa chỉ IP", en: "IP Address", zh: "IP 地址",
                es: "Dirección IP", fr: "Adresse IP", de: "IP-Adresse",
                ja: "IP アドレス", ko: "IP 주소", ru: "IP-адрес", ar: "عنوان IP"
            },
            wifi_signal: {
                vi: "Tín hiệu Wi-Fi", en: "Wi-Fi RSSI", zh: "Wi-Fi 信号",
                es: "Señal Wi-Fi", fr: "Signal Wi-Fi", de: "WLAN-Signal",
                ja: "Wi-Fi 信号", ko: "Wi-Fi 신호", ru: "Сигнал Wi-Fi", ar: "إشارة Wi-Fi"
            },
            latency: {
                vi: "Độ Trễ Phản Hồi", en: "Response Latency", zh: "响应延迟",
                es: "Latencia de Respuesta", fr: "Latence de Réponse", de: "Antwortlatenz",
                ja: "応答遅延", ko: "응답 지연", ru: "Задержка Ответа", ar: "زمن الاستجابة"
            },
            core_temp: {
                vi: "Nhiệt Độ Chip", en: "Core Temp", zh: "芯片温度",
                es: "Temp. del Núcleo", fr: "Temp. Processeur", de: "Chiptemperatur",
                ja: "チップ温度", ko: "칩 온도", ru: "Температура Чипа", ar: "حرارة المعالج"
            },
            clear_log: {
                vi: "Xóa log", en: "Clear log", zh: "清空日志",
                es: "Borrar log", fr: "Effacer journal", de: "Protokoll löschen",
                ja: "ログ消去", ko: "로그 삭제", ru: "Очистить лог", ar: "مسح السجل"
            },
            btn_restart: {
                vi: "Khởi Động Lại", en: "Reboot System", zh: "重启系统",
                es: "Reiniciar Sistema", fr: "Redémarrer", de: "System neu starten",
                ja: "システム再起動", ko: "시스템 재부팅", ru: "Перезагрузка", ar: "إعادة التشغيل"
            }
        },

// --- B. TỪ VỰNG DASHBOARD & APP STORE (STORE) ---
        dashboard: {
            tab_camera: {
                vi: "Camera Live Dashboard", en: "Camera Live Dashboard", zh: "实时视频监控",
                es: "Panel de Cámara en Vivo", fr: "Tableau de Bord Caméra", de: "Kamera-Live-Dashboard",
                ja: "カメラライブダッシュボード", ko: "카메라 라이브 대시보드", ru: "Панель Камеры", ar: "لوحة تحكم الكاميرا"
            },
            tab_store: {
                vi: "Kho Dự Án (Cloud App Store)", en: "Project Store (Cloud App Store)", zh: "项目商店 (Cloud App Store)",
                es: "Tienda de Proyectos (App Store)", fr: "Boutique de Projets (App Store)", de: "Projekt-Store (Cloud App Store)",
                ja: "プロジェクトストア (Cloud App Store)", ko: "프로젝트 스토어 (Cloud App Store)", ru: "Магазин Проектов (App Store)", ar: "متجر المشاريع (Cloud App Store)"
            },
            store_title: {
                vi: "Kho Dự Án Trực Tuyến (Online App Store)", en: "Online Project App Store", zh: "在线项目应用商店",
                es: "Tienda de Proyectos en Línea", fr: "Boutique de Projets en Ligne", de: "Online-Projekt-App-Store",
                ja: "オンラインプロジェクトアプリストア", ko: "온라인 프로젝트 앱 스토어", ru: "Онлайн Магазин Проектов", ar: "متجر المشاريع المباشر"
            },
            store_sub: {
                vi: "Tải và nạp trực tiếp firmware từ GitHub Releases qua HTTPS Streaming OTA (Không cần thẻ nhớ)",
                en: "Download and stream flash firmware directly from GitHub Releases via HTTPS OTA",
                zh: "直接从 GitHub Releases 通过 HTTPS 串流 OTA 烧录固件（无需 SD 卡）",
                es: "Descarga e instala firmware directamente desde GitHub Releases vía HTTPS OTA",
                fr: "Téléchargez et flashez le firmware directement depuis GitHub Releases via HTTPS OTA",
                de: "Firmware direkt von GitHub Releases über HTTPS OTA herunterladen und flashen",
                ja: "GitHub Releases から HTTPS OTA 経由で直接ファームウェアをフラッシュ",
                ko: "GitHub Releases에서 HTTPS OTA를 통해 직접 펌웨어 다운로드 및 플래시",
                ru: "Загрузка и прошивка напрямую из GitHub Releases через HTTPS OTA",
                ar: "تنزيل وتثبيت البرامج الثابتة مباشرة من GitHub Releases عبر HTTPS OTA"
            },
            cat_all: { vi: "Tất cả", en: "All", zh: "全部", es: "Todo", fr: "Tous", de: "Alle", ja: "すべて", ko: "전체", ru: "Все", ar: "الكل" },
            cat_edge_ai: { vi: "Edge AI", en: "Edge AI", zh: "边缘 AI", es: "Edge AI", fr: "Edge IA", de: "Edge KI", ja: "Edge AI", ko: "엣지 AI", ru: "Edge AI", ar: "الذكاء الاصطناعي" },
            cat_smart_home: { vi: "Smart Home", en: "Smart Home", zh: "智能家居", es: "Smart Home", fr: "Maison Intelligente", de: "Smart Home", ja: "スマートホーム", ko: "스마트홈", ru: "Умный Дом", ar: "المنزل الذكي" },
            cat_voice_ai: { vi: "Voice AI", en: "Voice AI", zh: "语音 AI", es: "Voice AI", fr: "IA Vocale", de: "Sprach-KI", ja: "音声 AI", ko: "음성 AI", ru: "Голосовой AI", ar: "الصوت الذكي" },
            cat_robotics: { vi: "Robotics", en: "Robotics", zh: "机器人", es: "Robótica", fr: "Robotique", de: "Robotik", ja: "ロボティクス", ko: "로보틱스", ru: "Робототехника", ar: "الروبوتات" },
            cat_gadgets: { vi: "Gadgets & Tools", en: "Gadgets & Tools", zh: "极客工具", es: "Herramientas", fr: "Gadgets & Outils", de: "Gadgets & Tools", ja: "ガジェット", ko: "가젯 및 도구", ru: "Гаджеты", ar: "الأدوات الذكية" },
            open_site_btn: {
                vi: "Mở Site Điều Khiển", en: "Open Control Site", zh: "打开控制站点",
                es: "Abrir Sitio de Control", fr: "Ouvrir le Site", de: "Steuerungs-Site öffnen",
                ja: "制御サイトを開く", ko: "제어 사이트 열기", ru: "Открыть Сайт Управления", ar: "فتح موقع التحكم"
            },
            install_btn: {
                vi: "1-Click Cài Đặt", en: "1-Click Install", zh: "一键安装",
                es: "Instalar en 1-Clic", fr: "Installer en 1-Clic", de: "1-Klick-Installation",
                ja: "1クリックインストール", ko: "원클릭 설치", ru: "Установка в 1 клик", ar: "تثبيت بنقرة واحدة"
            }
        },

// --- B1. TỪ VỰNG CẤU HÌNH MẠNG WI-FI & CAPTIVE PORTAL (WIFI) ---
        wifi: {
            setup_title: {
                vi: "Cấu Hình Mạng Wi-Fi", en: "Wi-Fi Configuration", zh: "Wi-Fi 网络配置",
                es: "Configuración Wi-Fi", fr: "Configuration Wi-Fi", de: "WLAN-Konfiguration",
                ja: "Wi-Fi ネットワーク設定", ko: "Wi-Fi 네트워크 설정", ru: "Настройка Сети Wi-Fi", ar: "إعداد شبكة Wi-Fi"
            },
            setup_desc: {
                vi: "Chọn mạng Wi-Fi khả dụng hoặc nhập thủ công SSID và mật khẩu để kết nối thiết bị.",
                en: "Select an available Wi-Fi network or manually enter SSID and password to connect.",
                zh: "选择可用 Wi-Fi 网络或手动输入 SSID 和密码以连接设备。",
                es: "Seleccione una red Wi-Fi disponible o ingrese manualmente el SSID y la contraseña.",
                fr: "Sélectionnez un réseau Wi-Fi disponible ou saisissez manuellement le SSID et le mot de passe.",
                de: "Wählen Sie ein verfügbares WLAN-Netzwerk aus oder geben Sie SSID und Passwort manuell ein.",
                ja: "利用可能な Wi-Fi を選択するか、SSID とパスワードを手動入力して接続してください。",
                ko: "사용 가능한 Wi-Fi 네트워크를 선택하거나 SSID와 비밀번호를 직접 입력하여 연결하세요.",
                ru: "Выберите доступную сеть Wi-Fi или введите SSID и пароль вручную.",
                ar: "حدد شبكة Wi-Fi متوفرة أو أدخل اسم الشبكة SSID وكلمة المرور يدوياً للاتصال."
            },
            scan_networks: { vi: "Quét Mạng Wi-Fi", en: "Scan Wi-Fi Networks", zh: "扫描 Wi-Fi", es: "Escanear Wi-Fi", fr: "Scanner Wi-Fi", de: "WLAN scannen", ja: "Wi-Fi スキャン", ko: "Wi-Fi 검색", ru: "Сканировать Wi-Fi", ar: "مسح شبكات Wi-Fi" },
            scanning: { vi: "Đang quét mạng...", en: "Scanning networks...", zh: "正在扫描网络...", es: "Escaneando redes...", fr: "Recherche en cours...", de: "Netzwerke werden gesucht...", ja: "スキャン中...", ko: "네트워크 검색 중...", ru: "Поиск сетей...", ar: "جارٍ مسح الشبكات..." },
            ssid_label: { vi: "Tên Mạng Wi-Fi (SSID)", en: "Network Name (SSID)", zh: "网络名称 (SSID)", es: "Nombre de Red (SSID)", fr: "Nom du Réseau (SSID)", de: "Netzwerkname (SSID)", ja: "ネットワーク名 (SSID)", ko: "네트워크 이름 (SSID)", ru: "Имя Сети (SSID)", ar: "اسم الشبكة (SSID)" },
            password_label: { vi: "Mật Khẩu Wi-Fi", en: "Wi-Fi Password", zh: "Wi-Fi 密码", es: "Contraseña Wi-Fi", fr: "Mot de Passe Wi-Fi", de: "WLAN-Passwort", ja: "Wi-Fi パスワード", ko: "Wi-Fi 비밀번호", ru: "Пароль Wi-Fi", ar: "كلمة مرور Wi-Fi" },
            connect_btn: { vi: "Lưu & Kết Nối", en: "Save & Connect", zh: "保存并连接", es: "Guardar y Conectar", fr: "Enregistrer & Connecter", de: "Speichern & Verbinden", ja: "保存して接続", ko: "저장 및 연결", ru: "Сохранить и Подключить", ar: "حفظ والاتصال" },
            connecting: { vi: "Đang kết nối...", en: "Connecting...", zh: "正在连接...", es: "Conectando...", fr: "Connexion en cours...", de: "Verbindung wird hergestellt...", ja: "接続中...", ko: "연결 중...", ru: "Подключение...", ar: "جارٍ الاتصال..." },
            success_msg: {
                vi: "Lưu cấu hình thành công! Thiết bị đang kết nối lại...",
                en: "Configuration saved! Device is reconnecting...",
                zh: "配置保存成功！设备正在重新连接...",
                es: "¡Configuración guardada! El dispositivo se está reconectando...",
                fr: "Configuration enregistrée ! L'appareil se reconnecte...",
                de: "Konfiguration gespeichert! Gerät verbindet sich neu...",
                ja: "設定が保存されました！デバイスが再接続中です...",
                ko: "설정이 저장되었습니다! 기기가 다시 연결 중입니다...",
                ru: "Настройки сохранены! Устройство переподключается...",
                ar: "تم حفظ الإعدادات بنجاح! الجهاز يعيد الاتصال..."
            }
        },

// --- B2. TỪ VỰNG DUAL-OTA & CẬP NHẬT FIRMWARE (OTA) ---
        ota: {
            title: { vi: "Nâng Cấp Firmware Dual-OTA", en: "Dual-OTA Firmware Update", zh: "双 OTA 固件升级", es: "Actualización de Firmware Dual-OTA", fr: "Mise à Jour Firmware Dual-OTA", de: "Dual-OTA Firmware-Aktualisierung", ja: "Dual-OTA ファームウェア更新", ko: "듀얼 OTA 펌웨어 업데이트", ru: "Обновление Прошивки Dual-OTA", ar: "ترقية البرامج الثابتة Dual-OTA" },
            downloading: { vi: "Đang tải bản cập nhật...", en: "Downloading update...", zh: "正在下载更新...", es: "Descargando actualización...", fr: "Téléchargement en cours...", de: "Update wird heruntergeladen...", ja: "更新をダウンロード中...", ko: "업데이트 다운로드 중...", ru: "Загрузка обновления...", ar: "جارٍ تنزيل التحديث..." },
            flashing: { vi: "Đang ghi vào bộ nhớ Flash...", en: "Flashing binary to Flash memory...", zh: "正在写入 Flash 内存...", es: "Escribiendo en memoria Flash...", fr: "Écriture dans la mémoire Flash...", de: "Flash-Speicher wird beschrieben...", ja: "Flash メモリに書き込み中...", ko: "Flash 메모리에 기록 중...", ru: "Запись во Flash память...", ar: "جارٍ الكتابة في ذاكرة Flash..." },
            verify_success: { vi: "Cập nhật hoàn tất! Thiết bị đang khởi động lại...", en: "Update complete! Device is rebooting...", zh: "更新完成！设备正在重启...", es: "¡Actualización completada! Reiniciando...", fr: "Mise à jour terminée ! Redémarrage...", de: "Update abgeschlossen! Gerät startet neu...", ja: "更新完了！再起動中...", ko: "업데이트 완료! 기기가 재부팅됩니다...", ru: "Обновление завершено! Перезагрузка...", ar: "اكتمل التحديث! الجهاز يعيد التشغيل..." },
            failed: { vi: "Cập nhật thất bại!", en: "Update failed!", zh: "更新失败！", es: "¡Actualización fallida!", fr: "Échec de la mise à jour !", de: "Update fehlgeschlagen!", ja: "更新失敗！", ko: "업데이트 실패!", ru: "Ошибка обновления!", ar: "فشل التحديث!" },
            warning_power: {
                vi: "⚠️ Không ngắt nguồn điện hoặc Wi-Fi trong quá trình cài đặt!",
                en: "⚠️ Do not disconnect power or Wi-Fi during installation!",
                zh: "⚠️ 安装过程中请勿断开电源或 Wi-Fi！",
                es: "⚠️ ¡No desconecte la alimentación ni el Wi-Fi durante la instalación!",
                fr: "⚠️ Ne débranchez pas l'alimentation ou le Wi-Fi pendant l'installation !",
                de: "⚠️ Trennen Sie während der Installation weder Strom noch WLAN!",
                ja: "⚠️ インストール中は電源や Wi-Fi を切断しないでください！",
                ko: "⚠️ 설치 중에는 전원이나 Wi-Fi를 끄지 마세요!",
                ru: "⚠️ Не отключайте питание и Wi-Fi во время установки!",
                ar: "⚠️ لا تفصل الطاقة أو شبكة Wi-Fi أثناء التثبيت!"
            }
        },

// --- H. THÔNG TIN METADATA CỦA 20 ỨNG DỤNG ---
        apps: {
            app_face_ai: {
                name: { vi: "01. Camera AI Nhận Diện Khuôn Mặt (ESP-WHO)", en: "01. Offline Face Recognition AI Camera", zh: "01. 离线人脸识别 AI 相机 (ESP-WHO)", es: "01. Cámara AI de Reconocimiento Facial", fr: "01. Caméra IA Reconnaissance Faciale", de: "01. Offline KI-Gesichtserkennungskamera", ja: "01. オフライン顔認識 AI カメラ", ko: "01. 오프라인 얼굴 인식 AI 카메라", ru: "01. AI-Камера Распознавания Лиц", ar: "01. كاميرا التعرف على الوجوه" },
                desc: { vi: "Nhận diện khuôn mặt offline với ESP-WHO & Face Embeddings.", en: "Offline face detection and recognition using ESP-WHO & Face Embeddings.", zh: "基于 ESP-WHO 和 Face Embeddings 的离线人脸检测与识别。", es: "Detección y reconocimiento facial offline con ESP-WHO.", fr: "Détection et reconnaissance faciale hors ligne avec ESP-WHO.", de: "Offline-Gesichtserkennung mit ESP-WHO & Face Embeddings.", ja: "ESP-WHO によるオフライン顔検出と認識。", ko: "ESP-WHO 기반 오프라인 얼굴 인식.", ru: "Офлайн распознавание лиц с помощью ESP-WHO.", ar: "كشف والتعرف على الوجوه دون اتصال بالإنترنت." }
            },
            app_edge_alpr: {
                name: { vi: "02. Camera Đọc Biển Số Xe (Edge ALPR)", en: "02. Automatic License Plate Recognition", zh: "02. 边缘车牌自动识别相机 (Edge ALPR)", es: "02. Cámara Lectora de Matrículas", fr: "02. Reconnaissance de Plaques (ALPR)", de: "02. Kennzeichenerkennungskamera", ja: "02. ナンバープレート自動認識カメラ", ko: "02. 엣지 번호판 자동 인식 카메라", ru: "02. Камера Распознавания Автономеров", ar: "02. كاميرا التعرف على لوحات السيارات" },
                desc: { vi: "Trích xuất biển số xe tự động với TinyML TensorFlow Lite Micro.", en: "Automated license plate extraction with TinyML TensorFlow Lite Micro.", zh: "基于 TinyML TensorFlow Lite Micro 的车牌自动识别与提取。", es: "Extracción automática de matrículas con TensorFlow Lite Micro.", fr: "Extraction automatique de plaques avec TensorFlow Lite Micro.", de: "Automatische Kennzeichenerkennung mit TinyML TensorFlow Lite Micro.", ja: "TinyML TensorFlow Lite Micro によるナンバープレート認識。", ko: "TinyML TensorFlow Lite Micro를 통한 번호판 자동 추출.", ru: "Автоматическое распознавание автономеров на базе TinyML.", ar: "استخراج تلقائي للوحات السيارات باستخدام TensorFlow Lite Micro." }
            },
            app_waste_fomo: {
                name: { vi: "03. Phân Loại Rác Thông Minh (FOMO)", en: "03. Smart Waste Classification Camera (FOMO)", zh: "03. 智能垃圾分类视觉相机 (FOMO)", es: "03. Clasificación Inteligente de Residuos", fr: "03. Tri Intelligent des Déchets (FOMO)", de: "03. Intelligente Müllsortierkamera", ja: "03. スマートゴミ分別ビジョンカメラ", ko: "03. 스마트 쓰레기 분류 비전 카메라", ru: "03. Умная Сортировка Отходов (FOMO)", ar: "03. كاميرا فرز النفايات الذكية (FOMO)" },
                desc: { vi: "Phát hiện và phân loại rác tái chế/hữu cơ với Edge Impulse FOMO.", en: "Object detection and waste sorting powered by Edge Impulse FOMO.", zh: "利用 Edge Impulse FOMO 进行可回收/有机垃圾实时目标检测分类。", es: "Detección y clasificación de residuos con Edge Impulse FOMO.", fr: "Détection et tri des déchets alimentés par Edge Impulse FOMO.", de: "Objekterkennung und Müllsortierung mit Edge Impulse FOMO.", ja: "Edge Impulse FOMO によるリアルタイムゴミ分別。", ko: "Edge Impulse FOMO 기반 재활용/유기물 쓰레기 분류.", ru: "Детекция и сортировка отходов с помощью Edge Impulse FOMO.", ar: "كشف وفرز النفايات بواسطة Edge Impulse FOMO." }
            },
            app_gesture_counter: {
                name: { vi: "04. Cử Chỉ & Đếm Người (Occupancy Counter)", en: "04. Gesture Control & Occupancy Counter", zh: "04. 手势识别控制与人流计数器", es: "04. Control por Gestos y Conteo de Personas", fr: "04. Contrôle Gestuel & Compteur de Personnes", de: "04. Gestensteuerung & Personenzähler", ja: "04. ジェスチャー制御＆人数カウント", ko: "04. 제스처 제어 및 인원 계수기", ru: "04. Распознавание Жестов и Счетчик Людей", ar: "04. التحكم بالإيماءات وتعداد الأشخاص" },
                desc: { vi: "Điều khiển không chạm và đếm mật độ người ra vào hiển thị trên Web.", en: "Touchless gesture interface and real-time occupancy counting.", zh: "非接触手势控制以及实时进出人流密度统计并网页展示。", es: "Control por gestos sin contacto y conteo de ocupación en tiempo real.", fr: "Interface gestuelle sans contact et comptage des personnes.", de: "Berührungslose Gestensteuerung und Personenzählung in Echtzeit.", ja: "タッチレスジェスチャー制御とリアルタイム人数カウント。", ko: "비접촉 제스처 제어 및 실시간 인원 계수 웹 표시.", ru: "Бесконтактное управление жестами и учет посетителей.", ar: "واجهة إيماءات بدون لمس وحساب عدد الأشخاص في الوقت الفعلي." }
            },
            app_video_doorbell: {
                name: { vi: "05. Chuông Cửa Hình RTSP 2 Chiều", en: "05. Two-Way Audio RTSP Smart Doorbell", zh: "05. 双向对讲 RTSP 智能可视门铃", es: "05. Timbre Inteligente con Audio Bidireccional RTSP", fr: "05. Sonnette Vidéo Intelligente RTSP", de: "05. Intelligente RTSP-Video-Türklingel", ja: "05. 双方向音声対応 RTSP ドアホン", ko: "05. 양방향 음성 RTSP 스마트 도어벨", ru: "05. Умный Дверной Звонок RTSP", ar: "05. جرس باب ذكي ببث RTSP" },
                desc: { vi: "Stream RTSP/WebRTC tích hợp Home Assistant và đàm thoại 2 chiều.", en: "RTSP/WebRTC live stream with Home Assistant integration and 2-way talk.", zh: "支持 RTSP/WebRTC 串流、Home Assistant 集成与双向语音对讲。", es: "Stream RTSP/WebRTC con integración en Home Assistant y audio 2 vías.", fr: "Flux RTSP/WebRTC avec Home Assistant et audio bidirectionnel.", de: "RTSP/WebRTC-Stream mit Home Assistant und 2-Wege-Audio.", ja: "Home Assistant 連携と双方向通話対応の RTSP 配信。", ko: "Home Assistant 연동 및 양방향 통화를 지원하는 RTSP 스트림.", ru: "Стриминг RTSP/WebRTC с интеграцией в Home Assistant и интеркомом.", ar: "بث مباشر RTSP/WebRTC متكامل مع Home Assistant ومحادثة ثنائية الاتجاه." }
            },
            app_loop_dashcam: {
                name: { vi: "06. Camera Hành Trình Mini Ghi Thẻ Nhớ", en: "06. Mini Loop Recording Dashcam", zh: "06. 微型循环录像行车记录仪", es: "06. Mini Cámara de Tablero en Bucle", fr: "06. Mini Dashcam Enregistrement Boucle", de: "06. Mini-Dashcam mit Schleifenaufnahme", ja: "06. ミニループ録画ドライブレコーダー", ko: "06. 미니 루프 녹화 블랙박스", ru: "06. Компактный Видеорегистратор MicroSD", ar: "06. كاميرا لوحة قيادة للتسجيل الحلقي" },
                desc: { vi: "Quay video AVI vòng lặp ghi thẻ nhớ MicroSD kèm cảm biến gia tốc.", en: "Continuous AVI loop recording to MicroSD with G-Sensor shock detection.", zh: "MicroSD 卡 AVI 循环录像，内置重力加速度碰撞锁存保护。", es: "Grabación continua en bucle AVI en MicroSD con sensor G.", fr: "Enregistrement en boucle AVI sur carte MicroSD avec capteur G.", de: "Kontinuierliche AVI-Schleifenaufnahme auf MicroSD mit G-Sensor.", ja: "MicroSD への AVI ループ録画と G センサー衝撃検知。", ko: "MicroSD 카드 AVI 루프 녹화 및 G 센서 충격 감지.", ru: "Циклическая запись AVI на MicroSD карту с G-сенсором.", ar: "تسجيل حلقي مستمر بصيغة AVI على MicroSD مع مستشعر الصدمات." }
            },
            app_matter_bridge: {
                name: { vi: "07. Bộ Điều Khiển Cầu Nối Matter Bridge", en: "07. Smart Home Matter 1.3 Bridge Controller", zh: "07. 智能家居 Matter 1.3 桥接网关", es: "07. Controlador de Puente Matter 1.3", fr: "07. Contrôleur de Pont Matter 1.3", de: "07. Matter 1.3 Smart Home Bridge", ja: "07. スマートホーム Matter 1.3 ブリッジ", ko: "07. 스마트홈 Matter 1.3 브릿지", ru: "07. Мост-Контроллер Matter 1.3", ar: "07. وحدة تحكم جسر Matter 1.3" },
                desc: { vi: "Cầu nối Matter 1.3 cho HomeKit, Google Home & Alexa.", en: "Unified Matter 1.3 bridge controller for Apple HomeKit, Google Home, and Alexa.", zh: "统一 Matter 1.3 桥接网关，无缝接入 Apple HomeKit、Google Home 及 Alexa。", es: "Puente Matter 1.3 unificado para HomeKit, Google Home y Alexa.", fr: "Pont Matter 1.3 unifié pour HomeKit, Google Home et Alexa.", de: "Matter 1.3 Bridge-Controller für HomeKit, Google Home und Alexa.", ja: "Apple HomeKit、Google Home、Alexa 対応 Matter 1.3 ブリッジ。", ko: "Apple HomeKit, Google Home 및 Alexa 지원 Matter 1.3 브릿지.", ru: "Мост Matter 1.3 для Apple HomeKit, Google Home и Alexa.", ar: "جسر Matter 1.3 موحد لـ HomeKit و Google Home و Alexa." }
            },
            app_solar_timelapse: {
                name: { vi: "08. Camera Nông Nghiệp Solar Timelapse", en: "08. Solar Agricultural Timelapse Camera", zh: "08. 太阳能超低功耗农业延时摄影相机", es: "08. Cámara Agrícola Solar Timelapse", fr: "08. Caméra Agricole Solaire Timelapse", de: "08. Solarbetriebene Agrar-Zeitrafferkamera", ja: "08. ソーラー農業用タイムラプスカメラ", ko: "08. 태양광 농업용 타임랩스 카메라", ru: "08. Сельскохозяйственная Таймлапс-Камера", ar: "08. كاميرا تايم لابس زراعية بالطاقة الشمسية" },
                desc: { vi: "Pin mặt trời, Deep Sleep 7uA, tự chụp ảnh định kỳ phát hiện sâu bệnh.", en: "Solar-powered 7uA deep sleep periodic camera for crop health monitoring.", zh: "太阳能供电，7uA 深度睡眠，超长续航农业延时拍摄与病虫害监测。", es: "Cámara solar con suspensión profunda de 7uA para monitoreo de cultivos.", fr: "Caméra solaire 7uA pour surveillance agricole et timelapse.", de: "Solarbetriebene 7uA Deep-Sleep Zeitrafferkamera für Agrar-Monitoring.", ja: "太陽光発電＆ 7uA ディープスリープ農業用タイムラプスカメラ。", ko: "태양광 전원 및 7uA 딥슬립 농업용 타임랩스 카메라.", ru: "Таймлапс-камера на солнечной батарее с глубоким сном 7мкА.", ar: "كاميرا تعمل بالطاقة الشمسية مع نوم عميق 7uA لمراقبة المحاصيل الزراعية." }
            },
            app_gemini_voice: {
                name: { vi: "09. Trợ Lý Giọng Nói Gemini Live", en: "09. Gemini Live Real-time Voice AI Assistant", zh: "09. Gemini Live 实时语音 AI 助手", es: "09. Asistente de Voz Gemini Live", fr: "09. Assistant Vocal Gemini Live", de: "09. Gemini Live Sprach-KI-Assistent", ja: "09. Gemini Live 音声 AI アシスタント", ko: "09. Gemini Live 실시간 음성 AI 비서", ru: "09. Голосовой AI-Ассистент Gemini Live", ar: "09. مساعد Gemini Live الصوتي المباشر" },
                desc: { vi: "Hội thoại giọng nói thời gian thực với Google Gemini Live.", en: "Real-time bidirectional voice conversation with Google Gemini Live.", zh: "基于 Google Gemini Live 的超低延迟双向实时语音大模型对话。", es: "Conversación de voz bidireccional en tiempo real con Gemini Live.", fr: "Conversation vocale bidirectionnelle en direct avec Gemini Live.", de: "Bidirektionale Sprachkonversation in Echtzeit mit Google Gemini Live.", ja: "Google Gemini Live との超低遅延双方向リアルタイム音声会話。", ko: "Google Gemini Live 기반 초저지연 실시간 음성 대화.", ru: "Двусторонний голосовой диалог в реальном времени с Google Gemini Live.", ar: "محادثة صوتية ثنائية الاتجاه في الوقت الفعلي مع Google Gemini Live." }
            },
            app_ai_translator: {
                name: { vi: "10. Máy Thông Dịch Bỏ Túi Đa Ngữ", en: "10. Pocket Real-time Multilingual Voice Translator", zh: "10. 便携式多语言实时语音翻译机", es: "10. Traductor de Voz Multilingüe de Bolsillo", fr: "10. Traducteur Vocal Multilingue de Poche", de: "10. Mehrsprachiger Taschen-Sprachübersetzer", ja: "10. ポケット双方向多言語音声翻訳機", ko: "10. 포켓 양방향 다국어 음성 번역기", ru: "10. Мультиязычный Голосовой Переводчик", ar: "10. مترجم صوتي متعدد اللغات للجيب" },
                desc: { vi: "Dịch giọng nói 30+ ngôn ngữ tức thì qua microphone và loa I2S.", en: "Instant 30+ language speech translation via I2S microphone and DAC speaker.", zh: "通过 I2S 数字麦克风和扬声器实现 30+ 种语言即时双向同声传译。", es: "Traducción de voz instantánea en 30+ idiomas mediante I2S.", fr: "Traduction vocale instantanée en plus de 30 langues via I2S.", de: "Sofortige Sprachübersetzung in über 30 Sprachen über I2S.", ja: "I2S マイクとスピーカーによる 30 以上の言語のリアルタイム音声翻訳。", ko: "I2S 마이크와 스피커를 통한 30개 이상 언어 실시간 동시통역.", ru: "Мгновенный голосовой перевод на 30+ языков через I2S микрофон и динамик.", ar: "ترجمة صوتية فورية لأكثر من 30 لغة عبر ميكروفون ومكبر صوت I2S." }
            },
            app_hires_audio: {
                name: { vi: "11. Loa Hi-Res AirPlay 2 & Spotify", en: "11. Hi-Res Lossless Audio Streamer", zh: "11. 高保真无损音频流播放器", es: "11. Reproductor de Audio Hi-Res", fr: "11. Lecteur Audio Hi-Res", de: "11. Hi-Res Lossless Audio-Streamer", ja: "11. ハイレゾロスレスオーディオストリーマー", ko: "11. 하이레조 무손실 오디오 스트리머", ru: "11. Hi-Res Аудиостример (AirPlay/Spotify)", ar: "11. مشغل صوتي عالي الدقة" },
                desc: { vi: "Bộ giải mã âm thanh 24-bit/192kHz qua I2S DAC.", en: "Lossless 24-bit/192kHz Wi-Fi audio streamer with AirPlay and Spotify Connect.", zh: "支持 24-bit/192kHz I2S DAC 解码的 AirPlay 2 与 Spotify Connect 播放器。", es: "Decodificador de audio de 24 bits/192 kHz vía I2S DAC.", fr: "Décodeur audio 24-bit/192kHz via I2S DAC avec AirPlay.", de: "24-Bit/192kHz Lossless-Audio-Streamer mit AirPlay & Spotify Connect.", ja: "24-bit/192kHz I2S DAC による AirPlay ＆ Spotify ロスレス再生。", ko: "24-bit/192kHz I2S DAC 지원 AirPlay 및 Spotify 무손실 스트리머.", ru: "24-бит/192кГц I2S ЦАП стример с поддержкой AirPlay и Spotify.", ar: "مشغل صوتي لاسلكي بدقة 24 بت / 192 كيلوهرتز مع AirPlay و Spotify." }
            },
            app_meeting_recorder: {
                name: { vi: "12. Máy Ghi Âm Cuộc Họp AI Khử Ồn", en: "12. AI Noise-Canceling Meeting Audio Recorder", zh: "12. AI 智能降噪会议录音与摘要生成器", es: "12. Grabadora de Reuniones con Reducción de Ruido", fr: "12. Enregistreur de Réunion avec Réduction Bruit", de: "12. KI-Meeting-Recorder mit Rauschunterdrückung", ja: "12. AI ノイズキャンセリング会議レコーダー", ko: "12. AI 노이즈 캔슬링 회의 음성 녹음기", ru: "12. AI-Диктофон для Совещаний", ar: "12. مسجل اجتماعات ذكي مع إلغاء الضوضاء" },
                desc: { vi: "Ghi âm khử ồn và tóm tắt biên bản cuộc họp qua AI.", en: "Beamforming noise reduction meeting recorder with AI transcription.", zh: "双麦波束成形降噪录音，并自动生成 AI 会议纪要与摘要。", es: "Grabación de reuniones con reducción de ruido y resúmenes automáticos por IA.", fr: "Enregistrement de réunion avec réduction de bruit et résumé IA.", de: "Rauschunterdrückung und KI-Zusammenfassung von Meeting-Aufnahmen.", ja: "ノイズキャンセリング録音と AI による会議議事録の自動要約。", ko: "노이즈 캔슬링 녹음 및 AI 회의록 자동 요약 생성.", ru: "Шумоподавляющая запись встреч с генерацией саммари через AI.", ar: "تسجيل صوتي مع إلغاء الضوضاء وإنشاء ملخصات للاجتماعات بالذكاء الاصطناعي." }
            },
            app_tracking_robot: {
                name: { vi: "13. Xe Robot AI Bám Người (Mecanum)", en: "13. Autonomous AI Person-Following Mecanum Robot", zh: "13. 自动跟随麦克纳姆轮 AI 机器人小车", es: "13. Robot Mecanum con Seguimiento de Personas", fr: "13. Robot Mecanum Suiveur de Personne", de: "13. Autonomer Mecanum-Roboter mit Personenverfolgung", ja: "13. 人物追従自律走行メカナムホイール AI ロボット", ko: "13. 인물 추적 자율주행 메카넘 휠 AI 로봇", ru: "13. AI-Робот Mecanum с Функцией Следования", ar: "13. روبوت ميكانوم لتتبع الأشخاص بالذكاء الاصطناعي" },
                desc: { vi: "Robot 4 bánh Mecanum tự bám theo đối tượng và né vật cản.", en: "4-Wheel omnidirectional Mecanum robot with AI visual target tracking and obstacle avoidance.", zh: "四轮全向麦克纳姆轮小车，具备视觉目标自主锁定跟随与超声波避障。", es: "Robot omnidireccional Mecanum con seguimiento visual de objetivos por IA.", fr: "Robot omnidirectionnel Mecanum avec suivi visuel de personnes.", de: "Allrad-Mecanum-Roboter mit visueller KI-Zielverfolgung und Hindernisausweichung.", ja: "全方向移動メカナムホイールによる人物追従と障害物回避。", ko: "4륜 메카넘 휠 기반 AI 시각 목표 추적 및 장애물 회피 로봇.", ru: "4-колесный робот Mecanum с визуальным автотрекингом людей và объездом препятствий.", ar: "روبوت ميكانوم رباعي العجلات ذاتي القيادة لتتبع الأهداف وتفادي العوائق." }
            },
            app_fpv_drone: {
                name: { vi: "14. Máy Bay Mini FPV Wi-Fi Kèm OSD", en: "14. Ultra-Low Latency Wi-Fi FPV Drone Controller", zh: "14. 超低延迟 Wi-Fi FPV 穿越机图传遥控器", es: "14. Controlador de Dron FPV Wi-Fi", fr: "14. Contrôleur de Drone FPV Wi-Fi", de: "14. WLAN FPV-Drohnen-Controller", ja: "14. Wi-Fi FPV ドローンコントローラー", ko: "14. 초저지연 Wi-Fi FPV 드론 컨트롤러", ru: "14. Контроллер FPV-Дрона по Wi-Fi", ar: "14. وحدة تحكم طائرة FPV بدون طيار" },
                desc: { vi: "Truyền hình FPV độ trễ dưới 70ms qua Wi-Fi kèm cảm biến IMU.", en: "Sub-70ms ultra-low latency Wi-Fi video telemetry stream with IMU flight stabilization.", zh: "低于 70ms 超低延迟 Wi-Fi 实时图传，支持 6 轴 IMU 飞控姿态解算。", es: "Transmisión de video FPV < 70 ms con estabilización por sensor IMU.", fr: "Transmission vidéo FPV < 70ms avec stabilisation IMU.", de: "FPV-Videostream unter 70ms über WLAN mit IMU-Flugstabilisierung.", ja: "70ms 未満の超低遅延 Wi-Fi FPV 映像配信と IMU 飛行姿勢制御。", ko: "70ms 미만 초저지연 Wi-Fi FPV 영상 스트림 및 IMU 비행 제어.", ru: "Трансляция FPV видео с задержкой менее 70мс и стабилизацией IMU.", ar: "بث فيديو FPV بزمن انتقال أقل من 70 مللي ثانية مع تثبيت طيران IMU." }
            },
            app_sorting_arm: {
                name: { vi: "15. Cánh Tay Robot Phân Loại Mã QR", en: "15. QR/Barcode Sorting Robotic Arm", zh: "15. 基于视觉条码识别的智能分拣机械臂", es: "15. Brazo Robótico Clasificador de Códigos QR", fr: "15. Bras Robotique de Tri de Codes QR", de: "15. QR-Code-Sortier-Roboterarm", ja: "15. QRコード自動仕分けロボットアーム", ko: "15. QR 코드 자동 분류 로봇 팔", ru: "15. Роботизированная Рука Сортировки по QR", ar: "15. ذراع روبوتية لفرز رموز QR" },
                desc: { vi: "Giải mã QR Code và gắp thả phân loại sản phẩm tự động.", en: "Real-time QR/Barcode visual decoding and automated sorting pick-and-place.", zh: "视觉快速识别二维码/条形码并驱动多轴机械臂精准分拣抓取。", es: "Decodificación visual de códigos QR y clasificación automatizada.", fr: "Décodage visuel de codes QR et tri automatique par bras robotique.", de: "QR-Code-Erkennung und automatisches Sortieren mit Roboterarm.", ja: "QRコード高速認識と多軸アームによる自動仕分けピック＆プレース。", ko: "QR 코드 시각 인식 및 다축 로봇 팔 자동 분류 제어.", ru: "Распознавание QR-кодов и автоматическая сортировка роботизированной рукой.", ar: "فك تشفير رموز QR وفرز المنتجات تلقائياً بواسطة الذراع الروبوتية." }
            },
            app_water_vessel: {
                name: { vi: "16. Thuyền Robot Khảo Sát Thủy Văn GPS", en: "16. Autonomous Water Quality Survey Boat", zh: "16. GPS 自主导航水质水文监测无人艇", es: "16. Barco Autónomo de Inspección de Agua", fr: "16. Bateau Autonome d'Analyse Hydrographique", de: "16. Autonomes Gewässer-Messboot mit GPS", ja: "16. GPS 自律航行水質水文調査ボート", ko: "16. GPS 자율주행 수질 및 수문 조사 보트", ru: "16. Автономный Катер Гидрографического Мониторинга", ar: "16. قارب مسح هيدروغرافي ذاتي القيادة" },
                desc: { vi: "Tự hành GPS, đo pH/TDS và truyền dữ liệu LoRa 3-5km.", en: "GPS-guided autonomous waypoint navigation with pH/TDS sensors and LoRa telemetry.", zh: "GPS 航点自主巡航，测量水体 pH/TDS 并通过 LoRa 远距离回传 3-5km。", es: "Navegación autónoma por GPS, medición de pH/TDS y telemetría LoRa.", fr: "Navigation autonome GPS, mesure pH/TDS et télémétrie LoRa longue portée.", de: "Autonome GPS-Wegpunkt-Navigation mit pH/TDS-Sensor und LoRa-Funk.", ja: "GPS ウェイポイント自律航行、水質 pH/TDS 測定および LoRa 長距離通信。", ko: "GPS 자율 항행, pH/TDS 수질 측정 및 3-5km LoRa 원격 전송.", ru: "Автономная навигация по GPS, замер pH/TDS и передача данных по LoRa.", ar: "ملاحة ذاتية بنظام GPS وقياس pH/TDS مع نقل بيانات LoRa لمسافة 3-5 كم." }
            },
            app_retro_game: {
                name: { vi: "17. Máy Chơi Game Retro NES / DOOM", en: "17. Retro Gaming Console (NES / DOOM)", zh: "17. 复古便携游戏机 (NES / DOOM 引擎)", es: "17. Consola de Juegos Retro (NES / DOOM)", fr: "17. Console de Jeux Rétro (NES / DOOM)", de: "17. Retro-Spielekonsole (NES / DOOM)", ja: "17. レトロゲームコンソール (NES / DOOM)", ko: "17. 레트로 게임 콘솔 (NES / DOOM)", ru: "17. Ретро-Игровая Консоль (NES / DOOM)", ar: "17. منصة ألعاب كلاسيكية (NES / DOOM)" },
                desc: { vi: "Giả lập NES 8-bit và chơi game DOOM 3D trên màn hình SPI.", en: "Full-speed 8-bit NES emulation and 3D DOOM engine running on SPI display.", zh: "在 SPI 彩屏上流畅运行 8 位 NES 模拟器及经典 3D DOOM 游戏引擎。", es: "Emulación de NES de 8 bits y motor DOOM 3D en pantalla SPI.", fr: "Émulation NES 8 bits et moteur 3D DOOM sur écran SPI.", de: "8-Bit-NES-Emulation und 3D-DOOM-Engine auf SPI-Farbdisplay.", ja: "SPI 液晶での 8 ビットファミコンエミュレータ＆ 3D DOOM エンジン動作。", ko: "SPI 디스플레이 기반 8비트 NES 에뮬레이터 및 3D DOOM 실행.", ru: "Эмулятор 8-битной NES и 3D движок DOOM на SPI-дисплее.", ar: "محاكي NES بدقة 8 بت ومحرك 3D DOOM على شاشة SPI." }
            },
            app_marauder_security: {
                name: { vi: "18. Thiết Bị Kiểm Thử An Ninh Marauder", en: "18. Wireless Security Auditing Tool", zh: "18. 无线网络安全渗透测试与 BadUSB 工具", es: "18. Herramienta de Auditoría de Seguridad", fr: "18. Outil d'Audit de Sécurité Sans Fil", de: "18. WLAN/BLE Sicherheitsaudit Tool", ja: "18. 無線セキュリティ診断＆ BadUSB", ko: "18. 무선 보안 진단 및 BadUSB 도구", ru: "18. Тестер Безопасности Сетей и BadUSB", ar: "18. أداة تدقيق الأمان اللاسلكي" },
                desc: { vi: "Kiểm thử bảo mật Wi-Fi/BLE và giả lập BadUSB qua cổng OTG.", en: "Wi-Fi/BLE penetration testing, packet analysis, and native BadUSB OTG emulation.", zh: "Wi-Fi/BLE 无线网络安全审计、抓包分析以及原生 USB OTG BadUSB 模拟。", es: "Auditoría de seguridad Wi-Fi/BLE y emulación BadUSB mediante USB OTG.", fr: "Audit de sécurité sans fil Wi-Fi/BLE et émulation BadUSB via USB OTG.", de: "WLAN/BLE-Sicherheitsanalyse und native BadUSB-Emulation über USB OTG.", ja: "Wi-Fi/BLE セキュリティ診断と USB OTG による BadUSB エミュレーション。", ko: "Wi-Fi/BLE 보안 테스트, 패킷 분석 및 USB OTG BadUSB 시뮬레이션.", ru: "Аудит безопасности сетей Wi-Fi/BLE и эмуляция BadUSB через порт OTG.", ar: "تدقيق أمان Wi-Fi/BLE ومحاكاة BadUSB عبر منفذ USB OTG الأصلي." }
            },
            app_mini_oscilloscope: {
                name: { vi: "19. Máy Hiện Sóng Mini DMA ADC 2 Kênh", en: "19. 2-Channel DMA Oscilloscope", zh: "19. 双通道高速数字示波器与逻辑分析仪", es: "19. Osciloscopio Digital de 2 Canales", fr: "19. Oscilloscope Numérique 2 Voies", de: "19. 2-Kanal Digital-Oszilloskop", ja: "19. 2ch 高速デジタルオシロスコープ", ko: "19. 2채널 고속 디지털 오실로스코프", ru: "19. 2-Канальный Скоростной Осциллограф", ar: "19. راسم ذبذبات رقمي عالي السرعة بقناتين" },
                desc: { vi: "Lấy mẫu DMA ADC 2Msps và hiển thị đồ thị FFT qua Web.", en: "Dual-channel 2Msps DMA ADC sampling with real-time Web FFT waveform visualization.", zh: "双通道 2Msps 高速 DMA ADC 硬件采样，实时 FFT 频谱分析与网页波形显示。", es: "Muestreo DMA ADC de 2Msps con visualización web de ondas FFT.", fr: "Échantillonnage DMA ADC 2Msps avec visualisation FFT.", de: "2Msps DMA-ADC-Abtastung mit FFT-Frequenzanalyse im Webbrowser.", ja: "2Msps 高速 DMA ADC サンプリングとリアルタイム Web FFT 波形表示。", ko: "2Msps 고속 DMA ADC 샘플링 및 실시간 웹 FFT 파형 분석.", ru: "Сэмплирование DMA АЦП 2Msps с отображением графиков и FFT через Web.", ar: "أخذ عينات DMA ADC بسرعة 2Msps وعرض الرسوم البيانية لـ FFT عبر الويب." }
            },
            app_epaper_calendar: {
                name: { vi: "20. Lịch Thông Minh E-Paper E-Ink", en: "20. Smart E-Paper Desk Calendar", zh: "20. 电子墨水屏智能桌面日历与 AI 助理", es: "20. Calendario Inteligente E-Paper", fr: "20. Calendrier de Bureau E-Paper", de: "20. Intelligenter E-Paper Kalender", ja: "20. スマート電子ペーパーデスクカレンダー", ko: "20. 스마트 전자종이 탁상 달력", ru: "20. Умный Настольный E-Paper Календарь", ar: "20. تقويم مكتبي ذكي بحبر إلكتروني E-Paper" },
                desc: { vi: "Màn hình mực điện tử E-Ink hiển thị lịch và tin tức AI tiết kiệm điện.", en: "Ultra-low power E-Ink display showing synchronized calendar, weather, and AI daily briefings.", zh: "超低功耗电子墨水屏，同步显示日程日历、天气预报及 AI 每日简报。", es: "Pantalla E-Ink de bajo consumo con calendario, clima y noticias por IA.", fr: "Écran E-Ink ultra-basse consommation affichant calendrier et actualités IA.", de: "Extrem stromsparendes E-Ink-Display für Kalender, Wetter und KI-Nachrichten.", ja: "超低消費電力 E-Ink ディスプレイにカレンダー、天気、AI ニュースを表示。", ko: "초저전력 전자잉크 디스플레이로 캘린더, 날씨 및 AI 브리핑 표시.", ru: "Сверхэкономичный E-Ink дисплей с календарем, погодой и новостями от AI.", ar: "شاشة حبر إلكتروني E-Paper فائقة التوفير لعرض التقويم والطقس وموجز الأخبار الذكي." }
            }
        }
    };

    // 3. THÔNG TIN THƯƠNG HIỆU & LOGO BUMBONTECHLAB
    const BRAND_CONFIG = {
        url: 'https://www.bumbontechlab.com',
        youtubeUrl: 'https://www.youtube.com/@BumBon_Tech_Lab',
        name: 'BumBonTechLab',
        logoUrl: 'logo.png',
        renderHeaderLogo: function(containerId = 'brandLogoContainer') {
            const el = document.getElementById(containerId);
            if (!el) return;
            el.innerHTML = `
                <a href="${this.url}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.5rem; text-decoration:none; color:inherit;" title="Visit ${this.name} (www.bumbontechlab.com)">
                    <img src="${this.logoUrl}" onerror="this.src='logo_96.png'" alt="${this.name}" style="width:36px; height:36px; border-radius:50%; object-fit:cover; box-shadow:0 0 10px rgba(6,182,212,0.5); transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'" />
                </a>
            `;
        },
        applyFavicon: function() {
            let link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = this.logoUrl;
        }
    };

    // 4. ENGINE ĐIỀU KHIỂN & HÀM TIỆN ÍCH I18N
    const I18nEngine = {
        currentLang: 'vi',

        /**
         * Khởi tạo hệ thống ngôn ngữ từ localStorage hoặc mặc định 'vi'
         */
        init: function() {
            const saved = localStorage.getItem('app_lang');
            const found = SUPPORTED_LANGUAGES.some(l => l.code === saved);
            this.currentLang = found ? saved : 'vi';
            if (window._pendingI18n && Array.isArray(window._pendingI18n)) {
                window._pendingI18n.forEach(dict => this.extend(dict));
                window._pendingI18n = [];
            }
            this.applyToDOM();
            BRAND_CONFIG.applyFavicon();
            BRAND_CONFIG.renderHeaderLogo();
            this.renderLangSelector();
        },

        /**
         * Lấy mã ngôn ngữ hiện tại
         */
        getLanguage: function() {
            return this.currentLang;
        },

        /**
         * Đổi ngôn ngữ hệ thống và cập nhật DOM + hướng chữ LTR/RTL
         */
        setLanguage: function(langCode) {
            const langObj = SUPPORTED_LANGUAGES.find(l => l.code === langCode);
            if (!langObj) return;

            this.currentLang = langCode;
            try {
                localStorage.setItem('app_lang', langCode);
                localStorage.setItem('esp32_s3_lang', langCode);
                localStorage.setItem('esp32_cam_global_lang', langCode);
                localStorage.setItem('selected_lang', langCode);
                localStorage.setItem('esp32_cam_flasher_lang', langCode);
            } catch(e) {}

            document.documentElement.lang = langCode;
            document.documentElement.dir = langObj.dir;
            if (document.body) {
                document.body.setAttribute('data-lang', langCode);
            }

            if (window._pendingI18n && Array.isArray(window._pendingI18n)) {
                window._pendingI18n.forEach(dict => this.extend(dict));
                window._pendingI18n = [];
            }
            this.applyToDOM();
            BRAND_CONFIG.applyFavicon();
            BRAND_CONFIG.renderHeaderLogo();

            // Gọi callback chuyển đổi ngôn ngữ của từng trang (nếu có)
            if (typeof window.onAppLanguageChange === 'function') {
                try { window.onAppLanguageChange(langCode); } catch(e) {}
            }
            if (typeof window.pageSetLanguage === 'function') {
                try { window.pageSetLanguage(langCode); } catch(e) {}
            }

            // Kích hoạt Event tùy biến cho các component riêng lắng nghe
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: langCode, dir: langObj.dir } }));
        },

        /**
         * Hàm dịch chuỗi theo đường dẫn dot-notation (Ví dụ: t('common.free_heap'))
         */
        t: function(path, defaultText) {
            if (!path) return defaultText || '';
            const parts = path.split('.');
            if (parts[0] === 'cam') parts[0] = 'camera';
            let curr = DICTIONARY;
            for (let i = 0; i < parts.length; i++) {
                if (curr[parts[i]] !== undefined) {
                    curr = curr[parts[i]];
                } else {
                    return defaultText || path;
                }
            }
            if (curr && curr[this.currentLang]) {
                return curr[this.currentLang];
            }
            if (curr && curr['vi']) {
                return curr['vi']; // Fallback 1: Tiếng Việt
            }
            if (curr && curr['en']) {
                return curr['en']; // Fallback 2: English
            }
            return (typeof curr === 'string') ? curr : (defaultText || path);
        },

        /**
         * Lấy metadata dịch thuật của một App cụ thể
         */
        getAppInfo: function(appId) {
            const app = DICTIONARY.apps[appId];
            if (!app) return { name: appId, desc: '' };
            const name = (app.name && app.name[this.currentLang]) ? app.name[this.currentLang] : (app.name ? app.name['vi'] : appId);
            const desc = (app.desc && app.desc[this.currentLang]) ? app.desc[this.currentLang] : (app.desc ? app.desc['vi'] : '');
            return { name, desc };
        },

        /**
         * Nạp và mở rộng từ điển động cho các ứng dụng con (Modular App Extension)
         */
        extend: function(additionalDict) {
            if (!additionalDict || typeof additionalDict !== 'object') return;
            for (const ns in additionalDict) {
                if (!DICTIONARY[ns]) {
                    DICTIONARY[ns] = {};
                }
                for (const key in additionalDict[ns]) {
                    DICTIONARY[ns][key] = additionalDict[ns][key];
                }
            }
            // Áp dụng dịch ngay nếu DOM đã sẵn sàng
            if (document.readyState === 'interactive' || document.readyState === 'complete') {
                if (window._pendingI18n && Array.isArray(window._pendingI18n)) {
                window._pendingI18n.forEach(dict => this.extend(dict));
                window._pendingI18n = [];
            }
            this.applyToDOM();
            }
        },

        /**
         * Tự động quét và dịch toàn bộ các thẻ HTML có thuộc tính data-i18n
         */
        applyToDOM: function() {
            if (document.body) {
                document.body.setAttribute('data-lang', this.currentLang);
            }
            // 1. Dịch innerText cho data-i18n
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const trans = this.t(key);
                if (trans) el.innerText = trans;
            });

            // 1b. Dịch innerHTML cho data-i18n-html (cho phép thẻ định dạng b, span, pin...)
            document.querySelectorAll('[data-i18n-html]').forEach(el => {
                const key = el.getAttribute('data-i18n-html');
                const trans = this.t(key);
                if (trans) el.innerHTML = trans;
            });

            // 2. Dịch placeholder cho data-i18n-placeholder
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                const trans = this.t(key);
                if (trans) el.setAttribute('placeholder', trans);
            });

            // 3. Dịch title / tooltip cho data-i18n-title
            document.querySelectorAll('[data-i18n-title]').forEach(el => {
                const key = el.getAttribute('data-i18n-title');
                const trans = this.t(key);
                if (trans) el.setAttribute('title', trans);
            });

            // 4. Đồng bộ giá trị select nếu có
            const selectEl = document.getElementById('langSelect');
            if (selectEl && selectEl.value !== this.currentLang) {
                selectEl.value = this.currentLang;
            }
        },

        /**
         * Tự động render danh sách Option cho thẻ <select id="langSelect">
         */
        renderLangSelector: function(selectId = 'langSelect') {
            const select = document.getElementById(selectId);
            if (!select) return;
            select.innerHTML = '';
            SUPPORTED_LANGUAGES.forEach(lang => {
                const opt = document.createElement('option');
                opt.value = lang.code;
                opt.innerText = `${lang.flag} ${lang.name}`;
                if (lang.code === this.currentLang) opt.selected = true;
                select.appendChild(opt);
            });
            select.onchange = (e) => this.setLanguage(e.target.value);
        },

        getSupportedLanguages: function() {
            return SUPPORTED_LANGUAGES;
        },

        getDictionary: function() {
            return DICTIONARY;
        }
    };

    // Xuất ra phạm vi toàn cục (Global Scope)
    window.I18N = I18nEngine;
    window.BRAND = BRAND_CONFIG;
    window.t = function(path, def) { return I18nEngine.t(path, def); };
    window.setLanguage = function(lang) { return I18nEngine.setLanguage(lang); };
    window.changeLanguage = function(lang) { return I18nEngine.setLanguage(lang); };

    // Tự động khởi chạy khi trang hoàn tất nạp DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => I18nEngine.init());
    } else {
        I18nEngine.init();
    }

})(window);
