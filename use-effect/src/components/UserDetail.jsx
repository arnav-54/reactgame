export default function UserDetail({ name, email }) {
  return (
    <div style={{ border: "1px solid grey", margin: "10px", padding: "10px" }}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
