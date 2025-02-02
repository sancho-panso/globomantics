import currencyFormatter from "../helpers/currencyFormatter";
import React from "react";

const HouseRow = ({ house, selectHouse }) => {
  return (
    <tr onClick={() => selectHouse(oldhouse => house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {
        house.price && (
        <td className= {`${house.price >= 500000 ? "text-primary" : ""}`}>
          {currencyFormatter.format(house.price)}
        </td>
      )}
    </tr>
  );
};

const HouseRowMem = React.memo(HouseRow);

export default HouseRow;
export {HouseRowMem};