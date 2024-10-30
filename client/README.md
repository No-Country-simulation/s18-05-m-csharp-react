
# AdoPet (Client) - Plataforma de Adopción de Mascotas 🐾

Este proyecto de frontend está construido con [Next.js 14](https://nextjs.org), [React 18](https://reactjs.org), y [TypeScript](https://www.typescriptlang.org), con el propósito de facilitar la adopción de mascotas, publicar mascotas encontradas, y ayudar en la difusión de mascotas perdidas para su rápida búsqueda y recuperación.

## Características

- **Publicación de Mascotas en Adopción:** Los usuarios pueden listar mascotas disponibles para adopción.
- **Difusión de Mascotas Perdidas:** Permite a los usuarios publicar detalles de mascotas extraviadas.
- **Búsqueda de Mascotas Encontradas:** Los usuarios pueden informar sobre mascotas encontradas para ayudar a que regresen con sus dueños.
- **Gestión de Solicitudes de Adopción:** Administración y visualización de solicitudes de adopción en tiempo real.

## Configuración y Ejecución 🚀

### Instalación de Dependencias

Primero, instala las dependencias del proyecto con el siguiente comando:

```bash
npm install
```

### Ejecutar el Servidor de Desarrollo

Para iniciar el entorno de desarrollo:

```bash
npm run dev
# o bien, puedes utilizar
yarn dev
pnpm dev
bun dev
```

Esto iniciará el servidor en el puerto 3030. Abre [http://localhost:3030](http://localhost:3030) en tu navegador para ver el proyecto en acción.

## Estructura del Proyecto

- **`app/`**: Contiene las páginas principales y la lógica de enrutamiento.
- **`components/`**: Componentes reutilizables para la interfaz de usuario, incluyendo inputs personalizados y formularios de búsqueda.
- **`data/`**: Archivo de datos estáticos o configuraciones relacionadas con el proyecto.
- **`hooks/`**: Hooks personalizados para facilitar la lógica compartida en la aplicación.
- **`layout/`**: Estructuras de diseño comunes que se aplican a múltiples páginas.
- **`public/`**: Recursos estáticos accesibles públicamente, como imágenes y fuentes.
- **`store/`**: Configuración de estado global utilizando [Zustand](https://github.com/pmndrs/zustand) para la gestión de estado.
- **`styles/`**: Archivos de configuración y estilos para Tailwind CSS, con una paleta de colores y fuentes personalizadas.
- **`utils/`**: Funciones de utilidad que se usan en toda la aplicación para tareas comunes.
- **`validations/`**: Archivos de validación para asegurar la integridad de los datos de entrada.

## Scripts Disponibles

- `npm run dev`: Ejecuta el servidor de desarrollo en el puerto 3030.
- `npm run build`: Construye el proyecto para producción.
- `npm run start`: Inicia la aplicación en modo de producción.
- `npm run lint`: Verifica y corrige el código con ESLint.

## Recursos Adicionales

Para aprender más sobre las tecnologías utilizadas:

- [Documentación de Next.js](https://nextjs.org/docs)
- [Tutorial interactivo de Next.js](https://nextjs.org/learn)
- [Repositorio GitHub de Next.js](https://github.com/vercel/next.js)

## Despliegue en Vercel

Este proyecto está desplegado en [Vercel](https://vercel.com). Puedes acceder a la versión en producción [aquí](https://adopet-maidana07-projects.vercel.app/).

## Autor

Desarrollado por [Maidana07](https://github.com/Maidana07)

