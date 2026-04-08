#!/usr/bin/env python3
"""Generate docs/i18n/* from the canonical English docs."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

from generate_project_status import write_project_status
from render_project_docs import render_project_docs
from repository_sources import render_registry_file


REPO_ROOT = Path(__file__).resolve().parents[2]
FILES = [
    "README.md",
    "CONTRIBUTING.md",
    "SECURITY.md",
    "CODE_OF_CONDUCT.md",
    "docs/README.md",
    "docs/PROJECT-STRUCTURE.md",
    "docs/users/BUNDLES.md",
    "docs/users/CLI-USER-GUIDE.md",
    "docs/users/GETTING-STARTED.md",
    "docs/users/USAGE.md",
    "docs/users/RUNBOOK.md",
    "docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md",
    "docs/contributors/HIGH-SCORE-PLAYBOOK.md",
    "docs/contributors/QUALITY-BAR.md",
    "docs/contributors/SKILL-ANATOMY.md",
    "docs/contributors/SKILL-PR-WORKFLOW.md",
    "docs/contributors/SKILL-TEMPLATE.md",
]

LANGS = [
    ("es", "🇪🇸", "Español"),
    ("fr", "🇫🇷", "Français"),
    ("de", "🇩🇪", "Deutsch"),
    ("it", "🇮🇹", "Italiano"),
    ("ru", "🇷🇺", "Русский"),
    ("zh-CN", "🇨🇳", "中文（简体）"),
    ("ja", "🇯🇵", "日本語"),
    ("ko", "🇰🇷", "한국어"),
    ("ar", "🇸🇦", "العربية"),
    ("in", "🇮🇳", "हिन्दी"),
    ("th", "🇹🇭", "ไทย"),
    ("vi", "🇻🇳", "Tiếng Việt"),
    ("id", "🇮🇩", "Bahasa Indonesia"),
    ("ms", "🇲🇾", "Bahasa Melayu"),
    ("nl", "🇳🇱", "Nederlands"),
    ("pl", "🇵🇱", "Polski"),
    ("sv", "🇸🇪", "Svenska"),
    ("no", "🇳🇴", "Norsk"),
    ("da", "🇩🇰", "Dansk"),
    ("fi", "🇫🇮", "Suomi"),
    ("pt", "🇵🇹", "Português (Portugal)"),
    ("ro", "🇷🇴", "Română"),
    ("hu", "🇭🇺", "Magyar"),
    ("bg", "🇧🇬", "Български"),
    ("sk", "🇸🇰", "Slovenčina"),
    ("uk-UA", "🇺🇦", "Українська"),
    ("he", "🇮🇱", "עברית"),
    ("phi", "🇵🇭", "Filipino"),
    ("pt-BR", "🇧🇷", "Português (Brasil)"),
]

TRANSLATIONS = {
    "es": {"quickstart": "Inicio Rápido", "install": "Instalar", "configure": "Configurar", "start": "Iniciar", "features": "Funcionalidades", "docs": "Documentación", "warning": "⚠️ Solo use en sistemas con autorización explícita.", "setup_guide": "Guía de Instalación", "tech_docs": "Documentación Técnica", "required": "Requerido", "optional": "Opcional", "overview": "Resumen", "usage": "Uso", "config": "Configuración", "arch": "Arquitectura", "note": "Nota", "important": "Importante"},
    "fr": {"quickstart": "Démarrage Rapide", "install": "Installer", "configure": "Configurer", "start": "Démarrer", "features": "Fonctionnalités", "docs": "Documentation", "warning": "⚠️ Utilisez uniquement sur des systèmes avec autorisation explicite.", "setup_guide": "Guide d'Installation", "tech_docs": "Documentation Technique", "required": "Requis", "optional": "Optionnel", "overview": "Aperçu", "usage": "Utilisation", "config": "Configuration", "arch": "Architecture", "note": "Note", "important": "Important"},
    "de": {"quickstart": "Schnellstart", "install": "Installieren", "configure": "Konfigurieren", "start": "Starten", "features": "Funktionen", "docs": "Dokumentation", "warning": "⚠️ Nur auf Systemen mit ausdrücklicher Genehmigung verwenden.", "setup_guide": "Einrichtungshandbuch", "tech_docs": "Technische Dokumentation", "required": "Erforderlich", "optional": "Optional", "overview": "Übersicht", "usage": "Verwendung", "config": "Konfiguration", "arch": "Architektur", "note": "Hinweis", "important": "Wichtig"},
    "it": {"quickstart": "Avvio Rapido", "install": "Installare", "configure": "Configurare", "start": "Avviare", "features": "Funzionalità", "docs": "Documentazione", "warning": "⚠️ Utilizzare solo su sistemi con autorizzazione esplicita.", "setup_guide": "Guida all'Installazione", "tech_docs": "Documentazione Tecnica", "required": "Richiesto", "optional": "Opzionale", "overview": "Panoramica", "usage": "Utilizzo", "config": "Configurazione", "arch": "Architettura", "note": "Nota", "important": "Importante"},
    "ru": {"quickstart": "Быстрый старт", "install": "Установить", "configure": "Настроить", "start": "Запустить", "features": "Возможности", "docs": "Документация", "warning": "⚠️ Используйте только в системах с явного разрешения.", "setup_guide": "Руководство по настройке", "tech_docs": "Техническая документация", "required": "Обязательно", "optional": "Необязательно", "overview": "Обзор", "usage": "Использование", "config": "Конфигурация", "arch": "Архитектура", "note": "Примечание", "important": "Важно"},
    "zh-CN": {"quickstart": "快速开始", "install": "安装", "configure": "配置", "start": "启动", "features": "功能特点", "docs": "文档", "warning": "⚠️ 仅在获得明确授权的系统上使用。", "setup_guide": "设置指南", "tech_docs": "技术文档", "required": "必需", "optional": "可选", "overview": "概述", "usage": "使用", "config": "配置", "arch": "架构", "note": "注意", "important": "重要"},
    "ja": {"quickstart": "クイックスタート", "install": "インストール", "configure": "設定", "start": "起動", "features": "機能", "docs": "ドキュメント", "warning": "⚠️ 明示的な許可を得たシステムのみで使用してください。", "setup_guide": "セットアップガイド", "tech_docs": "技術ドキュメント", "required": "必須", "optional": "任意", "overview": "概要", "usage": "使用法", "config": "設定", "arch": "アーキテクチャ", "note": "注意", "important": "重要"},
    "ko": {"quickstart": "빠른 시작", "install": "설치", "configure": "구성", "start": "시작", "features": "기능", "docs": "문서", "warning": "⚠️ 명시적인 허가를 받은 시스템에서만 사용하세요.", "setup_guide": "설정 가이드", "tech_docs": "기술 문서", "required": "필수", "optional": "선택", "overview": "개요", "usage": "사용법", "config": "설정", "arch": "아키텍처", "note": "참고", "important": "중요"},
    "ar": {"quickstart": "بداية سريعة", "install": "تثبيت", "configure": "تهيئة", "start": "تشغيل", "features": "الميزات", "docs": "التوثيق", "warning": "⚠️ استخدم فقط على الأنظمة التي لديك إذن صريح لاختبارها.", "setup_guide": "دليل الإعداد", "tech_docs": "التوثيق التقني", "required": "مطلوب", "optional": "اختياري", "overview": "نظرة عامة", "usage": "الاستخدام", "config": "الإعداد", "arch": "الهندسة", "note": "ملاحظة", "important": "مهم"},
    "in": {"quickstart": "त्वरित प्रारंभ", "install": "स्थापित करें", "configure": "कॉन्फ़िगर करें", "start": "प्रारंभ करें", "features": "विशेषताएं", "docs": "दस्तावेज़", "warning": "⚠️ केवल अधिकृत सिस्टम पर उपयोग करें।", "setup_guide": "सेटअप गाइड", "tech_docs": "तकनीकी दस्तावेज़", "required": "आवश्यक", "optional": "वैकल्पिक", "overview": "अवलोकन", "usage": "उपयोग", "config": "कॉन्फ़िगरेशन", "arch": "आर्किटेक्चर", "note": "नोट", "important": "महत्वपूर्ण"},
    "th": {"quickstart": "เริ่มต้นอย่างรวดเร็ว", "install": "ติดตั้ง", "configure": "กำหนดค่า", "start": "เริ่มต้น", "features": "คุณสมบัติ", "docs": "เอกสาร", "warning": "⚠️ ใช้เฉพาะกับระบบที่ได้รับอนุญาตอย่างชัดแจ้งเท่านั้น", "setup_guide": "คู่มือการติดตั้ง", "tech_docs": "เอกสารทางเทคนิค", "required": "จำเป็น", "optional": "ไม่บังคับ", "overview": "ภาพรวม", "usage": "การใช้งาน", "config": "การกำหนดค่า", "arch": "สถาปัตยกรรม", "note": "หมายเหตุ", "important": "สำคัญ"},
    "vi": {"quickstart": "Bắt đầu nhanh", "install": "Cài đặt", "configure": "Cấu hình", "start": "Khởi động", "features": "Tính năng", "docs": "Tài liệu", "warning": "⚠️ Chỉ sử dụng trên hệ thống được ủy quyền.", "setup_guide": "Hướng dẫn cài đặt", "tech_docs": "Tài liệu kỹ thuật", "required": "Bắt buộc", "optional": "Tùy chọn", "overview": "Tổng quan", "usage": "Sử dụng", "config": "Cấu hình", "arch": "Kiến trúc", "note": "Lưu ý", "important": "Quan trọng"},
    "id": {"quickstart": "Mulai Cepat", "install": "Instal", "configure": "Konfigurasikan", "start": "Mulai", "features": "Fitur", "docs": "Dokumentasi", "warning": "⚠️ Gunakan hanya pada sistem yang Anda memiliki izin eksplisit.", "setup_guide": "Panduan Pengaturan", "tech_docs": "Dokumentasi Teknis", "required": "Wajib", "optional": "Opsional", "overview": "Ikhtisar", "usage": "Penggunaan", "config": "Konfigurasi", "arch": "Arsitektur", "note": "Catatan", "important": "Penting"},
    "ms": {"quickstart": "Mula Pantas", "install": "Pasang", "configure": "Konfigurasi", "start": "Mulakan", "features": "Ciri-ciri", "docs": "Dokumentasi", "warning": "⚠️ Gunakan hanya pada sistem yang mempunyai kebenaran eksplisit.", "setup_guide": "Panduan Persediaan", "tech_docs": "Dokumentasi Teknikal", "required": "Diperlukan", "optional": "Pilihan", "overview": "Gambaran Keseluruhan", "usage": "Penggunaan", "config": "Konfigurasi", "arch": "Seni Bina", "note": "Nota", "important": "Penting"},
    "nl": {"quickstart": "Snel starten", "install": "Installeren", "configure": "Configureren", "start": "Starten", "features": "Functies", "docs": "Documentatie", "warning": "⚠️ Gebruik alleen op systemen waarvoor u toestemming heeft.", "setup_guide": "Installatiegids", "tech_docs": "Technische Documentatie", "required": "Verplicht", "optional": "Optioneel", "overview": "Overzicht", "usage": "Gebruik", "config": "Configuratie", "arch": "Architectuur", "note": "Opmerking", "important": "Belangrijk"},
    "pl": {"quickstart": "Szybki start", "install": "Zainstaluj", "configure": "Skonfiguruj", "start": "Uruchom", "features": "Funkcje", "docs": "Dokumentacja", "warning": "⚠️ Używaj tylko w systemach z wyraźnym zezwoleniem.", "setup_guide": "Przewodnik konfiguracji", "tech_docs": "Dokumentacja techniczna", "required": "Wymagane", "optional": "Opcjonalne", "overview": "Przegląd", "usage": "Użycie", "config": "Konfiguracja", "arch": "Architektura", "note": "Uwaga", "important": "Ważne"},
    "sv": {"quickstart": "Snabbstart", "install": "Installera", "configure": "Konfigurera", "start": "Starta", "features": "Funktioner", "docs": "Dokumentation", "warning": "⚠️ Använd bara på system med uttrycklig behörighet.", "setup_guide": "Installationsguide", "tech_docs": "Teknisk dokumentation", "required": "Obligatorisk", "optional": "Valfri", "overview": "Översikt", "usage": "Användning", "config": "Konfiguration", "arch": "Arkitektur", "note": "Obs", "important": "Viktigt"},
    "no": {"quickstart": "Hurtigstart", "install": "Installer", "configure": "Konfigurer", "start": "Start", "features": "Funksjoner", "docs": "Dokumentasjon", "warning": "⚠️ Bruk kun på systemer du har eksplisitt tillatelse til å teste.", "setup_guide": "Oppsettsveiledning", "tech_docs": "Teknisk dokumentation", "required": "Påkrevd", "optional": "Valgfri", "overview": "Oversikt", "usage": "Bruk", "config": "Konfigurasjon", "arch": "Arkitektur", "note": "Merk", "important": "Viktig"},
    "da": {"quickstart": "Kom hurtigt i gang", "install": "Installer", "configure": "Konfigurer", "start": "Start", "features": "Funktioner", "docs": "Dokumentation", "warning": "⚠️ Brug kun på systemer du har eksplicit tilladelse til at teste.", "setup_guide": "Opsætningsvejledning", "tech_docs": "Teknisk dokumentation", "required": "Påkrævet", "optional": "Valgfrit", "overview": "Overblik", "usage": "Brug", "config": "Konfiguration", "arch": "Arkitektur", "note": "Bemærk", "important": "Vigtigt"},
    "fi": {"quickstart": "Pikakäynnistys", "install": "Asenna", "configure": "Määritä", "start": "Käynnistä", "features": "Ominaisuudet", "docs": "Dokumentaatio", "warning": "⚠️ Käytä vain järjestelmissä, joihin sinulla on nimenomainen lupa.", "setup_guide": "Asennusopas", "tech_docs": "Tekninen dokumentaatio", "required": "Pakollinen", "optional": "Valinnainen", "overview": "Yleiskatsaus", "usage": "Käyttö", "config": "Konfiguraatio", "arch": "Arkkitehtuuri", "note": "Huomio", "important": "Tärkeää"},
    "pt": {"quickstart": "Início Rápido", "install": "Instalar", "configure": "Configurar", "start": "Iniciar", "features": "Funcionalidades", "docs": "Documentação", "warning": "⚠️ Utilize apenas em sistemas com autorização explícita.", "setup_guide": "Guia de Configuração", "tech_docs": "Documentação Técnica", "required": "Obrigatório", "optional": "Opcional", "overview": "Visão Geral", "usage": "Utilização", "config": "Configuração", "arch": "Arquitetura", "note": "Nota", "important": "Importante"},
    "ro": {"quickstart": "Pornire rapidă", "install": "Instalare", "configure": "Configurare", "start": "Pornire", "features": "Funcționalități", "docs": "Documentație", "warning": "⚠️ Utilizați numai pe sisteme pentru care aveți autorizație explicită.", "setup_guide": "Ghid de configurare", "tech_docs": "Documentație tehnică", "required": "Obligatoriu", "optional": "Opțional", "overview": "Prezentare generală", "usage": "Utilizare", "config": "Configurare", "arch": "Arhitectură", "note": "Notă", "important": "Important"},
    "hu": {"quickstart": "Gyors kezdés", "install": "Telepítés", "configure": "Konfigurálás", "start": "Indítás", "features": "Funkciók", "docs": "Dokumentáció", "warning": "⚠️ Csak olyan rendszereken használja, amelyekre kifejezett engedélye van.", "setup_guide": "Beállítási útmutató", "tech_docs": "Műszaki dokumentáció", "required": "Kötelező", "optional": "Opcionális", "overview": "Áttekintés", "usage": "Használat", "config": "Konfiguráció", "arch": "Architektúra", "note": "Megjegyzés", "important": "Fontos"},
    "bg": {"quickstart": "Бърз старт", "install": "Инсталиране", "configure": "Конфигуриране", "start": "Стартиране", "features": "Функции", "docs": "Документация", "warning": "⚠️ Използвайте само в системи, за които имате изрично разрешение.", "setup_guide": "Ръководство за настройка", "tech_docs": "Техническа документация", "required": "Задължително", "optional": "По избор", "overview": "Преглед", "usage": "Използване", "config": "Конфигурация", "arch": "Архитектура", "note": "Забележка", "important": "Важно"},
    "sk": {"quickstart": "Rýchly štart", "install": "Inštalácia", "configure": "Konfigurácia", "start": "Spustenie", "features": "Funkcie", "docs": "Dokumentácia", "warning": "⚠️ Používajte iba v systémoch, na ktoré máte explicitné povolenie.", "setup_guide": "Sprievodca nastavením", "tech_docs": "Technická dokumentácia", "required": "Povinné", "optional": "Voliteľné", "overview": "Prehľad", "usage": "Použitie", "config": "Konfigurácia", "arch": "Architektúra", "note": "Poznámka", "important": "Dôležité"},
    "uk-UA": {"quickstart": "Швидкий старт", "install": "Встановити", "configure": "Налаштувати", "start": "Запустити", "features": "Можливості", "docs": "Документація", "warning": "⚠️ Використовуйте лише в системах, для яких маєте явний дозвіл.", "setup_guide": "Посібник з налаштування", "tech_docs": "Технічна документація", "required": "Обов'язково", "optional": "Необов'язково", "overview": "Огляд", "usage": "Використання", "config": "Конфігурація", "arch": "Архітектура", "note": "Примітка", "important": "Важливо"},
    "he": {"quickstart": "התחלה מהירה", "install": "התקנה", "configure": "קביעת תצורה", "start": "הפעלה", "features": "תכונות", "docs": "תיעוד", "warning": "⚠️ השתמש רק במערכות שיש לך הרשאה מפורשת לבדוק.", "setup_guide": "מדריך התקנה", "tech_docs": "תיעוד טכני", "required": "נדרש", "optional": "אופציונלי", "overview": "סקירה כללית", "usage": "שימוש", "config": "תצורה", "arch": "ארכיטקטורה", "note": "הערה", "important": "חשוב"},
    "phi": {"quickstart": "Mabilis na Simula", "install": "I-install", "configure": "I-configure", "start": "Simulan", "features": "Mga Tampok", "docs": "Dokumentasyon", "warning": "⚠️ Gamitin lamang sa mga sistemang mayroon kang malinaw na pahintulot.", "setup_guide": "Gabay sa Pag-setup", "tech_docs": "Teknikal na Dokumentasyon", "required": "Kinakailangan", "optional": "Opsyonal", "overview": "Pangkalahatang-ideya", "usage": "Paggamit", "config": "Pagsasaayos", "arch": "Arkitektura", "note": "Tandaan", "important": "Mahalaga"},
    "pt-BR": {"quickstart": "Início Rápido", "install": "Instalar", "configure": "Configurar", "start": "Iniciar", "features": "Funcionalidades", "docs": "Documentação", "warning": "⚠️ Use apenas em sistemas para os quais tem autorização explícita.", "setup_guide": "Guia de Setup", "tech_docs": "Documentação Técnica", "required": "Obrigatório", "optional": "Opcional", "overview": "Visão Geral", "usage": "Uso", "config": "Configuração", "arch": "Arquitetura", "note": "Nota", "important": "Importante"},
}

SECTION_MAP = {
    "Quick Start": "quickstart",
    "Overview": "overview",
    "Features": "features",
    "Configuration": "config",
    "Usage": "usage",
    "Required": "required",
    "Required Variables": "required",
    "Optional": "optional",
    "Architecture": "arch",
    "Installation": "install",
    "Getting Started": "quickstart",
    "Setup": "setup_guide",
    "Technical Documentation": "tech_docs",
    "Note": "note",
    "Important": "important",
    "Documentation": "docs",
    "Project at a Glance": "overview",
    "New Here? Start Here": "quickstart",
    "Skill Contributions": "docs",
    "Before You Start": "important",
    "Guided Install": "quickstart",
    "Current Security Model": "arch",
}


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def resolve_files(files: list[str] | None) -> list[str]:
    if not files:
        return list(FILES)
    unknown = sorted(set(files) - set(FILES))
    if unknown:
        raise ValueError(f"Unsupported i18n source files: {', '.join(unknown)}")
    return list(dict.fromkeys(files))


def translate(text: str, code: str) -> str:
    return TRANSLATIONS.get(code, TRANSLATIONS.get("es", {})).get(text, text)


def clean_heading_text(value: str) -> str:
    cleaned = re.sub(r"[^\w\s/-]", "", value, flags=re.UNICODE)
    return re.sub(r"\s+", " ", cleaned).strip()


def get_lang_bar(target_code: str, relative_fpath: str) -> str:
    parts = len([part for part in Path(relative_fpath).parent.parts if part])
    up = "../" * (parts + 1)
    en_link = f"{up}../../{relative_fpath}"
    links = [f"🇺🇸 [English]({en_link})"]
    for code, flag, _native in LANGS:
        links.append(f"{flag} [{code}]({up}{code}/{relative_fpath})")
    return "🌐 **Languages:** " + " · ".join(links)


def render_snapshot_note(identity: dict, status: dict, relative_fpath: str) -> list[str]:
    return [
        f"> Translation snapshot for **{identity['display_name']}** `{status['latest_release']}`.",
        f"> Source: `{relative_fpath}`. Regenerate after English docs are rendered from generated manifests.",
        "> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.",
    ]


def generate_translated_doc(
    repo_root: Path,
    lang_code: str,
    native_name: str,
    relative_fpath: str,
    identity: dict,
    status: dict,
) -> str:
    source_path = repo_root / relative_fpath
    content = source_path.read_text(encoding="utf-8")
    lines = content.splitlines()
    first_heading = next((line for line in lines if line.startswith("# ")), f"# {source_path.name}")
    title_en = first_heading[2:].strip()

    out: list[str] = [
        f"# {title_en} ({native_name})",
        "",
        get_lang_bar(lang_code, relative_fpath),
        "",
        *render_snapshot_note(identity, status, relative_fpath),
        "",
        "---",
        "",
        (
            f"<!-- generated:i18n-doc: project={identity['repo_slug']}; source={relative_fpath}; "
            f"version={status['package_version']}; release={status['latest_release']}; "
            f"english_snapshot={status['generated_at']} -->"
        ),
    ]

    in_code_block = False
    skipped_first_heading = False
    for line in lines:
        if not skipped_first_heading and line.startswith("# "):
            skipped_first_heading = True
            continue
        if line.startswith("🌐 **Languages:**"):
            continue
        if line.startswith("<!-- generated:project-meta:start -->") or line.startswith("<!-- generated:project-meta:end -->"):
            out.append(line)
            continue
        if line.startswith("```"):
            in_code_block = not in_code_block
            out.append(line)
            continue
        if in_code_block:
            out.append(line)
            continue

        translated = line
        if line.startswith("#"):
            hashes = line.split(" ")[0]
            heading_text = line[len(hashes):].strip()
            clean_text = clean_heading_text(heading_text)
            translation_key = SECTION_MAP.get(clean_text)
            if translation_key:
                translated = f"{hashes} {translate(translation_key, lang_code)}"
        out.append(translated)

    return "\n".join(out).rstrip() + "\n"


def render_i18n_index(identity: dict, status: dict) -> str:
    lines = [
        f"# Multilingual Documentation — {identity['display_name']}",
        "",
        f"> Translation snapshots are generated from the rendered English docs for **{identity['display_name']}** `{status['latest_release']}`.",
        "> Refresh English docs first, then rerun `npm run i18n:render` whenever branding, counts, versions, or generated status blocks change.",
        "",
        (
            f"<!-- generated:i18n-index: project={identity['repo_slug']}; "
            f"version={status['package_version']}; release={status['latest_release']}; "
            f"english_snapshot={status['generated_at']} -->"
        ),
        "",
    ]
    for code, flag, native_name in LANGS:
        lines.append(f"- {flag} **{native_name}** (`{code}`): [Docs Root](./{code}/README.md)")
    lines.append("")
    return "\n".join(lines)


def refresh_english_sources(repo_root: Path) -> None:
    write_project_status(repo_root)
    render_project_docs(repo_root)
    render_registry_file(repo_root / "REPOSITORY-SOURCES.md", check=False)


def render_i18n_docs(
    repo_root: Path,
    *,
    files: list[str] | None = None,
    check: bool = False,
    refresh_english: bool = False,
) -> list[str]:
    if refresh_english and not check:
        refresh_english_sources(repo_root)

    identity = load_json(repo_root / "data" / "project_identity.json")
    status = load_json(repo_root / "data" / "project_status.json")
    selected_files = resolve_files(files)
    changed_files: list[str] = []
    i18n_root = repo_root / "docs" / "i18n"

    i18n_root.mkdir(parents=True, exist_ok=True)
    for code, _flag, native_name in LANGS:
        language_root = i18n_root / code
        language_root.mkdir(parents=True, exist_ok=True)
        for relative_fpath in selected_files:
            rendered = generate_translated_doc(
                repo_root,
                code,
                native_name,
                relative_fpath,
                identity,
                status,
            )
            target_path = language_root / relative_fpath
            target_path.parent.mkdir(parents=True, exist_ok=True)
            current = target_path.read_text(encoding="utf-8") if target_path.exists() else ""
            if current != rendered:
                changed_files.append(str(target_path.relative_to(repo_root)))
                if not check:
                    target_path.write_text(rendered, encoding="utf-8")

    index_rendered = render_i18n_index(identity, status)
    index_path = i18n_root / "README.md"
    index_current = index_path.read_text(encoding="utf-8") if index_path.exists() else ""
    if index_current != index_rendered:
        changed_files.append(str(index_path.relative_to(repo_root)))
        if not check:
            index_path.write_text(index_rendered, encoding="utf-8")

    if check and changed_files:
        raise ValueError("Generated i18n docs are stale: " + ", ".join(changed_files))
    return changed_files


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate docs/i18n/* from rendered English docs.")
    parser.add_argument("--check", action="store_true", help="Fail if generated i18n docs are stale.")
    parser.add_argument(
        "--refresh-english",
        action="store_true",
        help="Refresh English generated docs before rendering i18n output.",
    )
    parser.add_argument(
        "--files",
        nargs="*",
        default=None,
        help="Optional relative English docs to regenerate. Defaults to the full tracked set.",
    )
    args = parser.parse_args()

    changed = render_i18n_docs(
        REPO_ROOT,
        files=args.files,
        check=args.check,
        refresh_english=args.refresh_english or not args.check,
    )
    print(json.dumps({"checked": args.check, "changed_files": changed}, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
