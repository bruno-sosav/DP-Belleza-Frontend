# Dp.belleza — Frontend

Sitio de Dp.belleza: tienda online (e-commerce) + turnera para reservar servicios.

Stack: React 19 · TypeScript · Vite · Tailwind CSS 4 · React Router 7.

## Cómo correrlo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # typecheck + build de producción (dist/)
npm run lint     # oxlint
```

### Panel de administración

- Se entra desde `/admin` (no hay ningún link en el sitio público).
- La contraseña se configura en `.env.local` (no se sube a git; ver `.env.example`):
  ```bash
  npm run admin:hash -- "nueva-clave"   # imprime el hash
  # pegarlo en .env.local como VITE_ADMIN_PASSWORD_HASH=... y reiniciar npm run dev
  ```
- Los productos **no se borran**: se dan de baja (`active: false`, igual que `productos.activo` en la base) y se pueden reactivar.
- Secciones: **Resumen** (ganancias, días movidos, lo más vendido), **Turnos**, **Ventas tienda** y **Productos**.
- ⚠️ Las estadísticas usan un historial de demostración (`admin/data/history.ts`) con la misma forma que las tablas `pedidos`, `pedido_items` y `turnos`. Con backend, se reemplaza ese archivo por la API.
- ⚠️ Mientras no haya backend, los cambios se guardan en el navegador (localStorage) y la contraseña se valida en el navegador. Cuando exista la API hay que reemplazar `ecommerce/data/productStore.ts` y `admin/lib/auth.ts`.

## Estructura del proyecto

El proyecto está dividido en **cinco carpetas principales**, una por cada parte del sistema:

```
DP-Belleza-Frontend/
├── landing/                 PÁGINA DE INICIO (/) — presenta toda la marca
│   ├── data/                content.ts (textos, nosotros, pasos, testimonios, contacto)
│   └── pages/               Landing.tsx (usa productos de ecommerce y servicios de turnera)
│
├── ecommerce/               TIENDA ONLINE (y la base del sitio)
│   ├── main.tsx             Punto de entrada de la app
│   ├── App.tsx              Rutas: qué URL muestra qué página (incluye las de la turnera)
│   ├── index.css            Estilos globales y colores
│   ├── components/          Navbar, Footer, Layout, ProductCard, CartDrawer, ...
│   ├── context/             CartContext (estado del carrito)
│   ├── data/                products.ts (catálogo inicial), productStore.ts (altas y bajas)
│   ├── lib/                 format.ts (formatPrice)
│   └── pages/               Shop, ProductDetail, Cart, Checkout, Contact, NotFound
│
├── turnera/                 RESERVA DE TURNOS
│   ├── components/          Calendar, TimeSlotPicker, BookingForm, ServiceCard, ...
│   ├── data/                services, availability, booking
│   ├── lib/                 format.ts (duraciones/fechas), styles.ts
│   └── pages/               Services, ServiceDetail, Booking, BookingConfirmed
│
├── admin/                   PANEL DE ADMINISTRACIÓN (/admin, con contraseña)
│   ├── components/          AdminLayout (menú + login), Panel, PageHeader, StatTile, DayDetail, BusiestDays
│   │   └── charts/          ColumnChart, CalendarHeatmap (días movidos en rojo), RankingList, theme (colores)
│   ├── data/                history.ts (historial de pedidos y turnos — DEMO hasta que haya backend)
│   ├── lib/                 auth.ts, stats.ts (cálculos), format.ts, usePeriod.ts, styles.ts
│   └── pages/               AdminDashboard (Resumen), AdminBookings (Turnos), AdminSales (Ventas),
│                            AdminProducts, AdminProductNew, AdminLogin
│
├── base-de-datos/           BASE DE DATOS
│   └── migrations/          Scripts SQL versionados (V1_, V2_, ...)
│
├── public/                  Archivos estáticos (favicon, imágenes)
└── index.html, package.json, vite.config.ts, tsconfig*.json   Configuración
```

### Qué va en cada subcarpeta

| Carpeta       | Contenido                                                             |
|---------------|-----------------------------------------------------------------------|
| `pages/`      | Una pantalla completa, asociada a una ruta en `ecommerce/App.tsx`.    |
| `components/` | Piezas de UI reutilizables dentro de las páginas.                     |
| `context/`    | Estado global compartido con React Context.                           |
| `data/`       | Tipos, datos mock y funciones de acceso (a futuro, llamadas a la API).|
| `lib/`        | Funciones auxiliares (formateo, constantes de estilos).               |

### Reglas para mantener el orden

- Todo lo de la página de inicio va en `landing/`, lo de la tienda en `ecommerce/`, lo de turnos en `turnera/`, todo SQL en `base-de-datos/`.
- Toda página nueva (de cualquier módulo, incluido admin) se registra en `ecommerce/App.tsx`.
- La turnera usa `formatPrice` de `ecommerce/lib/format.ts` para mostrar precios igual que la tienda.

### Rutas

| URL                    | Página             | Módulo    |
|------------------------|--------------------|-----------|
| `/`                    | Landing            | landing   |
| `/tienda`              | Shop               | ecommerce |
| `/producto/:id`        | ProductDetail      | ecommerce |
| `/carrito`             | Cart               | ecommerce |
| `/checkout`            | Checkout           | ecommerce |
| `/servicios`           | Services           | turnera   |
| `/servicios/:id`       | ServiceDetail      | turnera   |
| `/reservar/:id`        | Booking            | turnera   |
| `/reserva-confirmada`  | BookingConfirmed   | turnera   |
| `/nosotros`            | Redirige a `/#nosotros` (sección de la landing) | landing |
| `/contacto`            | Contact            | ecommerce |
| `/admin`               | AdminDashboard (Resumen) | admin |
| `/admin/turnos`        | AdminBookings      | admin     |
| `/admin/ventas`        | AdminSales         | admin     |
| `/admin/productos`     | AdminProducts      | admin     |
| `/admin/productos/nuevo` | AdminProductNew  | admin     |
