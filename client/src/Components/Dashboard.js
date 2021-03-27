import React from "react";
import AllPosts from "./AllPosts";

function Dashboard() {
  const [state, setState] = React.useState([]);
  // state = {
  //   currentUser: {
  //     id: "",
  //     username: "",
  //   },
  //   photos: [],
  // };

  React.useEffect(() => {
    let isCurrent = true;
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((data) => {
        data.map((user) => {
          setState([
            {
              id: user.user_id,
              username: user.username,
            },
          ]);
        });
      });
    fetch(`http://localhost:3000/photos`)
      .then((resp) => resp.json())
      .then((photos) => {
        console.log(photos);
        setState({ photos: photos });
      });
    return () => {
      isCurrent = false;
    };
  }, [state]);

  return (
    <div>
      <section className="section">
        <div className="container box content">
          <div className="columns">
            <div className="column is-full has-background-white">
              <h1 className="has-text-centered is-size-3 has-text-weight-bold">
                Dashboard
              </h1>
              <AllPosts user={state.username} photos={state.photos} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
