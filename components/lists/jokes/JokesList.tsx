import React from 'react';
import UnorderedList from '../UnorderedList';
import UnorderedListItem from '../UnorderedListItem';
import Link from 'next/link';
import JokesListItem from './JokesListItem';

interface IJokesListprops {
    items: IJoke[];
}

/**
 * displays a list of jokes if there are any,
 * else it tells the user there is nothing there
 * @param items     the list of jokes or favourites to display
 * @constructor
 */
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
