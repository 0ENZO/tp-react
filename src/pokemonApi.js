export function fetchPokemon(identifier, dispatch) {
    const url = `https://api.jikan.moe/v3/search/anime?limit=1&q=${identifier}`;
    fetch(url)
        .then((repsonse) => repsonse.json())
        .then((data) =>
            dispatch({ action: 'setPokemon', params: { pokemon: data }})
        )
        .catch((e) => console.error('catched error: ' + e));
}
