import '../stylesheets/App.css';
import { Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


function App() {

  const dispatch = useDispatch(function)

  return (
    <div className="App">
      <Switch>
        <Route path ="/">
          Home
        </Route>
      </Switch>
    </div>
  );
}

export default App;
