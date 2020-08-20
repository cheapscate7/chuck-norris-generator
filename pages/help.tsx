import { NextPage } from 'next';
import Layout from '../components/layout/Layout';

const pageTitle = 'Help';
const pageDescription = 'How to use the best tool for Chuck Norris Lovers';

const IndexPage: NextPage = () => (
    <Layout title={pageTitle} description={pageDescription}>
        <h1>Help</h1>
    </Layout>
);

export default IndexPage;
