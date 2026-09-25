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
        // --- WIFI CAPTIVE PORTAL (10 NGÔN NGỮ) ---
        wifi: {
            setup_title: {
                vi: "Cấu Hình Mạng Wi-Fi", en: "Wi-Fi Network Setup", zh: "Wi-Fi 网络配置",
                es: "Configuración de Red Wi-Fi", fr: "Configuration du Réseau Wi-Fi", de: "WLAN-Netzwerk-Konfiguration",
                ja: "Wi-Fi ネットワーク設定", ko: "Wi-Fi 네트워크 구성", ru: "Настройка сети Wi-Fi", ar: "إعداد شبكة Wi-Fi"
            },
            setup_desc: {
                vi: "Chọn mạng Wi-Fi khả dụng hoặc nhập thủ công SSID và mật khẩu để kết nối thiết bị.",
                en: "Select an available Wi-Fi network or manually enter the SSID and password to connect.",
                zh: "选择可用 Wi-Fi 网络或手动输入 SSID 和密码以连接设备。",
                es: "Seleccione una red Wi-Fi disponible o ingrese manualmente el SSID y la contraseña para conectar el dispositivo.",
                fr: "Sélectionnez un réseau Wi-Fi disponible ou saisissez manuellement le SSID et le mot de passe pour connecter l'appareil.",
                de: "Wählen Sie ein verfügbares WLAN-Netzwerk aus oder geben Sie SSID und Passwort manuell ein, um das Gerät zu verbinden.",
                ja: "利用可能な Wi-Fi ネットワークを選択するか、SSID とパスワードを手動で入力してデバイスを接続します。",
                ko: "사용 가능한 Wi-Fi 네트워크를 선택하거나 SSID와 비밀번호를 수동으로 입력하여 장치를 연결하십시오.",
                ru: "Выберите доступную сеть Wi-Fi hoặc вручную введите SSID và пароль для подключения устройства.",
                ar: "حدد شبكة Wi-Fi متوفرة أو أدخل SSID وكلمة المرور يدويًا لتوصيل الجهاز."
            },
            scan_networks: {
                vi: "Quét Mạng Wi-Fi", en: "Scan Wi-Fi Networks", zh: "扫描 Wi-Fi 网络",
                es: "Escanear Redes Wi-Fi", fr: "Scanner les Réseaux Wi-Fi", de: "WLAN-Netzwerke scannen",
                ja: "Wi-Fi ネットワークをスキャン", ko: "Wi-Fi 네트워크 스캔", ru: "Сканировать сети Wi-Fi", ar: "مسح شبكات Wi-Fi"
            },
            refresh: {
                vi: "Làm mới", en: "Refresh", zh: "刷新",
                es: "Actualizar", fr: "Actualiser", de: "Aktualisieren",
                ja: "更新", ko: "새로고침", ru: "Обновить", ar: "تحديث"
            },
            scanning: {
                vi: "Đang quét mạng...", en: "Scanning networks...", zh: "正在扫描网络...",
                es: "Escaneando redes...", fr: "Scan des réseaux...", de: "Netzwerke werden gescannt...",
                ja: "ネットワークをスキャン中...", ko: "네트워크 검색 중...", ru: "Сканирование сетей...", ar: "جارٍ مسح الشبكات..."
            },
            not_found: {
                vi: "Không tìm thấy mạng", en: "No networks found", zh: "未找到网络",
                es: "No se encontraron redes", fr: "Aucun réseau trouvé", de: "Keine Netzwerke gefunden",
                ja: "ネットワークが見つかりません", ko: "네트워크를 찾을 수 없음", ru: "Сети не найдены", ar: "لم يتم العثور على شبكات"
            },
            scan_error: {
                vi: "Lỗi quét mạng", en: "Network scan error", zh: "扫描网络出错",
                es: "Error de escaneo de red", fr: "Erreur de scan du réseau", de: "Netzwerk-Scan-Fehler",
                ja: "ネットワークスキャンエラー", ko: "네트워크 검색 오류", ru: "Ошибка сканирования сети", ar: "خطأ في مسح الشبكة"
            },
            ssid_label: {
                vi: "Tên Mạng Wi-Fi (SSID)", en: "Wi-Fi Name (SSID)", zh: "Wi-Fi 名称 (SSID)",
                es: "Nombre de Wi-Fi (SSID)", fr: "Nom du Wi-Fi (SSID)", de: "WLAN-Name (SSID)",
                ja: "Wi-Fi 名 (SSID)", ko: "Wi-Fi 이름 (SSID)", ru: "Имя Wi-Fi (SSID)", ar: "اسم شبكة Wi-Fi (SSID)"
            },
            ssid_placeholder: {
                vi: "Nhập tên mạng...", en: "Enter network name...", zh: "输入网络名称...",
                es: "Ingrese el nombre de la red...", fr: "Entrez le nom du réseau...", de: "Netzwerkname eingeben...",
                ja: "ネットワーク名を入力...", ko: "네트워크 이름 입력...", ru: "Введите имя сети...", ar: "أدخل اسم الشبكة..."
            },
            password_label: {
                vi: "Mật Khẩu Wi-Fi", en: "Wi-Fi Password", zh: "Wi-Fi 密码",
                es: "Contraseña de Wi-Fi", fr: "Mot de passe Wi-Fi", de: "WLAN-Passwort",
                ja: "Wi-Fi パスワード", ko: "Wi-Fi 비밀번호", ru: "Пароль Wi-Fi", ar: "كلمة مرور Wi-Fi"
            },
            password_placeholder: {
                vi: "Nhập mật khẩu (nếu có)...", en: "Enter password (if any)...", zh: "输入密码（如有）...",
                es: "Ingrese contraseña (si la hay)...", fr: "Entrez le mot de passe (si existant)...", de: "Passwort eingeben (falls vorhanden)...",
                ja: "パスワードを入力（ある場合）...", ko: "비밀번호 입력 (있는 경우)...", ru: "Введите пароль (при наличии)...", ar: "أدخل كلمة المرور (إن وجدت)..."
            },
            connect_btn: {
                vi: "Lưu & Kết Nối", en: "Save & Connect", zh: "保存并连接",
                es: "Guardar y Conectar", fr: "Enregistrer et Connecter", de: "Speichern & Verbinden",
                ja: "保存して接続", ko: "저장 및 연결", ru: "Сохранить и подключить", ar: "حفظ وتوصيل"
            },
            saving: {
                vi: "Đang lưu...", en: "Saving...", zh: "正在保存...",
                es: "Guardando...", fr: "Enregistrement...", de: "Wird gespeichert...",
                ja: "保存中...", ko: "저장 중...", ru: "Сохранение...", ar: "جارٍ الحفظ..."
            },
            success_msg: {
                vi: "Lưu cấu hình thành công! Thiết bị đang kết nối lại...",
                en: "Settings saved successfully! Device is reconnecting...",
                zh: "配置保存成功！设备正在重新连接...",
                es: "¡Configuración guardada! El dispositivo se está reconectando...",
                fr: "Configuration enregistrée ! L'appareil se reconnecte...",
                de: "Konfiguration erfolgreich gespeichert! Gerät verbindet sich neu...",
                ja: "設定が正常に保存されました！デバイスが再接続中です...",
                ko: "구성이 성공적으로 저장되었습니다! 장치가 다시 연결 중입니다...",
                ru: "Настройки успешно сохранены! Устройство переподключается...",
                ar: "تم حفظ الإعدادات بنجاح! تتم إعادة اتصال الجهاز..."
            }
        },
        // --- WEB FLASHER (TRANG NẠP FIRMWARE TRỰC TUYẾN 10 NGÔN NGỮ) ---
        flasher: {
            page_title: {
                vi: "ESP32-S3-cam-platform | Web Flasher", en: "ESP32-S3-cam-platform | Web Flasher", zh: "ESP32-S3-cam-platform | 网页固件烧录器",
                es: "ESP32-S3-cam-platform | Web Flasher", fr: "ESP32-S3-cam-platform | Web Flasher", de: "ESP32-S3-cam-platform | Web Flasher",
                ja: "ESP32-S3-cam-platform | Web フラッシャー", ko: "ESP32-S3-cam-platform | 웹 플래셔", ru: "ESP32-S3-cam-platform | Web Flasher", ar: "ESP32-S3-cam-platform | أداة تثبيت الويب"
            },
            browser_unsupported_title: {
                vi: "Trình duyệt chưa hỗ trợ nạp qua USB!", en: "Browser does not support WebSerial USB flashing!", zh: "浏览器不支持 WebSerial USB 烧录！",
                es: "¡El navegador no admite la grabación USB WebSerial!", fr: "Le navigateur ne prend pas en charge le flash USB WebSerial !", de: "Browser unterstützt kein WebSerial USB-Flashen!",
                ja: "ブラウザが WebSerial USB 書き込みに対応していません！", ko: "브라우저가 WebSerial USB 플래시를 지원하지 않습니다!", ru: "Браузер не поддерживает прошивку через WebSerial USB!", ar: "المتصفح لا يدعم التثبيت عبر WebSerial USB!"
            },
            browser_unsupported_desc: {
                vi: "Vui lòng mở trang này bằng <b>Google Chrome</b> hoặc <b>MS Edge</b> (trên máy tính/laptop).",
                en: "Please open this page using <b>Google Chrome</b> or <b>Microsoft Edge</b> on PC/laptop.",
                zh: "请在电脑端使用 <b>Google Chrome</b> 或 <b>Microsoft Edge</b> 浏览器打开。",
                es: "Abra esta página con <b>Google Chrome</b> o <b>MS Edge</b> en una computadora.",
                fr: "Veuillez ouvrir cette page avec <b>Google Chrome</b> ou <b>MS Edge</b> sur ordinateur.",
                de: "Bitte öffnen Sie diese Seite mit <b>Google Chrome</b> oder <b>MS Edge</b> am PC.",
                ja: "PC の <b>Google Chrome</b> または <b>Microsoft Edge</b> で開いてください。",
                ko: "PC/노트북에서 <b>Google Chrome</b> 또는 <b>MS Edge</b>로 열어주세요.",
                ru: "Пожалуйста, откройте эту страницу в <b>Google Chrome</b> или <b>MS Edge</b> на ПК.",
                ar: "يرجى فتح هذه الصفحة باستخدام <b>Google Chrome</b> أو <b>Microsoft Edge</b> على جهاز الكمبيوتر."
            },
            title: {
                vi: "Nạp Firmware ESP32-S3", en: "ESP32-S3 Web Flasher", zh: "ESP32-S3 网页固件烧录",
                es: "Flasheador Web ESP32-S3", fr: "Flasheur Web ESP32-S3", de: "ESP32-S3 Web-Flasher",
                ja: "ESP32-S3 Web ファームウェア書き込み", ko: "ESP32-S3 웹 펌웨어 플래셔", ru: "ESP32-S3 Web Flasher", ar: "تثبيت برنامج تشغيل ESP32-S3 عبر الويب"
            },
            subtitle: {
                vi: "Nạp trực tiếp firmware đầy đủ (Bootloader + Partitions + App) qua cổng USB chỉ với 1 cú click!",
                en: "Flash full factory firmware (Bootloader + Partitions + App) via USB in just 1 click!",
                zh: "只需一键即可通过 USB 直接烧录完整固件（Bootloader + 分区表 + 应用程序）！",
                es: "¡Grabe el firmware completo (Bootloader + Particiones + App) por USB con 1 clic!",
                fr: "Flashez le firmware complet (Bootloader + Partitions + App) via USB en 1 clic !",
                de: "Vollständige Firmware (Bootloader + Partitionen + App) mit 1 Klick über USB flashen!",
                ja: "USB 経由で完全なファームウェア（Bootloader + パーティション + アプリ）をワンクリックで書き込み！",
                ko: "원클릭으로 USB를 통해 전체 펌웨어(부트로더 + 파티션 + 앱)를 직접 플래시하세요!",
                ru: "Прошейте полную заводскую прошивку (Bootloader + Partitions + App) через USB в 1 клик!",
                ar: "قم بتثبيت البرنامج الثابت الكامل (Bootloader + Partitions + App) عبر USB بنقرة واحدة!"
            },
            source_label: {
                vi: "Nguồn Firmware:", en: "Firmware Source:", zh: "固件来源：",
                es: "Origen del Firmware:", fr: "Source du Firmware :", de: "Firmware-Quelle:",
                ja: "ファームウェアソース：", ko: "펌웨어 소스:", ru: "Источник прошивки:", ar: "مصدر البرنامج الثابت:"
            },
            version_history: {
                vi: "Lịch sử phiên bản", en: "Version History", zh: "版本历史",
                es: "Historial de versiones", fr: "Historique des versions", de: "Versionsverlauf",
                ja: "バージョン履歴", ko: "버전 기록", ru: "История версий", ar: "سجل الإصدارات"
            },
            opt_local: {
                vi: "📁 Chọn file từ máy tính (Offline)", en: "📁 Local File from Computer (Offline)", zh: "📁 从电脑选择文件（离线）",
                es: "📁 Archivo local de la computadora (Offline)", fr: "📁 Fichier local depuis l'ordinateur (Hors ligne)", de: "📁 Lokale Datei vom Computer (Offline)",
                ja: "📁 PCからファイルを選択（オフライン）", ko: "📁 컴퓨터에서 로컬 파일 선택 (오프라인)", ru: "📁 Локальный файл с компьютера (Офлайн)", ar: "📁 ملف محلي من الكمبيوتر (دون اتصال)"
            },
            opt_github: {
                vi: "🌐 Tải trực tiếp từ GitHub (Online Firmware)", en: "🌐 Download from GitHub (Online Firmware)", zh: "🌐 从 GitHub 在线下载（在线固件）",
                es: "🌐 Descargar de GitHub (Firmware en línea)", fr: "🌐 Télécharger depuis GitHub (En ligne)", de: "🌐 Von GitHub herunterladen (Online-Firmware)",
                ja: "🌐 GitHub から直接ダウンロード（オンライン）", ko: "🌐 GitHub에서 온라인 다운로드", ru: "🌐 Загрузить с GitHub (Онлайн прошивка)", ar: "🌐 تنزيل من GitHub (برنامج تشغيل عبر الإنترنت)"
            },
            baud_label: {
                vi: "Tốc độ nạp (Baudrate):", en: "Flashing Baudrate:", zh: "烧录波特率：",
                es: "Velocidad de grabación (Baudrate):", fr: "Vitesse de flash (Baudrate) :", de: "Flash-Baudrate:",
                ja: "書き込み速度（ボーレート）：", ko: "플래시 속도 (보드레이트):", ru: "Скорость прошивки (Baudrate):", ar: "سرعة التثبيت (Baudrate):"
            },
            baud_stable: {
                vi: "115200 (Ổn định nhất)", en: "115200 (Most Stable)", zh: "115200（最稳定）",
                es: "115200 (Más estable)", fr: "115200 (Le plus stable)", de: "115200 (Am stabilsten)",
                ja: "115200（最も安定）", ko: "115200 (가장 안정적)", ru: "115200 (Самый стабильный)", ar: "115200 (الأكثر استقرارًا)"
            },
            baud_high: {
                vi: "460800 (Tốc độ cao)", en: "460800 (High Speed)", zh: "460800（高速）",
                es: "460800 (Alta velocidad)", fr: "460800 (Haute vitesse)", de: "460800 (Hohe Geschwindigkeit)",
                ja: "460800（高速）", ko: "460800 (고속)", ru: "460800 (Высокая скорость)", ar: "460800 (سرعة عالية)"
            },
            baud_ultra: {
                vi: "921600 (Siêu nhanh)", en: "921600 (Ultra Fast)", zh: "921600（极速）",
                es: "921600 (Ultra rápido)", fr: "921600 (Ultra rapide)", de: "921600 (Ultraschnell)",
                ja: "921600（超高速）", ko: "921600 (초고속)", ru: "921600 (Ультра быстрый)", ar: "921600 (فائق السرعة)"
            },
            offset_label: {
                vi: "Địa chỉ Flash (Offset):", en: "Flash Memory Offset:", zh: "Flash 烧录地址 (Offset)：",
                es: "Dirección de Flash (Offset):", fr: "Adresse Flash (Offset) :", de: "Flash-Adresse (Offset):",
                ja: "Flash アドレス (Offset)：", ko: "플래시 주소 (Offset):", ru: "Адрес Flash (Offset):", ar: "عنوان الذاكرة (Offset):"
            },
            offset_full: {
                vi: "0x0000 (Full_Flash.bin - Toàn bộ Flash)", en: "0x0000 (Full_Flash.bin - Factory Merged)", zh: "0x0000 (Full_Flash.bin - 完整出厂固件)",
                es: "0x0000 (Full_Flash.bin - Flash Completo)", fr: "0x0000 (Full_Flash.bin - Flash Complet)", de: "0x0000 (Full_Flash.bin - Gesamter Flash)",
                ja: "0x0000 (Full_Flash.bin - フルイメージ)", ko: "0x0000 (Full_Flash.bin - 전체 플래시)", ru: "0x0000 (Full_Flash.bin - Полный образ)", ar: "0x0000 (Full_Flash.bin - الفلاش بالكامل)"
            },
            offset_app: {
                vi: "0x10000 (OTA_Update.bin - Chỉ App)", en: "0x10000 (OTA_Update.bin - App Only)", zh: "0x10000 (OTA_Update.bin - 仅应用)",
                es: "0x10000 (OTA_Update.bin - Solo App)", fr: "0x10000 (OTA_Update.bin - App uniquement)", de: "0x10000 (OTA_Update.bin - Nur App)",
                ja: "0x10000 (OTA_Update.bin - アプリのみ)", ko: "0x10000 (OTA_Update.bin - 앱 전용)", ru: "0x10000 (OTA_Update.bin - Только App)", ar: "0x10000 (OTA_Update.bin - التطبيق فقط)"
            },
            offset_lock_note: {
                vi: "🔒 Chế độ Online tự động nạp Full Flash hợp nhất tại địa chỉ 0x0000 để đảm bảo hệ thống boot chuẩn xác.",
                en: "🔒 Online mode automatically flashes merged Full Flash at offset 0x0000 for guaranteed boot stability.",
                zh: "🔒 在线模式自动在 0x0000 地址烧录完整固件，以确保系统正常引导启动。",
                es: "🔒 El modo en línea graba automáticamente el Full Flash en 0x0000 para un arranque seguro.",
                fr: "🔒 Le mode en ligne flashe automatiquement le Full Flash en 0x0000 pour garantir le démarrage.",
                de: "🔒 Der Online-Modus flasht automatisch Full Flash bei 0x0000 für garantierten Systemstart.",
                ja: "🔒 オンラインモードでは、正常な起動を保証するために 0x0000 にフルイメージを自動書き込みします。",
                ko: "🔒 온라인 모드는 안전한 부팅을 위해 0x0000 주소에 통합 Full Flash를 자동 플래시합니다.",
                ru: "🔒 В онлайн-режиме полный образ автоматически прошивается по адресу 0x0000 для стабильной загрузки.",
                ar: "🔒 يقوم الوضع عبر الإنترنت تلقائيًا بتثبيت الفلاش الكامل عند 0x0000 لضمان الإقلاع الصحيح."
            },
            flash_btn: {
                vi: "Cài Đặt / Nạp Firmware Ngay", en: "Install / Flash Firmware Now", zh: "立即安装 / 烧录固件",
                es: "Instalar / Grabar Firmware Ahora", fr: "Installer / Flasher le Firmware", de: "Firmware jetzt installieren / flashen",
                ja: "今すぐファームウェアを書き込む", ko: "지금 펌웨어 설치 / 플래시", ru: "Установить / Прошить прошивку сейчас", ar: "تثبيت البرنامج الثابت الآن"
            },
            preparing: {
                vi: "Đang chuẩn bị...", en: "Preparing...", zh: "正在准备...",
                es: "Preparando...", fr: "Préparation...", de: "Vorbereitung...",
                ja: "準備中...", ko: "준비 중...", ru: "Подготовка...", ar: "جارٍ التحضير..."
            },
            downloading: {
                vi: "Đang tải firmware...", en: "Downloading firmware...", zh: "正在下载固件...",
                es: "Descargando firmware...", fr: "Téléchargement du firmware...", de: "Firmware wird heruntergeladen...",
                ja: "ファームウェアをダウンロード中...", ko: "펌웨어 다운로드 중...", ru: "Загрузка прошивки...", ar: "جارٍ تنزيل البرنامج الثابت..."
            },
            connecting: {
                vi: "Đang kết nối ESP32-S3 qua USB...", en: "Connecting ESP32-S3 via USB...", zh: "正在通过 USB 连接 ESP32-S3...",
                es: "Conectando ESP32-S3 por USB...", fr: "Connexion à l'ESP32-S3 via USB...", de: "ESP32-S3 über USB verbinden...",
                ja: "USB 経由で ESP32-S3 に接続中...", ko: "USB를 통해 ESP32-S3 연결 중...", ru: "Подключение к ESP32-S3 по USB...", ar: "جارٍ الاتصال بـ ESP32-S3 عبر USB..."
            },
            flashing: {
                vi: "Đang ghi dữ liệu vào Flash...", en: "Flashing binary to Flash memory...", zh: "正在写入 Flash 内存...",
                es: "Escribiendo en memoria Flash...", fr: "Écriture dans la mémoire Flash...", de: "Schreiben in den Flash-Speicher...",
                ja: "Flash メモリに書き込み中...", ko: "플래시 메모리에 기록 중...", ru: "Запись во Flash память...", ar: "جارٍ الكتابة إلى ذاكرة الفلاش..."
            },
            flash_success_100: {
                vi: "🎉 Nạp thành công 100%!", en: "🎉 100% Flash Completed!", zh: "🎉 100% 烧录成功！",
                es: "¡🎉 100% Grabado con éxito!", fr: "🎉 Flash 100% Réussi !", de: "🎉 100% Flash erfolgreich!",
                ja: "🎉 100% 書き込み完了！", ko: "🎉 100% 플래시 완료!", ru: "🎉 Прошивка завершена на 100%!", ar: "🎉 اكتمل التثبيت بنسبة 100%!"
            },
            flash_success_alert: {
                vi: "<b>✅ Nạp hoàn tất 100%!</b><br>ESP32-S3 đã tự động khởi động lại. Hãy kết nối Wi-Fi <b>ESP32-S3-Setup</b> (Pass: <code>12345678</code>) hoặc truy cập IP của thiết bị!",
                en: "<b>✅ Flash 100% Complete!</b><br>ESP32-S3 has rebooted. Connect to Wi-Fi <b>ESP32-S3-Setup</b> (Pass: <code>12345678</code>) or access its IP address!",
                zh: "<b>✅ 100% 烧录完成！</b><br>ESP32-S3 已自动重启。请连接 Wi-Fi <b>ESP32-S3-Setup</b>（密码：<code>12345678</code>）或访问其 IP 地址！",
                es: "<b>✅ ¡Grabación completa al 100%!</b><br>ESP32-S3 se ha reiniciado. ¡Conéctese a la Wi-Fi <b>ESP32-S3-Setup</b> (Clave: <code>12345678</code>) o acceda a su IP!",
                fr: "<b>✅ Flash terminé à 100% !</b><br>L'ESP32-S3 a redémarré. Connectez-vous au Wi-Fi <b>ESP32-S3-Setup</b> (Mot de passe : <code>12345678</code>) !",
                de: "<b>✅ Flash zu 100 % abgeschlossen!</b><br>ESP32-S3 wurde neu gestartet. Verbinden Sie sich mit dem WLAN <b>ESP32-S3-Setup</b> (Passwort: <code>12345678</code>)!",
                ja: "<b>✅ 100% 書き込み完了！</b><br>ESP32-S3 が自動再起動しました。Wi-Fi <b>ESP32-S3-Setup</b>（パスワード: <code>12345678</code>）に接続してください！",
                ko: "<b>✅ 100% 플래시 완료!</b><br>ESP32-S3가 재부팅되었습니다. Wi-Fi <b>ESP32-S3-Setup</b> (비밀번호: <code>12345678</code>)에 연결하세요!",
                ru: "<b>✅ Прошивка завершена на 100%!</b><br>ESP32-S3 перезагружен. Подключитесь к Wi-Fi <b>ESP32-S3-Setup</b> (Пароль: <code>12345678</code>)!",
                ar: "<b>✅ اكتمل التثبيت بنسبة 100%!</b><br>تمت إعادة تشغيل ESP32-S3. اتصل بشبكة Wi-Fi <b>ESP32-S3-Setup</b> (كلمة المرور: <code>12345678</code>)!"
            },
            flash_failed_label: {
                vi: "Lỗi nạp!", en: "Flash Failed!", zh: "烧录失败！",
                es: "¡Fallo al grabar!", fr: "Échec du flash !", de: "Flash fehlgeschlagen!",
                ja: "書き込み失敗！", ko: "플래시 실패!", ru: "Ошибка прошивки!", ar: "فشل التثبيت!"
            },
            flash_failed_hint: {
                vi: "Giữ nút BOOT, bấm nhả RST rồi thử lại.", en: "Hold BOOT, press RST, and try again.", zh: "按住 BOOT 键，轻按 RST 键后再试一次。",
                es: "Mantenga BOOT, presione RST y reintente.", fr: "Maintenez BOOT, appuyez sur RST et réessayez.", de: "BOOT gedrückt halten, RST drücken und erneut versuchen.",
                ja: "BOOT を押しながら RST を押し直してください。", ko: "BOOT을 누른 상태에서 RST를 누르고 다시 시도하세요.", ru: "Удерживайте BOOT, нажмите RST и повторите попытку.", ar: "اضغط مع الاستمرار على BOOT، ثم اضغط RST وحاول مجددًا."
            },
            steps_title: {
                vi: "🔧 3 Bước đơn giản để nạp:", en: "🔧 3 Simple Steps to Flash:", zh: "🔧 3 步轻松烧录：",
                es: "🔧 3 Pasos sencillos para grabar:", fr: "🔧 3 étapes simples pour flasher :", de: "🔧 3 einfache Schritte zum Flashen:",
                ja: "🔧 簡単な3ステップで書き込み：", ko: "🔧 3단계 간단 플래시 가이드:", ru: "🔧 3 простых шага для прошивки:", ar: "🔧 3 خطوات بسيطة للتثبيت:"
            },
            step1: {
                vi: "<b>Bước 1:</b> Cắm cáp USB nối mạch ESP32-S3 với máy tính.",
                en: "<b>Step 1:</b> Connect your ESP32-S3 board to your PC using a USB cable.",
                zh: "<b>第 1 步：</b> 使用 USB 数据线将 ESP32-S3 开发板连接到电脑。",
                es: "<b>Paso 1:</b> Conecte la placa ESP32-S3 a la PC mediante un cable USB.",
                fr: "<b>Étape 1 :</b> Connectez votre carte ESP32-S3 à votre PC avec un câble USB.",
                de: "<b>Schritt 1:</b> Verbinden Sie Ihr ESP32-S3-Board über ein USB-Kabel mit dem PC.",
                ja: "<b>ステップ 1:</b> USB ケーブルで ESP32-S3 ボードを PC に接続します。",
                ko: "<b>1단계:</b> USB 케이블로 ESP32-S3 보드를 PC에 연결합니다.",
                ru: "<b>Шаг 1:</b> Подключите плату ESP32-S3 к компьютеру через USB-кабель.",
                ar: "<b>الخطوة 1:</b> قم بتوصيل لوحة ESP32-S3 بالكمبيوتر باستخدام كابل USB."
            },
            step2: {
                vi: "<b>Bước 2:</b> Chọn file <code>Full_Flash.bin</code> hoặc chọn tải Online.",
                en: "<b>Step 2:</b> Select local <code>Full_Flash.bin</code> or choose Online mode.",
                zh: "<b>第 2 步：</b> 选择本地 <code>Full_Flash.bin</code> 文件或选择在线模式。",
                es: "<b>Paso 2:</b> Seleccione <code>Full_Flash.bin</code> local o elija el modo en línea.",
                fr: "<b>Étape 2 :</b> Sélectionnez le fichier <code>Full_Flash.bin</code> ou le mode en ligne.",
                de: "<b>Schritt 2:</b> Wählen Sie die Datei <code>Full_Flash.bin</code> oder den Online-Modus.",
                ja: "<b>ステップ 2:</b> ローカルの <code>Full_Flash.bin</code> またはオンラインモードを選択します。",
                ko: "<b>2단계:</b> 로컬 <code>Full_Flash.bin</code> 파일을 선택하거나 온라인 모드를 선택합니다.",
                ru: "<b>Шаг 2:</b> Выберите локальный файл <code>Full_Flash.bin</code> или онлайн-режим.",
                ar: "<b>الخطوة 2:</b> اختر ملف <code>Full_Flash.bin</code> محليًا أو الوضع عبر الإنترنت."
            },
            step3: {
                vi: "<b>Bước 3:</b> Bấm nút Nạp -> Chọn đúng cổng COM trong bảng hiện lên.",
                en: "<b>Step 3:</b> Click Flash button -> Select the corresponding COM port.",
                zh: "<b>第 3 步：</b> 点击烧录按钮 -> 在弹出窗口中选择对应的 COM 端口。",
                es: "<b>Paso 3:</b> Haga clic en Grabar -> Seleccione el puerto COM correspondiente.",
                fr: "<b>Étape 3 :</b> Cliquez sur Flasher -> Sélectionnez le port COM correspondant.",
                de: "<b>Schritt 3:</b> Klicken Sie auf Flashen -> Wählen Sie den passenden COM-Port.",
                ja: "<b>ステップ 3:</b> 書き込みボタンをクリック -> ポップアップで COM ポートを選択。",
                ko: "<b>3단계:</b> 플래시 버튼 클릭 -> 팝업 창에서 해당 COM 포트 선택.",
                ru: "<b>Шаг 3:</b> Нажмите Прошить -> Выберите нужный COM-порт в окне.",
                ar: "<b>الخطوة 3:</b> انقر فوق زر التثبيت -> حدد منفذ COM المناسب من القائمة."
            },
            specs_title: {
                vi: "🔧 Thông số phần cứng:", en: "🔧 Hardware Specifications:", zh: "🔧 硬件技术规格：",
                es: "🔧 Especificaciones de hardware:", fr: "🔧 Spécifications matérielles :", de: "🔧 Hardware-Spezifikationen:",
                ja: "🔧 ハードウェア仕様：", ko: "🔧 하드웨어 사양:", ru: "🔧 Технические характеристики:", ar: "🔧 المواصفات الفنية للعتاد:"
            },
            view_log: {
                vi: "🔍 Xem log chi tiết", en: "🔍 View detailed logs", zh: "🔍 查看详细日志",
                es: "🔍 Ver registro detallado", fr: "🔍 Voir le journal détaillé", de: "🔍 Detaillierte Protokolle anzeigen",
                ja: "🔍 詳細ログを表示", ko: "🔍 상세 로그 보기", ru: "🔍 Подробный лог", ar: "🔍 عرض السجلات التفصيلية"
            },
            hide_log: {
                vi: "🙈 Ẩn log chi tiết", en: "🙈 Hide detailed logs", zh: "🙈 隐藏详细日志",
                es: "🙈 Ocultar registro", fr: "🙈 Masquer le journal", de: "🙈 Protokolle ausblenden",
                ja: "🙈 ログを非表示", ko: "🙈 상세 로그 숨기기", ru: "🙈 Скрыть лог", ar: "🙈 إخفاء السجلات"
            },
            history_title: {
                vi: "Lịch Sử Phiên Bản Firmware", en: "Firmware Version History", zh: "固件版本发布历史",
                es: "Historial de Versiones del Firmware", fr: "Historique des Versions du Firmware", de: "Firmware-Versionsverlauf",
                ja: "ファームウェアバージョン履歴", ko: "펌웨어 버전 릴리스 기록", ru: "История версий прошивки", ar: "سجل إصدارات البرنامج الثابت"
            },
            view_on_github: {
                vi: "Xem trên GitHub Releases", en: "View on GitHub Releases", zh: "在 GitHub Releases 查看",
                es: "Ver en GitHub Releases", fr: "Voir sur GitHub Releases", de: "Auf GitHub Releases ansehen",
                ja: "GitHub Releases で見る", ko: "GitHub Releases에서 보기", ru: "Смотреть на GitHub Releases", ar: "عرض على GitHub Releases"
            },
            btn_close: {
                vi: "Đóng", en: "Close", zh: "关闭",
                es: "Cerrar", fr: "Fermer", de: "Schließen",
                ja: "閉じる", ko: "닫기", ru: "Закрыть", ar: "إغلاق"
            },
            no_local_file: {
                vi: "Vui lòng chọn file .bin trên máy tính trước!", en: "Please choose a local .bin file first!", zh: "请先在电脑上选择 .bin 固件文件！",
                es: "¡Elija primero un archivo .bin local!", fr: "Veuillez d'abord choisir un fichier .bin local !", de: "Bitte wählen Sie zuerst eine lokale .bin-Datei aus!",
                ja: "最初にローカルの .bin ファイルを選択してください！", ko: "먼저 로컬 .bin 파일을 선택하세요!", ru: "Пожалуйста, сначала выберите локальный файл .bin!", ar: "يرجى اختيار ملف .bin محلي أولاً!"
            },
            lib_not_found: {
                vi: "Không tìm thấy thư viện esptool-js!", en: "esptool-js library not loaded!", zh: "未找到 esptool-js 烧录库！",
                es: "¡No se encontró la biblioteca esptool-js!", fr: "Bibliothèque esptool-js introuvable !", de: "esptool-js Bibliothek nicht gefunden!",
                ja: "esptool-js ライブラリが見つかりません！", ko: "esptool-js 라이브러리를 찾을 수 없습니다!", ru: "Библиотека esptool-js не найдена!", ar: "لم يتم العثور على مكتبة esptool-js!"
            },
            changelog: {
                v0_0_002_title: {
                    vi: "v0.0.002: Tối ưu Web Assets & Chuẩn hóa 10 Ngôn Ngữ",
                    en: "v0.0.002: Web Assets Optimization & 10-Language Standardization",
                    zh: "v0.0.002: 网页资源优化与 10 种多语言标准化",
                    es: "v0.0.002: Optimización de Web Assets y 10 idiomas",
                    fr: "v0.0.002: Optimisation des Web Assets & 10 langues",
                    de: "v0.0.002: Web-Assets-Optimierung & 10 Sprachen",
                    ja: "v0.0.002: Web アセット最適化と 10 言語標準化",
                    ko: "v0.0.002: 웹 자산 최적화 및 10개 다국어 표준화",
                    ru: "v0.0.002: Оптимизация веб-ресурсов и 10 языков",
                    ar: "v0.0.002: تحسين موارد الويب وتوحيد 10 لغات"
                },
                v0_0_002_desc: {
                    vi: "Nén GZIP Flash (~68KB), chuẩn hóa giao diện Web Flasher và tự động hóa pipeline build.",
                    en: "Flash GZIP compression (~68KB), Web Flasher UI fixes & automated build clean-up.",
                    zh: "Flash GZIP 压缩（~68KB），Web Flasher 界面修复及自动化构建清理。",
                    es: "Compresión Flash GZIP (~68KB), mejoras de Web Flasher y limpieza automática.",
                    fr: "Compression Flash GZIP (~68KB), correctifs Web Flasher & nettoyage automatique.",
                    de: "Flash-GZIP-Komprimierung (~68KB), Web-Flasher-Korrekturen & Build-Bereinigung.",
                    ja: "Flash GZIP 圧縮（約68KB）、Web フラッシャーの UI 修正、ビルド自動クリーンアップ。",
                    ko: "Flash GZIP 압축(~68KB), Web Flasher UI 수정 및 자동화된 빌드 정리.",
                    ru: "Сжатие Flash GZIP (~68KB), исправления Web Flasher и автоматическая очистка.",
                    ar: "ضغط Flash GZIP (~68KB) وإصلاحات واجهة Web Flasher والتنظيف التلقائي."
                },
                v0_0_001_title: {
                    vi: "v0.0.001: Khởi tạo Master OS & Hệ thống Dual-OTA",
                    en: "v0.0.001: Bootstrap Master OS & Dual-OTA Engine",
                    zh: "v0.0.001: 引导 Master OS 与双 OTA 引擎",
                    es: "v0.0.001: Inicialización de Master OS y Dual-OTA",
                    fr: "v0.0.001: Démarrage de Master OS & Moteur Dual-OTA",
                    de: "v0.0.001: Master OS Bootstrap & Dual-OTA-Engine",
                    ja: "v0.0.001: Master OS ブートストラップと Dual-OTA",
                    ko: "v0.0.001: Master OS 부트스트랩 및 듀얼 OTA 엔진",
                    ru: "v0.0.001: Запуск Master OS и движок Dual-OTA",
                    ar: "v0.0.001: تشغيل Master OS ومحرك Dual-OTA"
                },
                v0_0_001_desc: {
                    vi: "Bản phát hành khởi đầu tích hợp 20 ứng dụng, Dual AP+STA và GitHub Cloud App Store.",
                    en: "Initial release featuring 20 app sites, Dual AP+STA and GitHub Cloud App Store.",
                    zh: "首发版本，包含 20 个应用程序、双 AP+STA 模式以及 GitHub 云端应用商店。",
                    es: "Versión inicial con 20 aplicaciones, Dual AP+STA y Tienda GitHub Cloud.",
                    fr: "Version initiale intégrant 20 applications, Dual AP+STA et GitHub Cloud Store.",
                    de: "Erste Version mit 20 App-Sites, Dual AP+STA und GitHub Cloud Store.",
                    ja: "20 のアプリ、Dual AP+STA、GitHub クラウドストアを統合した初期リリース。",
                    ko: "20개 앱, Dual AP+STA 및 GitHub 클라우드 앱 스토어가 포함된 초기 릴리스.",
                    ru: "Первый релиз с 20 приложениями, Dual AP+STA и магазином GitHub Cloud.",
                    ar: "الإصدار الأولي يضم 20 تطبيقًا ووضع Dual AP+STA ومتجر GitHub Cloud."
                }
            }
        },

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

        // --- B3. TỪ VỰNG WEB FLASHER & NẠP FIRMWARE USB (FLASHER) ---
            changelog: {
                v0_0_002_title: {
                    vi: "Phiên bản v0.0.002 - Tối ưu hóa Web Assets & Chuẩn hóa Đa ngôn ngữ",
                    en: "Release v0.0.002 - Web Assets Optimization & i18n Standardization",
                    zh: "v0.0.002 版本 - 网页资源优化与国际化标准化",
                    es: "Versión v0.0.002 - Optimización de Recursos Web e i18n",
                    fr: "Version v0.0.002 - Optimisation des Ressources Web & i18n",
                    de: "Release v0.0.002 - Web-Asset-Optimierung & i18n-Standardisierung",
                    ja: "v0.0.002 リリース - Webリソースの最適化と多言語標準化",
                    ko: "v0.0.002 릴리스 - 웹 리소스 최적화 및 다국어 표준화",
                    ru: "Релиз v0.0.002 - Оптимизация Web-ресурсов и стандартизация i18n",
                    ar: "الإصدار v0.0.002 - تحسين موارد الويب وتوحيد الترجمة"
                },
                v0_0_002_desc: {
                    vi: "⚡ Tối ưu Flash PROGMEM (~68KB), chuẩn hóa 10 ngôn ngữ với i18n.js, sửa giao diện Web Flasher và tự động dọn dẹp thư mục build.",
                    en: "⚡ Flash PROGMEM optimization (~68KB), 10-language i18n standardization, Web Flasher UI fixes & automated build clean-up.",
                    zh: "⚡ 精简 Flash PROGMEM (~68KB)，10 语言全面标准化，修复 Web Flasher 界面并实现构建自动清理。",
                    es: "⚡ Optimización Flash PROGMEM (~68KB), estandarización i18n en 10 idiomas, corrección de UI en Web Flasher y limpieza automática.",
                    fr: "⚡ Optimisation Flash PROGMEM (~68Ko), standardisation i18n en 10 langues, correction de l'UI Web Flasher et nettoyage automatique.",
                    de: "⚡ Flash PROGMEM Optimierung (~68KB), 10-Sprachen-i18n-Standardisierung, Web Flasher UI-Fixes & automatische Build-Bereinigung.",
                    ja: "⚡ Flash PROGMEM 最適化 (~68KB)、10言語 i18n 標準化、Web フラッシャー UI 修正、ビルド自動クリーンアップ。",
                    ko: "⚡ Flash PROGMEM 최적화 (~68KB), 10개 국어 i18n 표준화, Web Flasher UI 수정 및 빌드 자동 정리.",
                    ru: "⚡ Оптимизация Flash PROGMEM (~68 КБ), стандартизация 10 языков i18n, исправление UI Web Flasher и автоочистка сборки.",
                    ar: "⚡ تحسين ذاكرة الفلاش PROGMEM (~68 كيلوبايت)، وتوحيد الترجمة بـ 10 لغات، وإصلاح واجهة Web Flasher وتنظيف مجلدات البناء."
                },
                v0_0_001_title: {
                    vi: "Phiên bản khởi động chính thức - ESP32-S3-cam-platform",
                    en: "Official Bootstrap Release - ESP32-S3-cam-platform",
                    zh: "官方初始版本 - ESP32-S3-cam-platform",
                    es: "Versión de arranque oficial - ESP32-S3-cam-platform",
                    fr: "Version de démarrage officielle - ESP32-S3-cam-platform",
                    de: "Offizieller Start-Release - ESP32-S3-cam-platform",
                    ja: "公式ブートストラップリリース - ESP32-S3-cam-platform",
                    ko: "공식 부트스트랩 릴리스 - ESP32-S3-cam-platform",
                    ru: "Официальный стартовый релиз - ESP32-S3-cam-platform",
                    ar: "الإصدار الرسمي الأولي - ESP32-S3-cam-platform"
                },
                v0_0_001_desc: {
                    vi: "🚀 Master OS: Camera MJPEG Triple-Buffer, SoftAP Captive Portal quản lý Wi-Fi, Cloud App Store streaming từ GitHub Releases, Dual-OTA 6MB với phân vùng rollback.",
                    en: "🚀 Master OS: MJPEG Triple-Buffer Camera Stream, SoftAP Captive Portal Wi-Fi manager, Cloud App Store streaming from GitHub Releases, Dual-OTA 6MB with rollback partition.",
                    zh: "🚀 Master OS: 三重缓冲 MJPEG 摄像头直播、SoftAP 强制配网门户、直连 GitHub Releases 的云端应用商店、支持回滚的双分区 OTA 6MB 升级。",
                    es: "🚀 Master OS: Cámara MJPEG Triple-Buffer, Portal Captivo SoftAP Wi-Fi, App Store en la nube desde GitHub Releases, OTA Dual 6MB con partición de rollback.",
                    fr: "🚀 Master OS : Flux caméra MJPEG Triple-Buffer, portail captif SoftAP Wi-Fi, App Store cloud depuis GitHub Releases, OTA Dual 6 Mo avec partition de rollback.",
                    de: "🚀 Master OS: MJPEG Triple-Buffer Kamera-Stream, SoftAP Captive Portal Wi-Fi-Manager, Cloud App Store von GitHub Releases, Dual-OTA 6MB mit Rollback-Partition.",
                    ja: "🚀 Master OS: MJPEG トリプルバッファカメラ配信、SoftAP キャプティブポータル Wi-Fi管理、GitHub ReleasesからのクラウドApp Store、ロールバック対応デュアルOTA 6MB。",
                    ko: "🚀 Master OS: MJPEG 트리플 버퍼 카메라 스트림, SoftAP 캡티브 포털 Wi-Fi 관리, GitHub Releases 기반 클라우드 앱 스토어, 롤백 지원 듀얼 OTA 6MB.",
                    ru: "🚀 Master OS: MJPEG Triple-Buffer видеопоток с камеры, SoftAP Captive Portal управление Wi-Fi, облачный App Store с GitHub Releases, Dual-OTA 6MB с разделом отката.",
                    ar: "🚀 Master OS: بث كاميرا MJPEG بثلاثة مخازن مؤقتة، بوابة SoftAP Captive Portal لإدارة Wi-Fi، متجر تطبيقات سحابي من GitHub Releases، OTA مزدوج 6MB مع قسم الاسترداد."
                }
            },
            page_title: {
                vi: "ESP32-S3-cam-platform | Nạp Firmware",
                en: "ESP32-S3-cam-platform | Web Flasher",
                zh: "ESP32-S3-cam-platform | 网页烧录工具",
                es: "ESP32-S3-cam-platform | Flasheador Web",
                fr: "ESP32-S3-cam-platform | Flasheur Web",
                de: "ESP32-S3-cam-platform | Web-Flasher",
                ja: "ESP32-S3-cam-platform | Web フラッシャー",
                ko: "ESP32-S3-cam-platform | 웹 설치기",
                ru: "ESP32-S3-cam-platform | Веб-прошивальщик",
                ar: "ESP32-S3-cam-platform | مُثبِّت الويب"
            },
            browser_unsupported_title: {
                vi: "Trình duyệt chưa hỗ trợ nạp qua USB!",
                en: "Browser does not support Web Serial!",
                zh: "浏览器不支持 Web Serial 串口通信！",
                es: "¡El navegador no admite Web Serial!",
                fr: "Le navigateur ne prend pas en charge Web Serial !",
                de: "Browser unterstützt Web Serial nicht!",
                ja: "ブラウザが Web Serial をサポートしていません！",
                ko: "브라우저가 Web Serial을 지원하지 않습니다!",
                ru: "Браузер не поддерживает Web Serial!",
                ar: "المتصفح لا يدعم Web Serial!"
            },
            browser_unsupported_desc: {
                vi: "Vui lòng mở trang này bằng Google Chrome hoặc MS Edge (trên máy tính/laptop).",
                en: "Please open this page in Google Chrome or MS Edge (on Desktop/Laptop).",
                zh: "请在电脑端使用 Google Chrome 或 MS Edge 浏览器打开此页面。",
                es: "Abra esta página en Google Chrome o MS Edge (en PC).",
                fr: "Veuillez ouvrir cette page dans Google Chrome ou MS Edge (sur PC).",
                de: "Bitte öffnen Sie diese Seite in Google Chrome oder MS Edge (auf dem PC).",
                ja: "PCの Google Chrome または MS Edge で開いてください。",
                ko: "PC에서 Google Chrome 또는 MS Edge로 이 페이지를 여세요.",
                ru: "Откройте эту страницу в Google Chrome hoặc MS Edge (на ПК).",
                ar: "يرجى فتح هذه الصفحة في Google Chrome أو MS Edge (على الكمبيوتر)."
            },
            title: {
                vi: "Nạp Firmware ESP32-S3",
                en: "ESP32-S3 Web Flasher",
                zh: "ESP32-S3 网页烧录工具",
                es: "Flasheador Web ESP32-S3",
                fr: "Flasheur Web ESP32-S3",
                de: "ESP32-S3 Web-Flasher",
                ja: "ESP32-S3 Web フラッシャー",
                ko: "ESP32-S3 웹 펌웨어 설치기",
                ru: "Веб-прошивальщик ESP32-S3",
                ar: "مُثبِّت الويب ESP32-S3"
            },
            subtitle: {
                vi: "Nạp trực tiếp firmware đầy đủ (Bootloader + Partitions + App) qua cổng USB chỉ với 1 cú click!",
                en: "Flash full firmware (Bootloader + Partitions + App) via USB in just 1 click!",
                zh: "通过 USB 一键直接烧录完整固件（Bootloader + 分区表 + 应用程序）！",
                es: "¡Flashea el firmware completo (Bootloader + Particiones + App) por USB en 1 clic!",
                fr: "Flashez le firmware complet (Bootloader + Partitions + App) via USB en 1 clic !",
                de: "Vollständige Firmware (Bootloader + Partitionen + App) per USB mit 1 Klick flashen!",
                ja: "USB 経由でフルファームウェア（Bootloader + パーティション + App）を1クリックで書き込み！",
                ko: "USB로 전체 펌웨어(Bootloader + 파티션 + App)를 1클릭으로 설치!",
                ru: "Прошейте полный образ (Bootloader + Разделы + App) через USB за 1 клик!",
                ar: "قم بتثبيت الفيرموير الكامل (Bootloader + Partitions + App) عبر USB بنقرة واحدة!"
            },
            source_label: {
                vi: "Nguồn Firmware:", en: "Firmware Source:", zh: "固件来源:",
                es: "Fuente de firmware:", fr: "Source du firmware :", de: "Firmware-Quelle:",
                ja: "ファームウェアソース:", ko: "펌웨어 소스:", ru: "Источник прошивки:", ar: "مصدر الفيرموير:"
            },
            version_history: {
                vi: "Lịch sử phiên bản", en: "Version History", zh: "版本更新历史",
                es: "Historial de versiones", fr: "Historique des versions", de: "Versionsverlauf",
                ja: "バージョン履歴", ko: "버전 기록", ru: "История версий", ar: "سجل الإصدارات"
            },
            opt_local: {
                vi: "📁 Chọn file từ máy tính (Offline)", en: "📁 Select file from computer (Offline)", zh: "📁 从本地电脑选择固件 (离线)",
                es: "📁 Seleccionar archivo local (Offline)", fr: "📁 Choisir un fichier local (Hors ligne)", de: "📁 Datei vom Computer auswählen (Offline)",
                ja: "📁 PCからファイルを選択 (オフライン)", ko: "📁 컴퓨터에서 파일 선택 (오프라인)", ru: "📁 Выбрать файл с компьютера (Офлайн)", ar: "📁 اختر ملفًا من الكمبيوتر (بدون إنترنت)"
            },
            opt_github: {
                vi: "🌐 Tải từ GitHub Release (Online)", en: "🌐 Download from GitHub Release (Online)", zh: "🌐 从 GitHub Release 下载 (在线)",
                es: "🌐 Descargar desde GitHub Release (En línea)", fr: "🌐 Télécharger depuis GitHub Release (En ligne)", de: "🌐 Von GitHub Release herunterladen (Online)",
                ja: "🌐 GitHub Release からダウンロード (オンライン)", ko: "🌐 GitHub Release에서 다운로드 (온라인)", ru: "🌐 Скачать с GitHub Release (Онлайн)", ar: "🌐 تنزيل من GitHub Release (بالإنترنت)"
            },
            baud_label: {
                vi: "Tốc độ nạp (Baudrate):", en: "Baudrate:", zh: "烧录波特率:",
                es: "Velocidad en baudios:", fr: "Vitesse (Baud) :", de: "Baudrate:",
                ja: "書き込み速度:", ko: "통신 속도:", ru: "Скорость (Baud):", ar: "سرعة النقل:"
            },
            baud_stable: {
                vi: "115200 (Ổn định nhất)", en: "115200 (Most Stable)", zh: "115200 (最稳定)",
                es: "115200 (Más estable)", fr: "115200 (Le plus stable)", de: "115200 (Am stabilsten)",
                ja: "115200 (最も安定)", ko: "115200 (가장 안정적)", ru: "115200 (Наиболее стабильный)", ar: "115200 (الأكثر استقراراً)"
            },
            baud_high: {
                vi: "460800 (Tốc độ cao)", en: "460800 (High Speed)", zh: "460800 (高速)",
                es: "460800 (Alta velocidad)", fr: "460800 (Haute vitesse)", de: "460800 (Hohe Geschwindigkeit)",
                ja: "460800 (高速)", ko: "460800 (고속)", ru: "460800 (Высокая скорость)", ar: "460800 (سرعة عالية)"
            },
            baud_ultra: {
                vi: "921600 (Siêu nhanh)", en: "921600 (Ultra Fast)", zh: "921600 (极速)",
                es: "921600 (Ultra rápido)", fr: "921600 (Ultra rapide)", de: "921600 (Ultraschnell)",
                ja: "921600 (超高速)", ko: "921600 (초고속)", ru: "921600 (Сверхбыстрая)", ar: "921600 (فائق السرعة)"
            },
            offset_label: {
                vi: "Địa chỉ Flash (Offset):", en: "Flash Offset:", zh: "目标偏移地址:",
                es: "Dirección Flash (Offset):", fr: "Adresse Flash (Offset) :", de: "Flash-Offset:",
                ja: "フラッシュアドレス:", ko: "플래시 주소 (Offset):", ru: "Смещение Flash:", ar: "عنوان الفلاش:"
            },
            offset_full: {
                vi: "0x0000 (Full_Flash.bin - Toàn bộ)", en: "0x0000 (Full_Flash.bin - Full Merged)", zh: "0x0000 (Full_Flash.bin - 完整合并)",
                es: "0x0000 (Full_Flash.bin - Completo)", fr: "0x0000 (Full_Flash.bin - Complet)", de: "0x0000 (Full_Flash.bin - Vollständig)",
                ja: "0x0000 (Full_Flash.bin - 完全統合)", ko: "0x0000 (Full_Flash.bin - 전체)", ru: "0x0000 (Full_Flash.bin - Полный)", ar: "0x0000 (Full_Flash.bin - كامل)"
            },
            offset_app: {
                vi: "0x10000 (OTA_Update.bin - Chỉ App)", en: "0x10000 (OTA_Update.bin - App Only)", zh: "0x10000 (OTA_Update.bin - 仅应用)",
                es: "0x10000 (OTA_Update.bin - Solo App)", fr: "0x10000 (OTA_Update.bin - App seule)", de: "0x10000 (OTA_Update.bin - Nur App)",
                ja: "0x10000 (OTA_Update.bin - アプリのみ)", ko: "0x10000 (OTA_Update.bin - 앱 전용)", ru: "0x10000 (OTA_Update.bin - Только App)", ar: "0x10000 (OTA_Update.bin - التطبيق فقط)"
            },
            offset_lock_note: {
                vi: "🔒 Cố định 0x0000 khi dùng Full_Flash từ GitHub Online",
                en: "🔒 Fixed 0x0000 for Online Full_Flash from GitHub",
                zh: "🔒 在线 Full_Flash 固件固定 0x0000",
                es: "🔒 Fijo en 0x0000 para Full_Flash en línea",
                fr: "🔒 Fixé à 0x0000 pour Full_Flash en ligne",
                de: "🔒 Fest 0x0000 für Online Full_Flash",
                ja: "🔒 オンライン Full_Flash 用に 0x0000 固定",
                ko: "🔒 온라인 Full_Flash 0x0000 고정",
                ru: "🔒 Фиксировано 0x0000 для Full_Flash онлайн",
                ar: "🔒 ثابت 0x0000 لـ Full_Flash عبر الإنترنت"
            },
            flash_btn: {
                vi: "Cài Đặt / Nạp Firmware Ngay",
                en: "Install / Flash Firmware Now",
                zh: "立即安装 / 烧录固件",
                es: "Instalar / Flashear firmware ahora",
                fr: "Installer / Flasher le firmware maintenant",
                de: "Firmware jetzt installieren / flashen",
                ja: "今すぐファームウェアをインストール",
                ko: "지금 펌웨어 설치 / 플래시",
                ru: "Установить / Прошить сейчас",
                ar: "تثبيت / فلاش الفيرموير الآن"
            },
            steps_title: {
                vi: "3 Bước đơn giản để nạp:", en: "3 Simple Steps to Flash:", zh: "3个简单烧录步骤:",
                es: "3 pasos simples para flashear:", fr: "3 étapes simples pour flasher :", de: "3 einfache Schritte zum Flashen:",
                ja: "書き込みの3つの簡単な手順:", ko: "펌웨어 설치 3단계:", ru: "3 простых шага прошивки:", ar: "3 خطوات بسيطة للتثبيت:"
            },
            step1: {
                vi: "Giữ nút BOOT (GPIO0) → Nhấn nút RST → Thả BOOT để vào chế độ nạp.",
                en: "Hold BOOT (GPIO0) → Press RST → Release BOOT to enter Download Mode.",
                zh: "按住 BOOT (GPIO0) → 按一次 RST → 松开 BOOT 进入烧录模式。",
                es: "Mantenga BOOT (GPIO0) → Pulse RST → Suelte BOOT para entrar al modo de descarga.",
                fr: "Maintenez BOOT (GPIO0) → Appuyez sur RST → Relâchez BOOT pour entrer en mode téléchargement.",
                de: "Halten Sie BOOT (GPIO0) → Drücken Sie RST → Lassen Sie BOOT los für den Download-Modus.",
                ja: "BOOT (GPIO0) を押しながら RST を押し、BOOT を離してダウンロードモードに入ります。",
                ko: "BOOT (GPIO0) 버튼을 누른 채 RST 버튼을 눌렀다가 BOOT를 놓아 다운로드 모드로 진입합니다.",
                ru: "Удерживайте BOOT (GPIO0) → Нажмите RST → Отпустите BOOT для входа в режим загрузки.",
                ar: "اضغط مع الاستمرار على BOOT (GPIO0) ← اضغط RST ← أطلق BOOT للدخول في وضع التنزيل."
            },
            step2: {
                vi: "Nhấn nút Nạp Firmware ở trên → Chọn cổng USB JTAG/Serial của ESP32-S3.",
                en: "Click Flash Firmware above → Select the USB JTAG/Serial port of ESP32-S3.",
                zh: "点击上方 立即烧录 → 选择 ESP32-S3 的 USB JTAG/Serial 串口。",
                es: "Haga clic en Instalar Firmware → Seleccione el puerto USB JTAG/Serial de ESP32-S3.",
                fr: "Cliquez sur Installer le firmware → Sélectionnez le port USB JTAG/Serial de l'ESP32-S3.",
                de: "Klicken Sie auf Firmware flashen → Wählen Sie den USB JTAG/Serial-Port des ESP32-S3.",
                ja: "上の ファームウェアをインストール をクリック → ESP32-S3 の USB JTAG/Serial ポートを選択。",
                ko: "위의 펌웨어 설치 버튼 클릭 → ESP32-S3의 USB JTAG/Serial 포트를 선택합니다.",
                ru: "Нажмите Прошить прошивку → Выберите порт USB JTAG/Serial ESP32-S3.",
                ar: "انقر فوق تثبيت الفيرموير ← اختر منفذ USB JTAG/Serial الخاص بـ ESP32-S3."
            },
            step3: {
                vi: "Nạp xong: Nhấn nút RST để khởi động. Kết nối Wi-Fi ESP32S3-CAM-SETUP (Pass: 12345678) rồi vào 192.168.4.1.",
                en: "Done: Press RST to reboot. Connect to Wi-Fi ESP32S3-CAM-SETUP (Pass: 12345678) then open 192.168.4.1.",
                zh: "完成: 按 RST 重启。连接 Wi-Fi ESP32S3-CAM-SETUP (密码: 12345678)，打开 192.168.4.1。",
                es: "Finalizado: Pulse RST para reiniciar. Conéctese al Wi-Fi ESP32S3-CAM-SETUP (Clave: 12345678) y abra 192.168.4.1.",
                fr: "Terminé : Appuyez sur RST pour redémarrer. Connectez-vous au Wi-Fi ESP32S3-CAM-SETUP (Mot de passe : 12345678) puis ouvrez 192.168.4.1.",
                de: "Fertig: Drücken Sie RST für Neustart. Verbinden Sie sich mit Wi-Fi ESP32S3-CAM-SETUP (Passwort: 12345678), öffnen Sie 192.168.4.1.",
                ja: "完了: RST を押して再起動。Wi-Fi ESP32S3-CAM-SETUP（パスワード: 12345678）に接続後、192.168.4.1 を開く。",
                ko: "완료: RST 버튼을 눌러 재부팅. Wi-Fi ESP32S3-CAM-SETUP (비밀번호: 12345678) 연결 후 192.168.4.1 접속.",
                ru: "Готово: Нажмите RST для перезагрузки. Подключитесь к Wi-Fi ESP32S3-CAM-SETUP (Пароль: 12345678), откройте 192.168.4.1.",
                ar: "اكتمل: اضغط RST لإعادة التشغيل. اتصل بـ Wi-Fi ESP32S3-CAM-SETUP (الرمز: 12345678) ثم افتح 192.168.4.1."
            },
            specs_title: {
                vi: "🔧 Thông số phần cứng:", en: "🔧 Hardware Specifications:", zh: "🔧 硬件规格:",
                es: "🔧 Especificaciones de Hardware:", fr: "🔧 Spécifications Matérielles :", de: "🔧 Hardware-Spezifikationen:",
                ja: "🔧 ハードウェア仕様:", ko: "🔧 하드웨어 사양:", ru: "🔧 Технические характеристики:", ar: "🔧 مواصفات العتاد:"
            },
            view_log: {
                vi: "🔍 Xem log chi tiết", en: "🔍 View detailed log", zh: "🔍 查看详细日志",
                es: "🔍 Ver registro detallado", fr: "🔍 Voir le journal détaillé", de: "🔍 Detailliertes Protokoll anzeigen",
                ja: "🔍 詳細ログを表示", ko: "🔍 상세 로그 보기", ru: "🔍 Просмотр подробного лога", ar: "🔍 عرض السجل التفصيلي"
            },
            hide_log: {
                vi: "▲ Ẩn log chi tiết", en: "▲ Hide detailed log", zh: "▲ 隐藏详细日志",
                es: "▲ Ocultar registro", fr: "▲ Masquer le journal", de: "▲ Protokoll ausblenden",
                ja: "▲ 詳細ログを隠す", ko: "▲ 로그 숨기기", ru: "▲ Скрыть лог", ar: "▲ إخفاء السجل"
            },
            history_title: {
                vi: "Lịch Sử Phiên Bản Firmware", en: "Firmware Version History", zh: "固件版本更新历史",
                es: "Historial de versiones de firmware", fr: "Historique des versions du firmware", de: "Firmware-Versionsverlauf",
                ja: "ファームウェアのバージョン履歴", ko: "펌웨어 버전 기록", ru: "История версий прошивки", ar: "سجل إصدارات الفيرموير"
            },
            view_on_github: {
                vi: "Xem trên GitHub Releases", en: "View on GitHub Releases", zh: "在 GitHub Releases 上查看",
                es: "Ver en GitHub Releases", fr: "Voir sur GitHub Releases", de: "Auf GitHub Releases ansehen",
                ja: "GitHub Releases で見る", ko: "GitHub Releases에서 보기", ru: "Посмотреть на GitHub Releases", ar: "عرض على GitHub Releases"
            },
            btn_close: {
                vi: "Đóng", en: "Close", zh: "关闭", es: "Cerrar", fr: "Fermer", de: "Schließen", ja: "閉じる", ko: "닫기", ru: "Закрыть", ar: "إغلاق"
            },
            preparing: {
                vi: "Đang chuẩn bị...", en: "Preparing...", zh: "准备中...", es: "Preparando...", fr: "En préparation...", de: "Vorbereitung...", ja: "準備中...", ko: "준비 중...", ru: "Подготовка...", ar: "جارٍ التحضير..."
            },
            downloading: {
                vi: "Đang tải firmware từ GitHub...", en: "Downloading firmware from GitHub...", zh: "正在从 GitHub 下载固件...", es: "Descargando firmware desde GitHub...", fr: "Téléchargement du firmware depuis GitHub...", de: "Firmware wird von GitHub heruntergeladen...", ja: "GitHubからファームウェアをダウンロード中...", ko: "GitHub에서 펌웨어 다운로드 중...", ru: "Загрузка прошивки с GitHub...", ar: "جارٍ تنزيل الفيرموير من GitHub..."
            },
            connecting: {
                vi: "Đang kết nối ESP32-S3...", en: "Connecting to ESP32-S3...", zh: "正在连接 ESP32-S3...", es: "Conectando a ESP32-S3...", fr: "Connexion à l'ESP32-S3...", de: "Verbindung mit ESP32-S3 wird hergestellt...", ja: "ESP32-S3 に接続中...", ko: "ESP32-S3에 연결하는 중...", ru: "Подключение к ESP32-S3...", ar: "جارٍ الاتصال بـ ESP32-S3..."
            },
            flash_success_100: {
                vi: "🎉 Nạp thành công 100%!", en: "🎉 Flashed 100% successfully!", zh: "🎉 烧录成功 100%！", es: "¡🎉 Flasheo exitoso al 100%!", fr: "🎉 Flash réussi à 100% !", de: "🎉 100% erfolgreich geflasht!", ja: "🎉 100% 書き込み成功！", ko: "🎉 100% 설치 완료!", ru: "🎉 Успешно прошито на 100%!", ar: "🎉 تم التثبيت بنجاح 100%!"
            },
            flash_success_alert: {
                vi: "🎉 <b>Nạp firmware thành công 100%!</b><br>Thiết bị đang tự động khởi động lại (nếu chưa chạy, nhấn nhẹ nút <b>RST</b>). Sau đó kết nối Wi-Fi <b>ESP32S3-CAM-SETUP</b> (Mật khẩu: <b>12345678</b>) rồi truy cập <b>http://192.168.4.1</b>.",
                en: "🎉 <b>Flashing completed 100%!</b><br>Device is auto-rebooting (if not running, press <b>RST</b>). Connect to Wi-Fi <b>ESP32S3-CAM-SETUP</b> (Password: <b>12345678</b>) and open <b>http://192.168.4.1</b>.",
                zh: "🎉 <b>固件烧录 100% 成功！</b><br>设备正在自动重启（若未启动请按 <b>RST</b>）。连接 Wi-Fi <b>ESP32S3-CAM-SETUP</b>（密码: <b>12345678</b>），然后打开 <b>http://192.168.4.1</b>。",
                es: "🎉 <b>¡Flasheo completado al 100%!</b><br>El dispositivo se está reiniciando (si no, pulse <b>RST</b>). Conéctese a <b>ESP32S3-CAM-SETUP</b> (Clave: <b>12345678</b>) y abra <b>http://192.168.4.1</b>.",
                fr: "🎉 <b>Flash terminé à 100% !</b><br>L'appareil redémarre automatiquement (sinon appuyez sur <b>RST</b>). Connectez-vous à <b>ESP32S3-CAM-SETUP</b> (Mot de passe : <b>12345678</b>) et ouvrez <b>http://192.168.4.1</b>.",
                de: "🎉 <b>100% erfolgreich geflasht!</b><br>Gerät startet automatisch neu (oder drücken Sie <b>RST</b>). Verbinden Sie sich mit <b>ESP32S3-CAM-SETUP</b> (Passwort: <b>12345678</b>), öffnen Sie <b>http://192.168.4.1</b>.",
                ja: "🎉 <b>書き込みが 100% 完了しました！</b><br>デバイスが自動再起動しています（起動しない場合は <b>RST</b> を押下）。Wi-Fi <b>ESP32S3-CAM-SETUP</b>（パスワード: <b>12345678</b>）に接続し <b>http://192.168.4.1</b> を開きます。",
                ko: "🎉 <b>펌웨어 설치가 100% 완료되었습니다!</b><br>기기가 자동 재부팅 중입니다 (미실행 시 <b>RST</b> 누름). Wi-Fi <b>ESP32S3-CAM-SETUP</b> (비밀번호: <b>12345678</b>) 연결 후 <b>http://192.168.4.1</b> 접속.",
                ru: "🎉 <b>Прошивка завершена на 100%!</b><br>Устройство перезагружается (если нет, нажмите <b>RST</b>). Подключитесь к Wi-Fi <b>ESP32S3-CAM-SETUP</b> (Пароль: <b>12345678</b>) и откройте <b>http://192.168.4.1</b>.",
                ar: "🎉 <b>اكتمل التثبيت بنسبة 100%!</b><br>الجهاز يقوم بإعادة التشغيل تلقائياً (أو اضغط <b>RST</b>). اتصل بـ Wi-Fi <b>ESP32S3-CAM-SETUP</b> (الرمز: <b>12345678</b>) ثم افتح <b>http://192.168.4.1</b>."
            },
            flash_failed_hint: {
                vi: "💡 Mẹo khắc phục: Giữ nút <b>BOOT</b> (GPIO0) → Nhấn nút <b>RST</b> → Thả nút <b>BOOT</b> rồi bấm nạp lại.",
                en: "💡 Troubleshooting: Hold <b>BOOT</b> (GPIO0) → Press <b>RST</b> → Release <b>BOOT</b>, then try again.",
                zh: "💡 排错提示: 按住 <b>BOOT</b> (GPIO0) → 按一次 <b>RST</b> → 松开 <b>BOOT</b> 后重试。",
                es: "💡 Consejo: Mantenga <b>BOOT</b> (GPIO0) → Pulse <b>RST</b> → Suelte <b>BOOT</b> e intente de nuevo.",
                fr: "💡 Conseil : Maintenez <b>BOOT</b> (GPIO0) → Appuyez sur <b>RST</b> → Relâchez <b>BOOT</b> et réessayez.",
                de: "💡 Tipp: Halten Sie <b>BOOT</b> (GPIO0) → Drücken Sie <b>RST</b> → Lassen Sie <b>BOOT</b> los und versuchen Sie es erneut.",
                ja: "💡 ヒント: <b>BOOT</b> (GPIO0) を押しながら <b>RST</b> を押し、<b>BOOT</b> を離してから再試行してください。",
                ko: "💡 해결 팁: <b>BOOT</b> (GPIO0)를 누른 채 <b>RST</b>를 눌렀다 <b>BOOT</b>를 놓고 다시 시도하세요.",
                ru: "💡 Совет: Удерживайте <b>BOOT</b> (GPIO0) → Нажмите <b>RST</b> → Отпустите <b>BOOT</b> и повторите попытку.",
                ar: "💡 نصيحة: اضغط مع الاستمرار على <b>BOOT</b> (GPIO0) ← اضغط <b>RST</b> ← أطلق <b>BOOT</b> ثم أعد المحاولة."
            },
            flash_failed_label: {
                vi: "❌ Lỗi nạp firmware", en: "❌ Flash failed", zh: "❌ 固件烧录失败",
                es: "❌ Error al flashear", fr: "❌ Échec du flash", de: "❌ Fehler beim Flashen",
                ja: "❌ 書き込み失敗", ko: "❌ 펌웨어 설치 실패", ru: "❌ Ошибка прошивки", ar: "❌ فشل التثبيت"
            },
            no_local_file: {
                vi: "Vui lòng chọn file firmware (.bin) từ máy tính trước!",
                en: "Please select a firmware file (.bin) from your computer first!",
                zh: "请先选择本地固件文件 (.bin)！",
                es: "¡Seleccione primero un archivo de firmware (.bin) local!",
                fr: "Veuillez d'abord sélectionner un fichier de firmware (.bin) local !",
                de: "Bitte wählen Sie zuerst eine Firmware-Datei (.bin) aus!",
                ja: "最初にPCからファームウェアファイル (.bin) を選択してください！",
                ko: "먼저 컴퓨터에서 펌웨어 파일(.bin)을 선택하세요!",
                ru: "Сначала выберите файл прошивки (.bin) с компьютера!",
                ar: "يرجى تحديد ملف الفيرموير (.bin) من جهازك أولاً!"
            },
            lib_not_found: {
                vi: "Không tìm thấy thư viện esptool-js! Vui lòng kiểm tra kết nối mạng.",
                en: "esptool-js library not found! Please check your internet connection.",
                zh: "未找到 esptool-js 库！请检查网络连接。",
                es: "¡No se encontró esptool-js! Compruebe su conexión a internet.",
                fr: "Bibliothèque esptool-js introuvable ! Vérifiez votre connexion.",
                de: "esptool-js Bibliothek nicht gefunden! Bitte Internetverbindung prüfen.",
                ja: "esptool-js ライブラリが見つかりません！接続を確認してください。",
                ko: "esptool-js 라이브러리를 찾을 수 없습니다! 인터넷 연결을 확인하세요.",
                ru: "Библиотека esptool-js не найдена! Проверьте подключение.",
                ar: "لم يتم العثور على مكتبة esptool-js! يرجى التحقق من اتصال الإنترنت."
            }
        },

        // --- C. TỪ VỰNG CAMERA & THỊ GIÁC AI (CAMERA) ---
        camera: {
            live_stream: {
                vi: "Truyền Trực Tiếp (Triple-Buffer OPI)", en: "Live Stream (Triple-Buffer OPI)", zh: "实时视频流 (三重缓冲 OPI)",
                es: "Transmisión en Vivo (OPI)", fr: "Flux en Direct (OPI)", de: "Live-Stream (OPI)",
                ja: "ライブストリーム (OPI)", ko: "라이브 스트림 (OPI)", ru: "Прямой Эфир (OPI)", ar: "البث المباشر (OPI)"
            },
            controls_title: {
                vi: "Điều Khiển Camera", en: "Camera Controls", zh: "相机控制",
                es: "Controles de Cámara", fr: "Commandes Caméra", de: "Kamerasteuerung",
                ja: "カメラ制御", ko: "카메라 제어", ru: "Управление Камерой", ar: "تحكم الكاميرا"
            },
            snap_btn: {
                vi: "Chụp Ảnh", en: "Snapshot", zh: "拍照截图",
                es: "Captura", fr: "Prendre Photo", de: "Schnappschuss",
                ja: "写真撮影", ko: "사진 촬영", ru: "Снимок", ar: "التقاط صورة"
            },
            toggle_stream: {
                vi: "Bật/Tắt Stream", en: "Toggle Stream", zh: "开关视频",
                es: "Alternar Stream", fr: "Basculer Stream", de: "Stream umschalten",
                ja: "配信切替", ko: "스트림 전환", ru: "Вкл/Выкл Стрим", ar: "تبديل البث"
            },
            resolution: {
                vi: "Độ Phân Giải", en: "Resolution", zh: "分辨率",
                es: "Resolución", fr: "Résolution", de: "Auflösung",
                ja: "解像度", ko: "해상도", ru: "Разрешение", ar: "الدقة"
            },
            jpeg_quality: {
                vi: "Chất Lượng JPEG", en: "JPEG Quality", zh: "JPEG 质量",
                es: "Calidad JPEG", fr: "Qualité JPEG", de: "JPEG-Qualität",
                ja: "JPEG 品質", ko: "JPEG 품질", ru: "Качество JPEG", ar: "جودة JPEG"
            },
            flash_led: {
                vi: "Đèn Flash LED", en: "Flash LED Brightness", zh: "补光灯亮度",
                es: "Brillo de Flash LED", fr: "Luminosité Flash LED", de: "Blitz-LED Helligkeit",
                ja: "フラッシュLED輝度", ko: "플래시 LED 밝기", ru: "Яркость Вспышки", ar: "سطوع فلاش LED"
            },
            enroll_face: {
                vi: "Đăng Ký Khuôn Mặt", en: "Enroll Face ID", zh: "注册人脸",
                es: "Registrar Rostro", fr: "Enregistrer Visage", de: "Gesicht registrieren",
                ja: "顔登録", ko: "얼굴 등록", ru: "Регистрация Лица", ar: "تسجيل الوجه"
            },
            recognize_face: {
                vi: "Nhận Diện Khuôn Mặt", en: "Recognize Face", zh: "人脸识别",
                es: "Reconocer Rostro", fr: "Reconnaître Visage", de: "Gesicht erkennen",
                ja: "顔認識", ko: "얼굴 인식", ru: "Распознать Лицо", ar: "التعرف على الوجه"
            },
            alpr_scan: {
                vi: "Quét Biển Số Xe", en: "Scan License Plate", zh: "扫描车牌",
                es: "Escanear Matrícula", fr: "Scanner Plaque", de: "Kennzeichen scannen",
                ja: "ナンバー認識", ko: "번호판 스캔", ru: "Сканировать Номер", ar: "مسح لوحة السيارة"
            },
            waste_detect: {
                vi: "Phân Loại Rác FOMO", en: "Detect Waste (FOMO)", zh: "垃圾目标检测",
                es: "Detectar Residuos", fr: "Détecter Déchets", de: "Müll erkennen",
                ja: "ゴミ検出", ko: "쓰레기 분류", ru: "Детекция Отходов", ar: "فرز النفايات"
            },
            record_sd: {
                vi: "Ghi Thẻ Nhớ SD", en: "Record to SD Card", zh: "录像到 SD 卡",
                es: "Grabar en SD", fr: "Enregistrer sur SD", de: "Auf SD aufnehmen",
                ja: "SDカード録画", ko: "SD 카드 녹화", ru: "Запись на SD", ar: "تسجيل على بطاقة SD"
            }
        },

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
        },

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
        },

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
        },

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
        },

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
            if (selectEl) {
                if (selectEl.options.length === 0) {
                    this.renderLangSelector('langSelect');
                } else {
                    selectEl.value = this.currentLang;
                }
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
            select.value = this.currentLang;
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

    // Tự động khởi chạy khi trang hoàn tất nạp DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => I18nEngine.init());
    } else {
        I18nEngine.init();
    }

})(window);
