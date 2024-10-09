export default function Welcome(props) {
  // custom Welcome component
  const divStyle = {
    background: "lightblue",
    padding: "1em",
    fontWeight: "bold",
  };
  return (
    <div className="componentBox">
      {/* if the 'name' prop exists, render it on the screen */}
      <h3 style={{ color: "blue", textTransform: "uppercase" }}>
        Welcome {props.name}!
      </h3>
      <div style={divStyle}>This is a styled div.</div>
      {/* if this component has children, render them here */}
      {props.children}
    </div>
  );
}
