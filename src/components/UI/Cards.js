import React from 'react';

import classes from './Cards.module.css';

function Cards(props) {
    return (
        <div className={`${classes.cards} ${props.className}`}>{props.children}</div>
    );

}

export default Cards;