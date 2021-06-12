import React from 'react';

class CounterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countValue : 0
        }
    }

    incrementValue = () => {
        this.setState({
            countValue : this.state.countValue + 1
        })
    }

    incrementCounterFiveTimes = () => {
        this.incrementValue();
        this.incrementValue();
        this.incrementValue();
        this.incrementValue();
        this.incrementValue();
    }

    render() {
        console.log("seeing the counter values", this.state.countValue);
        return (
            <div style={{textAlign : "center"}}>
                <div>
                    {this.state.countValue}
                </div>
                <button onClick={this.incrementCounterFiveTimes}> Click Me !! </button>
            </div>
        )
    }
}

export default CounterComponent;