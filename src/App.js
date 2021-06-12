import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './WebApp/headerComponent/Header.js';
import Body from './WebApp/Body/bodyComponent.js';
import Car from './WebApp/Car/CarComponent.js';
import CounterComponent from './WebApp/Counter/CounterComponent.js';


// Class Based Component
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message : "state full component",
      age : "25",
      address : "bangalore",
      tires : "4",
      door : "4",
      color : "red",
      name : "Hyundai",
      counter : 0
    } 
  }
  render() {
    return (
      // JSX format
      <div>
        {/* <Header />
        <Body />
        {this.state.message}

        <Car
          tires={this.state.tires}
          door={this.state.door}
          color={this.state.color}
          name={this.state.name}
        /> */}

        <CounterComponent />
      
        

      </div>
    )
  }
}
export default App;
