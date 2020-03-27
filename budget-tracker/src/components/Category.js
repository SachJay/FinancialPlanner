import React from 'react';
import Item from './Item.js';

function Category (props) {
    console.log("GAE");
    
    return (
        
        <div id="budgetPanel" class="container bg-warning py-1 mt-4 rounded">
            <h3> {props.category.title} </h3>

            { 
                props.category.items.map((item, key) =>
                    <Item id={key} date={item.date} name={item.name} amount={item.amount}/>
                ) 
            }

            <p>Total {props.category.title}: {getTotalExpenses(props.category.items)} </p>

        </div>
    );
} 

function getTotalExpenses(items){
    let totalExpense = 0;

    items.forEach(item => {
        totalExpense+=parseInt(item.amount);
    });

    return totalExpense;
}

export default Category;