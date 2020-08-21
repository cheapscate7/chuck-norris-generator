import React from 'react';
import UnorderedList from '../UnorderedList';
import UnorderedListItem from '../UnorderedListItem';

const MenuList: React.FC = () => {
    return (
        <UnorderedList>
            <UnorderedListItem>
                <a>Random</a>
            </UnorderedListItem>
            <UnorderedListItem>
                <a>Favourites</a>
            </UnorderedListItem>
        </UnorderedList>
    );
};

export default MenuList;
