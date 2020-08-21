import styled from 'styled-components';
import ImpactText from '../titles/ImpactText';

const MemeContainer = () => {
    return (
        <Container>
            <ImpactText>Hello</ImpactText>
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
