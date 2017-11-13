import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Home />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);



