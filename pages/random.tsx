import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import ApplicationContainer from '../components/containers/ApplicationContainer';
import MemeContainer from '../components/containers/MemeContainer';
import { SelectedJokeProvider } from '../lib/withJokeSelect';
import JokesListContainer from '../components/containers/JokesListContainer';
import React from 'react';
import AddToFavouritesButton from '../components/buttons/AddToFavouritesButton';
import { FavouritesProvider } from '../lib/withFavourites';

const pageTitle = 'Random';
const pageDescription = 'Find Random Chuck Norris Memes';

interface IRandomPageProps {
    jokes: IJoke[];
    favourites: IJoke[];
}

/**
 * 'RANDOM' page
 * contains a list of random memes and a panel to display them
 * memes can be added to favourites
 * @param jokes
 * @param favourites
 * @constructor
 */
const RandomPage: NextPage<IRandomPageProps> = ({ jokes, favourites }) => (
    <Layout title={pageTitle} description={pageDescription}>
        <ApplicationContainer>
            <FavouritesProvider favourites={favourites}>
                <SelectedJokeProvider>
                    <JokesListContainer jokes={jokes} title={'Random'} />
                    <MemeContainer>
                        <AddToFavouritesButton />
                    </MemeContainer>
                </SelectedJokeProvider>
            </FavouritesProvider>
        </ApplicationContainer>
    </Layout>
);

RandomPage.getInitialProps = async () => {
    const random_jokes = await fetch(
        'http://api.icndb.com/jokes/random/10?escape=javascript'
    ).then((resp) => resp.json());
    const favourites = await fetch(
        'http://localhost:7777/favourites'
    ).then((resp) => resp.json());
    return {
        jokes: random_jokes['value'],
        favourites,
    };
};

export default RandomPage;
