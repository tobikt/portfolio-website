# Portfolio Website

Persönliche Portfolio-Website auf Basis von Angular, TypeScript und Tailwind CSS.

## Projektstruktur

```text
.
├── app/                 # Angular-Anwendung
│   ├── public/data/     # Lokale JSON-Inhalte
│   └── src/app/         # Features, Services, Models, Shared UI
└── docs/                # Roadmap, Architektur und Design-Dokumentation
```

## Voraussetzungen

- Node.js 24.x
- npm 9.x oder kompatibel

## Lokale Entwicklung

```bash
cd app
npm install
npm start
```

Die Anwendung läuft standardmäßig unter `http://localhost:4200/`.

## Qualitätssicherung

Vor Commits ausführen:

```bash
cd app
npm run check
```

Der Check umfasst:

- Prettier Format-Check
- Angular/Vitest Tests im CI-Modus
- Produktions-Build

Weitere nützliche Befehle:

```bash
npm run format       # Formatierung anwenden
npm run test:ci      # Tests einmalig ausführen
npm run build        # Production Build erstellen
```

## Inhalte pflegen

Die dynamischen Portfolio-Inhalte liegen unter `app/public/data/`:

- `projects.json`: Projekte und Links
- `skills.json`: Skills und Kategorien
- `experience.json`: Berufliche Stationen und Achievements

Die Angular Services unter `app/src/app/core/services/` laden diese JSON-Dateien und stellen sie den Feature-Komponenten bereit.

## Theme

Die Seite unterstützt Dark und Light Mode. Die Auswahl wird im Browser unter `localStorage` Key `portfolio-theme` gespeichert.

## Deployment

GitHub Pages Deployment ist vorbereitet über:

```text
.github/workflows/deploy.yml
```

Lokaler Deployment-Build:

```bash
cd app
npm run build:deploy
```

Details stehen in `docs/deployment.md`.

## Dokumentation

- `docs/roadmap.md`: Phasen, Epics und Issues
- `docs/architecture.md`: Architektur und Strukturregeln
- `docs/design.md`: Design- und Styling-Anforderungen
- `docs/deployment.md`: Hosting- und CI/CD-Konzept
