import React from 'react';

/* No es que el estado pueda cambiar, los componentes son inmutables */
/* Lo que ocurre es que solo puede ser modificada desde dentro antes de instanciar. */
class HelloChangeState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: 'Otra persona que no es Juan Manuel'}
    }

    render() {
        return <h1>Hello World {this.state.user}</h1>
    }
}

export default HelloChangeState;