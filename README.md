npx means executing a package
cdn link are not good way to use react
- npm i react / react-dom

# parcel lec2

-Dev build

- local server
- HMP =hot module replacement (auto SAVE CHNAGES)
- faster build caching
- image optimization
  minification
- bundling
- compressing
- different bundling - support older browsers
- different dev and prod bundles
  - remove main from package json
  npx parcel build index.html

# lecture 3

- html elem are dom elemnets
- React.createElement =>{ object }
- when we rander this into dom then its become html element
- A React root is the entry point where your React application starts rendering.
- It represents the top-level component that manages the entire React tree within a specific DOM container.

- const heading = React.createElement(
 "h1",
 { id: "heading" },
 "namaste react🚀 "
 );
-  JSX react both are separate

- jsx is not not html in js its like html like syntax
- this is not proper js code 
-  jsx(transpiled before it reaches the js )parcel is doing the work behind the scene - using @babel
- babel transpiles it 
- JSX=>react.createElem=>REactElem-js obj => HTMLELem(render)
- image tag src aherf in jsx
- // use ()when multiple line jsx
// Babel is a JS Complier
- jsx senitize data malicious(api example)