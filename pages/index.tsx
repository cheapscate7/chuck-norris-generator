import { NextPage } from 'next';
import Layout from '../components/layout/Layout';

const pageTitle = 'Home';
const pageDescription =
    'Find random Chuck Norris memes - save your favourites - the best place for Chuck Norris Lovers';

const IndexPage: NextPage = () => (
    <Layout title={pageTitle} description={pageDescription}>
        <h1>Hello</h1>
    </Layout>
);

export default IndexPage;
