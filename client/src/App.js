import React from "react";
import "./App.css";

function App() {
  const [user, setUser] = React.useState(""); //use context

  fetch("http://localhost:3000/")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);

      const user = data.map((name) => {
        ///console.log(name.username);
        setUser(name.username);
        //<li>{name.username}</li>;
      });
      //console.log(data[0].username);
      return user;
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="App">
      <div className="username">
        <h6>Username:{user}</h6>
      </div>
      <div>
        <img href={photo} alt="User Image" />
      </div>
      <div>
        <form>
          <button>like button</button>
        </form>
        <form>
          <button>comments button</button>
        </form>
      </div>
      <div>
        <h6>Username:{user}</h6>
        <p>caption</p>
      </div>
      <div>
        <a href="/comments">View all 20 comments</a>
      </div>
      <p className="App-intro"></p>
    </div>
  );
}

export default App;
