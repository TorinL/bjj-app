import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';

class App extends React.Component {
    render() {
        return (
            <div>
                <Home />
                <Home />
                <Home />
                <Home />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);



