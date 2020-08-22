export const getRandomJoke = async () => {
    return await fetch('http://api.icndb.com/jokes/random')
        .then((resp) => resp.json())
        .then((result) => result.value);
};

export const addJokeToFavourites = async (joke) => {
    return await fetch('http://localhost:7777/favourites', {
        method: 'POST',
        body: JSON.stringify(joke),
    }).then((resp) => resp.json());
};
