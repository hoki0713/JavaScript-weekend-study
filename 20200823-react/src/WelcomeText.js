import React from 'react';

const WelcomeText = (props) => {
    console.log(props)
    return (
        <>
            <p>{props.name}님 안녕하세요!</p>
        </>
    );
};

export default WelcomeText;