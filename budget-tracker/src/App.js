import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './components/Category.js';

class App extends Component {
    constructor () {
        super();
        
        this.state = {
          categories:  {
            home: {
              title: "Home Expenses",
              items: []
            },

            food: {
              title: "Food Expenses",
              items: [
                { date: '02/24/2020', name: 'NOFRILLS DOMENICS 793', amount: '10.25' },
                { date: '03/10/2020', name: 'NOFRILLS DOMENICS 793', amount: '38.51' }
              ]
            },

            eattingOut: {
              title: "Eatting Out Expenses",
              items: [
                { date: '02/19/2020', name: 'ONNKI DONBURI', amount: '21.90' },
                { date: '02/19/2020', name: 'SLAB BURGERS', amount: '1.68' },
                { date: '02/25/2020', name: 'TIM HORTONS #1874', amount: '3.77' },
                { date: '02/29/2020',name: 'DOMINOS PIZZA 10263', amount: '19.68' },
                { date: '03/03/2020', name: 'RED SWAN PIZZA', amount: '28.66' }
              ]
            },

            debt: {
              title: "Debt Payments",
              items: []
            },

            health: {
              title: "Health Expenses",
              items: []
            }, 

            transportation: {
              title: "Transportation Expenses",
              items: [
                { date: '02/19/2020', name: 'PRESTO', amount: '20.00' }
              ]
            }, 

            personalCare: {
              title: "Personal Care Expenses",
              items: []
            },

            entertainment: {
              title: "Entertainment Expenses",
              items: []
            }, 

            miscellaneous: {
              title: "Miscellaneous Expenses",
              items: []
            } 
          }
            
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
       /* fetch('/getData')
            .then(response => response.json())
            .then(data => this.setState({ taskInfo: data }));

            console.log(this.taskInfo);*/
    }

    render(){///>
      var categories = this.state.categories;
      //console.log("Keys: "+);
        var keys = Object.keys(categories);
        
        return (
          <div id="budgetPanel" className="container bg-warning py-1 mt-4 rounded">
            { 
                keys.map((categoryName) =>
                  
        
                  <Category category={categories[categoryName]}/>
                )
            }
          </div>
        )
         
    } 
} 

export default App;
