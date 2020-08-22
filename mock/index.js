const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 7777;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
        res.send(favourites);
    })
    .post((req, res) => {
        let favourites = readFavourites();
        let response = {
            success: false,
            message: '',
        };

        if (favourites.length > 10) {
            response.message = 'maximum favourites reached';
        } else {
            let is_found = false;
            favourites.forEach((favourite) => {
                if (favourite.id === req.body.id) {
                    is_found = true;
                }
            });
            if (is_found) {
                response.message = 'already exists';
            } else {
                favourites.push(req.body);
                writeFavourites(favourites);
                response.success = true;
                response.message = 'favourite saved';
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