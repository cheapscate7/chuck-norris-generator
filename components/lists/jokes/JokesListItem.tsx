import UnorderedListItem from '../UnorderedListItem';
import React from 'react';
import JokeListTitle from '../../titles/JokeListTitle';

const JokesListItem: React.FC = ({ children }) => {
    return (
        <UnorderedListItem>
            <button>
                <JokeListTitle>{children}</JokeListTitle>
            </button>
        </UnorderedListItem>
    );
};

export default JokesListItem;
