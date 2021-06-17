export default function Item({ item, buttonName, handleClick }) {
  return (
    <li className="item" key={item.id}>
      <div className="image">
        <img src={item.img} alt="" />
        <div className="btn">
          <button
            onClick={() => {
              handleClick(item.id);
            }}
          >
            {buttonName}
          </button>
        </div>
      </div>
      <div className="title">{item.title}</div>
    </li>
  );
}
