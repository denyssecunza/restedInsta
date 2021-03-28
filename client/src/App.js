import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import UserPost from "./Components/UserPost";
import Comments from "./Components/Comments";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={UserPost} />
          <Route path="/comments" component={Comments} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
