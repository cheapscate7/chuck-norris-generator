import React from 'react';
import ListBottomActionButton from './ListBottomActionButton';

interface IPlayPauseButtonProps {
    isRunning: boolean;
    callback: any;
}

/**
 * runs a callback and displays either the word pause or play
 * @param callback  the function to be run when the user clicks play or pause
 * @param isRunning     is the callback running
 * @constructor
 */
const PlayPauseButton: React.FC<IPlayPauseButtonProps> = ({
    callback,
    isRunning,
}) => {
    return (
        <ListBottomActionButton onClick={callback}>
            {isRunning ? 'pause' : 'play'}
        </ListBottomActionButton>
    );
};

export default PlayPauseButton;
