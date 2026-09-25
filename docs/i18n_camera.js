/**
 * =============================================================================
 * @file i18n_camera.js
 * @brief Camera & AI Vision 10-Language Dictionary
 * @details Hỗ trợ 10 ngôn ngữ (Tiếng Việt mặc định #1)
 * =============================================================================
 */
(function(window) {
    'use strict';
    const TRANSLATIONS = {
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
                ja: "配信切替", ko: "스트림 전환", ru: "Вкл/Выкл Стрим", ar: "تبديل البth"
            },
            start_stream: {
                vi: "Bật Live Stream", en: "Start Stream", zh: "开始串流",
                es: "Iniciar Stream", fr: "Démarrer Flux", de: "Stream Starten",
                ja: "ストリーム開始", ko: "스트림 시작", ru: "Запуск Потока", ar: "بدء البث"
            },
            pause_stream: {
                vi: "Tạm Dừng Stream", en: "Pause Stream", zh: "暂停串流",
                es: "Pausar Stream", fr: "Mettre en Pause", de: "Stream Pausieren",
                ja: "ストリーム一時停止", ko: "스트림 일시 중지", ru: "Пауза Потока", ar: "إيقاف مؤقت للبث"
            },
            stream_loading: {
                vi: "Đang kết nối luồng camera...", en: "Connecting camera stream...", zh: "正在连接相机视频流...",
                es: "Conectando transmisión...", fr: "Connexion au flux...", de: "Kamera-Stream verbinden...",
                ja: "カメラストリーム接続中...", ko: "카메라 스트림 연결 중...", ru: "Подключение к камере...", ar: "جارٍ الاتصال ببث الكاميرا..."
            },
            stream_paused: {
                vi: "Stream đã tạm dừng", en: "Stream paused", zh: "视频流已暂停",
                es: "Transmisión pausada", fr: "Flux en pause", de: "Stream pausiert",
                ja: "ストリーム一時停止中", ko: "스트림 일시 중지됨", ru: "Поток приостановлен", ar: "تم إيقاف البث مؤقتًا"
            },
            stream_reconnecting: {
                vi: "Đang tải lại luồng camera...", en: "Reconnecting camera stream...", zh: "正在重连相机视频流...",
                es: "Reconectando transmisión...", fr: "Reconnexion au flux...", de: "Kamera-Stream wird neu verbunden...",
                ja: "カメラストリーム再接続中...", ko: "카메라 스트림 다시 연결 중...", ru: "Переподключение к камере...", ar: "جارٍ إعادة الاتصال ببث الكاميرا..."
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
            brightness: {
                vi: "Độ Sáng (Brightness)", en: "Brightness", zh: "亮度",
                es: "Brillo", fr: "Luminosité", de: "Helligkeit",
                ja: "明るさ", ko: "밝기", ru: "Яркость", ar: "السطوع"
            },
            contrast: {
                vi: "Độ Tương Phản (Contrast)", en: "Contrast", zh: "对比度",
                es: "Contraste", fr: "Contraste", de: "Kontrast",
                ja: "コントラスト", ko: "대비", ru: "Контраст", ar: "التباين"
            },
            saturation: {
                vi: "Độ Bão Hòa Màu (Saturation)", en: "Saturation", zh: "饱和度",
                es: "Saturación", fr: "Saturation", de: "Sättigung",
                ja: "彩度", ko: "채도", ru: "Насыщенность", ar: "التشبع"
            },
            special_effect: {
                vi: "Hiệu Ứng Màu (Special Effect)", en: "Special Effect", zh: "特殊色彩效果",
                es: "Efecto Especial", fr: "Effet Spécial", de: "Spezialeffekt",
                ja: "特殊効果", ko: "특수 효과", ru: "Спецэффект", ar: "تأثير خاص"
            },
            awb: {
                vi: "Cân Bằng Trắng Tự Động (AWB)", en: "Auto White Balance (AWB)", zh: "自动白平衡 (AWB)",
                es: "Balance de Blancos Auto (AWB)", fr: "Balance des Blancs Auto (AWB)", de: "Automatischer Weißabgleich (AWB)",
                ja: "自動ホワイトバランス (AWB)", ko: "자동 화이트 밸런스 (AWB)", ru: "Автобаланс Белого (AWB)", ar: "توازن اللون الأبيض التلقائي (AWB)"
            },
            hmirror: {
                vi: "Lật Ảnh Ngang (H-Mirror)", en: "Horizontal Mirror (H-Mirror)", zh: "水平镜像",
                es: "Espejo Horizontal", fr: "Miroir Horizontal", de: "Horizontal Spiegeln",
                ja: "左右反転 (H-Mirror)", ko: "수평 반전 (H-Mirror)", ru: "Зеркало по горизонтали", ar: "مرآة أفقية"
            },
            vflip: {
                vi: "Lật Ảnh Dọc (V-Flip)", en: "Vertical Flip (V-Flip)", zh: "垂直翻转",
                es: "Volteo Vertical", fr: "Retournement Vertical", de: "Vertikal Spiegeln",
                ja: "上下反転 (V-Flip)", ko: "수직 반전 (V-Flip)", ru: "Переворот по вертикали", ar: "قلب رأسي"
            },
            effect_normal: {
                vi: "Bình Thường (Normal)", en: "Normal", zh: "正常",
                es: "Normal", fr: "Normal", de: "Normal",
                ja: "標準", ko: "표준", ru: "Обычный", ar: "عادي"
            },
            effect_negative: {
                vi: "Âm Bản (Negative)", en: "Negative", zh: "负片",
                es: "Negativo", fr: "Négatif", de: "Negativ",
                ja: "ネガ", ko: "반전 (네거티브)", ru: "Негатив", ar: "سلبي"
            },
            effect_grayscale: {
                vi: "Trắng Đen (Grayscale)", en: "Grayscale", zh: "黑白灰度",
                es: "Escala de Grises", fr: "Niveaux de Gris", de: "Graustufen",
                ja: "グレースケール", ko: "흑백", ru: "Оттенки Серого", ar: "تدرج رمادي"
            },
            effect_red: {
                vi: "Ám Đỏ (Red Tint)", en: "Red Tint", zh: "红调",
                es: "Tono Rojo", fr: "Teinte Rouge", de: "Rotstich",
                ja: "赤色トーン", ko: "붉은 톤", ru: "Красный оттенок", ar: "مسحة حمراء"
            },
            effect_green: {
                vi: "Ám Xanh Lá (Green Tint)", en: "Green Tint", zh: "绿调",
                es: "Tono Verde", fr: "Teinte Verte", de: "Grünstich",
                ja: "緑色トーン", ko: "초록 톤", ru: "Зеленый оттенок", ar: "مسحة خضراء"
            },
            effect_blue: {
                vi: "Ám Xanh Dương (Blue Tint)", en: "Blue Tint", zh: "蓝调",
                es: "Tono Azul", fr: "Teinte Bleue", de: "Blaustich",
                ja: "青色トーン", ko: "파란 톤", ru: "Синий оттенок", ar: "مسحة زرقاء"
            },
            effect_sepia: {
                vi: "Cổ Điển (Sepia)", en: "Sepia", zh: "复古褐色",
                es: "Sepia", fr: "Sépia", de: "Sepia",
                ja: "セピア", ko: "세피아", ru: "Сепия", ar: "سيبيا"
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
        }
    };

    if (window.I18N) {
        window.I18N.extend(TRANSLATIONS);
    } else {
        window._pendingI18n = window._pendingI18n || [];
        window._pendingI18n.push(TRANSLATIONS);
    }
})(window);
