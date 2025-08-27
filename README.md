# Health Analysis Census 📊

## Descripción del Proyecto 🏥

Este proyecto es una aplicación web para el análisis de datos de salud que permite:
- 👥 Registrar pacientes con sus condiciones médicas
- 📈 Generar reportes estadísticos sobre las condiciones de los pacientes
- 🔍 Buscar información detallada sobre condiciones médicas específicas
- 📞 Contactar al equipo del proyecto para consultas

## Estructura del Proyecto 📁

```
health-analysis-project/
│
├── index.html              # Página principal con formulario de pacientes y búsqueda
├── health_contact.html     # Página de contacto
├── health_analysis.css     # Estilos CSS para todas las páginas
├── health_analysis.js      # Lógica JavaScript para funcionalidades
├── health_analysis.json    # Datos de condiciones médicas
└── imgs/                   # Directorio de imágenes (debe ser creado)
    ├── thyroid.jpg         # Imagen para condición de tiroides
    ├── diabeties.jpg       # Imagen para condición de diabetes
    └── blood_pressure.jpg  # Imagen para condición de presión arterial
```

## Funcionalidades ✨

### 1. Gestión de Pacientes 👨‍⚕️
- 📝 Formulario para agregar pacientes con: nombre, género, edad y condición médica
- 💾 Almacenamiento de datos de pacientes en el navegador
- 📊 Generación de reportes estadísticos con:
  - 🔢 Número total de pacientes
  - 📋 Desglose por condiciones médicas
  - 👥👩 Análisis por género y condición

### 2. Búsqueda de Condiciones Médicas 🔎
- ⚡ Búsqueda en tiempo real de información sobre condiciones médicas
- 👀 Visualización de: síntomas, métodos de prevención y tratamientos
- 🖼️ Incluye imágenes representativas para cada condición

### 3. Sistema de Contacto 📞
- 📧 Formulario de contacto para consultas
- ✅ Confirmación de envío mediante alerta

## Instalación y Uso 🚀

1. 📥 Clona o descarga todos los archivos del proyecto
2. 📂 Asegúrate de tener la carpeta `imgs` con las imágenes correspondientes:
   - 🦋 thyroid.jpg
   - 🩸 diabeties.jpg
   - ❤️ blood_pressure.jpg
3. 🌐 Abre `index.html` en tu navegador para comenzar a usar la aplicación

## Tecnologías Utilizadas 💻

- HTML5
- CSS3 (con Flexbox para layout)
- JavaScript (ES6)
- JSON para almacenamiento de datos

## Personalización 🛠️

### Agregar nuevas condiciones médicas ➕
Para agregar nuevas condiciones médicas al sistema de búsqueda:
1. ✏️ Edita el archivo `health_analysis.json`
2. ➕ Añade un nuevo objeto en el array "conditions" con la estructura:
```json
{
  "name": "Nombre de la condición",
  "imagesrc": "./imgs/nueva_imagen.jpg",
  "symptoms": ["síntoma 1", "síntoma 2", ...],
  "prevention": ["prevención 1", "prevención 2", ...],
  "treatment": "Descripción del tratamiento"
}
```
3. 📋 Añade la opción en el menú desplegable de `index.html`

### Modificar estilos 🎨
Los estilos se centralizan en `health_analysis.css`. Los colores, fuentes y disposición pueden modificarse fácilmente en este archivo.

## Limitaciones Actuales ⚠️

- 💾 Los datos de pacientes se almacenan solo durante la sesión actual (se pierden al recargar la página)
- 🩺 Solo están disponibles tres condiciones médicas predefinidas
- ❌ No hay validación avanzada de formularios

## Mejoras Futuras 🔮

- 💾 Implementar almacenamiento persistente con localStorage o una base de datos
- ➕ Añadir más condiciones médicas al sistema
- 📊 Implementar gráficos para visualizar los reportes estadísticos
- 📤 Añadir funcionalidad de exportación de datos
- 🔐 Implementar un sistema de autenticación para acceso médico

## Compatibilidad 🌐

La aplicación es compatible con navegadores modernos que soportan:
- ES6 JavaScript
- Flexbox CSS
- Fetch API

## Autor 👨‍💻

Proyecto desarrollado por Yamil Arturo Rafart, como ejemplo de aplicación web para análisis de datos de salud.

## Licencia 📄

Este proyecto está abierto para fines educativos y de demostración.