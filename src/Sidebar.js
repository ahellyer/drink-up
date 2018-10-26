import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(){
        super()
        this.state = {
            wine: false,
            spirits: false,
            beer: false,   
        }
    }

    handleChange = (e) => {
        console.log(e.target.value);
        const key = e.target.value
        const val = !this.state[key]
        const obj = {}
        obj[key] = val
        this.setState(obj)
    }

    handlePrice = e => {
        console.log(e.target.value);
        this.props.checkFilters(e.target.value);
    }

    render(){
        return(
            <div className="sidebar">
                <form action="">
                    <input type="checkbox" id="wine" name="drinkType" value="wine" onChange={this.handleChange}/>
                    <label htmlFor="wine">Wine</label>
                    <input type="checkbox" id="spirits" name="drinkType" value="spirits" onChange={this.handleChange}/>
                    <label htmlFor="spirits">Spirits</label>
                    <input type="checkbox" id="beer" name="drinkType" value="beer" onChange={this.handleChange}/>
                    <label htmlFor="beer">Beer</label>
                </form>
                <form action="">
                    <input type="radio" name="price" value="$" id="$" onChange={this.handlePrice}/>
                    <label htmlFor="$">$</label>
                    <input type="radio" name="price" value="$$$" id="$$$" onChange={this.handlePrice}/>
                    <label htmlFor="$$$">$$$</label>

                </form>
                I am a sidebar!
            </div>
        )
    }
}

export default Sidebar;