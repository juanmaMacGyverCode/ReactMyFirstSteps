import React from 'react';

const MyTable = () => {
    const data = [{brand: 'Ford', model: 'Mustang'},
        {brand: 'VM', model: 'Beetle'}, {brand: 'Tesla', model: 'Model S'}];
    const tableRows = data.map( (item, index) =>
        <tr key={index}><td>{item.brand}</td><td>{item.model}</td></tr>
    );

    return (
        <div>
            <table><tbody>{tableRows}</tbody></table>
        </div>
    );
};

export default MyTable;