# Restaurante - Carta React

Es una aplicación web hecha con React y Vite, que muestra una carta de postres de un restaurante. La app conecta con la API de TheMealDB para sacar los datos, y luego enseña los postres con su nombre, imagen y un precio que se genera aleatoriamente cada vez que entras.

<img src="readme-screenshots/image.png" width="800"/>
<img src="readme-screenshots/image-1.png" width="800"/>
<img src="readme-screenshots/image-2.png" width="800"/>

# ¿Qué puede hacer la app?

- Ver una lista de postres (con foto y precio)
- Ordenar los postres por precio (de más barato a caro y al revés) o ver primero los recomendados
- Carga animada usando react-loading-indicators
- Diseño responsivo (se adapta a distintos tamaños de pantalla)

# ¿Como se ha hecho?

- Se ha usado Vite para crear el proyecto React.
- En App.jsx se realiza una petición asíncrona al endpoint:
  https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert
  <img src="readme-screenshots/code-snapshot.png" width="600"/>
- Los datos se almacenan en el estado local y se generan precios aleatorios entre 8 y 20 $.
- Además se ha usado el hook useMemo para guardar los precios y no re-renderizar los componentes.
  <img src="readme-screenshots/code-snapshot-1.png" width="600"/>
- Se han ido pasando los props correspondientes entre componentes.
  <img src="readme-screenshots/code-snapshot-2.png" width="600"/>
- Los componentes principales son:
- Header.jsx → título y selector de ordenamiento.
  <img src="readme-screenshots/code-snapshot-3.png" width="600"/>
- MenuList.jsx → lista de platos según el orden elegido.
  <img src="readme-screenshots/code-snapshot-4.png" width="600"/>
- MenuItem.jsx → tarjeta de cada postre.
  <img src="readme-screenshots/code-snapshot-5.png" width="600"/>
- Footer.jsx → enlace para volver al inicio.
- Se añadió un indicador de carga usando el paquete react-loading-indicators.
  <img src="readme-screenshots/code-snapshot-6.png" width="600"/>

# Dependencias instaladas

- react y react-dom
- react-loading-indicators
- vite
- @vitejs/plugin-react
