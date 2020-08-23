import React from 'react';
import styled from 'styled-components';
import Icon from '../icons/Icon';

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

export default Title;

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4em;
`;
