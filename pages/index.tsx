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
            <div>
                <h2>Welcome</h2>
                <p>This is the Chuck Norris image viewer</p>
                <h3>How it works</h3>
                <p>
                    To view 10 random Chuck Norris memes, go to{' '}
                    <span className={'italic'}>random</span>
                </p>
                <p>
                    If you like a meme, click the star icon to save it to your
                    favourites
                </p>
                <p>
                    To view your favourites, click on{' '}
                    <span className={'italic'}>favourites</span>
                </p>
                <p>
                    If you want to add random memes directly to your favourites,
                    you can click the play button, this will add a Chuck Norris
                    meme to your favourites every 5 seconds
                </p>
                <p>You can have a maximum of 10 favourites</p>
            </div>
        </ApplicationContainer>
    </Layout>
);

export default IndexPage;
