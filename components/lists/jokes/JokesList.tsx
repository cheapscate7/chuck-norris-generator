import React from 'react';
import UnorderedList from '../UnorderedList';
import UnorderedListItem from '../UnorderedListItem';
import Link from 'next/link';

interface IJokesListprops {
    items: IJoke[];
}

const JokesList: React.FC<IJokesListprops> = ({ items }) => {
    return (
        <UnorderedList>
            {items &&
                items.map((item) => (
                    <UnorderedListItem key={item.id}>
                        {item.joke}
                    </UnorderedListItem>
                ))}
        </UnorderedList>
    );
};

export default JokesList;
