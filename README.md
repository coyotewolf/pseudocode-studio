# Pseudocode Studio

A free, browser-based pseudocode editor using [pseudocode.js](https://github.com/SaswatPadhi/pseudocode.js), KaTeX, and html-to-image.

**Use it online:** https://pseudocode-export-studio-2026.pinkmars64.chatgpt.site

## Features

- Live rendering for LaTeX-style `algorithmic` pseudocode
- Automatic cleanup for common `algpseudocode` syntax differences
- Export to PNG (2× / 3× / 4×) and SVG
- Copy embeddable HTML
- English / Traditional Chinese interface
- Light / dark mode
- Browser-side processing; no pseudocode is uploaded to a server

## Run locally

Open `dist/index.html` in a browser with internet access, or serve `dist/` with any static HTTP server. For example:

```bash
python3 -m http.server 8080 --directory dist
```

Then open `http://localhost:8080`.

## Deploy

This is a static site: host the contents of `dist/` on GitHub Pages or any static hosting provider. Dependencies currently load through pinned CDN URLs.

## Tests

```bash
node test-normalize.cjs
```

## Acknowledgements

Algorithm rendering is powered by [pseudocode.js](https://github.com/SaswatPadhi/pseudocode.js) (MIT license). This repository's own license has not yet been selected.
