import { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(1);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const stock = 5;

  const order = () => {
    console.log("Name: ", name);
    console.log("Address", address);
    console.log("email", email);
    console.log("Quantiy ", quantity);
  };

  function increase() {
    if (quantity < stock) setQuantity(quantity + 1);
    else alert("Stock Empty");
  }
  function decrease() {
    if (quantity == 1) {
      alert("1 is the Minimum");
    } else setQuantity(quantity - 1);
  }
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ width: "400px", border: "1px solid grey" }}>
        <h1>I Phone</h1>
        <img src="https://images.hindustantimes.com/tech/htmobile4/P35953/images/Design/143993-v4-apple-iphone-14-mobile-phone-large-2.jpg" />
        <h1>Price: $1000</h1>
      </div>

      <div style={{ width: "400px", border: "1px solid grey" }}>
        <h1>Your Order Details</h1>
        <h3>Quantity : {quantity}</h3>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>

        <h3>Total Price: $ {1000 * quantity} </h3>

        <input
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          type="text"
          placeholder="Enter Your Name"
        />
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          type="email"
          placeholder="Enter your Email"
        />
        <br />
        <input
          onChange={(e) => setAddress(e.currentTarget.value)}
          value={address}
          type="text"
          placeholder="Enter Addresss"
        />
        <br />
        <button onClick={order}>Order</button>
      </div>
    </div>
  );
}

export default App;
