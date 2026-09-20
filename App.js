import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", { className: "heading" }, "Hello World"),
    React.createElement("h2", { className: "heading" }, "Hello World 2"),
  ]),

  React.createElement("div", { className: "child2" }, [
    React.createElement("h3", { className: "heading" }, "Hello World 3"),
    React.createElement("h4", { className: "heading" }, "Hello World 4"),
  ]),
]);

console.log("parent", parent);

const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hello World",
);

console.log("heading", heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("root", root);

root.render(parent);
