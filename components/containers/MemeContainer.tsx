import styled, { css } from 'styled-components';

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

const ImpactText = styled.h3`
    -webkit-text-stroke: 1px black;
    color: white;
    font-size: 3rem;
    font-family: Impact, sans-serif;
    text-align: center;
`;
