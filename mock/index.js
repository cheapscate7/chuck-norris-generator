const express = require('express');
const bodyParser = require('body-parser');
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

app.route('/favourites')
    .get((req, res) => {
        let favourites = readFavourites();
        res.send({
            data: favourites,
            success: true,
        });
    })
    .post((req, res) => {
        let favourites = readFavourites();
        let response = {
            success: false,
            message: '',
        };
        if (favourites.length + 1 > 10) {
            console.log('maximum reached');
            response.message = 'maximum_reached';
        } else {
            const is_found = favourites.some(
                (favourite) =>
                    parseInt(favourite.id, 10) === parseInt(req.body.id, 10)
            );

            if (is_found) {
                response.message = 'already_exists';
            } else {
                const new_favourites = favourites.concat(req.body);
                writeFavourites(new_favourites);
                response.success = true;
                response.message = 'favourite_saved';
            }
        }
        res.send(response);
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
        message: 'favourite deleted',
    });
});

app.listen(port, () => {
    console.log(`Favourites server: http://localhost:${port}`);
});
