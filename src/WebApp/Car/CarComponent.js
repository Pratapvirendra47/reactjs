import React from 'react';


function CarComponent(props) {
    return (
        <div>
            Car has {props.tires} tires
            Car has {props.door} door
            Car is of {props.color} color
            Car Brand is {props.name} 
        </div>
    )
}
export default CarComponent;