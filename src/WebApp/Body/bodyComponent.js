import React from 'react';

class BodyFile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message : "hello from the body"
        }
    }

    render() {
        return (
            <div>
                {this.state.message}
            </div>
        )
    }
}
export default BodyFile;