import React from "react"
import Product from './Product'
import "../App.css"
//I think I want a componentDidUpdate() here to display products?
const Dashboard = () => {
    return(
        <div className="dashboard">
            <h1>Dashboard</h1>
        <Product />
        </div>
    )
}

export default Dashboard;