import React from "react";
import Comment from "./Comment.jsx";

const userInfo = {
  name: "Tom",
  avatarUrl: "https://avatars1.githubusercontent.com/u/675231?v=4",
};

const App = () => {
  return (
    <Comment 
      author={userInfo} 
      text="Good job" 
      date={new Date()}
    />
  );
};
export default App;
