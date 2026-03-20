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

## TAREA 7
Se requiere desarrollar una pantalla dentro del menú principal que consuma el servicio de personajes de la API pública de Rick and Morty.

La información obtenida debe ser presentada en formato de tarjetas (cards), mostrando datos relevantes de cada personaje.

Requerimientos funcionales
Consumir el endpoint: https://rickandmortyapi.com/api/character
Mostrar los personajes en formato de cards
Cada card debe contener:
Imagen del personaje
Nombre
Estado (Alive, Dead, Unknown)
Mostrar múltiples personajes en forma de grid

Requerimientos técnicos
Usar React con Functional Components + Hooks
Manejo de estado con:
useState
useEffect
Separar lógica de negocio y presentación:
services/character.service.ts → consumo API
components/CharacterCard.tsx → card individual
pages/Characters.tsx → pantalla principal
hooks/useCharacter
Manejo de estados:
Loading (cargando)
Error (si falla la API)


Criterios de aceptación
Se consumen correctamente los datos de la API
Se muestran al menos 10 personajes en pantalla
Cada personaje se muestra en una card con imagen, nombre y estado
Existe indicador de carga mientras se obtiene la información
Se maneja error si la API falla
Código organizado y separado por responsabilidades
Componentes reutilizables