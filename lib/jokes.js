export const getRandomJoke = () => {
    fetch('http://api.icndb.com/jokes/random').then((resp) => resp.json());
};
