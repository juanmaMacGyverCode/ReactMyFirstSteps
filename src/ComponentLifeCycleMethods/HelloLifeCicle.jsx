import React from 'react';

class HelloLifeCicle extends React.Component {
    constructor (props) {
        super(props);
        this.state = {user: 'John'}
    }

    /* Este método es propio de react */
    /* Es llamado despues de que el componente se haya formado*/
    /* La contraparte es componentWillMount, es llamado automáticamente */
    /* Antes de que el componente sea montado, pero no se recomienda.*/
    componentDidMount() {
        this.setState({user: 'Jim'});
    }

    /*
        Avisar a React si la salida de un componente no se ve afectada por el cambio actual en el estado o los accesorios. El comportamiento predeterminado es volver a procesar cada cambio de estado y, en la gran mayoría de los casos, debe confiar en el comportamiento predeterminado.
        Es invocado antes de renderizar cuando los nuevos accesorios o el estado están siendo recibidos. Por defecto es true. Este método no es llamado para el renderizado inicial o cuando forceUpdate() es usado.
    */
    //shouldComponentUpdate(nextProps, nextState) {
    //    return true;
    //}

    // componentWillUnmount()
    /*
        Se llama este método antes de que el componente sea borrado del DOM.
        Este es un bueno para limpiar recursos, tiempos o cancelar solicitudes
    */

    render() {
        return <h1>Hello World {this.state.user}</h1>;
    }
}

export default HelloLifeCicle;