import React from 'react';

class HelloProps extends React.Component {
    render() {
    return <h1>Hello World {this.props.user}</h1>
    }
}

export default HelloProps;