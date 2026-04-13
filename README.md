# Foundly 💰
> "No es solo cuánto tienes, sino cuánto te queda después de tus planes."
> 
**Foundly** es una aplicación móvil personal diseñada para gestionar finanzas de manera sencilla, visual y eficiente. Nacida de la necesidad de tener un control real sobre los flujos de dinero sin complicaciones innecesarias. Te permite transformar el caos de las notas y las calculadoras en un sistema de **planificación proyectada**. 

A diferencia de otras apps, Foundly se enfoca en el **Saldo Proyectado**, permitiéndote anotar movimientos futuros (como ese sueldo que aún no llega o ese alquiler que aún no pagas) para que siempre sepas tu disponibilidad real de dinero.

## 🚀 Stack Tecnológico (2026)

* **Engine:** [Expo](https://expo.dev/) (SDK 54+)
* **UI & Layout:** [Gluestack UI](https://gluestack.io/) (Utilizando Stacks, Boxes e Iconografía moderna)
* **Navegación:** [Expo Router](https://docs.expo.dev/router/introduction/) (Navegación basada en archivos)
* **Persistencia:** [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/)
* **Manejo de Fechas:** [Day.js](https://day.js.org/) (Ligero y potente)

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
- [ ] **Módulo de Proyecciones:** Implementar estados `pending` vs `completed` para diferenciar saldo real de planificado.
- [ ] **Acciones Rápidas:** Botón para "Ejecutar" (marcar como pagado) desde la lista.
- [ ] **Filtros Mensuales:** Visualización inteligente del mes en curso.
- [ ] **Confirmaciones:** Alertas de seguridad para evitar borrados accidentales.
---
Hecho con ☕ y mucha paciencia con las dependencias.
