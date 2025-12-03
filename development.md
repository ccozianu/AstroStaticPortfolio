# Development Guide

This guide explains how to add new content to the portfolio and run the development environment using Astro.

## Project Structure

- **`src/pages/index.md`**: The source for the homepage.
- **`src/layouts/BaseLayout.astro`**: The main Astro layout.
- **`src/styles/global.css`**: Global styles.
- **`astro.config.mjs`**: Astro configuration (auto-generated if needed).

## Adding New Pages

To add a new page, create a new Markdown or Astro file in `src/pages/`.

**Example: `src/pages/projects.md`**

```markdown
---
layout: ../layouts/BaseLayout.astro
title: My Projects
heading: Projects
tagline: Things I've built
avatarUrl: https://via.placeholder.com/150/2aa198/fdf6e3?text=PRJ
socialLinks: []
---

## Project A
Description of project A...
```

Astro will automatically generate a page at `/projects/`.

## Running the Development Server

We use Docker (via WSL2) to run the development environment.

### First Time Setup

You need to install the new dependencies (Astro):

```bash
docker run --rm -v "/mnt/c/Costin/costin3/myProjects/AstroStaticPortfolio:/app" -w /app node:lts npm install
```

### Start Server

Run the following command in your terminal (WSL or PowerShell):

```bash
docker run --rm -p 32080:4321 -v "/mnt/c/Costin/costin3/myProjects/AstroStaticPortfolio:/app" -w /app node:lts npm run dev
```

- **`-p 32080:4321`**: Maps port 4321 (Astro default) inside the container to port 32080 on your host.
- **`npm start`**: Runs `astro dev --host`.

### Accessing the Site

Open your browser to: **[http://localhost:32080](http://localhost:32080)**
