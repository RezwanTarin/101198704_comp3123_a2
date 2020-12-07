import './App.scss';
import { Image} from 'react-bootstrap';
import React , { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name  : null, weather  : null, main  : null,
      wind  : null, isMounted : false, system  : null,iconhref : null,
     };
  };
    

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=ffbf99f93a2893f01da7d1d6a1b6f78d`)
    .then(res => {
        const { name,weather , main , wind , sys } = res.data;
        let ref =  `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
        this.setState({ weather : weather[0] , main , wind , sys , name , iconhref : ref, isMounted:true });
    })
}

  render() {
    const {  main , wind ,  name , iconhref, isMounted  } = this.state;
    if(isMounted){
      return (
        <div className='App' >
          <div className='container'>
          <table>
            <header>
            <h3>Weather App</h3>
            <tr> {name}</tr>
            <tr ><Image src={iconhref} className='weather-icon'/></tr>
            </header>
            <main>
            <tr>{main.weather}</tr>
            <tr className='temperature'>Tempreture: {main.temp}</tr>
            <tr>Feeling : {main.feels_like}</tr>
            <tr className='hi-lo'>Minimum: {main.temp_min}</tr>
            <tr className='hi-lo'>Maximum: {main.temp_max}</tr>
            </main>
            <footer>
            <tr lassName='weather-prop'>Humidity: {main.humidity}</tr>
            <tr>Wind: {wind.speed }</tr>
            </footer>
          </table>
          </div>
        </div>
      );
    }else{
      return(
        <tex> Try Again </tex>
      )
      
    }
  }
  

}

export default App;
