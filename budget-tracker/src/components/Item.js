import React from 'react';

function Item (props) {
    return (
        <div id="budgetPanel">
            <p>{props.name}: {props.expenses}</p>
        </div>
    );
} 

export default Item;