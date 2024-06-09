import React from "react";
import ReactDOM from "react-dom/client";
// React Elemet
const heading = (
  <h1 className="root" tabIndex="1">
    Aakash Singh using JSX💕🚀
  </h1>
);
// react Components
//-> class BAsed components -> fucntional components -NEW
const elem=<span>bye babes</span>
const Title = () => (
  
  <h1 className="head" tabIndex="5">
    {elem}
    Namste react
  </h1>
);

// React Functional Components
// components compostions
const HeadingComp = () => (
  <div id="box">
    <Title />
    {console.log("hii JS")}
    <h1 id="container"> hii components</h1>
  </div>
  
);

// const Head=()=> <h1> heelo new syntax</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// over write
root.render(<HeadingComp />);
