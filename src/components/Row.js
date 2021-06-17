import Item from "./Item";

export default function Row({ title, buttonName, data, handleClick }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="list">
        {data.map((item) => {
          return (
            <Item
              item={item}
              buttonName={buttonName}
              handleClick={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
}
