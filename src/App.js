import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Campaigns from './components/Campaigns/Campaigns';
import HallOfFame from './components/HallOfFame/HallOfFame';
import Campaign from './components/Campaign/Campaign';
import myColors from './colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {main: myColors.primary}
  },
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/campaigns" exact component={Campaigns} />
          <Route path="/campaigns/:campaign" component={Campaign} />
          <Route path="/hall-of-fame" component={HallOfFame} />
        </Switch>
      </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
