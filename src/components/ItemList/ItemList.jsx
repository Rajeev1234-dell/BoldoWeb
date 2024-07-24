import React from "react";

function ItemList({ heading, item1, item2, item3, data }) {
  return (
    <div className="option-one">
      <p>{heading}</p>
      <ul>
        <li>
          {item1} {data}
        </li>
        <li>
          {item2} {data}
        </li>
        <li>
          {item3} {data}
        </li>
      </ul>
    </div>
  );
}

export default ItemList;
