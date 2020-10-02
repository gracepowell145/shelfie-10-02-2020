import React,{Component} from 'react';
import Header from './Components/Header'
import Form from './Components/Form'
import './App.css';
import Dashboard from './Components/Dashboard'

export default class App extends Component{
  constructor(){
    super()

    this.state={
      inventory:[]
    }
  }

  //Methods: get inventory from dataBase

render(){
  return (
    <div className="App">
      <Header />
      <Dashboard/>
      <Form />
    </div>
  );
}
}