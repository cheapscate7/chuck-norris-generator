import React from 'react';
import JokesList from '../lists/jokes/JokesList';
import JokesListTitle from '../titles/JokesListTitle';

interface IJokesListContainerProps {
    title: string;
    jokes: IJoke[];
}

const JokesListContainer: React.FC<IJokesListContainerProps> = ({
    title,
    jokes,
}) => {
    return (
        <article>
            <JokesListTitle>
                <h2>{title}</h2>
            </JokesListTitle>
            <JokesList items={jokes} />
        </article>
    );
};

export default JokesListContainer;
