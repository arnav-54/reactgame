import { ShowName } from "./ShowName";

export function Card({
  title,
  description,
  imageUrl,
  accountName,
  parentColor,
}) {
  return (
    <div style={{ width: "400px", border: "1px solid black", padding: "5px" }}>
      <img style={{ width: "400px" }} src={imageUrl} />
      <h4>{title}</h4>
      <p>{description}</p>
      <ShowName textColor={parentColor} name={accountName} />
    </div>
  );
}
