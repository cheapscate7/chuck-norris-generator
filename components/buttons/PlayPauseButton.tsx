import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { getRandomJoke } from '../../lib/jokes';
import {
    favouritesActions,
    useFavouritesDispatch,
} from '../../lib/withFavourites';

interface IPlayPauseButtonProps {
    isRunning: boolean;
    callback: any;
}

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
