import React from "react";

function Comments() {
  const [comment, setComment] = React.useState([]);
  const [state, setState] = React.useState([]);
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
    // fetch(`http://localhost:3000/photos`)
    //   .then((resp) => resp.json())
    //   .then((photos) => {
    //     if (isCurrent) {
    //       setState({ photos: photos });
    //     }
    //   });
    return () => {
      isCurrent = false;
    };
  }, [state]);
  console.log(comment);
  return (
    <div className="container">
      <div className="col-4">
        <h1 className="has-text-centered is-size-3 has-text-weight-bold">
          Comments
        </h1>
        <form>
          <input
            className="input-group"
            type="text"
            name="comment"
            value=""
            placeholder="Add a comment..."
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Comments;
