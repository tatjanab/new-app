import React, { Component } from 'react';
import './App.css';

let itemList = [
  {
    title: 'Buy groceries',
    checked: false
  },
  {
    title: 'Walk dog',
    checked: false
  },
  {
    title: 'Cook dinner',
    checked: false
  },
];

class App extends Component {
  constructor () {
    super();
    this.state = {
      itemList: itemList
    };
  };

  handleItem = (item, index) => () => {
    console.log(item);
    if (item.checked === false) {
      this.setState ((previousState, currentProps) =>{
        let newItem = previousState.itemList.map ((updatedItem, updatedIndex) => {
          if (updatedItem === index) {
            updatedItem.checked = true;
          }
          return updatedItem
        });
        return {
          itemList: newItem,
        };
      })
    } else {
      return alert ('List item is already done')
    }
  }


  render() {
    return (
      <div>
      {
        this.state.itemList.map((item, index) => { 
          console.log(item);
          return (
            <div key={'itemList_${index}'}>
              <h5>{item.title}</h5>
              <input type='checkbox' onClick={this.handleItem(item,index)} />
            </div>
          );
        })
      }
      </div>
    )
  }
}

export default App;
