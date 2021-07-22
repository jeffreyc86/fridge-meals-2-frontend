import '../stylesheets/App.css';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from "../features/userSlice";
import Home from './Home'
import Navbar from './Navbar';
import LogIn from './LogIn';

function App() {

  const dispatch = useDispatch()

  useEffect(
    () => {
      const token = localStorage.getItem("token");
      if (token) {
        fetch(`${process.env.REACT_APP_RAILS_URL}show`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((user) => {
            dispatch(setCurrentUser(user));
          });
      }
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
