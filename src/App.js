import './App.scss';
import { Image} from 'react-bootstrap';
import React , { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      weather  : null,
      main  : null,
      wind  : null,
      sys  : null,
      name  : null,
      iconhref : null,
      isMounted : false
     };
  };
    

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=ffbf99f93a2893f01da7d1d6a1b6f78d`)
    .then(res => {
        const { weather , main , wind , sys , name } = res.data;
        let ref =  `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
        this.setState({ weather : weather[0] , main , wind , sys , name , iconhref : ref, isMounted:true });
    })
}

  render() {
    const {  main , wind ,  name , iconhref, isMounted  } = this.state;
    if(isMounted){
      return (
        <div >
          <table>
            <h3>Weather App</h3>
            <tr> {name}</tr>
            <tr><Image src={iconhref}/></tr>
            <tr>{main.weather}</tr>
            <tr>Tempreture: {main.temp}</tr>
            <tr>Feeling : {main.feels_like}</tr>
            <tr>Minimum Tempreture: {main.temp_min}</tr>
            <tr>Maximum Tempreture: {main.temp_max}</tr>
            <tr>Humidity: {main.humidity}</tr>
            <tr>Wind: {wind.speed }</tr>
          </table>
        </div>
      );
    }else{
      return(
        <text>Try again</text>
      )
    }
  }
  

}

export default App;
