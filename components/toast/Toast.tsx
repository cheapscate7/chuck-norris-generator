import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ToastItem from './ToastItem';

interface IToastInterfaceProps {
    toast_list: any[];
}

const Toast: React.FC<IToastInterfaceProps> = ({ toast_list }) => {
    const [list, setList] = useState(toast_list);

    useEffect(() => {
        setList(toast_list);
    }, [toast_list, list]);

    return (
        <Notifications>
            {list.map((item, index) => (
                <ToastItem key={`toast_${index}`}>{item}</ToastItem>
            ))}
        </Notifications>
    );
};
export default Toast;

const Notifications = styled.div`
    box-sizing: border-box;
    position: fixed;
    bottom: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: toast-in-right 0.7s;
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.small};
    `};
`;
