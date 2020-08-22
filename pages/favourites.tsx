import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import { SelectedJokeProvider } from '../lib/withJokeSelect';
import MemeContainer from '../components/containers/MemeContainer';
import ApplicationContainer from '../components/containers/ApplicationContainer';
import React from 'react';
import FavouritesListContainer from '../components/containers/FavouritesListContainer';
import { FavouritesProvider } from '../lib/withFavourites';

const pageTitle = 'Home';
const pageDescription = 'View your favourite Chuck Norris memes';

interface IFavouritesPageProps {
    favourites: IJoke[];
    success: boolean;
}

const FavouritesPage: NextPage<IFavouritesPageProps> = ({ favourites }) => (
    <Layout title={pageTitle} description={pageDescription}>
        <ApplicationContainer>
            <FavouritesProvider>
                <SelectedJokeProvider>
                    <FavouritesListContainer
                        jokes={favourites}
                        title={'Favourites'}
                    />
                    <MemeContainer />
                </SelectedJokeProvider>
            </FavouritesProvider>
        </ApplicationContainer>
    </Layout>
);

FavouritesPage.getInitialProps = async () => {
    return await fetch('http://localhost:7777/favourites')
        .then((resp) => resp.json())
        .then((result) => {
            return {
                favourites: result['data'],
                success: true,
            };
        });
};

export default FavouritesPage;
