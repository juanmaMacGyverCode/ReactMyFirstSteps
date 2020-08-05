import React, { memo } from 'react';

/* También llamado componentes funcionales */
/* Son stateless porque NO TIENEN CICLO DE VIDA*/
/* También son llamados componentes puros, tienen siempre el mismo valor de inputs*/
/*
    React tiene el React.memo, esta optimizado para las pure functional components.
*/
/* 
    Solo es renderizado si el valor del props es cambiando.
*/
const HeaderText = (props) => {
    return (
        <h1>
            {props.text}
        </h1>
    )
}

export default memo(HeaderText);