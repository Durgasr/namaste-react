// const heading = React.createElement("h1", { id: "heading", xyz: "Abc" }, "Hello World from React!");

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "heading" }, "it's an h1 tag"),
        React.createElement("p", { id: "heading" }, "it's an p tag")
    ]))

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);