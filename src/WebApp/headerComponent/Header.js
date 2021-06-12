import React from 'react';


class header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message : "hello from Header based component"
        }
    }

    render() {
        return (
            <div style={{background : "red", height : "40px"}}>
                {this.state.message}
            </div>     
        )
    }
}
export default header;