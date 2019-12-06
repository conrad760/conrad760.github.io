import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import letsPrint from './letsPrint';
import home from './home';

function App() {
    return (
        <>
            <Router>
                    <Route
                        exact
                        path='/lets-print'
                        component={letsPrint}
                    ></Route>
                    <Route
                        exact
                        path='/'
                        component={home}
                    ></Route>


                    {/* <Route exact path='/contact' component={Contact}></Route> */}
            </Router>

        </>
    );
}
export default App;
