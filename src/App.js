import React, { Component } from 'react';
import './App.css';
import './components/Add-Todo/Addtodo'
import './components/View-Todo/Viewtodo'
import Viewtodo from './components/View-Todo/Viewtodo';
import Addtodo from './components/Add-Todo/Addtodo';


class App extends Component {

  state = {
    items : [
        
            ]
  }

  deleteItem = (id) =>
  {
    let newItems = this.state.items.filter(item => {
      return (item.id !== id)})
    this.setState({items : newItems})

    // let items = this.state.items
    // let deletedIndex = items.findIndex(item => item.id === id)
    // items.splice(deletedIndex,1)
    // this.setState({items})
  }

  addItem = (item) => {
    let items = this.state.items;
    items.push(item)
    this.setState({items})
  }

  render (){
  return (
    <div className="App container">
      <h1 id='todo_h1'>Todo list</h1>
      <Viewtodo items={this.state.items} deleteItem={this.deleteItem}/>
      <Addtodo addItem={this.addItem}/>
    </div>
  )};
}

export default App;
