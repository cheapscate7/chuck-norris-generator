export const getRandomJoke = async () => {
    return await fetch('http://api.icndb.com/jokes/random')
        .then((resp) => resp.json())
        .then((result) => result.value);
};

export const addJokeToFavourites = async (is_random = false, joke_id) => {
    return await fetch(
        `http://localhost:7777/favourites?is_random=${is_random}&joke_id=${joke_id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    ).then((resp) => resp.json());
};

export const deleteJokeFromFavourites = async (joke_id) => {
    return await fetch(`http://localhost:7777/favourites/${joke_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((resp) => resp.json());
};
