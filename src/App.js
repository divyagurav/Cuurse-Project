import { Route, Switch } from "react-router-dom";
import "./App.css";
import CourseDetails from "./Componenets/CourseDetails";
import CourseListPage from "./Componenets/CourseListPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <CourseListPage />
        </Route>
        <Route path="/details/:detailId">
          <CourseDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
