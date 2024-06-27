La problemática de la semana 10 consiste en crear una página sencilla en la cual se realicen llamados a la API REST ofrecida por rickandmortyapi.com* y se muestre, en pantalla la información obtenida. Esta página deberá de ser subida a Github Pages

La página web deberá de contener un botón el cual obtenga todos los personajes (characters) y se deberán mostrar en pantalla, renderizando esta lista en algún elemento del DOM.

La salida en pantalla, puede ser tanto la información cruda como también información organizada en una tabla.

A su vez, deberá de contener un campo (input) por cada posible filtro, en los cuales se pueda escribir un valor para obtener los personajes filtrados (leer documentación, apartado Filter Characters). Los campos pueden ser:

- name: filter by the given name.
- status: filter by the given status (alive, dead or unknown).
- species: filter by the given species.
- type: filter by the given type.
- gender: filter by the given gender (female, male, genderless or unknown).


Deberá de haber un botón asociado para hacer una request con filtros. Esta información deberá de mostrarse también en pantalla.

En caso de que alguna de las request falle, mostrar en pantalla un mensaje de error.

Subir todos los cambios a Github y responder la problemática con la URL de la página de Github Pages con el formulario funcionando.

**Pasos a seguir:**


Crear un archivo HTML y un archivo CSS para estilos
Crear un archivo JS con toda la lógica necesaria para manejar las request HTTP
En el HTML, anadir:
Un botón para hacer un GET de todos los personajes
Un input por cada filtro, en los cuales se pueda ingresar el valor de cada uno de los filtros
Considerar de que estos input deben tener un botón de submit asociado
En el CSS, añadir el mínimo estilo requerido para ver una página agradable a la vista


En el archivo JS, añadir:
La lógica necesaria para manejar cada una de las request
Hacer commits con el progreso y subir todos los cambios siempre verificando que se vea correctamente en Github Pages.