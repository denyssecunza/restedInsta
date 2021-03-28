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
          const allPhotos = [];
          photos.map((photo) => {
            allPhotos.push(photo);
          });
          setPhoto(allPhotos); //array of objects
          return photoState;
        }
      })
      .catch((err) => console.log(err));
    //fetch user
    fetch("http://localhost:3000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const allUsers = [];
        const user = data.map((name) => {
          allUsers.push(name);
        });
        setUser(allUsers); //array of objects
        return user;
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      isCurrent = false;
    };
  }, [thing]);
  // console.log(photoState);
  // console.log(user);
  ///have a functions that takes all the data from photos that i == to user
  const userPhoto = [];
  const mergeUserphotos = () => {
    //map over user
    user.forEach((user) => {
      //map over photos
      photoState.forEach((photo) => {
        //if user id === photo id
        // add user id and username to an array
        //add photo properties to the array
        if (photo.user_id === user.id) {
          userPhoto.push({
            id: user.id,
            username: user.username,
            photoId: photo.id,
            image: photo.photo_link,
            caption: photo.caption,
            likes: photo.likes,
            comments: photo.comment,
          });
        }
      });
    });

    //return new array of users with correct photo
    return userPhoto;
  };
  mergeUserphotos();
  console.log("user photos", userPhoto);

  return (
    <div>
      {userPhoto && (
        <div id="userList">
          {userPhoto.map((user) => (
            <div className="username" key={user.username}>
              <div>
                <h6 key={user.username}>{user.username}</h6>
              </div>
              <img
                className="img-thumbnail"
                src={user.image}
                alt="User"
                style={{ width: "auto", height: "195px" }}
              />
              <div>
                <form>
                  <button>likes {user.likes}</button>
                </form>
                <form>
                  <button>comments {user.comments}</button>
                </form>
              </div>
              <div>
                <h6>{user.username}</h6>
                <p>{user.caption}</p>
              </div>
              <div>
                <a href="/comments">View all {user.comments} comments</a>
              </div>
            </div>
          ))}
        </div>
      )}{" "}
    </div>
  );
}
export default UserPost;
