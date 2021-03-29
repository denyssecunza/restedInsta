import React from "react";
import { Link } from "react-router-dom";
function Comments(props) {
  const clickedPhoto = props.match.params.photoId;
  const username = props.match.params.username;
  const photoLink = props.location.pathname.split("/");
  photoLink.splice(0, 4);
  const link = photoLink.join("/");

  const [comment, setComment] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [state, setState] = React.useState(0);
  const [commented, setCommented] = React.useState("");
  React.useEffect(() => {
    let isCurrent = true;
    fetch(`http://localhost:3000/comments`)
      .then((response) => response.json())
      .then((comments) => {
        if (isCurrent) {
          const allComments = [];
          comments.map((comment) => {
            allComments.push(comment);
          });
          setComment(allComments); //array of objects
          return comment;
        }
      })
      .catch((err) => console.log(err));
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
  }, [state]);

  const allCommentsbyPhoto = [];
  const photoComments = () => {
    comment.forEach((comment) => {
      user.forEach((user) => {
        if (
          comment.photo_id === parseInt(clickedPhoto) &&
          comment.user_id === user.id
        ) {
          allCommentsbyPhoto.push({
            username: user.username,
            id: comment.id,
            userId: comment.user_id,
            photoId: comment.photo_id,
            text: comment.comments_text,
          });
        }
      });
    });
  };
  photoComments();

  const handleChange = (e) => {
    e.preventDefault();

    setCommented(e.target.value);
  };
  const pho = parseInt(clickedPhoto);
  const handleSubmitComment = (e) => {
    fetch(`http://localhost:3000/comments`, {
      method: "POST",
      headers: {
        Accept: "Application/Json",
        "Content-Type": "Application/Json",
      },
      body: JSON.stringify({
        user_id: 1,
        photo_id: pho,
        comments_text: commented,
      }),
    })
      .then((response) => console.log(response.json()))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
      <div className="container col-4 bg-light">
        <div className="row">
          <div
            className="d-flex justify-content-start"
            style={{ marginLeft: "5%", marginTop: "5%", marginBottom: "5%" }}
          >
            <Link to={`/`}>
              <img
                src="https://www.pinclipart.com/picdir/middle/138-1385364_free-arrows-icons-back-icon-svg-free-clipart.png"
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
            </Link>
          </div>
        </div>
        <img src={link} style={{ width: "400px", height: "400px" }} />
        <h6 className="fw-bold" style={{ paddingTop: "5%" }}>
          {username}
        </h6>
        {allCommentsbyPhoto && (
          <div>
            <hr></hr>
            {allCommentsbyPhoto.map((postComment) => (
              <div className="d-flex justify-content-around">
                <div className="col-3 d-flex justify-content-start">
                  <h6 className="fst-italic">{postComment.username}</h6>
                </div>
                <div className="col-6 d-flex justify-content-start">
                  <h6 className="fw-light " key={postComment.userId}>
                    {postComment.text}
                  </h6>
                </div>
              </div>
            ))}
            <hr></hr>
          </div>
        )}{" "}
        <div
          className="d-flex justify-content-center"
          style={{ paddingTop: "5%", paddingBottom: "5%" }}
        >
          <form
            className="d-flex justify-content-center"
            onSubmit={handleSubmitComment}
          >
            <input
              className="input-group"
              type="text"
              name="comment"
              placeholder="Add a comment..."
              value={commented}
              onChange={handleChange}
            />
            <button className="btn btn-light" type="submit">
              {" "}
              Post{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comments;
