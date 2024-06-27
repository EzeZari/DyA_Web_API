document.getElementById('filtrarPersonajes').addEventListener('click', () => {
    const nameFilter = document.getElementById('nameFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;
    const speciesFilter = document.getElementById('speciesFilter').value;
    const typeFilter = document.getElementById('typeFilter').value;
    const genderFilter = document.getElementById('genderFilter').value;

    let url = 'https://rickandmortyapi.com/api/character/?';

    if (nameFilter) url += `name=${nameFilter}&`;
    if (statusFilter) url += `status=${statusFilter}&`;
    if (speciesFilter) url += `species=${speciesFilter}&`;
    if (typeFilter) url += `type=${typeFilter}&`;
    if (genderFilter) url += `gender=${genderFilter}&`;

    obtenerPersonajes(url, data => {
        const container = document.getElementById('allCharacters');
        container.innerHTML = ''; // Limpiar cualquier contenido anterior

        data.results.forEach(element => {
            const article = document.createRange().createContextualFragment(
                `<article>
                    <div class="personajes">
                        <h2>${element.name}</h2>
                        <img src="${element.image}" alt="${element.name}">
                        <p><strong>Estado:</strong> ${element.status}</p>
                        <p><strong>Especie:</strong> ${element.species}</p>
                        <p><strong>Género:</strong> ${element.gender}</p>
                    </div>
                </article>`
            );
            container.appendChild(article);
        });
    });
});

document.getElementById('obtenerPersonajes').addEventListener('click', () => {

    document.querySelector('.inputs').style.display = 'block';
    document.querySelector('.btnObtener').style.display = 'none';

    obtenerPersonajes('https://rickandmortyapi.com/api/character', data => {
        const container = document.getElementById('allCharacters');
        container.innerHTML = ''; // Limpiar cualquier contenido anterior

        //Escribimos el html de los personajes
        data.results.forEach(element => {
            const article = document.createRange().createContextualFragment(
                `<article>
                    <div class="personajes">
                        <h2>${element.name}</h2>
                        <img src="${element.image}" alt="${element.name}">
                        <p><strong>Estado:</strong> ${element.status}</p>
                        <p><strong>Especie:</strong> ${element.species}</p>
                        <p><strong>Género:</strong> ${element.gender}</p>
                    </div>
                </article>`
            );
            container.appendChild(article);
        });
    });
});

function obtenerPersonajes(url, done) {
    fetch(url)
        .then(response => response.json())
        .then(data => done(data))
        .catch(error => {
            document.getElementById('error').textContent = 'Error al obtener los personajes';
        });
}
