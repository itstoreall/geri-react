export const fetchPokemon = (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
    if (response.ok) {
      return response.json();
    }

    // Отвергает ответ от бека и генерит новый error.message
    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
};
