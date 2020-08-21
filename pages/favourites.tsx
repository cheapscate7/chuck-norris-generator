import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import MenuList from '../components/lists/menu/MenuList';

const pageTitle = 'Home';
const pageDescription = 'View your favourite Chuck Norris memes';

const FavouritesPage: NextPage = () => (
    <Layout title={pageTitle} description={pageDescription}></Layout>
);

export default FavouritesPage;
