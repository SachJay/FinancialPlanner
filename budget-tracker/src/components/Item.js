import React from 'react';

function Item (props) {
    return (
        <div id="budgetPanel" class="bg-danger rounded mt-3">
            <p class="p-1 pl-3">{props.date}:  {props.name}: {props.amount}</p>
        </div>
    );
} 

export default Item;