# 🌐 Tap Solutions - Web Oficial & Landing Page

> Plataforma web oficial para **Tap Solutions**, empresa pionera en soluciones digitales interactivas combinando **desarrollo web a medida** con **tecnología NFC** y **códigos QR dinámicos** para restaurantes, comercios, hoteles y profesionales.

![Tap Solutions](/public/branding/LOGO%20TAPSOLUTION.jpeg)

---

## 🚀 Características Principales

- **Simulador NFC Interactivo**: Los visitantes pueden simular el toque de una tarjeta física en un smartphone con efectos sonoros, ondas de radiofrecuencia (Web Audio API) y previsualización de un menú digital real.
- **Los 3 Pilares Fundamentales**:
  1. *Desarrollo Web & Menús Digitales* (Mobile-First, carga en <0.5s, sin apps requeridas).
  2. *Tecnología NFC & Códigos QR* (Stickers impermeables de resina epoxi para mesas, tarjetas de PVC/metal y QR dinámicos).
  3. *Alojamiento Cloud & Mantenimiento Continuo* (99.9% uptime, certificados SSL y actualización gestionada).
- **Flujo de 3 Pasos ("Cómo Funciona")**: Visualización clara del proceso: 1) Acerca o escanea, 2) Acceso inmediato, 3) Gestión y tranquilidad 24/7.
- **Sectores Especializados**: Soluciones a medida para Restaurantes/Bares, Retail/Tiendas (captación de reseñas Google Maps), Profesionales (tarjetas de visita inteligentes) y Hotelería.
- **Configurador y Calculadora de Solución**: Selector interactivo de mesas/puntos de contacto con generación automática de enlace a WhatsApp con mensaje personalizado.
- **Preguntas Frecuentes (FAQ)**: Respuestas a dudas técnicas sobre compatibilidad nativa (iOS/Android) y resistencia al agua.
- **Formulario de Contacto & Botón WhatsApp Flotante**: Conexión instantánea con asesores comerciales.

---

## 🛠️ Stack Tecnológico

- **Frontend**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Estilos**: Vanilla CSS Moderno con Tokens de Diseño, Glassmorphism, Micro-animaciones y paleta corporativa oficial Tap Solutions.
- **Despliegue**: Configuración lista con `vercel.json` y `netlify.toml` para despliegue automático con 1 solo clic.

---

## 💻 Instalación y Ejecución Local

### 1. Clonar el Repositorio
```bash
git clone https://github.com/rafasteel/TapSolutionsWeb.git
cd TapSolutionsWeb
```

*(O si ya estás dentro de la carpeta del proyecto):*
```bash
git init
git remote add origin https://github.com/rafasteel/TapSolutionsWeb.git
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Iniciar Servidor de Desarrollo
```bash
npm run dev
```
Abre tu navegador en `http://localhost:5173` (o el puerto indicado en la terminal).

### 4. Compilar para Producción
```bash
npm run build
```
Los archivos optimizados y minificados se generarán en la carpeta `dist/`.

---

## 🚀 Guía de Despliegue Gratuito (1 Clic)

### Opción A: Vercel (Recomendada)
1. Sube tu código a GitHub:
   ```bash
   git add .
   git commit -m "feat: landing page oficial Tap Solutions"
   git push -u origin main
   ```
2. Entra en [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. Haz clic en **"Add New Project"** e importa el repositorio `TapSolutionsWeb`.
4. El archivo `vercel.json` ya está configurado. Haz clic en **"Deploy"** y tu página estará en vivo con HTTPS en segundos.

### Opción B: Netlify
1. Entra en [netlify.com](https://netlify.com) y conecta tu repositorio de GitHub.
2. Netlify detectará automáticamente el archivo `netlify.toml`.
3. Haz clic en **"Deploy Site"**.

---

## 📂 Estructura del Proyecto

```
tapsolutionspagina/
├── public/
│   ├── branding/           # Logotipos oficiales de Tap Solutions
│   └── favicon.svg         # Favicon vectorial con símbolo NFC
├── src/
│   ├── components/
│   │   ├── Contact.jsx             # Formulario y canales de contacto
│   │   ├── FAQ.jsx                 # Acordeón de preguntas frecuentes
│   │   ├── FloatingWhatsApp.jsx    # Botón flotante animado de WhatsApp
│   │   ├── Footer.jsx              # Pie de página y enlaces
│   │   ├── Hero.jsx                # Portada + Simulador NFC interactivo
│   │   ├── HowItWorks.jsx          # Flujo de 3 pasos y comparativa
│   │   ├── Industries.jsx          # Sectores de aplicación (Restaurantes, Tiendas...)
│   │   ├── Logo.jsx                # Componente SVG del logo corporativo
│   │   ├── Navbar.jsx              # Barra de navegación con blur
│   │   ├── PricingCalculator.jsx   # Cotizador interactivo
│   │   └── Services.jsx            # Los 3 pilares del negocio
│   ├── App.jsx             # Ensamblado principal de la aplicación
│   ├── index.css           # Sistema de diseño, tokens, animaciones y glassmorphism
│   └── main.jsx            # Punto de entrada de React
├── netlify.toml            # Configuración para despliegue en Netlify
├── vercel.json             # Configuración para despliegue en Vercel
├── package.json
└── vite.config.js
```

---

## 📞 Contacto y Soporte

- **Empresa**: Tap Solutions
- **WhatsApp / Teléfono**: +505 76806028
- **Email**: tapsolutions00@gmail.com
- **Instagram**: [@tapsolutionsni](https://www.instagram.com/tapsolutionsni/)
