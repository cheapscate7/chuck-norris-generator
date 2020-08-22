import UnorderedListItem from '../UnorderedListItem';
import React from 'react';
import JokeListItemTitle from '../../titles/JokeListItemTitle';
import {
    selectJokeActions,
    useSelectedJokeDispatch,
    useSelectedJokeState,
} from '../../../lib/withJokeSelect';
import ConvertQuotes from '../../../lib/helpers/strings';

interface IJokesListItemProps {
    joke: IJoke;
}

const JokesListItem: React.FC<IJokesListItemProps> = ({ joke }) => {
    const selectedJokeDispatch = useSelectedJokeDispatch();
    const selectedJokeState = useSelectedJokeState();
    const selected = selectedJokeState.selectedJoke.id === joke.id;

    const handleClick = () => {
        selected
            ? selectedJokeDispatch(selectJokeActions.reset())
            : selectedJokeDispatch(selectJokeActions.setSelectedJoke(joke));
    };

    return (
        <UnorderedListItem active={selected}>
            <button onClick={handleClick}>
                <JokeListItemTitle>
                    {ConvertQuotes(joke.joke)}
                </JokeListItemTitle>
                <Categories categories={joke.categories} joke_id={joke.id} />
            </button>
        </UnorderedListItem>
    );
};

export default JokesListItem;

interface ICategoriesProps {
    categories: string[];
    joke_id: number;
}

const Categories: React.FC<ICategoriesProps> = ({ categories, joke_id }) => {
    return (
        <p>
            Categories:{' '}
            {categories.map((category, index) => (
                <span key={`joke_${joke_id}_${index}`} className={'italic'}>
                    {' '}
                    {category}{' '}
                </span>
            ))}
        </p>
    );
};
