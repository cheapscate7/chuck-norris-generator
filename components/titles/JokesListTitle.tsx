import styled from 'styled-components';
import Arrow from '../icons/Arrow';
import React from 'react';
import Link from 'next/link';

/**
 * The header for the list of jokes
 * contains a link back to the main page
 * @param children
 * @constructor
 */
const JokesListTitle: React.FC = ({ children }) => {
    return (
        <Container>
            <Link href={'/'}>
                <a>
                    <Arrow
                        direction={'left'}
                        match={'foreground'}
                        id={'back_button'}
                    />
                </a>
            </Link>
            {children}
        </Container>
    );
};

export default JokesListTitle;

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 3em;
`;
