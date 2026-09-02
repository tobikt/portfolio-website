# Anwendungsarchitektur

## Grundsätze

- Angular mit Standalone Components und TypeScript
- Feature-orientierte Struktur
- Tailwind CSS 4 über PostCSS
- Statische Inhalte direkt in Komponenten oder einer Konfiguration
- Änderbare Portfolio-Daten zunächst als lokale JSON-Dateien

## Verzeichnisstruktur

```text
app/src/app/
├── core/                 # App-weite Singleton-Services und Infrastruktur
│   └── services/
├── features/             # Fachliche Seitenbereiche
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── projects/
│   ├── experience/
│   └── contact/
├── shared/               # Wiederverwendbare UI-Komponenten und Hilfsmittel
│   └── components/
└── models/               # Typisierte Datenmodelle
```

Lokale JSON-Daten werden unter `public/data/` abgelegt, damit sie über Angulars HTTP-Client geladen werden können.

## Abhängigkeitsregeln

- Features dürfen `shared`, `models` und öffentliche Core-Services verwenden.
- `shared` darf nicht von einzelnen Features abhängen.
- `core` enthält keine Feature-spezifische Darstellung.
- Datenzugriffe werden über Services gekapselt; Komponenten laden keine JSON-Dateien direkt.
