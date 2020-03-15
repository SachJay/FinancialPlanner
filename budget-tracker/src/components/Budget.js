import React, {Component} from 'react';
import Item from './Item.js';

let data = [
    {"name": "food", "expenses": 100},
    {"name": "gorc", "expenses": 122},
    {"name": "rent", "expenses": 525},
    {"name": "water", "expenses": 35}
]

class Budget extends Component {
    constructor () {
        super();
    }

    render(){
        return (
            <div id="budgetPanel">
                { 
                    data.map((item, key) =>
                        <Item id={key} name={item.name} expenses={item.expenses}/>
                    ) 
                }
            </div>
        );
    } 
} 

export default Budget;
