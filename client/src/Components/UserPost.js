import React from "react";

function UserPost() {
  const [photoState, setPhoto] = React.useState([]);
  const [user, setUser] = React.useState([]); //use context
  React.useEffect(() => {
    let isCurrent = true;
    fetch(`http://localhost:3000/photos`)
      .then((response) => response.json())
      .then((photos) => {
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
      })
      .catch((err) => console.log(err));
    //fetch user
    fetch("http://localhost:3000/users")
      .then((res) => {
        //console.log(res);
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        const user = data.map((name) => {
          ///console.log(name.username);
          setUser({ username: name.username });
          //console.log(name);
        });
        //console.log(data[0].username);
        return user;
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      isCurrent = false;
    };
  }, [photoState]);

  return (
    <div>
      <div className="username">
        <h6>{user.username}</h6>
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
        <h6>{user.username}</h6>
        <p>caption{photoState.caption}</p>
      </div>
      <div>
        <a href="/comments">View all {photoState.comments} comments</a>
      </div>
      <p className="App-intro"></p>
    </div>
  );
}
export default UserPost;
