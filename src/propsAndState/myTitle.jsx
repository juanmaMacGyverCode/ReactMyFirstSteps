import React from 'react';

class MyTitle extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
            </div>
        );
    };
};

export default MyTitle;