import React from 'react';

/* También llamado componentes funcionales */
/* Son stateless porque NO TIENEN CICLO DE VIDA*/
/* También son llamados componentes puros*/
const HeaderText = (props) => {
    return (
        <h1>
            {props.text}
        </h1>
    )
}

export default HeaderText;