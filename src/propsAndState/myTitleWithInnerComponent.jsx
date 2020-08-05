import React from 'react';
import MyTitle from './myTitle.jsx';

class MyTitleWithInnerComponent extends React.Component {    
    render() {
        return (
            <div>
                <h1>Hola, 
                    <MyTitle text={this.props.otherTitle}/>
                </h1>
            </div>
        );
    };
};


export default MyTitleWithInnerComponent;