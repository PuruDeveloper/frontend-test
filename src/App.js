import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <div className="app">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route to="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
