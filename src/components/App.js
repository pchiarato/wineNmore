import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './List';
import Header from './Header';
import Blog from './Blog';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Header />
                <div className="row">
                    <Route path="/todo" component={List}/>
                    <Route path="/blog" component={Blog}/>
                </div>
            </div>
        </Router>
    )
};

export default App;