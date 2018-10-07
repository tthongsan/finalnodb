import React, { Component } from 'react';
import axios from 'axios';


export default class Weather extends Component {
    constructor() {
        super();
        this.state = {
            weather: [],
            cityWe: ''
        }
    }

changeCity = (e) => {
        this.setState({cityWe: e.target.value})
}
      
changeCityBtn = (city) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=ab0d4292fe5b4b465853465333dafca7`).then(res => {
        console.log(res.data)
        this.setState({
        weather: [{name: res.data.name, temp: res.data.main.temp}]
        })
    })
}

  render() {
    return (
      <div>
        <h1>Weather</h1>
        <input onChange={this.changeCity}/>
        <button onClick={() => this.changeCityBtn(this.state.cityWe)}>Input City</button>
        {this.state.weather.map(wea => {
            return <div key={wea.id}>
            <h1>{wea.name}</h1>
            <h1>{wea.temp}</h1>
            </div>
        })}
      </div>
    )
  }
}
