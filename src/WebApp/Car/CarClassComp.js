import React from 'react';

class CarClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                Car has {this.props.tires} tires<br/>
                Car has {this.props.door} door<br/>
                Car is of {this.props.color} color<br/>
                Car Brand is {this.props.name} <br/>
                <div>
                    <button onClick={() => {
                        this.props.updatingTire();
                    }}> 
                        Update Tires
                    </button>
                </div>
            </div>
        )
    }
}

export default CarClassComponent;