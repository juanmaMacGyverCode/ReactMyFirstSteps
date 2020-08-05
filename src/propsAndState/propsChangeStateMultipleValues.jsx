import React from 'react';

/* No da error si no pido explícitamente la propiedad firstName en app.js */
class HelloChangeStateMultipleValues extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: 'Pedro', lastName: 'Johnson', age: 30}
        this.setState({firstName: 'Jim', age: 31})
    }

    render() {
       
        return <h1>Hello World {this.state.user} {this.state.lastName} {this.state.firstName} {this.state.age}</h1>
    }
}

export default HelloChangeStateMultipleValues;