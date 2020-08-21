import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import MenuList from '../components/lists/menu/MenuList';
import ApplicationContainer from '../components/containers/ApplicationContainer';

const pageTitle = 'Home';
const pageDescription =
    'Find random Chuck Norris memes - save your favourites - the best place for Chuck Norris Lovers';

const IndexPage: NextPage = () => (
    <Layout title={pageTitle} description={pageDescription}>
        <ApplicationContainer>
            <MenuList></MenuList>
            <div>hello</div>
        </ApplicationContainer>
    </Layout>
);

export default IndexPage;
