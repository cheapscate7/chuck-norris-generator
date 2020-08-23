import React from 'react';

interface IToastItemProps {
    closeHandler: () => void;
}

const ToastItem: React.FC<IToastItemProps> = ({ children, closeHandler }) => {
    return (
        <div>
            <button onClick={closeHandler}>x</button>
            <p>{children}</p>
        </div>
    );
};

export default ToastItem;
