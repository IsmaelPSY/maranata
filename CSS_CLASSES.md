# Especificación de Clases CSS - Iglesia Maranata

Este documento define todas las clases CSS utilizadas en el proyecto, su propósito y cómo deben ser estilizadas. Esta especificación garantiza que cualquier implementación produzca estilos consistentes y deterministas.

## Paleta de Colores (desde AGENTES.md)

```css
--color-primary: #1E3A8A;      /* Azul profundo */
--color-secondary: #FFFFFF;     /* Blanco */
--color-accent: #D97706;        /* Dorado suave */
--color-text: #1F2937;          /* Gris oscuro para texto */
--color-text-light: #6B7280;    /* Gris claro para texto secundario */
--color-bg-light: #F9FAFB;      /* Fondo claro para secciones alternas */
```

## Tipografía

- **Headlines (títulos)**: Font family `'Poppins', sans-serif`
- **Body (texto)**: Font family `'Open Sans', sans-serif`

## Sistema de Clases

### Layout General

#### `.container`
- **Propósito**: Contenedor principal que centra y limita el ancho del contenido
- **Estilos**:
  - `max-width: 1200px`
  - `margin: 0 auto`
  - `padding: 0 20px` (móvil), `0 40px` (tablet+)
  - `width: 100%`

#### `.section`
- **Propósito**: Clase base para todas las secciones
- **Estilos**:
  - `padding: 80px 0` (móvil), `120px 0` (desktop)
  - `min-height: auto`

#### `.section-[nombre]`
- **Propósito**: Clase específica para cada sección (ej: `section-home`, `section-historia`)
- **Estilos**: Backgrounds alternos para distinguir secciones
  - `.section-home`: `background: white`
  - `.section-historia`: `background: var(--color-bg-light)`
  - `.section-ministerios`: `background: white`
  - `.section-misiones`: `background: var(--color-bg-light)`
  - `.section-kilo-amor`: `background: white`
  - `.section-contactos`: `background: var(--color-bg-light)`

### Navegación

#### `.navbar`
- **Propósito**: Barra de navegación principal
- **Estilos**:
  - `position: fixed`
  - `top: 0`
  - `width: 100%`
  - `background: var(--color-primary)`
  - `z-index: 1000`
  - `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`

#### `.nav-container`
- **Propósito**: Contenedor de elementos de navegación
- **Estilos**:
  - `max-width: 1200px`
  - `margin: 0 auto`
  - `padding: 0 20px`
  - `display: flex`
  - `justify-content: space-between`
  - `align-items: center`
  - `height: 70px` (móvil), `80px` (desktop)

#### `.nav-logo`
- **Propósito**: Logo y nombre de la iglesia
- **Estilos**:
  - `color: white`
  - `h2`: `font-family: 'Poppins'`, `font-size: 1.2rem`, `margin: 0`

#### `.nav-motto`
- **Propósito**: Lema "Cristo Viene Pronto"
- **Estilos**:
  - `font-size: 0.75rem`
  - `color: var(--color-accent)`
  - `margin: 0`
  - `font-weight: 600`

#### `.nav-toggle`
- **Propósito**: Botón hamburguesa para menú móvil
- **Estilos**:
  - `display: block` (móvil), `display: none` (desktop 768px+)
  - `background: transparent`
  - `border: none`
  - `cursor: pointer`
  - `span`: 3 líneas horizontales blancas, `width: 25px`, `height: 3px`

#### `.nav-menu`
- **Propósito**: Lista de enlaces de navegación
- **Estilos**:
  - Móvil: `position: absolute`, `top: 70px`, `left: 0`, `width: 100%`, `background: var(--color-primary)`, `display: none` (mostrar con clase `.active`)
  - Desktop: `display: flex`, `position: static`, `flex-direction: row`
  - `list-style: none`
  - `margin: 0`
  - `padding: 0`

#### `.nav-link`
- **Propósito**: Enlaces individuales en el menú
- **Estilos**:
  - `color: white`
  - `text-decoration: none`
  - `padding: 15px 20px` (móvil), `10px 15px` (desktop)
  - `display: block`
  - `font-family: 'Open Sans'`
  - `transition: all 0.3s`
  - **Hover**: `background: rgba(255,255,255,0.1)`
  - **Active**: `color: var(--color-accent)`

### Títulos de Sección

#### `.section-title`
- **Propósito**: Título principal de cada sección
- **Estilos**:
  - `font-family: 'Poppins'`
  - `font-size: 2rem` (móvil), `2.5rem` (desktop)
  - `color: var(--color-primary)`
  - `text-align: center`
  - `margin-bottom: 40px`
  - `font-weight: 700`

#### `.subsection-title`
- **Propósito**: Subtítulos dentro de secciones
- **Estilos**:
  - `font-family: 'Poppins'`
  - `font-size: 1.5rem`
  - `color: var(--color-primary)`
  - `text-align: center`
  - `margin: 20px 0`
  - `font-weight: 600`

### Sección Home

#### `.hero`
- **Propósito**: Bloque hero de bienvenida
- **Estilos**:
  - `text-align: center`
  - `margin-bottom: 60px`
  - `padding-top: 40px` (compensar navbar fija)

#### `.hero-title`
- **Propósito**: Título principal "Iglesia Evangélica Maranata"
- **Estilos**:
  - `font-family: 'Poppins'`
  - `font-size: 2.5rem` (móvil), `3.5rem` (desktop)
  - `color: var(--color-primary)`
  - `margin: 0 0 10px 0`
  - `font-weight: 700`

#### `.hero-subtitle`
- **Propósito**: Subtítulo "Puerto Maldonado"
- **Estilos**:
  - `font-family: 'Poppins'`
  - `font-size: 1.5rem` (móvil), `2rem` (desktop)
  - `color: var(--color-accent)`
  - `margin: 0 0 30px 0`
  - `font-weight: 600`

#### `.hero-tagline`
- **Propósito**: Frase destacada "Jesús te ama..."
- **Estilos**:
  - `font-size: 1.2rem` (móvil), `1.5rem` (desktop)
  - `color: var(--color-primary)`
  - `margin-bottom: 20px`
  - `font-weight: 600`

#### `.hero-text`
- **Propósito**: Texto descriptivo del hero
- **Estilos**:
  - `font-size: 1rem`
  - `line-height: 1.7`
  - `color: var(--color-text)`
  - `max-width: 800px`
  - `margin: 0 auto`

#### `.daily-verse`
- **Propósito**: Contenedor del versículo del día
- **Estilos**:
  - `background: linear-gradient(135deg, var(--color-primary), #2563EB)`
  - `color: white`
  - `padding: 30px 20px`
  - `border-radius: 10px`
  - `text-align: center`
  - `margin: 40px 0`
  - `box-shadow: 0 4px 12px rgba(0,0,0,0.1)`

#### `.verse-text`
- **Propósito**: Texto del versículo bíblico
- **Estilos**:
  - `font-size: 1.1rem` (móvil), `1.3rem` (desktop)
  - `font-style: italic`
  - `line-height: 1.6`
  - `margin-bottom: 15px`

#### `.verse-reference`
- **Propósito**: Referencia bíblica (ej: "Juan 3:16")
- **Estilos**:
  - `font-size: 1rem`
  - `color: var(--color-accent)`
  - `font-weight: 600`
  - `margin: 0`

#### `.mission-vision`
- **Propósito**: Contenedor de cards de Misión y Visión
- **Estilos**:
  - `display: grid`
  - `grid-template-columns: 1fr` (móvil), `1fr 1fr` (tablet 768px+)
  - `gap: 30px`
  - `margin: 40px 0`

#### `.card`
- **Propósito**: Card genérico para contenido destacado
- **Estilos**:
  - `background: white`
  - `padding: 30px`
  - `border-radius: 10px`
  - `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`
  - `border-left: 4px solid var(--color-accent)`
  - `h3`: `color: var(--color-primary)`, `font-family: 'Poppins'`, `margin-top: 0`

#### `.pastor-info`
- **Propósito**: Información del pastor
- **Estilos**:
  - `text-align: center`
  - `margin: 40px 0`
  - `h3`: `color: var(--color-primary)`, `font-family: 'Poppins'`

#### `.pastor-names`
- **Propósito**: Nombres del pastor y esposa
- **Estilos**:
  - `font-size: 1.2rem`
  - `font-weight: 600`
  - `color: var(--color-text)`
  - `margin: 15px 0`

#### `.pastor-photo-placeholder`
- **Propósito**: Placeholder para foto del pastor (cuando la imagen no está disponible)
- **Estilos**:
  - `background: var(--color-bg-light)`
  - `padding: 60px 20px`
  - `border: 2px dashed var(--color-text-light)`
  - `border-radius: 10px`
  - `color: var(--color-text-light)`
  - `text-align: center`
  - `margin-top: 20px`

#### `.pastor-photo`
- **Propósito**: Contenedor de la foto del pastor y esposa
- **Estilos**:
  - `margin-top: 20px`
  - `text-align: center`
  - `img`: `max-width: 100%`, `height: auto`, `border-radius: 10px`, `box-shadow: 0 4px 12px rgba(0,0,0,0.15)`, `max-width: 500px`

#### `.schedule`
- **Propósito**: Horarios de cultos
- **Estilos**:
  - `margin: 40px 0`
  - `h3`: `text-align: center`, `color: var(--color-primary)`

#### `.schedule-list`
- **Propósito**: Lista de horarios
- **Estilos**:
  - `list-style: none`
  - `padding: 0`
  - `max-width: 600px`
  - `margin: 20px auto`
  - `li`: `background: white`, `padding: 15px 20px`, `margin: 10px 0`, `border-radius: 8px`, `box-shadow: 0 2px 4px rgba(0,0,0,0.05)`, `border-left: 3px solid var(--color-accent)`

#### `.cta-section`
- **Propósito**: Sección de llamadas a la acción
- **Estilos**:
  - `display: grid`
  - `grid-template-columns: 1fr` (móvil), `1fr 1fr` (tablet 768px+)
  - `gap: 30px`
  - `margin: 60px 0`

#### `.btn`
- **Propósito**: Botón de acción
- **Estilos**:
  - `display: inline-block`
  - `background: var(--color-accent)`
  - `color: white`
  - `padding: 12px 30px`
  - `border-radius: 6px`
  - `text-decoration: none`
  - `font-weight: 600`
  - `transition: all 0.3s`
  - `margin-top: 15px`
  - **Hover**: `background: #B45309`, `transform: translateY(-2px)`, `box-shadow: 0 4px 8px rgba(0,0,0,0.2)`

### Sección Historia

#### `.history-content`
- **Propósito**: Contenedor de items de historia
- **Estilos**:
  - `max-width: 800px`
  - `margin: 0 auto`

#### `.history-item`
- **Propósito**: Item individual de historia
- **Estilos**:
  - `background: white`
  - `padding: 30px`
  - `margin-bottom: 30px`
  - `border-radius: 10px`
  - `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`
  - `h3`: `color: var(--color-primary)`, `font-family: 'Poppins'`, `margin-top: 0`

#### `.pastor-list`
- **Propósito**: Lista de pastores históricos
- **Estilos**:
  - `list-style: none`
  - `padding-left: 0`
  - `li`: `padding: 10px 0`, `border-bottom: 1px solid #E5E7EB`, `last-child`: `border-bottom: none`

### Sección Ministerios

#### `.ministerios-intro`
- **Propósito**: Introducción de la sección ministerios
- **Estilos**:
  - `max-width: 900px`
  - `margin: 0 auto 50px auto`
  - `text-align: center`
  - `line-height: 1.7`

#### `.ministerios-question`
- **Propósito**: Pregunta destacada "¿Dónde puedo ayudar?"
- **Estilos**:
  - `font-size: 1.3rem`
  - `color: var(--color-accent)`
  - `margin-top: 30px`

#### `.ministerios-grid`
- **Propósito**: Grid de cards de ministerios
- **Estilos**:
  - `display: grid`
  - `grid-template-columns: 1fr` (móvil), `repeat(2, 1fr)` (tablet 768px+), `repeat(3, 1fr)` (desktop 1024px+)
  - `gap: 30px`
  - `margin-top: 40px`

#### `.ministerio-card`
- **Propósito**: Card individual de ministerio
- **Estilos**:
  - `background: white`
  - `padding: 25px`
  - `border-radius: 10px`
  - `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`
  - `border-top: 4px solid var(--color-accent)`
  - `transition: transform 0.3s`
  - **Hover**: `transform: translateY(-5px)`, `box-shadow: 0 4px 16px rgba(0,0,0,0.15)`
  - `h3`: `color: var(--color-primary)`, `font-family: 'Poppins'`, `margin-top: 0`, `font-size: 1.2rem`

#### `.ministerio-leader`
- **Propósito**: Nombre del líder del ministerio
- **Estilos**:
  - `font-size: 0.9rem`
  - `color: var(--color-text-light)`
  - `margin: 10px 0`
  - `font-style: italic`

#### `.ministerio-verse`
- **Propósito**: Versículo bíblico del ministerio
- **Estilos**:
  - `font-size: 0.95rem`
  - `color: var(--color-accent)`
  - `font-style: italic`
  - `margin: 15px 0`
  - `padding: 10px`
  - `background: rgba(217, 119, 6, 0.05)`
  - `border-left: 3px solid var(--color-accent)`
  - `border-radius: 4px`

#### `.ministerio-description`
- **Propósito**: Descripción del ministerio
- **Estilos**:
  - `font-size: 0.95rem`
  - `line-height: 1.6`
  - `color: var(--color-text)`

### Sección Misiones

#### `.mision-item`
- **Propósito**: Item de una misión/comunidad
- **Estilos**:
  - `background: white`
  - `padding: 30px`
  - `margin-bottom: 40px`
  - `border-radius: 10px`
  - `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`
  - `h4`: `color: var(--color-primary)`, `font-family: 'Poppins'`, `font-size: 1.5rem`, `margin-top: 0`

#### `.mision-info`
- **Propósito**: Bloque de información de misión
- **Estilos**:
  - `margin: 20px 0`
  - `h5`: `color: var(--color-accent)`, `font-family: 'Poppins'`, `font-size: 1.1rem`, `margin-bottom: 10px`
  - `ul`: `line-height: 1.8`
  - `li`: `margin-bottom: 10px`

### Sección Kilo de Amor

#### `.kilo-content`
- **Propósito**: Contenedor de contenido de Kilo de Amor
- **Estilos**:
  - `max-width: 800px`
  - `margin: 0 auto`
  - `line-height: 1.7`

#### `.kilo-intro`
- **Propósito**: Párrafo introductorio destacado
- **Estilos**:
  - `font-size: 1.1rem`
  - `font-weight: 600`
  - `color: var(--color-primary)`
  - `margin-bottom: 20px`

#### `.kilo-verse`
- **Propósito**: Versículo de Kilo de Amor
- **Estilos**:
  - `text-align: center`
  - `font-size: 1.2rem`
  - `color: var(--color-accent)`
  - `margin: 30px 0`
  - `padding: 20px`
  - `background: rgba(217, 119, 6, 0.05)`
  - `border-radius: 8px`

#### `.kilo-donation`
- **Propósito**: Información de donación
- **Estilos**:
  - `background: var(--color-primary)`
  - `color: white`
  - `padding: 25px`
  - `border-radius: 10px`
  - `margin: 30px 0`
  - `text-align: center`

#### `.kilo-photos-placeholder`
- **Propósito**: Placeholder para fotos
- **Estilos**:
  - `background: var(--color-bg-light)`
  - `padding: 80px 20px`
  - `border: 2px dashed var(--color-text-light)`
  - `border-radius: 10px`
  - `color: var(--color-text-light)`
  - `text-align: center`
  - `margin-top: 40px`

### Sección Contactos

#### `.contact-grid`
- **Propósito**: Grid de información de contacto
- **Estilos**:
  - `display: grid`
  - `grid-template-columns: 1fr` (móvil), `repeat(2, 1fr)` (tablet 768px+)
  - `gap: 30px`
  - `margin: 40px 0`

#### `.contact-item`
- **Propósito**: Item individual de contacto
- **Estilos**:
  - `background: white`
  - `padding: 25px`
  - `border-radius: 10px`
  - `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`
  - `text-align: center`
  - `h3`: `color: var(--color-primary)`, `font-family: 'Poppins'`, `margin-top: 0`
  - `a`: `color: var(--color-accent)`, `text-decoration: none`, `font-weight: 600`, **Hover**: `text-decoration: underline`

#### `.social-links`
- **Propósito**: Lista de redes sociales
- **Estilos**:
  - `list-style: none`
  - `padding: 0`
  - `margin: 15px 0`
  - `li`: `display: inline-block`, `margin: 0 10px`

#### `.credits`
- **Propósito**: Créditos de colaboradores
- **Estilos**:
  - `text-align: center`
  - `margin-top: 60px`
  - `padding-top: 40px`
  - `border-top: 1px solid #E5E7EB`
  - `color: var(--color-text-light)`
  - `font-style: italic`

### Footer

#### `.footer`
- **Propósito**: Pie de página
- **Estilos**:
  - `background: var(--color-primary)`
  - `color: white`
  - `padding: 30px 0`
  - `text-align: center`

#### `.footer-motto`
- **Propósito**: Lema en el footer
- **Estilos**:
  - `color: var(--color-accent)`
  - `font-weight: 600`
  - `margin-top: 10px`

## Responsive Design

### Mobile First
- Base: 0-767px
- Tablet: 768px-1023px
- Desktop: 1024px+

### Media Queries

```css
/* Tablet */
@media (min-width: 768px) {
  /* Ajustes de grid, font-size, padding según clases arriba */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Ajustes adicionales */
}
```

## Smooth Scroll

```css
html {
  scroll-behavior: smooth;
}

/* Offset para navbar fija */
section {
  scroll-margin-top: 80px;
}
```

## Verificación

Para verificar que los estilos son correctos:
1. ✅ Paleta de colores coincide exactamente
2. ✅ Tipografías Poppins (títulos) y Open Sans (texto)
3. ✅ Todas las clases definidas están implementadas
4. ✅ Responsive funciona en 3 breakpoints
5. ✅ Smooth scroll está activo
