# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ CRITICAL RULE

**NEVER edit `index.html` directly.** It is a compiled output file. Always edit the source `.md` files (Home.md, Historia.md, etc.) and then manually recompile to index.html by following [BUILD_SPEC.md](BUILD_SPEC.md).

## Quick Start

**To update content on a specific page:**
1. Edit the corresponding `.md` file (e.g., `Home.md` for the home page, `Ministerios.md` for ministries)
2. **Review and correct** spelling/grammar errors in the .md file (mandatory step)
3. Manually recompile to `index.html` by reading and following [BUILD_SPEC.md](BUILD_SPEC.md) exactly
4. Open `index.html` in a browser to verify changes
5. Commit both the `.md` file and the updated `index.html` together

**To change styles:**
1. Edit `/assets/css/style.css` following [CSS_CLASSES.md](CSS_CLASSES.md)
2. Refresh browser to see changes

**To view the site:**
- Simply open `index.html` in any modern browser (no server needed)

## Project Overview

This is a single-page static website for Iglesia Evangelica Maranata in Puerto Maldonado, Peru. The entire site is contained in one index.html file with internal navigation between sections using anchor links. Built with pure HTML, CSS, and JavaScript (no backend, no database, no build process). The project is collaborative, with team members (Ismael, Noelia, Melina) working on different sections.

## Key Documentation Files

**CRITICAL**: Before making any changes to HTML or CSS, read these specification files:

1. **[BUILD_SPEC.md](BUILD_SPEC.md)** - Complete specification for compiling MD files into index.html
   - Defines exact HTML structure for each section
   - Maps MD content to HTML elements with specific classes
   - Ensures deterministic compilation (same input → same output)

2. **[CSS_CLASSES.md](CSS_CLASSES.md)** - Complete CSS class reference
   - Defines every CSS class used in the project
   - Specifies exact styles for each class
   - Includes color palette, typography, and responsive breakpoints

3. **[AGENTES.md](AGENTES.md)** - Design system basics
   - Color palette (primary: #1E3A8A, accent: #D97706)
   - Typography (Poppins for headlines, Open Sans for body)
   - Technical stack information

## Technology Stack

- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks, no build tools)
- **Fonts**: Poppins (headlines), Open Sans (body text) - loaded from Google Fonts
- **Design**: Mobile-first responsive design
- **Structure**: Single-page architecture with anchor-based navigation
- **JavaScript**: Vanilla JS for mobile menu toggle and active section highlighting (`/assets/js/script.js`)

## Design System

Color Palette (from AGENTES.md):
- Primary: Deep blue (#1E3A8A)
- Secondary: White
- Accent: Soft gold (#D97706)

Typography:
- Headlines: Poppins
- Body: Open Sans

## Site Structure

The website is a single-page application with anchor-based navigation. Content source files are `.md` files that get compiled into `index.html` sections:

1. **Home** (Home.md → #home) - Main landing page with welcome, mission/vision, pastor info, and service schedule
2. **Historia** (Historia.md → #historia) - Church history and pastors timeline
3. **Ministerios** (Ministerios.md → #ministerios) - Seven church ministries with leaders
4. **Misiones** (Misiones.md → #misiones) - Mission work in Puerto Nuevo and Loero communities
5. **Kilo de Amor** (Kilo de amor.md → #kilo-amor) - Food donation program
6. **Contactos** (Contactos.md → #contactos) - Contact information and location
7. **Eventos/Actividades** (eventos.md - planned, not yet compiled)

### Navigation
- Fixed navbar with logo and menu links
- Mobile-responsive hamburger menu
- Active section highlighting on scroll
- Smooth scroll between sections (CSS `scroll-behavior: smooth`)

## Source Files vs. Compiled Output

- **Source**: `.md` files at root level (Home.md, Historia.md, etc.) - these are the single source of truth for content
- **Compiled**: `index.html` - generated from .md files following BUILD_SPEC.md
- **Workflow**: Edit .md files → Recompile to index.html → Test in browser → Commit both
- **Important**: When updating content, ALWAYS edit the .md files first, never edit index.html directly

## Build Process (Manual Deterministic Compilation)

This project uses a **manual, deterministic compilation** approach where `.md` files are compiled into `index.html`. There are **no automated build tools** (no npm scripts, webpack, etc.). Compilation is done manually by Claude Code or a developer following the specification documents.

1. **Source Files**: Content in `.md` files (Home.md, Historia.md, etc.)
2. **Compilation Specs**:
   - **[BUILD_SPEC.md](BUILD_SPEC.md)**: Complete specification of how to compile MD → HTML
   - **[CSS_CLASSES.md](CSS_CLASSES.md)**: Complete specification of CSS classes and styles
3. **Output**: Single `index.html` file with external CSS

### How to Compile

To manually compile the MD files into index.html:
1. **FIRST: Review grammar and spelling** - Read the .md file and correct any orthographic, grammatical, or punctuation errors BEFORE compiling (this is mandatory, see BUILD_SPEC.md)
2. Read **[BUILD_SPEC.md](BUILD_SPEC.md)** for exact HTML structure and mapping rules
3. Read **[CSS_CLASSES.md](CSS_CLASSES.md)** for exact CSS class definitions
4. Follow the specifications exactly - same input must produce same output
5. Verify using the checklists in both specification files

**CRITICAL**: Before every compilation, you MUST review and correct spelling/grammar errors in the source .md files. See the "PASO OBLIGATORIO PREVIO A LA COMPILACIÓN" section in BUILD_SPEC.md for details.

**IMPORTANT**: The compilation is deterministic. Any LLM or human following BUILD_SPEC.md must produce identical HTML output for the same MD inputs.

## Development Workflow

### Content Changes
1. Edit the relevant `.md` file (Home.md, Historia.md, etc.)
2. **Review and correct spelling/grammar errors** in the edited .md file (mandatory)
3. Recompile to `index.html` following [BUILD_SPEC.md](BUILD_SPEC.md)
4. Test locally by opening index.html in a browser

### Style Changes
1. Edit `/assets/css/style.css` following [CSS_CLASSES.md](CSS_CLASSES.md)
2. Refresh browser to see changes

### Assets Structure
- `/assets/css/` - Stylesheets (style.css)
- `/assets/img/` - Images (logo_maranata.png, pastor_y_pastora.jpg, etc.)
- `/assets/js/` - JavaScript (script.js handles mobile nav and active section highlighting)

### Testing Locally
Simply open `index.html` in any modern browser. No build process or server required since this is a pure static site.

### Git Workflow
- Commit changes to `.md` files and compiled `index.html` together
- Main branch: `main`
- Include descriptive commit messages referencing the section changed

## Future Features

From README.md:
- Daily devotionals (devocional diarios)
- Auto-updating daily Bible verse on home page
- Message inbox functionality

## Team Structure

Content ownership by section (from README.md):
- Ismael: Home, Kilo de Amor, Contactos
- Noelia: Historia, Misiones
- Melina: Ministerios, Eventos/Actividades

## Important Notes

- **Language**: All content is in Spanish
- **Church Motto**: "CRISTO VIENE PRONTO" (Christ is Coming Soon)
- **No Build Tools**: Pure static HTML/CSS/JS - no npm, webpack, or other tooling
- **Browser Compatibility**: Modern browsers only (uses CSS Grid, custom properties, smooth scroll)
- **Mobile-First**: Responsive breakpoints at 768px (tablet) and 1024px (desktop)
- **Images**: Logo at `/assets/img/logo_maranata.png`, pastor photo at `/assets/img/pastor_y_pastora.jpg`
