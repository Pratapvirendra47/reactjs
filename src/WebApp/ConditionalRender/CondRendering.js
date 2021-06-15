import React from 'react';

class CondRendering extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : true
        }
    }


    render() {

        return (
            <div>
                hello {this.state.isLoggedIn ? "Viren" : "SignIn"}
            </div>
        )

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Hello Viren
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Hello Signin
        //         </div>
        //     )

        // }

        
    }
}

export default CondRendering;