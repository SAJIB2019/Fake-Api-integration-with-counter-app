import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px",
            textTransform: "uppercase",
          }}
        >
          Post View from fake api
        </h1>
      </div>
      <div>
        {isLoading && <h3>Loading......</h3>}
        {error && <h3>{error}</h3>}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {posts &&
            posts.map((post) => {
              return (
                <article
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "20px",
                    margin: "10px",
                  }}
                >
                  <h3 style={{ color: "white", fontSize: "26px" }}>
                    {post.title}
                  </h3>
                  <h5 style={{ color: "white", fontSize: "18px" }}>
                    {post.body}
                  </h5>
                </article>
              );
            })}
        </section>
      </div>
    </div>
  );
};

export default PostView;
