import styled from 'styled-components';
import ImpactText from '../titles/ImpactText';
import { useSelectedJokeState } from '../../lib/withJokeSelect';
import ConvertQuotes from '../../lib/helpers/strings';

const MemeContainer: React.FC = ({ children }) => {
    const selectedJokeState = useSelectedJokeState();
    const selectedJoke = selectedJokeState.selectedJoke;

    if (selectedJoke.id) {
        return (
            <Container>
                {children}
                <ImpactText>{ConvertQuotes(selectedJoke.joke)}</ImpactText>
            </Container>
        );
    } else {
        return <Container />;
    }
};

export default MemeContainer;

const Container = styled.div`
    margin: auto 0;
    height: 90%;
    background-image: url('chuck_norris_background.webp');
    background-position: center;
    background-size: cover;
`;
