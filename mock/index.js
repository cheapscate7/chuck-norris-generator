const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const fs = require('fs');
const app = express();
const cors = require('cors');
const port = 7777;

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const readFavourites = () => {
    let rawdata = fs.readFileSync('favourites.json');
    return JSON.parse(rawdata);
};

const writeFavourites = (data) => {
    fs.writeFileSync('favourites.json', JSON.stringify(data));
};

const findFavourite = (favourites, favourite_id) =>
    favourites.some(
        (favourite) => parseInt(favourite.id, 10) === parseInt(favourite_id, 10)
    );

const fetchFavourite = async (favourites, isRandom, favourite_id) => {
    return await fetch(
        `http://api.icndb.com/jokes/${isRandom ? 'random' : favourite_id}`
    )
        .then((r) => r.json())
        .then((response) => {
            if (response.type === 'success') {
                //if we get a joke
                let exists = findFavourite(favourites, favourite_id);
                if (exists) {
                    //but we already have it
                    return {
                        success: false,
                        message: 'favourite_already_exists',
                        joke: null,
                    };
                } else {
                    //and it isnt already saved
                    const new_favourites = favourites.concat(response.value);
                    writeFavourites(new_favourites);
                    return {
                        success: true,
                        message: 'favourite_saved',
                        joke: response.value,
                    };
                }
            } else {
                return {
                    success: false,
                    message: 'joke_server_could_not_connect',
                };
            }
        });
};

app.route('/favourites')
    .get((req, res) => {
        let favourites = readFavourites();
        res.send({
            data: favourites,
            success: true,
        });
    })
    .post(async (req, res) => {
        let isRandom = /true/i.test(req.query.is_random);
        let favourite_id = parseInt(req.query.joke_id);
        let favourites = readFavourites();

        if (favourites.length < 10) {
            const result = await fetchFavourite(
                favourites,
                isRandom,
                favourite_id
            );
            res.send(result);
        } else {
            res.send({
                success: false,
                message: 'maximum_reached',
                joke: null,
            });
        }
    });

app.route('/favourites/:id').delete((req, res) => {
    let favourite_id = req.params.id;
    let favourites = readFavourites();

    const new_arr = favourites.filter((favourite) => {
        return favourite.id !== parseInt(favourite_id, 10);
    });

    writeFavourites(new_arr);

    res.send({
        success: true,
        message: 'favourite_deleted',
    });
});

app.listen(port, () => {
    console.log(`Favourites server: http://localhost:${port}`);
});
