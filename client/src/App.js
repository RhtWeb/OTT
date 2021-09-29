import './App.scss';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/home/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Watch from './pages/home/Watch';


function App() {
  const user = true;
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/register" /> }
          </Route>
          <Route path="/register">
            {!user ? <Register /> : <Redirect to="/" /> }
          </Route>
          <Route path="/login">
            {!user ? <Login /> : <Redirect to="/" /> }
          </Route>
          { user && 
            <>
              <Route path="/movies">
                <Home type="movie" />
              </Route>
              <Route path="/series">
                <Home type="series" />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
          </>
          }
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
