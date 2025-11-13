# Especificación de Compilación - Iglesia Maranata

Este documento define de forma determinista cómo compilar los archivos Markdown (`.md`) en el archivo `index.html`. Cualquier implementación (humana o LLM) debe seguir estas reglas exactamente para producir el mismo resultado.

## Objetivo

Transformar los archivos de contenido Markdown en una página web estática de un solo archivo (`index.html`) con CSS externo (`assets/css/style.css`).

## Principios de Compilación

1. **Determinismo**: Mismo input → Mismo output siempre
2. **Orden fijo**: Las secciones siempre aparecen en el mismo orden
3. **Clases CSS consistentes**: Cada tipo de elemento usa clases predefinidas
4. **Sin interpretación**: El contenido MD se transcribe directamente sin modificaciones

## ⚠️ PASO OBLIGATORIO PREVIO A LA COMPILACIÓN

**ANTES de compilar cualquier archivo .md a index.html, SIEMPRE se debe:**

1. **Revisar ortografía y gramática**: Leer todo el contenido del archivo .md y detectar:
   - Errores ortográficos (tildes faltantes, palabras mal escritas)
   - Errores de puntuación (comas, puntos, espacios)
   - Errores de redacción (concordancia, tiempos verbales)
   - Uso incorrecto de mayúsculas/minúsculas
   - Errores comunes en español:
     * "Lider" → "Líder"
     * "biblico" → "bíblico"
     * "jesus" o "Jesùs" → "Jesús"
     * "y Ismael" → "e Ismael" (cuando la siguiente palabra empieza con "i")
     * Tildes en palabras agudas, graves y esdrújulas
     * Espacios antes de signos de puntuación

2. **Sugerir correcciones**: Listar todos los errores encontrados con:
   - Ubicación exacta (línea o sección)
   - Error actual
   - Corrección sugerida
   - Explicación breve (si es necesario)

3. **Aplicar correcciones**: Una vez aprobadas las sugerencias:
   - Corregir los errores en el archivo .md fuente
   - Guardar el archivo .md corregido
   - **SOLO ENTONCES** proceder con la compilación a index.html

4. **Documentar cambios**: Si se realizaron correcciones ortográficas:
   - Incluirlas en el mensaje del commit
   - Ejemplo: "Corregidas 5 faltas ortográficas en Ministerios.md antes de compilar"

### Reglas específicas de corrección:

- **Nunca** corregir nombres propios de personas sin confirmar
- **Nunca** cambiar el sentido o significado del texto
- **Siempre** respetar el tono y estilo del contenido original
- **Siempre** mantener las referencias bíblicas exactamente como están
- Si hay duda sobre una corrección, consultar antes de aplicar

### Excepción:

La única excepción a esta regla es cuando se está creando contenido nuevo desde cero. En ese caso, escribir directamente con la ortografía y gramática correctas.

## Estructura General del HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iglesia Evangelica Maranata | Puerto Maldonado</title>
  <link rel="icon" type="image/png" href="./assets/img/logo_maranata.png">
  <link rel="stylesheet" href="./assets/css/style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Navegación (estructura fija) -->
  <!-- Secciones (compiladas desde MD) -->
  <!-- Footer (estructura fija) -->
  <script src="./assets/js/script.js"></script>
</body>
</html>
```

## Orden de Secciones

Las secciones DEBEN aparecer en este orden exacto:

1. `<nav>` - Navegación (estructura fija)
2. `<section id="home">` - Compilado desde `Home.md`
3. `<section id="historia">` - Compilado desde `Historia.md`
4. `<section id="ministerios">` - Compilado desde `Ministerios.md`
5. `<section id="misiones">` - Compilado desde `Misiones.md`
6. `<section id="kilo-amor">` - Compilado desde `Kilo de amor.md`
7. `<section id="contactos">` - Compilado desde `Contactos.md`
8. `<footer>` - Footer (estructura fija)

## Estructura de Navegación (Fija)

```html
<nav class="navbar">
  <div class="nav-container">
    <div class="nav-logo">
      <img src="./assets/img/logo_maranata.png" alt="Logo Iglesia Maranata" class="nav-logo-img">
      <div class="nav-logo-text">
        <h2>Iglesia Maranata</h2>
        <p class="nav-motto">Cristo Viene Pronto</p>
      </div>
    </div>
    <button class="nav-toggle" aria-label="Abrir menú">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="nav-menu">
      <li><a href="#home" class="nav-link active">Inicio</a></li>
      <li><a href="#historia" class="nav-link">Historia</a></li>
      <li><a href="#ministerios" class="nav-link">Ministerios</a></li>
      <li><a href="#misiones" class="nav-link">Misiones</a></li>
      <li><a href="#kilo-amor" class="nav-link">Kilo de Amor</a></li>
      <li><a href="#contactos" class="nav-link">Contactos</a></li>
    </ul>
  </div>
</nav>
```

## Estructura de Footer (Fija)

```html
<footer class="footer">
  <div class="container">
    <p>&copy; 2025 Iglesia Evangélica Maranata - Puerto Maldonado</p>
    <p class="footer-motto">Cristo Viene Pronto</p>
  </div>
</footer>
```

## Mapeo de Archivos MD a Secciones HTML

### 1. Home.md → section#home

**Estructura HTML:**
```html
<section id="home" class="section section-home">
  <div class="container">
    <!-- Hero -->
    <!-- Versículo diario -->
    <!-- Misión y Visión -->
    <!-- Pastor -->
    <!-- Horarios -->
    <!-- CTAs -->
  </div>
</section>
```

**Reglas de compilación:**

1. **Título principal** (línea 1: `# Iglesia Evangélica de Puerto Maldonado`):
   ```html
   <div class="hero">
     <h1 class="hero-title">Iglesia Evangélica Maranata</h1>
     <h2 class="hero-subtitle">Puerto Maldonado</h2>
   ```

2. **Párrafo en cursiva con negrita** (línea 3-4 que empieza con `_**Jesús te ama...**_`):
   ```html
   <p class="hero-tagline"><strong>[contenido sin ** ni _]</strong></p>
   ```

3. **Párrafo en cursiva largo** (línea 4 que empieza con `*Él vino a traer...`):
   ```html
   <p class="hero-text">[contenido sin *]</p>
   </div>
   ```

4. **Versículo diario** (línea 6 que empieza con `_(Ejemplo de Versiculo...`):
   ```html
   <div class="daily-verse">
     <p class="verse-text">"[texto del versículo]"</p>
     <p class="verse-reference">[referencia bíblica]</p>
   </div>
   ```

5. **Visión** (sección `## Visión`):
   ```html
   <div class="mission-vision">
     <div class="card">
       <h3>Visión</h3>
       <p>[contenido sin _]</p>
     </div>
   ```

6. **Misión** (sección `## Misión`):
   ```html
     <div class="card">
       <h3>Misión</h3>
       <p>[contenido sin _]</p>
     </div>
   </div>
   ```

7. **Pastor y esposa** (sección `## Pastor y esposa`):
   ```html
   <div class="pastor-info">
     <h3>Pastor y Esposa</h3>
     <p class="pastor-names">[nombres]</p>
     <div class="pastor-photo">
       <img src="./assets/img/pastor_y_pastora.jpg" alt="Pastor Segundo Pedro Sanchez Grifa y Esposa Karina Yucra Salas">
     </div>
   </div>
   ```

   **Nota**: Si la imagen no está disponible, usar `.pastor-photo-placeholder` en su lugar.

8. **Horarios** (sección `## Horarios`):
   ```html
   <div class="schedule">
     <h3>Horarios de Cultos</h3>
     <ul class="schedule-list">
       <li><strong>[Día]</strong> [horario]: [descripción]</li>
       <!-- Una <li> por cada línea de lista -->
     </ul>
   </div>
   ```

9. **CTAs** (secciones `### ¿Necesitas ayuda?` y `### "La mies es mucha..."`):
   ```html
   <div class="cta-section">
     <div class="card">
       <h3>[título]</h3>
       <p>[párrafos]</p>
       <a href="#contactos" class="btn">Contáctanos</a>
     </div>
     <div class="card">
       <h3>[título]</h3>
       <p class="verse-reference">[referencia si aplica]</p>
       <p>[contenido]</p>
       <a href="#contactos" class="btn">Escríbenos</a>
     </div>
   </div>
   ```

### 2. Historia.md → section#historia

**Estructura HTML:**
```html
<section id="historia" class="section section-historia">
  <div class="container">
    <h2 class="section-title">Reseña Histórica de la Iglesia</h2>
    <div class="history-content">
      <!-- Items de historia -->
    </div>
  </div>
</section>
```

**Reglas de compilación:**

1. **Fundación** (línea 2-3):
   ```html
   <div class="history-item">
     <h3>Fundación</h3>
     <p>[contenido]</p>
   </div>
   ```

2. **Acontecimientos importantes** (línea 4-5):
   ```html
   <div class="history-item">
     <h3>Acontecimientos Importantes</h3>
     <p>[contenido]</p>
   </div>
   ```

3. **Historial de Pastores** (línea 6 en adelante):
   ```html
   <div class="history-item">
     <h3>Historial de Pastores</h3>
     <ul class="pastor-list">
       <!-- Extraer cada línea como <li> -->
       <li>[Nombre] ([Primera pastor] o [años])</li>
     </ul>
   </div>
   ```

   Pastores específicos a incluir:
   - Pedro Condori (Primer pastor)
   - David Perry
   - Juan Ore (20xx - 2019)
   - Segundo Pedro Sanchez Grifa (2020 - 2025 actualmente)

### 3. Ministerios.md → section#ministerios

**Estructura HTML:**
```html
<section id="ministerios" class="section section-ministerios">
  <div class="container">
    <h2 class="section-title">Ministerios</h2>
    <div class="ministerios-intro">
      <!-- Párrafos introductorios -->
    </div>
    <div class="ministerios-grid">
      <!-- Cards de ministerios -->
    </div>
  </div>
</section>
```

**Reglas de compilación:**

1. **Introducción** (líneas 1-7):
   ```html
   <div class="ministerios-intro">
     <p>[párrafo 1]</p>
     <p>[párrafo 2]</p>
     <p class="ministerios-question"><strong>¿Dónde puedo ayudar?</strong></p>
   </div>
   ```

2. **Cada ministerio** (desde `## Escuela Dominical` hasta `## Ministerios de Misiones`):
   ```html
   <div class="ministerio-card">
     <h3>[Nombre del Ministerio]</h3>
     <p class="ministerio-leader">Líder: [nombre del líder]</p>
     <p class="ministerio-verse">"[versículo]" — [referencia]</p>
     <p class="ministerio-description">[descripción]</p>
   </div>
   ```

   **Caso especial - Escuela Dominical con Ambientes de trabajo:**
   ```html
   <div class="ministerio-card">
     <h3>Escuela Dominical</h3>
     <p class="ministerio-leader">Líder: [nombre del líder]</p>
     <p class="ministerio-verse">"[versículo]" — [referencia]</p>
     <p class="ministerio-description">[descripción]</p>
     <button class="ambientes-toggle" aria-expanded="false">
       <strong>Ambientes de trabajo</strong>
       <span class="toggle-icon">▼</span>
     </button>
     <ul class="ministerio-ambientes">
       <li>[Ambiente] - Líder: [nombre]</li>
       <!-- Una <li> por cada ambiente -->
     </ul>
   </div>
   ```

   Ministerios en orden:
   1. Escuela Dominical (con desplegable de Ambientes de trabajo)
   2. Ministerio de Alabanza
   3. Ministerio de Ujieres
   4. Ministerio de Jóvenes
   5. Ministerio de Diáconos
   6. Ministerio de Evangelismo
   7. Ministerio de Misiones

### 4. Misiones.md → section#misiones

**Estructura HTML:**
```html
<section id="misiones" class="section section-misiones">
  <div class="container">
    <h2 class="section-title">Misiones</h2>
    <h3 class="subsection-title">Comunidades Indígenas</h3>
    <!-- Items de misiones -->
  </div>
</section>
```

**Reglas de compilación:**

1. **Cada comunidad** (Puerto Nuevo y Loero):
   ```html
   <div class="mision-item">
     <h4>[Nombre de la comunidad]</h4>

     <div class="mision-info">
       <h5>Ubicación:</h5>
       <p>[descripción ubicación]</p>
     </div>

     <div class="mision-info">
       <h5>Objetivo:</h5>
       <p>[descripción objetivo]</p>
     </div>

     <div class="mision-info">
       <h5>Actividades Realizadas:</h5>
       <ul>
         <li><strong>[nombre actividad]:</strong> [descripción]</li>
         <!-- Una <li> por cada actividad -->
       </ul>
     </div>
   </div>
   ```

### 5. Kilo de amor.md → section#kilo-amor

**Estructura HTML:**
```html
<section id="kilo-amor" class="section section-kilo-amor">
  <div class="container">
    <h2 class="section-title">Kilo de Amor</h2>
    <div class="kilo-content">
      <!-- Contenido -->
    </div>
  </div>
</section>
```

**Reglas de compilación:**

1. **Párrafos introductorios**:
   ```html
   <p class="kilo-intro">[primer párrafo]</p>
   <p>[segundo párrafo]</p>
   ```

2. **Versículo** (línea con `_**"Y no nos cansemos...`):
   ```html
   <p class="kilo-verse"><strong>"[versículo]" – [referencia]</strong></p>
   ```

3. **Información de donaciones**:
   ```html
   <div class="kilo-donation">
     <p>[contenido sobre ubicación]</p>
   </div>
   ```

4. **Placeholder de fotos**:
   ```html
   <div class="kilo-photos-placeholder">
     <p>[Fotos de las familias beneficiadas]</p>
   </div>
   ```

### 6. Contactos.md → section#contactos

**Estructura HTML:**
```html
<section id="contactos" class="section section-contactos">
  <div class="container">
    <h2 class="section-title">Contáctanos</h2>
    <div class="contact-grid">
      <!-- Items de contacto -->
    </div>
    <div class="credits">
      <!-- Créditos -->
    </div>
  </div>
</section>
```

**Reglas de compilación:**

1. **Correo electrónico**:
   ```html
   <div class="contact-item">
     <h3>Correo Electrónico</h3>
     <p><a href="mailto:[email]">[email]</a></p>
   </div>
   ```

2. **WhatsApp**:
   ```html
   <div class="contact-item">
     <h3>WhatsApp</h3>
     <p><a href="https://wa.me/51[número sin espacios]" target="_blank">[número con espacios]</a></p>
   </div>
   ```

3. **Redes Sociales**:
   ```html
   <div class="contact-item">
     <h3>Redes Sociales</h3>
     <ul class="social-links">
       <li><a href="#" target="_blank">Facebook</a></li>
       <li><a href="#" target="_blank">Instagram</a></li>
     </ul>
   </div>
   ```

4. **Ubicación**:
   ```html
   <div class="contact-item">
     <h3>Ubicación</h3>
     <p>[dirección con <br> entre líneas]<br>[ciudad]</p>
   </div>
   ```

5. **Créditos**:
   ```html
   <div class="credits">
     <p>[texto de créditos]</p>
   </div>
   ```

## Procesamiento de Markdown

### Reglas de conversión:

1. **Cursiva** (`_texto_` o `*texto*`): Remover marcadores, usar texto plano en HTML
2. **Negrita** (`**texto**`): Usar `<strong>texto</strong>`
3. **Cursiva + Negrita** (`_**texto**_`): Usar `<strong>texto</strong>`
4. **Títulos H1** (`#`): Usar `<h1 class="[clase apropiada]">`
5. **Títulos H2** (`##`): Usar `<h2>` o `<h3>` según contexto
6. **Títulos H3** (`###`): Usar `<h3>` o `<h4>` según contexto
7. **Listas** (`-` o bullets): Usar `<ul><li>`
8. **Enlaces** (`[texto](url)`): Usar `<a href="url">texto</a>`
9. **Emojis** (📖): Mantener tal cual en el HTML

### Reglas de espaciado:

- Cada `<section>` tiene clase `section` y una clase específica `section-[nombre]`
- Cada sección tiene un `<div class="container">` dentro
- Los párrafos consecutivos del MD se convierten en `<p>` separados
- Las listas del MD se convierten en `<ul><li>` completas

## Notas importantes

1. **Placeholders**: Mantener texto como `[Foto del pastor y esposa]` tal cual
2. **Correcciones ortográficas**: Las correcciones se hacen ANTES de compilar (ver sección "PASO OBLIGATORIO PREVIO A LA COMPILACIÓN"). Durante la compilación, el texto ya corregido se transcribe tal cual.
3. **Direcciones incompletas**: Mantener como `Jr Puno N° 374` (usar número real del archivo)
4. **Sin interpretación**: Si el MD dice "20xx", dejarlo así en el HTML

## Verificación de Compilación

Para verificar que la compilación es correcta:

### Antes de compilar:
1. ✅ **Revisión ortográfica y gramatical completada** (errores corregidos en archivos .md)
2. ✅ Archivos .md guardados con las correcciones aplicadas

### Durante/Después de compilar:
3. ✅ Todas las secciones están en el orden correcto
4. ✅ Todas las clases CSS están aplicadas según esta especificación
5. ✅ El contenido de los MD está completo y sin modificaciones adicionales
6. ✅ La estructura HTML coincide exactamente con los ejemplos
7. ✅ Los placeholders de imágenes están presentes
8. ✅ No se introdujeron nuevos errores ortográficos durante la compilación
