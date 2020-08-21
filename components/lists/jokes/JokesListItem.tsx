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
    const handleClick = () => {
        selectedJokeState.selectedJoke.id === joke.id
            ? selectedJokeDispatch(selectJokeActions.reset())
            : selectedJokeDispatch(selectJokeActions.setSelectedJoke(joke));
    };

    return (
        <UnorderedListItem>
            <button onClick={handleClick}>
                <JokeListTitle>{joke.joke}</JokeListTitle>
            </button>
        </UnorderedListItem>
    );
};

export default JokesListItem;
