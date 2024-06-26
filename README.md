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

 # lecture 4
 - props pasing an argument to function 
 - config drivin UI
controlling  UI for Backend (data API ) ex- carousel
array.join(" , "); to seprate betwee the value of array 
- key 
unique id>> index key >> not using key 
 # lecture 5 
 two typess of exports 
 default and name
-  export default {<name>}
- export const <componenets>
 for this
 import { <Name >} from '<path>'
- ex can we use default and name exports at once 
# REact hooks
(Noraml Js UTility function)
- useState()
   superpowerfull react variable
   # when state variable updates  react renders my components 
- useEffect()
# Reconciliation algorithum( React fiber)
   changing in ui 7 res card to 3 
  -   res-container 
          |
      virtual Dom - representation of actual dom (div,img,) 
      div algorithum 
# shimmer UI
# useState 
local state variable 
- whenever state variable update react triggers a reconciliation cycle (ren )


#  2 types Routing  in wen page
- client side Routing 
(SINGLE PAGE NOT PETECHING ITS KUST LAOD)
- Servere side Routing 
( make a network cALL AND GET A .HTML AND LAOD IN TO ui)