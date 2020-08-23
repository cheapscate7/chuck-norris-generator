import React from 'react';
import ListBottomActionButton from './ListBottomActionButton';

interface IRandomiseButtonProps {
    listIsPopulated: boolean;
    callback: any;
}

/**
 * runs a callback and displays either "randomise" or "get jokes
 * @param callback  the function to be run when the user clicks play or pause
 * @param isRunning     is the callback running
 * @constructor
 */
const RandomiseButton: React.FC<IRandomiseButtonProps> = ({
    callback,
    listIsPopulated,
}) => {
    return (
        <ListBottomActionButton onClick={callback}>
            {listIsPopulated ? 'Randomise' : 'Get Jokes'}
        </ListBottomActionButton>
    );
};

export default RandomiseButton;
