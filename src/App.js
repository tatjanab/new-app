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
      itemList: itemList,
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  addItem = (event) => {
    event.preventDefault();
    const title = this.state.value;
    this.setState((previousState, currentProps) => {
      const itemList = previousState.itemList;
      itemList.push({title:title});
      return {
        itemList: itemList
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

  deleteItemHandler = (index) => {
    this.setState((previousState, currentProps) => {
      const itemList = previousState.itemList;
      itemList.splice(index, 1);
      return {
        itemList: itemList
      }
    });
  }

  render() {
    return (
      <div className="main-container">
        <h3 className="list-title">Item List</h3>
        <form className="main-form" 
              onSubmit={this.addItem}>
          <input type='text' 
                 placeholder='Enter task name'
                 className="form-input"
                 value={this.state.value} 
                 onChange={this.handleChange} />
          <button type='submit'
                  className="form-button">
          Add</button>
        </form>
        {
          this.state.itemList.map((item, index) => { 
            return (
              <div className="list">
                <div className="list-item"
                     key={`itemList_${index}`}>
                  <h5 className="item-title">{item.title}</h5>
                  <input type='checkbox' 
                         checked={item.checked} 
                         onChange={this.handleItem(item,index)} />
                  <button className="item-delete"
                          onClick={()=> this.deleteItemHandler(index)}>delete</button>
                </div>
              </div>
            );
          })
        }
      </div>
    )
  }
}

export default App;
