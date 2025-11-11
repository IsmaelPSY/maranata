# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks)
- **Fonts**: Poppins (headlines), Open Sans (body text)
- **Design**: Mobile-first responsive design
- **Structure**: Modular with `/assets` directory for images and styles

## Design System

Color Palette (from AGENTES.md):
- Primary: Deep blue (#1E3A8A)
- Secondary: White
- Accent: Soft gold (#D97706)

Typography:
- Headlines: Poppins
- Body: Open Sans

## Site Structure

The website is a single-page application with the following sections (accessible via anchor navigation #home, #historia, #ministerios, etc.):

1. **Home** (Home.md) - Main landing page
   - Welcome message
   - Daily verse (needs to update automatically - future feature)
   - Mission and Vision
   - Service schedule
   - Current pastor information
   - Message inbox

2. **Historia** (Historia.md) - Church history
   - Foundation by Swiss missionaries Wesley and Margaria (July 14, 1967)
   - Timeline of pastors: Pedro Condori (first), David Perry, Juan Ore (until 2019), Segundo Pedro Sanchez Grifa (2020-present)

3. **Ministerios** (Ministerios.md) - Church ministries
   - Escuela Dominical (Sunday School) - Led by Hna. Karina
   - Alabanza (Worship) - Led by Hno. Joel
   - Ujieres (Ushers) - Led by Hna. Clara
   - Jovenes (Youth) - Led by Hna. Doris
   - Diaconos (Deacons) - Led by Hno. Gerald & Hna. Gins Paola
   - Evangelismo (Evangelism) - Leader TBD
   - Misiones (Missions) - Leader TBD

4. **Eventos/Actividades** (planned, not yet created)
   - Event types/workshops/training
   - Upcoming and past events

5. **Misiones** (Misiones.md) - Mission work
   - Puerto Nuevo community (Rio Piedras area)
   - Loero community (near Botafogo beach)

6. **Kilo de Amor** (Kilo de amor.md) - Food donation program
   - Non-perishable food collection for families in need
   - Donation drop-off at church

7. **Contactos** (Contactos.md) - Contact information
   - Email: segundopedrosanchez763@gmail.com
   - WhatsApp: 913861855
   - Address: Jr Puno N°374 con Av. Dos de Mayo N°400
   - Social media (Facebook, Instagram)

## Content Files

Content source files are stored in Markdown files (.md) at the root level for reference. The actual content has been integrated into index.html as individual sections. The .md files serve as content documentation and can be used for future updates.

## Build Process (Deterministic Compilation)

This project uses a **deterministic compilation** approach where `.md` files are compiled into `index.html`:

1. **Source Files**: Content in `.md` files (Home.md, Historia.md, etc.)
2. **Compilation Specs**:
   - **[BUILD_SPEC.md](BUILD_SPEC.md)**: Complete specification of how to compile MD → HTML
   - **[CSS_CLASSES.md](CSS_CLASSES.md)**: Complete specification of CSS classes and styles
3. **Output**: Single `index.html` file with external CSS

### How to Compile

To compile the MD files into index.html:
1. Read **[BUILD_SPEC.md](BUILD_SPEC.md)** for exact HTML structure and mapping rules
2. Read **[CSS_CLASSES.md](CSS_CLASSES.md)** for exact CSS class definitions
3. Follow the specifications exactly - same input must produce same output
4. Verify using the checklists in both specification files

**IMPORTANT**: The compilation is deterministic. Any LLM or human following BUILD_SPEC.md must produce identical HTML output for the same MD inputs.

## Development Workflow

- **Content changes**: Edit `.md` files, then recompile to `index.html`
- **Style changes**: Edit `/assets/css/style.css` following [CSS_CLASSES.md](CSS_CLASSES.md)
- **Images**: Add to `/assets/img/` directory
- **Preview**: Open index.html in a browser
- **Navigation**: Uses smooth scroll to anchor links (#section-id)

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

- Single-page architecture: All sections are in index.html with anchor-based navigation
- Navigation menu is fixed/sticky and highlights the current section
- Smooth scrolling between sections for better UX
- Images need to be added to `/assets/img/` directory
- Mobile-first responsive design approach
- All content is in Spanish
- The church motto is "CRISTO VIENE PRONTO" (Christ is Coming Soon)
- No separate HTML pages - everything in one file for simplicity
