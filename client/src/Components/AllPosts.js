import React from "react";
import { Link } from "react-router-dom";

function AllPosts(props) {
  const renderPosts = () => {
    // photos from state array in dashboard
    return props.photos.map((photo) => {
      return (
        <div key={photo.id}>
          <Link
            className="is-size-4 has-text-weight-bold has-text-primary"
            to={{ pathname: `/photos/` }}
          >
            {photo.caption}
          </Link>
          <p className="is-size-7 has-text-weight-light">By {photo.username}</p>
          <img href={photo.image}></img>
          <p>{photo.likes}</p>
          <p>{photo.comments}</p>
          <hr />
        </div>
      );
    });
  };

  return <div>{renderPosts()}</div>;
}

export default AllPosts;