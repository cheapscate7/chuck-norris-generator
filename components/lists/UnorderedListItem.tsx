import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const UnorderedListItem = styled.li`
    margin: 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => css`
        border-bottom: 1px solid ${theme.colors.foreground};
    `};

    > a,
    button {
        box-sizing: border-box;
        width: 100%;
        flex-grow: 1;
        padding: ${(props) => (props.active ? '1em' : '0.5em')} 1em;
        transition: 0.2s ease;
        &:focus,
        :hover {
            padding-left: 1.5em;
            padding-right: 0.5em;
            ${({ theme }) => css`
                background-color: ${rgba(theme.colors.highlight_1, 0.3)};
            `};
        }
    }
`;

export default UnorderedListItem;
