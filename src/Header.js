import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super();
        this.state= {
            value: '',
        }
    }

    handleChange = (e) =>{
        console.log(e.target.value);
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('it was submitted');
        this.props.handleChangeValue(this.state.value);
        //reset form to 0
    }

    render() {
        return (
            <header>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="" >What country are you travelling to?</label>
                    <input type="text" placeholder="search" onChange={this.handleChange}/>
                    <input type="submit" name="" id="" value="find my drinks" />
                </form>
            </header>
        )
    }
}

export default Header;