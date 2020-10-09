import React, {Component} from "react"
import axios from 'axios'
import '../App.css'

export default class Form extends Component{
    constructor(){
        super()
        
        this.state={
            name: '',
            price: 0,
            imgurl: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handlePriceChange = this.handleImgurlChange.bind(this)
        this.postNewProduct = this.postNewProduct.bind(this)
        this.clearInputBoxes = this.clearInputBoxes.bind(this)
    }
        handleNameChange=(e)=>{
            this.setState({
                name:e.target.value,
            })
        }
        handlePriceChange=(e)=>{
            this.setState({
                price:e.target.value,
            })
        }
        handleImgurlChange=(e)=>{
            this.setState({
                imgurl:e.target.value,
            })
        }
        handleClick = () => {
            const { name, price, imgurl } = this.state
            axios.post('/api/products', { name, price, imgurl }).then((res) => {
              this.setState({
                    name: res.data,
                    price: res.data,
                    imgurl: res.data
                
              })
            })
          }
       
    
        postNewProduct(){}
        clearInputBoxes(){}

    render(){
        return(
            <div className="form">
                <h1>Form</h1>
            
                <form  onChange={(e) => {
            this.handleImgurlChange(e)
          }}>
                    <label>
                        Image URL:
                        <input type="text" imgurl={this.state.imgurl} onChange={this.handleImgurlChange}/>
                    </label>
                    <input type="submit" imgurl={this.state.imgurl} onChange={this.handleImgurlChange} />
                </form>

                <form onSubmit={this.handleNameChange}>
                    <label>
                Product Name:
                <input type ="text" name={this.state.name} onChange={this.handleNameChange} />
                  </label>
                <input type="submit" name ={this.state.name} />
                </form>

                <form onSubmit={this.handlePriceChange}>
                    <label>
                        Price:
                        <input type="text" price={this.state.price} onchange={this.handlePriceChange}/>
                    </label>
                    <input type="submit" price="Submit"/>
                </form>
                
 
                <button> Cancel</button>

                <button onClick={()=>{
                    this.handleClick()
                }}>Add To Inventory</button>
            </div>
        )
    }
}