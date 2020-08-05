import React from 'react';

class HelloJSX extends React.Component {
    render() {
        return <h1>Hello World {this.props.count}</h1>;
    }
}

export default HelloJSX;