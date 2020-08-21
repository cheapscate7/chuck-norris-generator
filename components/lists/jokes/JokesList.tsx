import React from 'react';
import UnorderedList from '../UnorderedList';
import UnorderedListItem from '../UnorderedListItem';
import Link from 'next/link';
import JokesListItem from './JokesListItem';

interface IJokesListprops {
    items: IJoke[];
}

const JokesList: React.FC<IJokesListprops> = ({ items }) => {
    return (
        <UnorderedList>
            {items &&
                items.map((item) => (
                    <JokesListItem key={item.id}>{item.joke}</JokesListItem>
                ))}
        </UnorderedList>
    );
};

export default JokesList;
