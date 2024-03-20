import React from 'react';

function Container({ children }) {
    return (
        <div>
            <div>Container</div>
            <hr></hr>
            <div>{children}</div>
        </div>
    );
}

export default Container;
