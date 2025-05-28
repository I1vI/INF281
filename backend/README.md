<div align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  
  # 🎉 Backend API - Bicentenario
  
  ### *Plataforma robusta para la gestión integral de eventos del Bicentenario*
  
  [![Node.js](https://img.shields.io/badge/Node.js-v18.16.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](http://nestjs.com/)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
  [![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
  [![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge)](https://github.com)
  [![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/G7Qnnhy)
  
  ---
  
  **Un backend moderno desarrollado con NestJS y TypeScript que utiliza Prisma ORM para gestionar de forma eficiente y segura una base de datos PostgreSQL, facilitando la administración e inscripción en eventos relacionados con el Bicentenario.**
  
</div>

---

## ✨ Funcionalidades Principales

<div align="center">
  <table>
    <tr>
      <td align="center" width="33%">
        <img src="https://img.icons8.com/fluency/48/calendar.png" alt="Eventos"/>
        <br><strong>Gestión de Eventos</strong>
        <br><small>Administración completa de eventos virtuales, híbridos y presenciales</small>
      </td>
      <td align="center" width="33%">
        <img src="https://img.icons8.com/fluency/48/user-shield.png" alt="Autenticación"/>
        <br><strong>Autenticación Segura</strong>
        <br><small>Sistema de roles con JWT y validación por email</small>
      </td>
      <td align="center" width="33%">
        <img src="https://img.icons8.com/fluency/48/robot.png" alt="Agente Virtual"/>
        <br><strong>Agente Virtual</strong>
        <br><small>IA integrada para consultas del Bicentenario</small>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://img.icons8.com/fluency/48/email.png" alt="Notificaciones"/>
        <br><strong>Notificaciones</strong>
        <br><small>Envío automático de confirmaciones vía email</small>
      </td>
      <td align="center">
        <img src="https://img.icons8.com/fluency/48/cloud-storage.png" alt="Almacenamiento"/>
        <br><strong>Gestión Multimedia</strong>
        <br><small>Carga y gestión de imágenes y archivos</small>
      </td>
      <td align="center">
        <img src="https://img.icons8.com/fluency/48/administrative-tools.png" alt="Administración"/>
        <br><strong>Panel Admin</strong>
        <br><small>Herramientas completas de administración</small>
      </td>
    </tr>
  </table>
</div>

---

## 🛠️ Stack Tecnológico

<div align="center">
  
  ### Core Technologies
  <p>
  <div align="center">
    <img src="https://nestjs.com/img/logo-small.svg" alt="NestJS" width="100" height="100" title="NestJS"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="100" height="100" title="TypeScript"/>
    <img src="https://img.icons8.com/?size=512&id=zJh5Gyrd6ZKu&format=png" alt="Prisma" width="100" height="100" title="Prisma ORM"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="100" height="100" title="PostgreSQL"/>
  </div>
  </p>
  
  ### External Services
  <p>
  <div align="center">
    <img src="https://jwt.io/img/logo.svg" alt="JWT" width="100" height="100" title="JSON Web Tokens"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCBuMVZYoOByze0kOEVYjKwO6Yx2ExsHwBhg&s" alt="SendGrid" width="100" height="100" title="SendGrid"/>
    <img src="https://antoniofernandez.com/assets/blog/cloudinary.png" alt="Cloudinary" width="100" height="100" title="Cloudinary"/>
    <img src="https://deepinfra.com/favicon.ico" alt="DeepInfra" width="100" height="100" title="DeepInfra"/>
  </div>
  </p>
  
</div>

<details>
<summary><strong>📋 Descripción Detallada de Tecnologías</strong></summary>

| Tecnología | Descripción | Uso en el Proyecto |
|------------|-------------|-------------------|
| **NestJS** | Framework progresivo para Node.js | Base del backend, arquitectura modular |
| **TypeScript** | Superset de JavaScript con tipado estático | Desarrollo seguro y escalable |
| **Prisma ORM** | Herramienta moderna de modelado de BD | Gestión eficiente de PostgreSQL |
| **PostgreSQL** | Sistema de gestión de bases de datos | Almacenamiento de datos principales |
| **JWT** | Estándar para tokens de autenticación | Seguridad y manejo de sesiones |
| **SendGrid** | Servicio de envío de emails | Notificaciones y confirmaciones |
| **Cloudinary** | Plataforma de gestión multimedia | Almacenamiento de imágenes y archivos |
| **DeepInfra** | Servicio de IA en la nube | Agente virtual inteligente |

</details>

---

## 🏗️ Arquitectura del Sistema

<div align="center">
  <img src="./docs/Estructura.png" alt="Diagrama de Arquitectura" width="100%" style="max-width: 800px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>
  
  <br>
  
### 🔄 Flujo de Solicitud (Ejemplo: Inscripción a Evento)
  <img src="./docs/flujo.png" alt="Diagrama de Arquitectura" width="100%" style="max-width: 800px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>
  
  <br>
  
</div>

### 🧩 Componentes Principales

- **🎯 Cliente Frontend**: Interfaz de usuario que consume la API REST
- **⚡ Backend NestJS**: Arquitectura monolítica modular con múltiples servicios
- **🔒 Middleware de Seguridad**: JWT + Casbin para autenticación y autorización
- **🗃️ Prisma ORM**: Capa de acceso a datos tipada y eficiente
- **🐘 Base de Datos**: PostgreSQL hospedado en Railway
- **☁️ Servicios Externos**: SendGrid, Cloudinary, DeepInfra

---

## 📁 Estructura del Proyecto

<details>
<summary><strong>🗂️ Ver Estructura Completa</strong></summary>

```
backend/
├── 📂 src/                          # Código fuente principal
│   ├── 🔐 auth/                     # Autenticación y autorización
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── dto/                     # Validaciones y DTOs
│   ├── 👤 usuario/                  # Gestión de usuarios
│   ├── 📅 evento/                   # Administración de eventos
│   ├── 📋 agenda/                   # Inscripciones y agendas
│   ├── 🤖 agente-virtual/           # IA para consultas
│   ├── ☁️ cloudinary/               # Gestión multimedia
│   ├── ⚙️ config/                   # Configuraciones globales
│   ├── 🛡️ rbac/                     # Control de acceso (Casbin)
│   ├── 📊 dashboard/                # Estadísticas y reportes
│   ├── 🏷️ categoria/                # Categorías de eventos
│   ├── 🎙️ expositor/                # Gestión de expositores
│   ├── 🤝 patrocinador/             # Patrocinadores
│   ├── ⭐ puntuacion/               # Sistema de valoraciones
│   ├── 👥 rol/                      # Gestión de roles
│   ├── 📞 telefono/                 # Contactos telefónicos
│   ├── app.controller.ts            # Controlador principal
│   ├── app.module.ts                # Módulo raíz
│   ├── main.ts                      # Punto de entrada
│   └── prisma.service.ts            # Servicio Prisma global
├── 🗄️ prisma/                       # Configuración ORM
│   ├── migrations/                  # Migraciones de BD
│   ├── schema.prisma                # Esquema de datos
│   └── seed.ts                      # Datos iniciales
├── 📚 docs/                         # Documentación
│   ├── Estructura.png               # Diagrama de arquitectura
│   ├── BD.png                       # Modelo de base de datos
│   └── flujo.png                    # Ejemplo del flujo
├── 🧪 test/                         # Pruebas unitarias
├── 🔧 .env                          # Variables de entorno
├── 📦 package.json                  # Dependencias npm
└── 📋 README.md                     # Este archivo
```

</details>

---

## 💾 Base de Datos

<div align="center">
  <img src="./docs/BD.png" alt="Modelo de Base de Datos" width="100%" style="max-width: 800px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>
</div>

### 🗂️ Entidades Principales

<div align="center">
  <table>
    <tr>
      <th>🏷️ Entidad</th>
      <th>📝 Descripción</th>
      <th>🔗 Relaciones Clave</th>
    </tr>
    <tr>
      <td><strong>👤 Usuarios</strong></td>
      <td>Información personal, credenciales y verificación</td>
      <td>Roles, Eventos, Inscripciones</td>
    </tr>
    <tr>
      <td><strong>📅 Eventos</strong></td>
      <td>Detalles completos de eventos y actividades</td>
      <td>Usuarios, Categorías, Expositores</td>
    </tr>
    <tr>
      <td><strong>📋 Agenda</strong></td>
      <td>Registro de inscripciones y participaciones</td>
      <td>Usuarios, Eventos</td>
    </tr>
    <tr>
      <td><strong>🛡️ Roles/Permisos</strong></td>
      <td>Control de acceso y autorizaciones</td>
      <td>Usuarios, Acciones del sistema</td>
    </tr>
    <tr>
      <td><strong>🏷️ Categorías</strong></td>
      <td>Clasificación de eventos</td>
      <td>Eventos</td>
    </tr>
    <tr>
      <td><strong>🎙️ Expositores</strong></td>
      <td>Ponentes y presentadores</td>
      <td>Eventos</td>
    </tr>
  </table>
</div>

---

## 📖 Documentación API

<div align="center">
  <a href="https://documenter.getpostman.com/view/43597973/2sB2j68Vdx" target="_blank">
    <img src="https://img.shields.io/badge/📚%20Documentación%20API-Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Documentación API Postman" />
  </a>
  
  <br><br>
  
  **Explora todos los endpoints, ejemplos de requests/responses y casos de uso en nuestra documentación interactiva de Postman.**
</div>

---

## 🚀 Despliegue

<div align="center">
  
  ### 🌐 Producción
  <div align="center">
  [![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app)
  
  ---
  </div>
  ### ⚙️ Variables de Entorno Configuradas
  
</div>

<details>
<summary><strong>🔧 Ver Variables de Entorno</strong></summary>

| Variable | Descripción | Servicio |
|----------|-------------|----------|
| `CLOUDINARY_API_KEY` | Clave API de Cloudinary | ☁️ Multimedia |
| `CLOUDINARY_API_SECRET` | Secreto API de Cloudinary | ☁️ Multimedia |
| `CLOUDINARY_CLOUD_NAME` | Nombre del cloud de Cloudinary | ☁️ Multimedia |
| `DATABASE_URL` | URL de conexión PostgreSQL | 🗄️ Base de Datos |
| `DEEPINFRA_API_KEY` | Clave API para agente virtual | 🤖 IA |
| `EMAIL_FROM` | Email remitente del sistema | 📧 Notificaciones |
| `JWT_EXPIRES_IN` | Tiempo de expiración JWT | 🔐 Autenticación |
| `JWT_SECRET` | Secreto para firmar JWT | 🔐 Autenticación |
| `NIXPACKS_NODE_VERSION` | Versión de Node.js | ⚙️ Configuración |
| `SENDGRID_API_KEY` | Clave API de SendGrid | 📧 Emails |

</details>

---

## ⚡ Inicio Rápido

<div align="center">
  
  ### 🛠️ Configuración Local
  
</div>

```bash
# 📥 Clonar el repositorio
git clone https://github.com/I1vI/INF281.git
cd backend

# 📦 Instalar dependencias
npm install

# 🔧 Configurar variables de entorno
cp .env.example .env
# Editar .env con tus valores reales

# 🗄️ Configurar base de datos
npx prisma generate
npx prisma db push
npx prisma db seed

# 🚀 Ejecutar en desarrollo
npm run start:dev
```

<details>
<summary><strong>📄 Ejemplo de archivo .env</strong></summary>

```env
#############################################################
#                   Archivo .env.example                    #
#    Variables de entorno para configuración del backend    #
#      No incluir datos sensibles reales en este archivo   #
#   Copiar y renombrar a '.env' con valores reales antes   #
#                      de ejecutar la app                   #
#############################################################

# --- 🌥️ Configuración Cloudinary para almacenamiento multimedia ---
CLOUDINARY_API_KEY=tu_cloudinary_api_key_aqui
CLOUDINARY_API_SECRET=tu_cloudinary_api_secret_aqui
CLOUDINARY_CLOUD_NAME=tu_cloudinary_cloud_name_aqui

# --- 🗄️ URL de conexión a la base de datos PostgreSQL ---
DATABASE_URL=postgresql://usuario:password@host:puerto/base_de_datos?schema=public

# --- 🤖 API Key para DeepInfra (agente virtual AI) ---
DEEPINFRA_API_KEY=tu_deepinfra_api_key_aqui

# --- 📧 Configuración del correo electrónico remitente ---
EMAIL_FROM=tu_correo_remitente@dominio.com

# --- 🔐 Configuración JWT (autenticación y sesiones) ---
JWT_EXPIRES_IN=3600s
JWT_SECRET=tu_jwt_secret_aqui

# --- ⚙️ Versión Node.js para entorno Railway ---
NIXPACKS_NODE_VERSION=18

# --- 📬 API Key para SendGrid (servicio de emails) ---
SENDGRID_API_KEY=tu_sendgrid_api_key_aqui
```

</details>