import React, { useState } from "react";

const LikeButtonuseState = () => {
  const [like, setLike] = useState(0);
  const [dislike, setdislike] = useState(0);

  const [likeactive, setlikeactive] = useState(false);
  const [dislikeactive, setdislikeactive] = useState(false);

  const likef = () => {
    if (likeactive) {
      setlikeactive(false);
      setLike(like - 1);
    } else {
      setlikeactive(true);
      setLike(like + 1);
      if (dislikeactive) {
        setdislikeactive(false);
        setLike(like + 1);
        setdislike(dislike - 1);
      }
    }
  };

  const dislikef = () => {
    if (dislikeactive) {
      setdislikeactive(false);
      setdislike(dislike - 1);
    } else {
      setdislikeactive(true);
      setdislike(dislike + 1);
      if (likeactive) {
        setlikeactive(false);
        setdislike(dislike + 1);
        setLike(like - 1);
      }
    }
  };

  return (
    <>
      <h4 className="text-center mt-5">This is Like And Dislike Button </h4>
      <div className="likedislike">
        <button
          onClick={likef}
          className={[likeactive ? "like" : null, "button"].join(" ")}
        >
          Like {like}
        </button>
        <button
          onClick={dislikef}
          className={[dislikeactive ? "dislike" : null, "button"].join(" ")}
        >
          Dislike {dislike}
        </button>
      </div>
    </>
  );
};

export default LikeButtonuseState;
