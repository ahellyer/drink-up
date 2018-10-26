import React, { Component } from 'react';

class Drinks extends Component {
    constructor(){
        super()
        this.state = {
            countryOptions: [],
            filteredList: []
        }
    }
    
    componentDidMount(){
        // console.log('drinks component mounted!');
        //update state
        // this.setState({
        //     countryList: this.props.countryList,
        //     filteredList: this.props.filteredList
        // })
    }

    componentWillReceiveProps(props){
        // console.log(props)
        this.setState({
            countryOptions: props.countryOptions,
            filteredList: props.filteredOptions
        })
    }

    render() {
        console.log('drinks rendered')
        return (
            <div className="drinks">
                {
                this.state.filteredList.length > 0 ? this.state.filteredList.map((item) => {
                    return (
                    <div className="drinks__drink-container">
                        <img src={item.image_url}/>
                        <h2>{item.name}</h2>
                        <p>${item.price_in_cents / 100}</p>
                    </div>
                    )
    }) : 
                this.state.countryOptions.map((item) => {
                    return (
                        <div className="drinks__drink-container">
                            <img src={item.image_url} />
                            <h2>{item.name}</h2>
                            <p>${item.price_in_cents / 100}</p>
                        </div>
                    )
                })
    }
            </div>
        )
    }
}

export default Drinks