import React from 'react';

const Title = props => {
    return (
        <div className="titleWraper">
            <span className="title">
                {props.data}
            </span>
        </div>
    );
};

export default Title;
