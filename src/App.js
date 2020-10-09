import React,{Component} from 'react';
import Header from './Components/Header'
import Form from './Components/Form'
import './App.css';
import Dashboard from './Components/Dashboard'
import axios from 'axios';

export default class App extends Component{
  constructor(){
    super()

    this.state={
      inventory:[]
    }
  }
componentDidMount(){
  axios.get()
  .then((res) =>
  this.setState({
    inventory:[{}]
  }))
  .catch(err => console.log(err))
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