const heading = React.createElement("h1", {id:"heading"}, "Hello World From React!")
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
const head = document.getElementById("root")
const createHead = document.createElement("h2")
console.log(head)
console.log(createHead)
console.log(heading)
const parent = React.createElement("div", {id: "parentDiv"}, 
React.createElement("div", {id:"childDiv"},
[React.createElement("h1", {id:"h1Tag"}, "I'm an h1 Tag"), 
React.createElement("h2", {id:"h2Tag"}, "I'm an h2 Tag")]))
const parent2 = React.createElement("div", {id: "parentDiv2"}, 
React.createElement("div", {id:"childDiv"},
[React.createElement("h1", {id:"h1Tag"}, "I'm an h1 Tag"), 
React.createElement("h2", {id:"h2Tag"}, "I'm an h2 Tag")]))
root.render([parent, parent2])