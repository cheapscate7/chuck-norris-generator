import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

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
    return <Button onClick={callback}>{isRunning ? 'pause' : 'play'}</Button>;
};

export default PlayPauseButton;

const Button = styled.button`
    box-sizing: border-box;
    width: 100%;
    padding: 1em 2em;
    transition: 0.2s ease;
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.foreground};
    `};
    &:focus,
    :hover {
        ${({ theme }) => css`
            background-color: ${rgba(theme.colors.highlight_1, 0.8)};
            color: ${theme.colors.coloured_button_foreground};
        `};
    }
`;
