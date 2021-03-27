import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI();
    // .then((res) => this.setState({ data: res.express }))
    // .catch((err) => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = () => {
    fetch("http://localhost:3000/")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const user = data.username;
        this.setState({ data: user });
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // callBackendAPI = async () => {
  //   const response = await fetch("/starter_route");
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
