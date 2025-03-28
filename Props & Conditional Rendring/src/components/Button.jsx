// It's named export: When u will import this file you have to specify the name of component between curly bracket while Importing i
export function Button() {
  return (
    <button
      style={{
        backgroundColor: "dodgerblue",
        color: "white",
        padding: "5px",
        borderRadius: "5px",
      }}
    >
      Click Me
    </button>
  );
}

// It's named export: When u will import this file you have to specify the name of component between curly bracket while Importing i
export function ButtonBlack() {
  return (
    <button
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "5px",
        borderRadius: "5px",
      }}
    >
      Click Me
    </button>
  );
}

// Default Export: When u will import this file this component will be by default received to you
export default function ButtonGreen() {
  return (
    <button
      style={{
        backgroundColor: "green",
        color: "white",
        padding: "5px",
        borderRadius: "5px",
      }}
    >
      Click Me
    </button>
  );
}
