const cardPokemon = document.querySelector("#cardPokemon");
const endPoint = "https://pokeapi.co/api/v2/pokemon/";

function createCard(pokemon) {
    const types = pokemon.types.map(t => `<p>${t.type.name}</p>`).join('');
    const abilities = pokemon.abilities.map(a => `<p>${a.ability.name}</p>`).join('');

    return `
        <div class="card-pokemon">
            <span>${pokemon.id}</span>
            <div class="img">
                <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
            </div>
            <div class="info">
                <h2>${pokemon.name}</h2>
                <div>
                    <p>Tipo de Pokemon:</p>
                    ${types}
                    <p>Base Experience: ${pokemon.base_experience}</p>
                </div>
                <div>
                    <p class="stat">${pokemon.height}m</p>
                    <p class="stat">${pokemon.weight}kg</p>
                </div>
            </div>
            <button class="btn-detalle" onclick="seeDetail(${pokemon.id})">MORE INFO</button>
        </div>
    `;
}

function showPokemon(pokemon) {
    const container = document.createElement("div");
    container.innerHTML = createCard(pokemon);
    cardPokemon.append(container);
}

window.addEventListener('load', () => {
    for (let i = 1; i <= 100; i++) {
        fetch(`${endPoint}${i}`)
            .then(response => response.json())
            .then(showPokemon)
            .catch(error => console.error(`Error fetching Pokemon ${i}:`, error));
    }
});
