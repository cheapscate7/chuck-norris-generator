// List.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import JokeList from '../components/lists/jokes/JokeList';
import JokeListItem from '../components/lists/jokes/JokeListItem';

export default {
    title: 'Components/JokeList',
    component: JokeList,
    excludeStories: /.*Data$/,
} as Meta;

export const jokeListData = [
    {
        id: '0',
        joke: 'Chuck Norris is so cool, he is an ice cube',
        categories: ['nerdy'],
    },
    {
        id: '1',
        joke: 'When aliens invade, they ask for Chuck Norris',
        categories: [],
    },
];

export const Empty = () => <JokeList items={[]} />;
export const Populated = () => <JokeList items={jokeListData}></JokeList>;
