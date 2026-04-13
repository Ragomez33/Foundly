# Foundly 💰

**Foundly** es una aplicación móvil personal diseñada para gestionar finanzas de manera sencilla, visual y eficiente. Nacida de la necesidad de tener un control real sobre los flujos de dinero sin complicaciones innecesarias.

## 🚀 Tecnologías

Este proyecto está construido con el stack moderno de mobile para 2026:

* **Framework:** [Expo](https://expo.dev/) (React Native)
* **Routing:** [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
* **UI Library:** [Gluestack UI](https://gluestack.io/ui) (Themed components)
* **Storage:** [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/)
* **Icons:** [Lucide React Native](https://lucide.dev/)

## ✨ Características actuales

* **Dashboard Visual:** Resumen de monto disponible, ingresos y gastos totales.
* **Gestión de Movimientos:** Registro y eliminación de gastos e ingresos.
* **Cálculos en Tiempo Real:** Balance automático basado en los registros.
* **Persistencia Local:** Tus datos se quedan en tu teléfono usando almacenamiento asíncrono.
* **Interfaz Moderna:** Diseño basado en Stacks (VStack/HStack) para una experiencia fluida.

## 🛠️ Instalación y Configuración

> **Nota:** Este proyecto utiliza React 19 y React Native 0.81. Debido a la naturaleza de las dependencias de accesibilidad, se recomienda seguir estos pasos exactos.

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/foundly.git](https://github.com/tu-usuario/foundly.git)
    cd foundly
    ```

2.  **Instalar dependencias:**
    Debido a las estrictas peer dependencies de las librerías de UI, usa el flag de legacy:
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Iniciar el proyecto:**
    ```bash
    npx expo start
    ```

4.  **Abrir en tu dispositivo:**
    Escanea el código QR con la app **Expo Go** (Android) o la cámara (iOS).

## 🗺️ Roadmap (Próximamente)

- [ ] Módulo de Gastos Pasivos (Automatización periódica).
- [ ] Gráficas dinámicas con SVG para visualizar el "Burn Rate".
- [ ] Metas de Ahorro con sistema de logros.
- [ ] Modo de bloqueo de dinero (Ahorro forzado).

---
Hecho con ☕ y mucha paciencia con las dependencias.
