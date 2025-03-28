import UserDetail from "./UserDetail";
export default function Map() {
  const names = [
    {
      name: "Chota Bheem",
      email: "bheem@gmail.com",
    },
    {
      name: "Shin Chan",
      email: "chan@gmail.com",
    },
    {
      name: "Oggy",
      email: "oggy@gmail.com",
    },
  ];
  return (
    <>
      {names.map((item, index) => (
        <UserDetail key={index} email={item.email} name={item.name} />
      ))}
    </>
  );
}
