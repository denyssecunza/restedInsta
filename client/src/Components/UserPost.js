import React from "react";

function UserPost() {
  const [photoState, setPhoto] = React.useState([]);
  const [user, setUser] = React.useState([]); //use context
  const [thing, setThing] = React.useState(0);

  React.useEffect(() => {
    let isCurrent = true;
    fetch(`http://localhost:3000/photos`)
      .then((response) => response.json())
      .then((photos) => {
        if (isCurrent) {
          photos.map((photo) => {
            setPhoto({
              id: photo.id,
              image: photo.photo_link,
              caption: photo.caption,
              comments: photo.comment,
              likes: photo.likes,
              userId: photo.user_id,
            });
          });
        }
      })
      .catch((err) => console.log(err));
    //fetch user
    fetch("http://localhost:3000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        const allUsers = [];
        const user = data.map((name) => {
          //console.log(name);
          allUsers.push(name.username);
        });
        setUser(allUsers);
        return user;
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      isCurrent = false;
    };
  }, [thing]);
  // console.log(user);
  //console.log(photoState);

  //console.log(user);
  return (
    <div>
      {user && (
        <div id="userList">
          {user.map((user) => (
            <div className="username" key={user}>
              <h6 key={user}>{user}</h6>
            </div>
          ))}
        </div>
      )}{" "}
      <div className="username">
        <h6>{user}</h6>
      </div>
      <div>
        <img
          className="img-thumbnail"
          src={photoState.image}
          alt="User"
          style={{ width: "auto", height: "195px" }}
        />
      </div>
      <div>
        <form>
          <button>likes {photoState.likes}</button>
        </form>
        <form>
          <button>comments {photoState.comments}</button>
        </form>
      </div>
      <div>
        <h6>{user}</h6>
        <p>caption{photoState.caption}</p>
      </div>
      <div>
        <a href="/comments">View all {photoState.comments} comments</a>
      </div>
    </div>
  );
}
export default UserPost;
