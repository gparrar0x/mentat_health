# 🔥 Phoenix Dashboard - Mentat Health

Dashboard personalizado de salud y fitness con tema neomórfico oscuro, diseñado específicamente para el seguimiento de objetivos de salud, entrenamiento y hábitos.

## 🚀 Demo en Vivo

**🌐 [Ver Dashboard](https://gpublica.github.io/mentat_health)**

## ✨ Características

### 📊 **Métricas Principales**
- **Proteínas diarias** - Seguimiento con objetivos personalizados
- **Hidratación** - Control de consumo de agua
- **Calorías** - Monitoreo de ingesta calórica
- **Adherencia** - Porcentaje de cumplimiento de objetivos

### 📈 **Visualizaciones**
- **Gráfico de Macros** - Distribución de macronutrientes (Recharts)
- **Progreso Semanal** - Tendencias de adherencia y métricas
- **Calendarios Visuales** - Para entrenamiento y hábitos

### 🏋️ **Trackers de Entrenamiento**
- **Fuerza** - Seguimiento de entrenamientos de fuerza
- **Cardio** - Actividades cardiovasculares
- **Yoga** - Sesiones de yoga y flexibilidad

### 🎯 **Control de Hábitos**
- Sistema de rachas consecutivas
- Indicadores visuales de éxito/fallo
- Seguimiento de múltiples hábitos simultáneamente

## 🎨 Diseño

- **Tema Neomórfico Oscuro** - Sombras suaves y profundidad visual
- **Responsive Design** - Adaptable a móviles, tablets y desktop
- **Animaciones Fluidas** - Transiciones con Framer Motion
- **Iconografía Moderna** - Lucide React icons

## 🛠️ Tecnologías

- **Framework:** Next.js 14 con App Router
- **Styling:** Tailwind CSS + CSS personalizado
- **Animaciones:** Framer Motion
- **Gráficos:** Recharts
- **Iconos:** Lucide React
- **Deployment:** GitHub Pages

## 🚀 Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/gpublica/mentat_health.git
cd mentat_health

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir http://localhost:3000
```

## 📦 Build y Deploy

```bash
# Build para producción
npm run build

# Deploy a GitHub Pages (automático via GitHub Actions)
git push origin main
```

## 📁 Estructura del Proyecto

```
mentat_health/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globales y tema Phoenix
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Dashboard principal
│   ├── components/
│   │   ├── dashboard/           # Componentes del dashboard
│   │   │   ├── MetricCard.tsx   # Tarjetas de métricas
│   │   │   ├── MacrosChart.tsx  # Gráfico de macros
│   │   │   ├── ProgressChart.tsx # Gráfico de progreso
│   │   │   ├── TrainingTracker.tsx # Tracker de entrenamiento
│   │   │   └── HabitsTracker.tsx # Tracker de hábitos
│   │   └── ui/                  # Componentes base
│   └── lib/
│       └── utils.ts             # Utilidades
├── docs/                        # Documentación y archivos legacy
├── .github/workflows/           # GitHub Actions
└── out/                         # Build estático (generado)
```

## 🎯 Personalización

El dashboard está diseñado para ser fácilmente personalizable:

1. **Métricas:** Modifica `mockMetrics` en `page.tsx`
2. **Colores:** Actualiza el tema Phoenix en `tailwind.config.ts`
3. **Componentes:** Agrega nuevos trackers en `src/components/dashboard/`

## 📊 Integración de Datos

Actualmente usa datos mock. Para integrar datos reales:

1. **Google Sheets API** - Para datos de nutrición
2. **Webhooks** - Para actualizaciones en tiempo real
3. **n8n** - Para automatización de workflows

## 🔧 Configuración GitHub Pages

El proyecto está configurado para despliegue automático:

1. **GitHub Actions** - Build y deploy automático
2. **Exportación estática** - Compatible con GitHub Pages
3. **Base path** - Configurado para subdirectorio

## 📝 Licencia

Este proyecto es de uso personal y educativo.

---

**🔥 Desarrollado con pasión para el seguimiento de objetivos de salud y bienestar**