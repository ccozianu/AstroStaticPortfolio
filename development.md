# Development Guide

This guide explains how to add new content to the portfolio and run the development environment.

## Project Structure

- **`Bio.md`**: The source for the homepage.
- **`_includes/base.njk`**: The main HTML template.
- **`style.css`**: Global styles.
- **`.eleventy.js`**: Eleventy configuration.

## Adding New Pages

To add a new page, simply create a new Markdown file in the root directory.

**Example: `Projects.md`**

```markdown
---
layout: base.njk
title: My Projects
heading: Projects
tagline: Things I've built
avatarUrl: https://via.placeholder.com/150/2aa198/fdf6e3?text=PRJ
socialLinks: []
---

## Project A
Description of project A...

## Project B
Description of project B...
```

Eleventy will automatically generate a page at `/Projects/index.html`.

## Running the Development Server

We use Docker (via WSL2) to run the development server. This ensures a consistent environment without needing Node.js installed locally.

### Command

Run the following command in your terminal (WSL or PowerShell):

```bash
wsl docker run --rm -p 32080:8080 -v "/mnt/c/Costin/costin3/myProjects/MCSP/StaticPortfolio:/app" -w /app node:lts npm start
```

- **`-p 32080:8080`**: Maps port 8080 inside the container to port 32080 on your host.
- **`-v ...`**: Mounts your project folder into the container.
- **`npm start`**: Runs Eleventy in serve mode.

### Accessing the Site

Open your browser to: **[http://localhost:32080](http://localhost:32080)**

The server supports **hot-reloading**. Changes to `.md` or `.njk` files will automatically refresh the browser.
