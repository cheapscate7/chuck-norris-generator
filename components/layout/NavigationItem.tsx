import styled, { css } from 'styled-components';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

interface INavigationItemProps {
    linkTo: string;
}

/**
 * A link to a single page. Found in the page header
 * @param linkTo    relative path of the page to be linked to
 * @param children
 * @constructor
 */
const NavigationItem: React.FC<INavigationItemProps> = ({
    linkTo,
    children,
}) => {
    const router = useRouter();
    const isActive = router.pathname === linkTo;
    return (
        <NavigationItemContainer>
            <Link href={linkTo}>
                <a className={isActive && 'active'}>{children}</a>
            </Link>
        </NavigationItemContainer>
    );
};

const NavigationItemContainer = styled.li`
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.small};
    `};

    a {
        padding: 0.2em 0.4em;
        &:focus,
        :hover {
            text-decoration: underline;
            ${({ theme }) => css`
                background-color: ${theme.colors.highlight_1};
            `};
        }
        &.active {
            border: 1px solid white;
        }
    }
`;

export default NavigationItem;
