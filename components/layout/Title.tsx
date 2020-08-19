import React from 'react';
import styled from 'styled-components';

/**
 * Wrapper for the page title
 * @constructor
 */
const Title: React.FC = ({ children }) => {
    return (
        <Container>
            <img src={'/icon-64.webp'} />
            {children}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    gap: 0.4em;
`;

export default Title;
