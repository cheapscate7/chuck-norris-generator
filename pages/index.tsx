import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import MenuList from '../components/lists/menu/MenuList';

const pageTitle = 'Home';
const pageDescription =
    'Find random Chuck Norris memes - save your favourites - the best place for Chuck Norris Lovers';

const IndexPage: NextPage = () => (
    <Layout title={pageTitle} description={pageDescription}>
        <MenuList></MenuList>
    </Layout>
);

export default IndexPage;
