import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Courses from "./components/Courses/Courses";
import Details from "./components/Details/Details";

function App() {
  return (
    <Router>
      <div className="app">
        <main>
        <Switch>
          <Route exact path='/' component={Courses}/>
          <Route path='/course/:slug' component={Details}/>
        </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
