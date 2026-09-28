/**
 * =============================================================================
 * @file i18n_flasher.js
 * @brief Web Flasher & ESP Serial 10-Language Dictionary
 * @details Hỗ trợ 10 ngôn ngữ (Tiếng Việt mặc định #1)
 * =============================================================================
 */
(function(window) {
    'use strict';
    const TRANSLATIONS = {
// --- B3. TỪ VỰNG WEB FLASHER & NẠP FIRMWARE USB (FLASHER) ---
        flasher: {
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
                vi: "🎉 <b>Nạp firmware thành công 100%!</b><br>Nhấn nút <b>RST</b> trên mạch ESP32-S3. Sau đó kết nối Wi-Fi <b>ESP32S3-CAM-SETUP</b> (Mật khẩu: <b>12345678</b>) rồi truy cập <b>http://192.168.4.1</b>.",
                en: "🎉 <b>Flashing completed 100%!</b><br>Press <b>RST</b> on ESP32-S3. Connect to Wi-Fi <b>ESP32S3-CAM-SETUP</b> (Password: <b>12345678</b>) and open <b>http://192.168.4.1</b>.",
                zh: "🎉 <b>固件烧录 100% 成功！</b><br>请按 ESP32-S3 上的 <b>RST</b> 按钮重启。连接 Wi-Fi <b>ESP32S3-CAM-SETUP</b>（密码: <b>12345678</b>），然后打开 <b>http://192.168.4.1</b>。",
                es: "🎉 <b>¡Flasheo completado al 100%!</b><br>Presione <b>RST</b> en el ESP32-S3. Conéctese al Wi-Fi <b>ESP32S3-CAM-SETUP</b> (Clave: <b>12345678</b>) y abra <b>http://192.168.4.1</b>.",
                fr: "🎉 <b>Flash terminé à 100% !</b><br>Appuyez sur <b>RST</b> sur l'ESP32-S3. Connectez-vous au Wi-Fi <b>ESP32S3-CAM-SETUP</b> (Mot de passe : <b>12345678</b>) et ouvrez <b>http://192.168.4.1</b>.",
                de: "🎉 <b>100% erfolgreich geflasht!</b><br>Drücken Sie <b>RST</b> am ESP32-S3. Verbinden Sie sich mit Wi-Fi <b>ESP32S3-CAM-SETUP</b> (Passwort: <b>12345678</b>) und öffnen Sie <b>http://192.168.4.1</b>.",
                ja: "🎉 <b>書き込みが 100% 完了しました！</b><br>ESP32-S3 の <b>RST</b> ボタンを押してください。Wi-Fi <b>ESP32S3-CAM-SETUP</b>（パスワード: <b>12345678</b>）に接続し、<b>http://192.168.4.1</b> を開きます。",
                ko: "🎉 <b>펌웨어 설치가 100% 완료되었습니다!</b><br>ESP32-S3의 <b>RST</b> 버튼을 누르세요. Wi-Fi <b>ESP32S3-CAM-SETUP</b> (비밀번호: <b>12345678</b>) 연결 후 <b>http://192.168.4.1</b>에 접속하세요.",
                ru: "🎉 <b>Прошивка завершена на 100%!</b><br>Нажмите <b>RST</b> на ESP32-S3. Подключитесь к Wi-Fi <b>ESP32S3-CAM-SETUP</b> (Пароль: <b>12345678</b>) и откройте <b>http://192.168.4.1</b>.",
                ar: "🎉 <b>اكتمل التثبيت بنسبة 100%!</b><br>اضغط على زر <b>RST</b> على ESP32-S3. اتصل بشبكة Wi-Fi <b>ESP32S3-CAM-SETUP</b> (الرمز: <b>12345678</b>) ثم افتح <b>http://192.168.4.1</b>."
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
        }
    };

    if (window.I18N) {
        window.I18N.extend(TRANSLATIONS);
    } else {
        window._pendingI18n = window._pendingI18n || [];
        window._pendingI18n.push(TRANSLATIONS);
    }
})(window);
