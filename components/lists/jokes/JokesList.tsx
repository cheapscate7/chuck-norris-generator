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
            {items && items.length > 0 ? (
                items.map((item, key) => (
                    <JokesListItem key={`joke_${item.id}_${key}`} joke={item} />
                ))
            ) : (
                <li>Nothing here 🤔</li>
            )}
        </UnorderedList>
    );
};

export default JokesList;
