const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm an H1 tag"),React.createElement("h2",{},"I'm an H1 tag")]
)// for multiple use array of childen
);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);