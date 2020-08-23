import styled from 'styled-components';
import ImpactText from '../titles/ImpactText';
import { useSelectedJokeState } from '../../lib/withJokeSelect';

/**
 * this displays a meme provided by the selected joke context
 * the text is displayed using impact font
 * can also render a button such as one for deleting or adding the displayed meme
 * to the favourites
 * @param children
 * @constructor
 */
const MemeContainer: React.FC = ({ children }) => {
    const selectedJokeState = useSelectedJokeState();
    const selectedJoke = selectedJokeState.selectedJoke;

    if (selectedJoke.id) {
        return (
            <Container>
                {children}
                <ImpactText>{selectedJoke.joke}</ImpactText>
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
