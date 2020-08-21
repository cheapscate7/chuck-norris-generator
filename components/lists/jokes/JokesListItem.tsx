import UnorderedListItem from '../UnorderedListItem';
import React from 'react';
import JokeListTitle from '../../titles/JokeListTitle';
import {
    selectJokeActions,
    useSelectedJokeDispatch,
    useSelectedJokeState,
} from '../../../lib/withJokeSelect';

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
                <JokeListTitle>{joke.joke}</JokeListTitle>
                <p>categories: {joke.categories.map((category) => category)}</p>
            </button>
        </UnorderedListItem>
    );
};

export default JokesListItem;
