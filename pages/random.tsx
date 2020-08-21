import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import MenuList from '../components/lists/menu/MenuList';
import ApplicationContainer from '../components/containers/ApplicationContainer';
import JokesList from '../components/lists/jokes/JokesList';

const pageTitle = 'Random';
const pageDescription = 'Find Random Chuck Norris Memes';

interface IRandomPageProps {
    jokes: IJoke[];
    success: boolean;
}

const RandomPage: NextPage<IRandomPageProps> = ({ jokes, success }) => (
    <Layout title={pageTitle} description={pageDescription}>
        <ApplicationContainer>
            <JokesList items={jokes}></JokesList>
            <div></div>
        </ApplicationContainer>
    </Layout>
);

RandomPage.getInitialProps = async () => {
    return await fetch('http://api.icndb.com/jokes/random/10')
        .then((resp) => resp.json())
        .then((result) => {
            return {
                jokes: result['value'],
                // success: result['type'] === 'success' && result['value'].length > 0
                success: true,
            };
        });
};

export default RandomPage;
