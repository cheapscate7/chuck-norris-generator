import React from 'react';
import UnorderedList from '../UnorderedList';
import UnorderedListItem from '../UnorderedListItem';
import Link from 'next/link';

const MenuList: React.FC = () => {
    return (
        <UnorderedList>
            <UnorderedListItem>
                <Link href={'/random'}>
                    <a>Random</a>
                </Link>
            </UnorderedListItem>
            <UnorderedListItem>
                <Link href={'/favourites'}>
                    <a>Favourites</a>
                </Link>
            </UnorderedListItem>
        </UnorderedList>
    );
};

export default MenuList;
