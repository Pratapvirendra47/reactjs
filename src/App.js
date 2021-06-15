import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './WebApp/headerComponent/Header.js';
import Body from './WebApp/Body/bodyComponent.js';
import Car from './WebApp/Car/CarComponent.js';
import CounterComponent from './WebApp/Counter/CounterComponent.js';
import ConditionalRendering from './WebApp/ConditionalRender/CondRendering.js';
import CarClassComponent from './WebApp/Car/CarClassComp.js';


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

  updateTire = () => {
    this.setState({
      tires : "10"
    })
  }

  render() {
    return (
      // JSX format
      <div>
        {/* <Header />
        <Body />
        {this.state.message} */}

        {/* <Car
          tires={this.state.tires}
          door={this.state.door}
          color={this.state.color}
          name={this.state.name}
        /> */}

        <CarClassComponent 
          tires={this.state.tires}
          door={this.state.door}
          color={this.state.color}
          name={this.state.name}
          updatingTire={this.updateTire}
        />

        {/* <CounterComponent />
        <ConditionalRendering /> */}
      
        

      </div>
    )
  }
}
export default App;
