import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      <Part part={props.part} />
    </div>
  );
};

export default Content;
