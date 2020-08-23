/**
 * call a single random joke from the chuck norris api
 * @returns {Promise<T>}
 */
export const getRandomJoke = async () => {
    return await fetch('http://api.icndb.com/jokes/random?escape=javascript')
        .then((resp) => resp.json())
        .then((result) => result.value);
};

/**
 * call 10 random Jokes from chuck norris api
 * @returns {Promise<T>}
 */
export const getRandomJokes = async () => {
    return await fetch(
        'http://api.icndb.com/jokes/random/10?escape=javascript'
    ).then((resp) => resp.json());
};

/**
 * adds a single joke (random or otherwise to the favourites in the backend
 * @param is_random     is the joke to be added a random one
 * @param joke_id   if the joke isnt random, what is the id
 * @returns {Promise<T>} the success state, any server message, and the joke received from the api if applicable
 */
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

/**
 * delete a single joke that is in the favourites
 * @param joke_id
 * @returns {Promise<T>}
 */
export const deleteJokeFromFavourites = async (joke_id) => {
    return await fetch(`http://localhost:7777/favourites/${joke_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((resp) => resp.json());
};
