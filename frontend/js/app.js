import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Home />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);



