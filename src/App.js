import React, {Component} from 'react';
import Navigation from './tracker-navigation';
import {BrowserRouter} from "react-router-dom";
import './App.css';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navigation />
                </div>
            </BrowserRouter>
        );
    }
  }

export default App;
