import React, {Component} from "react"
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
        handleNameChange(event){
            this.setState({name:event.target.value});
        }
        handlePriceChange(){}
        handleImgurlChange(){}
    
        postNewProduct(){}
        clearInputBoxes(){}

    render(){
        return(
            <div className="form">
                <h1>Form</h1>
                <form onSubmit={this.handleImgurlChange}>
                    <label>
                        Image URL:
                        <input type="text" imgurl={this.state.imgurl} onchange={this.handleImgurlChange}/>
                    </label>
                    <input type="submit" imgrul="Submit" />
                </form>

                <form onSubmit={this.handleNameChange}>
                    <label>
                Product Name:
                <input type ="text" name={this.state.name} onchange={this.handleNameChange} />
                  </label>
                <input type="submit" name ="Submit" />
                </form>

                <form onSubmit={this.handlePriceChange}>
                    <label>
                        Price:
                        <input type="text" price={this.state.price} onchange={this.handlePriceChange}/>
                    </label>
                    <input type="submit" price="Submit"/>
                </form>
                
 
                <button> Cancel</button>
                <button>Add To Inventory</button>
            </div>
        )
    }
}