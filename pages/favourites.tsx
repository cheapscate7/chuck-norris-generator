import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import { SelectedJokeProvider } from '../lib/withJokeSelect';
import MemeContainer from '../components/containers/MemeContainer';
import ApplicationContainer from '../components/containers/ApplicationContainer';
import React from 'react';
import FavouritesListContainer from '../components/containers/FavouritesListContainer';
import { FavouritesProvider } from '../lib/withFavourites';
import DeleteFavouriteButton from '../components/buttons/DeleteFavouriteButton';
import Toast from '../components/toast/Toast';

const pageTitle = 'Home';
const pageDescription = 'View your favourite Chuck Norris memes';

interface IFavouritesPageProps {
    favourites: IJoke[];
    success: boolean;
}

const FavouritesPage: NextPage<IFavouritesPageProps> = ({ favourites }) => (
    <Layout title={pageTitle} description={pageDescription}>
        <ApplicationContainer>
            <Toast toast_list={['too many items']} />
            <FavouritesProvider favourites={favourites}>
                <SelectedJokeProvider>
                    <FavouritesListContainer title={'Favourites'} />
                    <MemeContainer>
                        <DeleteFavouriteButton>Delete</DeleteFavouriteButton>
                    </MemeContainer>
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
                success: result['success'],
            };
        });
};

export default FavouritesPage;
