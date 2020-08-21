import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import MenuList from '../components/lists/menu/MenuList';

const pageTitle = 'Random';
const pageDescription = 'Find Random Chuck Norris Memes';

const RandomPage: NextPage = () => (
    <Layout title={pageTitle} description={pageDescription}></Layout>
);

export default RandomPage;
