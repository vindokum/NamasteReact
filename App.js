const heading1 = React.createElement("h1", { id: "heading" }, "heading 1");
const heading2 = React.createElement("h1", { id: "heading" }, "heading 2");
const container = React.createElement("div", {}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
