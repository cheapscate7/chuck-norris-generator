// Joke.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import JokeListItem from '../components/lists/jokes/JokeListItem';

export default {
    title: 'Components/JokeItem',
    component: JokeListItem,
} as Meta;

export const Empty = () => <JokeListItem empty />;
export const WithJoke = () => <JokeListItem>Hello</JokeListItem>;
export const WithJokeAndCategories = () => <JokeListItem>Hello</JokeListItem>;
