import React from 'react';
import styled from 'styled-components';

/**
 * Wrapper for the page title
 * @constructor
 */
const Title: React.FC = ({ children }) => {
    return (
        <Container>
            <Icon src={'/icon-64.webp'} />
            {children}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4em;
`;

export default Title;

const Icon = styled.img`
    width: 64px;
    height: 64px;
`;
