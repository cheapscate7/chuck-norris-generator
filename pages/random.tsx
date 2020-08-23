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
    favourites: IJoke[];
}

/**
 * 'RANDOM' page
 * contains a list of random memes and a panel to display them
 * memes can be added to favourites
 * @param favourites
 * @constructor
 */
const RandomPage: NextPage<IRandomPageProps> = ({ favourites }) => (
    <Layout title={pageTitle} description={pageDescription}>
        <ApplicationContainer>
            <FavouritesProvider favourites={favourites}>
                <SelectedJokeProvider>
                    <JokesListContainer title={'Random'} />
                    <MemeContainer>
                        <AddToFavouritesButton />
                    </MemeContainer>
                </SelectedJokeProvider>
            </FavouritesProvider>
        </ApplicationContainer>
    </Layout>
);

RandomPage.getInitialProps = async () => {
    const favourites = await fetch(
        'http://localhost:7777/favourites'
    ).then((resp) => resp.json());
    return {
        favourites,
    };
};

export default RandomPage;
