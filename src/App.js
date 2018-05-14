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
  }

  addItem = () => {
    this.setState((previousState, currentProps) => {
      const listItem = previousState.listItem;
      listItem.push({title:title});
      return {
        listItem: listItem
      }
    });
  }

  handleItem = (item, index) => () => {
    if (item.checked === false) {
      this.setState ((previousState, currentProps) =>{
        let newItem = previousState.itemList.map ((updatedItem, updatedIndex) => {
          if (updatedIndex === index) {
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
        <form onSubmit={this.addItem}>
          <input type='text' value={itemList.title} />
          <button type='submit'>Add</button>
        </form>
        {
          this.state.itemList.map((item, index) => { 
            console.log(item);
            return (
              <div key={'itemList_${index}'}>
                <h5>{item.title}</h5>
                <input type='checkbox' checked={item.checked} onChange={this.handleItem(item,index)} />
                <span>Delete item</span>
              </div>
            );
          })
        }
      </div>
    )
  }
}

export default App;
