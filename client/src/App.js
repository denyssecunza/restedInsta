import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import "./App.css";
import UserPost from "./Components/UserPost";
import Comments from "./Components/Comments";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "100%",
        marginTop: 0,
        zIndex: 1,
        backgroundColor: "#e4d2e4",
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={UserPost} />
          <Route
            path="/comments/:photoId/:username/:imageLink"
            render={(props) => <Comments {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
