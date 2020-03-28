import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import routes from './routes';
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Redirect exact from="/" to="/item-list" />
        {routes.map((route) => {
          return <Route key={route.path} exact {...route} />;
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
