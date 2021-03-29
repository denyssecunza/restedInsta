import React from "react";
import { Link } from "react-router-dom";
function UserPost() {
  const [photoState, setPhoto] = React.useState([]);
  const [user, setUser] = React.useState([]); //use context
  const [thing, setThing] = React.useState(0);
  const [likes, setLikes] = React.useState(0);

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
  }, [thing, likes]);

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

  const handleClick = (e) => {
    e.preventDefault();
    if (
      e.target.src ===
      "https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png"
    ) {
      e.target.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png";
    } else {
      e.target.src =
        "https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png";
    }
  };

  return (
    <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
      <h1 className="fw-light ">Rested Insta</h1>
      <div className="container col-4 bg-light ">
        {userPhoto && (
          <div className="container list-group list-group-flush" id="userList">
            {userPhoto.map((user) => (
              <div
                className="container list-group-item bg-light "
                key={user.username}
              >
                <div></div>
                <img
                  className="card-img-top"
                  src={user.image}
                  alt=""
                  style={{
                    width: "400px",
                    height: "400px",
                    paddingTop: "7%",
                    paddingBottom: "7%",
                  }}
                />
                <div className="card-body d-flex justify-content-start">
                  <div className="d-flex justify-content-start">
                    <form className="form" method="POST">
                      <img
                        src="https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png"
                        style={{ width: "30px", height: "30px" }}
                        onClick={handleClick}
                      />
                    </form>
                    <form
                      method="GET"
                      action="/comments"
                      style={{ marginLeft: "10%" }}
                    >
                      <Link
                        to={`/comments/${user.photoId}/${user.username}/${user.image}`}
                      >
                        {console.log(user.image)}
                        <img
                          src="https://lh3.googleusercontent.com/proxy/bjKn794mEqwGuIJSnihb5xb_h-d26cjR_xzsOCt4YVfCKf9_Wlt39_hy05Kvb1qvosU3imjUtB7xvo5WVx8beMMtsH-3S5Y"
                          style={{
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      </Link>
                    </form>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-top"
                  style={{ marginLeft: "5%" }}
                >
                  <h6> {user.username} </h6>

                  <h6 className="fw-light " style={{ marginLeft: "2%" }}>
                    {" "}
                    {user.caption}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        )}{" "}
      </div>
    </div>
  );
}
export default UserPost;
