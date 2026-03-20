# React + Vite

## Descripción
Este proyecto es una aplicación de React creada con Vite, que consume la API de Rick and Morty para mostrar una lista de personajes. La aplicación incluye paginación para navegar entre las diferentes páginas de personajes.

## Estructura del proyecto
- `src/Components`: Contiene los componentes de la aplicación, como el botón de pag
inación.
- `src/Hooks`: Contiene los hooks personalizados, como `useFetchCharacters`, que se encarga de la lógica de obtención de datos.
    `useSearchCharacters` para la lógica de búsqueda de personajes.
- `src/services`: Contiene los servicios para interactuar con la API de Rick and Morty, como `RickAndMortyService
- `src/screens`: Contiene las pantallas de la aplicación, como `CharactersScreen`, que muestra la lista de personajes.
- `src/App.tsx`: El componente principal de la aplicación que integra todos los componentes y hooks.
## Tecnologías utilizadas
- React: Biblioteca de JavaScript para construir interfaces de usuario.
- Vite: Herramienta de construcción rápida para proyectos de frontend.
- TypeScript: Superset de JavaScript que añade tipado estático.
- Fetch API: Para realizar solicitudes HTTP a la API de Rick and Morty.
## Cómo ejecutar el proyecto
1. Clona el repositorio:
```bash
git clone git origin https://github.com/geovannychavez-dsf/capacitacion-react.git
```
2. Navega al directorio del proyecto:
```bash
cd capacitacion-react
```
3. Instala las dependencias:
```bash
npm install
```
4. Inicia la aplicación:
```bash
npm run dev
```
5. Abre tu navegador y visita `http://localhost:5173` pureto por decefcto para ver la aplicación en acción.
## Contribuciones
