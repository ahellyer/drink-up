import React, { Component } from 'react';
import axios from 'axios';
import Qs from "qs";
import './App.css';
import Header from './Header';
import Drinks from './Drinks';
import Sidebar from './Sidebar';

class App extends Component {
  constructor() {
    super()
    this.state={
      countryOptions: [],
      value: '',
      filteredList: []
    }
  }

  componentDidMount(){
 
  }

  //set state to the user input from the Header component then make api call based on input
  handleChangeValue = (input) => {
    console.log('handle change value called by submission of form')
    this.setState({ value: input }, 
    () => {
      this.getDrinks(this.state.value).then((res) => {
        const countryOptions = res.data.result
        this.setState({ countryOptions: countryOptions }, () => {
          this.filterType();
        })
      })
      
    });
  }

  getDrinks = (userInput) => {
    const APIkey = 'MDowNjk5ZWEwMC1kM2FkLTExZTgtOWFmYS05MzVkZjYzMTdmMmU6TW9BaUZvMGNaQmRFYzFBTnJzeDFlNjBhVnR1bXRBMm0yTk5n';
    return axios({
      method: "GET",
      url: "http://proxy.hackeryou.com",
      dataResponse: "json",
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      },
      params: {
        reqUrl: 'http://www.lcboapi.com/products',
        params: {
          q: userInput,
          page: 2,
          per_page: 100,
          where_not: "is_dead, is_discontinued"
        },
        proxyHeaders: {
          Authorization: `Token ${APIkey}`
        },
        xmlToJSON: false
      }
    })
  }

  //first see if they have selected wine, beer or spirits and update the filteredList in the Drinks component 
  filterType = () => {
    console.log('filter type is checked')
    console.log(this.state.countryOptions)
    //check if any type filters are checked
    // filter for multiple at once?
    const filteredTypes = this.state.countryOptions.filter((item) => {
      return item.primary_category === 'Wine' || item.primary_category === 'Spirits'
    })
    console.log(filteredTypes);
  }


  //update filteredList in state based on price preference
  checkFilters = (price) => {
    console.log('checkFilters called!')
    if (price === '$') {
      console.log('cheeeep')
      const filteredList = this.state.countryOptions.slice()
      filteredList.sort((a, b) => { return a.price_in_cents - b.price_in_cents })
      this.setState({ filteredList: filteredList })
    } else if (price === '$$$') {
      console.log('oof pricy!')
      const filteredList = this.state.countryOptions.slice()
      filteredList.sort((a, b) => { return b.price_in_cents - a.price_in_cents })
      this.setState({filteredList: filteredList})
    }
      else {
      console.log('nothing in the list yet')
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header handleChangeValue={this.handleChangeValue} />
        <h1>This is my lcbo app</h1>
        <main>
          <Drinks countryOptions={this.state.countryOptions} filteredOptions={this.state.filteredList} />
          <Sidebar checkFilters={this.checkFilters} />
        </main>
      </div>
    );
  }
}

export default App;
