## mentat_health

Dashboard de salud personal que visualiza hábitos diarios e históricos a partir de una hoja de Google Sheets publicada como CSV. Es 100% estático (HTML + JS) y no requiere backend. Utiliza Chart.js para visualizaciones.

### Características
- **KPIs del día**: calorías, proteínas, agua, sueño y calidad de sueño.
- **Tendencias**: serie temporal de macros (proteínas, carbohidratos, grasas).
- **Sueño e hidratación**: barras comparativas por día.
- **Entrenamiento**: fuerza y cardio.
- **Histórico tabular**: tabla completa con todos los campos.
- **Filtros**: selector de rango (7/14/30/90 días o todo) y selector de fecha.

### Arquitectura
- **Estático**: plantilla `person.html` + catálogo `people.json`. `index.html` queda como variante legacy de una sola persona.
- **Datos**: se cargan desde un Google Sheet publicado como CSV (`fetch`).
- **Visualizaciones**: `Chart.js@4.4.1`.
- **Zona horaria**: `TZ = America/Argentina/Salta` por defecto (configurable por persona).

### Estructura de datos esperada (cabeceras)
El dashboard trabaja con un conjunto de cabeceras "canónicas". Si la hoja de una persona usa nombres distintos, puedes mapearlos con `headerMap` en `people.json`.

```
Fecha, Horas Dormidas, Hora Acostarse, Hora Levantarse, Latencia (min), Calidad Sueño, Ritual Nocturno, Despertares, Litros Agua, Otros Líquidos (ml), Kcal Totales, Proteínas (g), Carbos (g), Grasas (g), Comidas Princ., Snacks, Variedad Veg., Calentamiento, Entrenamiento Fuerza, Tipo Cardio, Duración Cardio, Estiramiento, DOMS, Recuperación Activa, Alcohol, Marihuana, Tabaco, Música, Estudio, Higiene Bucal, Meditación, Lectura, Vida Social, Bienestar Gral., NOTAS
```

### Enfoque escalable: múltiples personas con `people.json` + `person.html`
1) Publica la pestaña de datos de cada persona como CSV: Archivo → Compartir → Publicar en la web → Formato CSV → Publicar.
2) Edita `people.json` y agrega una entrada por persona con: `name`, `csv`, `profile`, `tz` y opcional `headerMap`.
3) Abre `person.html?id=<id>` para ver el dashboard de esa persona.

Para este repo ya están configuradas dos personas (`gonza`, `gusti`).

Ejemplo de `people.json` (incluye `headerMap` para personalizar cabeceras por persona):
```json
{
  "gonza": {
    "name": "Gonza",
    "csv": "https://docs.google.com/spreadsheets/d/1lQMvXJY9SzduSbdU3kg4nQhf3WfHNyVh-bGlj7d6jZM/export?format=csv&gid=1052829394",
    "profile": { "pesoKg": 80, "alturaM": 1.88, "edad": 23, "dieta": "Omnivora" },
    "tz": "America/Argentina/Salta",
    "headerMap": {
      "Litros Agua": "Agua (L)",
      "Tipo Cardio": "Tipo de Cardio",
      "Duración Cardio": "Duración de Cardio",
      "Marihuana": "Porro",
      "Bienestar Gral.": "Sentimiento General"
    }
  },
  "gusti": {
    "name": "Gusti",
    "csv": "https://docs.google.com/spreadsheets/d/REEMPLAZAR/export?format=csv&gid=REEMPLAZAR",
    "profile": { "pesoKg": 75, "alturaM": 1.78, "edad": 28, "dieta": "Omnivora" },
    "tz": "America/Buenos_Aires",
    "headerMap": {}
  }
}
```

Uso:
- `person.html?id=gonza`
- `person.html?id=gusti`

Flujo de gestión recomendado:
- **Agregar persona**: crear su Google Sheet → publicar CSV → agregar entrada en `people.json` → compartir URL `person.html?id=<id>`.
- **Actualizar**: editar URL de CSV o perfil en `people.json`.
- **Eliminar**: quitar la entrada del `people.json`.

### Notas de privacidad
Publicar el Google Sheet como CSV lo hace accesible públicamente si se conoce la URL. Si necesitas más control:
- Usa un proxy con Google Apps Script o un pequeño backend para firmar solicitudes.
- Mantén los identificadores no adivinables y limita la difusión de URLs si trabajas en entornos cerrados.

### Roadmap sugerido
- Selector de persona en una home (`index`) que liste el catálogo (`people.json`).
- Mejora de filtros y ordenamiento en la tabla histórica.
- Exportación/impresión de reporte diario/semanal.
- Ajustes mobile-first y accesibilidad.

### Dependencias
- Chart.js 4.4.1 (CDN)

### Desarrollo local
- Sirve la carpeta con un servidor estático y navega a `person.html?id=<id>`.
- Alternativamente, `index.html` sigue disponible como variante de una sola persona (legacy), editando `DATA_URL` a mano.

### Publicación en GitHub Pages y protección por usuario
URLs directas (sin dominio propio):
- `https://<tu-usuario>.github.io/mentat_health/gonza.html`
- `https://<tu-usuario>.github.io/mentat_health/gusti.html`

GitHub Pages no ofrece autenticación nativa. Para proteger cada página con usuario/contraseña, usa Cloudflare Access con dominio propio.

Pasos (recomendado con Cloudflare Access):
1) **Dominio propio**: agrega tu dominio a Cloudflare (DNS gestionado por Cloudflare).
2) **CNAME**: crea `health.tudominio.com` apuntando a `<tu-usuario>.github.io` (proxy naranja activado).
3) **GitHub Pages**: en `Settings → Pages` del repo, agrega `health.tudominio.com` como Custom domain y fuerza HTTPS.
4) **Páginas dedicadas**: usa `gonza.html` y `gusti.html` (o crea archivos equivalentes) para tener rutas únicas.
5) **Cloudflare Zero Trust → Access → Applications → Add application (Self-hosted)**:
   - App 1: `Gonza Dashboard` con `Application domain` = `health.tudominio.com` y `Sub path` = `/gonza.html`.
   - App 2: `Gusti Dashboard` con `Application domain` = `health.tudominio.com` y `Sub path` = `/gusti.html`.
   - Políticas (Policies): asigna a cada app las identidades permitidas (emails, grupos, IdP) o emite One-time PIN por email.
   - Opcional: reduce la duración de sesión.

Alternativa básica (no segura, no recomendada):
- Añadir un "password gate" en front-end (JS) que compare una contraseña con un hash embebido. El contenido sigue siendo accesible por URL directa y no protege datos sensibles.
