# Deployment

## Hosting-Ziel

Die Portfolio-Website wird über GitHub Pages veröffentlicht.

Erwartete URL nach Merge auf `main`:

```text
https://tobikt.github.io/portfolio-website/
```

## Build

Die Anwendung liegt im Unterordner `app/`. Für GitHub Pages wird mit Repository-Base-Href gebaut:

```bash
cd app
npm run build:deploy
```

Der Befehl erzeugt:

- Production Build unter `app/dist/app/browser/`
- `404.html` als SPA-Fallback-Kopie von `index.html`
- Base-Href `/portfolio-website/`

## GitHub Actions

Workflow:

```text
.github/workflows/deploy.yml
```

Trigger:

- Push auf `main`
- manueller `workflow_dispatch`

Pipeline:

1. Node.js 24 einrichten
2. `npm ci`
3. `npm run check`
4. `npm run build:deploy`
5. Pages Artifact hochladen
6. GitHub Pages deployen

## Voraussetzungen in GitHub

GitHub Pages ist für das öffentliche Repository aktiviert und nutzt `GitHub Actions` als Build-Quelle.

Konfiguration:

- Build Type: `workflow`
- HTTPS: enforced
- URL: `https://tobikt.github.io/portfolio-website/`
