import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Header } from './components';
import { Actions } from './components';

import './App.css';

injectTapEventPlugin();


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div>
                <Header />
                <div className="content">
                    <Actions />
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
