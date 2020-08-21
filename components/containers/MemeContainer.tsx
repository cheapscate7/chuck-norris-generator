import styled from 'styled-components';
import ImpactText from '../titles/ImpactText';
import { useSelectedJokeState } from '../../lib/withJokeSelect';

const MemeContainer = () => {
    const selectedJokeState = useSelectedJokeState();
    return (
        <Container>
            <ImpactText>{selectedJokeState.selectedJoke.joke}</ImpactText>
        </Container>
    );
};

export default MemeContainer;

const Container = styled.div`
    margin: auto 0;
    height: 90%;
    background-image: url('chuck_norris_background.webp');
    background-position: center;
    background-size: cover;
`;
